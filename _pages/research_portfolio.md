---
layout: archive
title: "Research Portfolio"
browser_title: "Research Portfolio - Rusi Wang’s Homepage"
permalink: /research_portfolio/
redirect_from:
  - /poster/
author_profile: true
---

<div class="research-portfolio__filter" role="search">
  <label class="screen-reader-text" for="research-portfolio-filter">Filter research portfolio</label>
  <input id="research-portfolio-filter" type="search" placeholder="Type to filter" autocomplete="off" spellcheck="false">
</div>

<div id="research-portfolio-list" data-portfolio-filter-root>
  {% assign portfolio_by_year = site.data.research_portfolio | group_by: "year" | sort: "name" | reverse %}
  {% for year_group in portfolio_by_year %}
    <section class="research-portfolio__year" data-portfolio-year>
      <div class="research-portfolio__year-heading" role="heading" aria-level="2"><span>{{ year_group.name }}</span></div>
      {% for item in year_group.items %}
        <div class="research-portfolio__item" data-portfolio-item>
          {% include research-card.html item=item %}
        </div>
      {% endfor %}
    </section>
  {% endfor %}
  <p class="research-portfolio__empty" id="research-portfolio-empty" hidden>No matching research posters.</p>
</div>

[Back](/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}

<script src="{{ '/assets/js/portfolio-filter.js' | relative_url }}" defer></script>
