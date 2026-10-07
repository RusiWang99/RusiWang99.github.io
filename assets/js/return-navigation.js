/* Return buttons follow their same-site entry page, with their original href as fallback. */
(function () {
  "use strict";

  // History restores keep the document alive, so replay its existing intro fade.
  window.addEventListener("pageshow", function (event) {
    if (!event.persisted || !document.getAnimations ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.getAnimations().forEach(function (animation) {
      if (animation.animationName === "intro") {
        animation.currentTime = 0;
        animation.play();
      }
    });
  });

  function init() {
    var source;
    try {
      source = new URL(document.referrer);
      if (source.origin !== window.location.origin ||
          source.pathname === window.location.pathname && source.search === window.location.search) {
        source = null;
      }
    } catch (error) {
      source = null;
    }

    document.querySelectorAll("a.btn").forEach(function (link) {
      var label = link.textContent.trim();
      if (!/^(?:←\s*)?Back(?:\s+to\s+.+)?$/.test(label) && label !== "返回") return;

      link.textContent = label === "返回" ? "返回" : "Back";
      if (!source) return;
      link.href = source.href;
      link.setAttribute("aria-label", label === "返回" ? "返回上一页" : "Back to previous page");

      link.addEventListener("click", function (event) {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
            link.target === "_blank" || window.history.length <= 1) return;

        event.preventDefault();
        // Skip same-document hash entries when the Navigation API is available.
        var navigation = window.navigation;
        if (navigation && navigation.entries && navigation.currentEntry) {
          var entries = navigation.entries();
          var index = navigation.currentEntry.index;
          for (var i = index - 1; i >= 0; i--) {
            var entry = entries[i];
            if (!entry.url) break;
            var url = new URL(entry.url);
            if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search) {
              if (url.origin === window.location.origin) {
                window.history.go(i - index);
                return;
              }
              break;
            }
          }
          // A new tab may have no accessible preceding entry.
          window.location.assign(source.href);
          return;
        }
        window.history.back();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
