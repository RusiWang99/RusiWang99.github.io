import json
import tempfile
import unittest
from pathlib import Path

from google_scholar_crawler.main import (
    CITATION_INDEX_FIELDS,
    GS_DATA_FILE,
    SHIELDS_FILE,
    shields_data,
    update_outputs,
)


def author_data(citedby=4, paper_citations=2):
    return {
        "name": "Rusi Wang",
        "affiliation": "Tongji University",
        "citedby": citedby,
        "citedby5y": citedby,
        "hindex": 1,
        "hindex5y": 1,
        "i10index": 0,
        "i10index5y": 0,
        "cites_per_year": {"2026": citedby},
        "publications": {
            "paper-1": {
                "author_pub_id": "paper-1",
                "num_citations": paper_citations,
                "bib": {"title": "Original title"},
            }
        },
    }


class UpdateOutputsTest(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.output_dir = Path(self.temp_dir.name)

    def tearDown(self):
        self.temp_dir.cleanup()

    def write_existing(self, author, updated="old-timestamp"):
        author = dict(author)
        author["updated"] = updated
        (self.output_dir / GS_DATA_FILE).write_text(
            json.dumps(author, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        (self.output_dir / SHIELDS_FILE).write_text(
            json.dumps(shields_data(author["citedby"]), indent=2), encoding="utf-8"
        )

    def test_metadata_only_change_does_not_rewrite_files(self):
        existing = author_data()
        self.write_existing(existing)
        data_before = (self.output_dir / GS_DATA_FILE).read_bytes()
        badge_before = (self.output_dir / SHIELDS_FILE).read_bytes()

        fetched = author_data()
        fetched["affiliation"] = "Changed profile metadata"
        fetched["publications"]["paper-1"]["bib"]["title"] = "Changed title"
        fetched["publications"]["uncited-paper"] = {
            "author_pub_id": "uncited-paper",
            "num_citations": 0,
        }

        changed = update_outputs(fetched, self.output_dir, "new-timestamp")

        self.assertFalse(changed)
        self.assertEqual(data_before, (self.output_dir / GS_DATA_FILE).read_bytes())
        self.assertEqual(badge_before, (self.output_dir / SHIELDS_FILE).read_bytes())

    def test_citation_change_updates_data_timestamp_and_badge(self):
        self.write_existing(author_data())
        fetched = author_data(citedby=5, paper_citations=3)

        changed = update_outputs(fetched, self.output_dir, "2026-08-25T09:00:00+00:00")

        self.assertTrue(changed)
        stored = json.loads((self.output_dir / GS_DATA_FILE).read_text(encoding="utf-8"))
        badge = json.loads((self.output_dir / SHIELDS_FILE).read_text(encoding="utf-8"))
        self.assertEqual("2026-08-25T09:00:00+00:00", stored["updated"])
        self.assertEqual(3, stored["publications"]["paper-1"]["num_citations"])
        self.assertEqual("5", badge["message"])

    def test_each_citation_indicator_independently_triggers_update(self):
        cases = []
        for field in CITATION_INDEX_FIELDS:
            cases.append((field, lambda data, field=field: data.__setitem__(field, 2)))
        cases.extend(
            [
                (
                    "cites_per_year",
                    lambda data: data["cites_per_year"].__setitem__("2025", 1),
                ),
                (
                    "publication_citations",
                    lambda data: data["publications"]["paper-1"].__setitem__(
                        "num_citations", 3
                    ),
                ),
            ]
        )

        for name, mutate in cases:
            with self.subTest(name=name), tempfile.TemporaryDirectory() as directory:
                output_dir = Path(directory)
                self.output_dir = output_dir
                self.write_existing(author_data())
                fetched = author_data()
                mutate(fetched)
                self.assertTrue(update_outputs(fetched, output_dir, "new-timestamp"))

    def test_incomplete_response_is_rejected_without_touching_files(self):
        self.write_existing(author_data())
        data_before = (self.output_dir / GS_DATA_FILE).read_bytes()
        fetched = author_data()
        del fetched["publications"]

        with self.assertRaisesRegex(ValueError, "missing fields: publications"):
            update_outputs(fetched, self.output_dir, "new-timestamp")

        self.assertEqual(data_before, (self.output_dir / GS_DATA_FILE).read_bytes())

    def test_first_run_creates_both_files(self):
        changed = update_outputs(author_data(), self.output_dir, "first-run")

        self.assertTrue(changed)
        self.assertTrue((self.output_dir / GS_DATA_FILE).is_file())
        self.assertTrue((self.output_dir / SHIELDS_FILE).is_file())


if __name__ == "__main__":
    unittest.main()
