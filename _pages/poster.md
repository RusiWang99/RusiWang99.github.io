---
layout: archive
title: "Poster"
browser_title: "Poster - Rusi Wang’s Homepage"
hide_title: true
permalink: /poster/
author_profile: true
---

<style>
  .featured-publication {
    display: grid;
    grid-template-columns: minmax(0, 40%) minmax(0, 60%);
    gap: 1.5em;
    align-items: center;
    margin-top: 30px;
    padding: 1em;
    border: 1px solid #e1e4e8;
    border-radius: 4px;
    background: #fff;
  }

  .featured-publication__visual {
    position: relative;
    min-width: 0;
  }

  .featured-publication__poster {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    border: 1px solid #c8dce7;
    background: #f3f8fa;
  }

  .featured-publication__badge {
    position: absolute;
    z-index: 1;
    top: 0.6em;
    left: -0.5em;
    padding: 0.2em 0.8em;
    background: #3A83AA;
    color: #fff;
    font-size: 0.75em;
    font-weight: 600;
    line-height: 1.35;
  }

  .featured-publication__details {
    min-width: 0;
    transform: translateY(0.75px);
    text-align: justify;
    text-justify: inter-word;
    -webkit-hyphens: auto;
    hyphens: auto;
    overflow-wrap: break-word;
  }

  .featured-publication__title {
    margin: 0 0 0.45em !important;
  }

  .featured-publication__context {
    margin: 0 !important;
    font-size: 0.75em;
    line-height: 1.1;
  }

  .featured-publication__summary {
    margin: 0.55em 0 0;
    padding-left: 1.25em;
  }

  .featured-publication__summary li {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .featured-publication {
      grid-template-columns: 1fr;
      gap: 1em;
    }
  }
</style>

<div class="featured-publication">
  <div class="featured-publication__visual">
    <span class="featured-publication__badge">Transport Policy</span>
    <a href="{{ '/images/china-europe-rail-freight-subsidy-poster.png' | relative_url }}" aria-label="Open the full-size Transport Policy poster">
      <img class="featured-publication__poster" src="{{ '/images/china-europe-rail-freight-subsidy-poster.png' | relative_url }}" alt="Poster summarizing the Transport Policy study on China–Europe rail freight subsidy design">
    </a>
  </div>
  <div class="featured-publication__details">
    <p class="featured-publication__title"><a href="{{ '/publication/2025-09-23-Incorporating revenue loss and congestion cost into rail freight subsidy design Lessons learned from the China-Europe freight transportation network' | relative_url }}">Incorporating revenue loss and congestion cost into rail freight subsidy design: Lessons learned from the China-Europe freight transportation network</a></p>
    <p class="featured-publication__context">Chi Xie*, <strong>Rusi Wang</strong>, Dianlei Wang, et al.; <em>Pre-dissertation research</em></p>
    <ul class="featured-publication__summary">
      <li>Addresses the freight subsidy optimization problem based on a multimodal multicommodity network equilibrium model.</li>
      <li>Considers the carrier’s revenue loss and shippers’ congestion surcharge simultaneously.</li>
      <li>Compares the proposed optimization scheme with the currently implemented subsidy scheme to demonstrate its effectiveness.</li>
    </ul>
  </div>
</div>

[Back](/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
