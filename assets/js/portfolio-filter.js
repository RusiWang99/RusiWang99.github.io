(function () {
  'use strict';

  // Adapted from al-folio's MIT-licensed highlight-search-term utility.
  function getRangesForSearchTermInNode(node, search) {
    var ranges = [];
    var text = node.textContent ? node.textContent.toLocaleLowerCase() : '';
    var start = 0;
    var index;

    while ((index = text.indexOf(search, start)) >= 0) {
      var range = new Range();
      range.setStart(node, index);
      range.setEnd(node, index + search.length);
      ranges.push(range);
      start = index + search.length;
    }

    return ranges;
  }

  function highlightSearchTerm(search) {
    if (!window.CSS || !CSS.highlights || typeof window.Highlight !== 'function') return;

    CSS.highlights.delete('portfolio-search');
    if (!search) return;

    var ranges = [];
    var items = document.querySelectorAll('[data-portfolio-item]');

    Array.prototype.forEach.call(items, function (item) {
      var walker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
      var node;

      while ((node = walker.nextNode())) {
        if (node.textContent && node.textContent.toLocaleLowerCase().indexOf(search) !== -1) {
          ranges = ranges.concat(getRangesForSearchTermInNode(node, search));
        }
      }
    });

    if (ranges.length) {
      CSS.highlights.set('portfolio-search', new Highlight(...ranges));
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.querySelector('[data-portfolio-filter-root]');
    var filter = document.getElementById('research-portfolio-filter');

    if (!root || !filter) return;

    var years = Array.prototype.slice.call(root.querySelectorAll('[data-portfolio-year]'));
    var empty = document.getElementById('research-portfolio-empty');
    var previousQuery = '';
    var timeoutId;

    function filterItems(query) {
      var visibleCount = 0;

      highlightSearchTerm(query);

      years.forEach(function (year) {
        var items = Array.prototype.slice.call(year.querySelectorAll('[data-portfolio-item]'));
        var hiddenCount = 0;

        items.forEach(function (item) {
          var text = item.innerText.toLocaleLowerCase();
          var hidden = text.indexOf(query) === -1;
          item.classList.toggle('unloaded', hidden);
          hiddenCount += hidden ? 1 : 0;
          visibleCount += hidden ? 0 : 1;
        });

        year.classList.toggle('unloaded', hiddenCount === items.length);
      });

      if (empty) empty.hidden = visibleCount !== 0;
    }

    function applyHashFilter() {
      var query = decodeURIComponent(window.location.hash.slice(1)).trim().toLocaleLowerCase();
      filter.value = query;
      previousQuery = query;
      filterItems(query);
    }

    filter.addEventListener('input', function () {
      var query = filter.value.trim().toLocaleLowerCase();
      if (query === previousQuery) return;

      previousQuery = query;
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(function () {
        filterItems(query);
      }, 300);
    });

    window.addEventListener('hashchange', applyHashFilter);
    applyHashFilter();
  });
}());
