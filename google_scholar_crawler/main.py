import json
import os
from datetime import datetime, timezone
from pathlib import Path

GOOGLE_SCHOLAR_ID = "bBc5rVMAAAAJ"
OUTPUT_DIR = Path("google-scholar-stats")
GS_DATA_FILE = "gs_data.json"
SHIELDS_FILE = "gs_data_shieldsio.json"

CITATION_INDEX_FIELDS = (
    "citedby",
    "citedby5y",
    "hindex",
    "hindex5y",
    "i10index",
    "i10index5y",
)


def validate_author(author):
    """Reject incomplete crawler responses instead of overwriting good data."""
    required_fields = (*CITATION_INDEX_FIELDS, "cites_per_year", "publications")
    missing_fields = [field for field in required_fields if field not in author]
    if missing_fields:
        raise ValueError(
            "Incomplete Google Scholar response; missing fields: "
            + ", ".join(missing_fields)
        )
    if not isinstance(author["publications"], (list, dict)):
        raise ValueError("Incomplete Google Scholar response; invalid publications data")


def normalize_publications(author):
    """Return a copy whose publications are keyed by stable Scholar IDs."""
    normalized = dict(author)
    publications = normalized.get("publications", {})
    if isinstance(publications, list):
        publications = {
            publication["author_pub_id"]: publication
            for publication in publications
            if publication.get("author_pub_id")
        }
    normalized["publications"] = publications
    return normalized


def citation_snapshot(author):
    """Extract the citation-only state used to decide whether data changed."""
    publications = author.get("publications", {})
    publication_citations = {}
    for publication_id, publication in publications.items():
        count = publication.get("num_citations", 0) or 0
        # A newly listed, uncited publication is metadata, not a citation change.
        # A cited publication falling to zero is still detected because its prior
        # positive entry disappears from this snapshot.
        if count:
            publication_citations[publication_id] = count

    return {
        "indices": {field: author.get(field, 0) or 0 for field in CITATION_INDEX_FIELDS},
        "cites_per_year": {
            str(year): count
            for year, count in author.get("cites_per_year", {}).items()
            if count
        },
        "publication_citations": publication_citations,
    }


def load_json(path):
    try:
        with path.open(encoding="utf-8") as infile:
            return json.load(infile)
    except (FileNotFoundError, json.JSONDecodeError):
        return None


def write_json(path, data):
    """Write JSON through a temporary file to avoid partial output."""
    temporary_path = path.with_suffix(path.suffix + ".tmp")
    with temporary_path.open("w", encoding="utf-8") as outfile:
        json.dump(data, outfile, ensure_ascii=False, indent=2)
        outfile.write("\n")
    os.replace(temporary_path, path)


def shields_data(citation_count):
    return {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(citation_count),
        "color": "4091BD",
        "labelColor": "cecece",
        "namedLogo": "google-scholar",
        "logoColor": "white",
        "style": "flat",
    }


def update_outputs(author, output_dir=OUTPUT_DIR, updated_at=None):
    """Write both data files only when citation indicators have changed."""
    output_dir = Path(output_dir)
    validate_author(author)
    author = normalize_publications(author)
    existing = load_json(output_dir / GS_DATA_FILE)

    if existing is not None and citation_snapshot(existing) == citation_snapshot(author):
        print("No citation changes detected; keeping existing data files.")
        return False

    output_dir.mkdir(parents=True, exist_ok=True)
    if updated_at is None:
        updated_at = datetime.now(timezone.utc).isoformat(timespec="seconds")
    author["updated"] = updated_at

    write_json(output_dir / GS_DATA_FILE, author)
    write_json(output_dir / SHIELDS_FILE, shields_data(author.get("citedby", 0) or 0))
    print("Citation changes detected; updated data and badge files.")
    return True


def fetch_data():
    # Keep crawler dependencies out of the pure comparison logic and its tests.
    from scholarly import ProxyGenerator, scholarly

    try:
        proxy = ProxyGenerator()
        proxy.FreeProxies()
        scholarly.use_proxy(proxy)
    except Exception:
        pass

    author = scholarly.search_author_id(GOOGLE_SCHOLAR_ID)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
    update_outputs(author)

if __name__ == "__main__":
    try:
        fetch_data()
    except Exception as error:
        print(error)
        raise SystemExit(1)
