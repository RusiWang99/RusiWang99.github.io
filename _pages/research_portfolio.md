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

<div id="research-portfolio-list">
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

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var filter = document.getElementById('research-portfolio-filter');
    var years = Array.prototype.slice.call(document.querySelectorAll('[data-portfolio-year]'));
    var empty = document.getElementById('research-portfolio-empty');

    if (!filter) return;

    filter.addEventListener('input', function () {
      var query = filter.value.trim().toLocaleLowerCase();
      var visibleCount = 0;

      years.forEach(function (year) {
        var yearHasMatch = false;
        var items = Array.prototype.slice.call(year.querySelectorAll('[data-portfolio-item]'));

        items.forEach(function (item) {
          var matches = !query || item.textContent.toLocaleLowerCase().indexOf(query) !== -1;
          item.hidden = !matches;
          yearHasMatch = yearHasMatch || matches;
          if (matches) visibleCount += 1;
        });

        year.hidden = !yearHasMatch;
      });

      empty.hidden = visibleCount !== 0;
    });
  });
</script>
