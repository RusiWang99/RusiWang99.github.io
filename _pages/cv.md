---
layout: archive
title: "CV"
browser_title: "CV - Rusi Wang’s Homepage"
hide_title: true
permalink: /cv/
author_profile: true
---

<style>
  .cv-page {
    max-width: 950px;
    margin: 0 auto 2rem;
  }

  .cv-page h1 {
    margin: 0 0 1rem;
  }

  .cv-page__intro {
    margin: 0 0 1rem;
    padding: 1rem 1.2rem;
    border-left: 4px solid var(--rw-link, #3a83aa);
    border-radius: 0 5px 5px 0;
    background: var(--rw-hover, #edf4f7);
  }

  .cv-page__intro p {
    margin: 0 0 0.35rem;
  }

  .cv-page__intro .cv-page__updated {
    color: var(--rw-muted, #727b81);
    font-size: 0.85rem;
  }

  .cv-page__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 0.8rem;
  }

  .cv-page__actions a {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border: 1px solid var(--rw-link, #3a83aa);
    border-radius: 4px;
    color: var(--rw-link, #3a83aa);
    font-size: 0.85rem;
    line-height: 1.35;
  }

  .cv-page__actions a:hover,
  .cv-page__actions a:focus-visible {
    background: var(--rw-link, #3a83aa);
    color: var(--rw-surface, #fff);
    text-decoration: none;
  }

  .cv-page__preview {
    width: 100%;
    height: max(680px, 78vh);
    border: 1px solid var(--rw-line, #e1e4e8);
    border-radius: 5px;
    overflow: hidden;
    background: var(--rw-surface-soft, #f5f7f8);
  }

  .cv-page__preview iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 640px) {
    .cv-page__preview { height: 72vh; min-height: 480px; }
  }
</style>

<div class="cv-page">
  <h1>CV</h1>
  <div class="cv-page__intro">
    <p>Transportation network equilibrium modeling and optimization.</p>
    <p class="cv-page__updated">Last updated: 16 October 2026</p>
    <div class="cv-page__actions">
      <a href="{{ '/files/Rusi_Wang_CV.pdf' | relative_url }}?v=20261016cv8" download="Rusi_Wang_CV.pdf">Download PDF</a>
      <a href="{{ '/cv-print/' | relative_url }}" target="_blank" rel="noopener noreferrer">Printable source</a>
    </div>
  </div>
  <div class="cv-page__preview">
    <iframe src="{{ '/cv-reader/' | relative_url }}?v=20261016j" title="Rusi Wang CV PDF"></iframe>
  </div>
</div>

[Back](/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
