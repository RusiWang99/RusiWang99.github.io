/* Do not revive a mouse-clicked control's focus styling when Shift is pressed. */
(function () {
  "use strict";

  var navigatingByKeyboard = false;

  function isEditable(element) {
    return element.matches("input, textarea, select, [contenteditable]") ||
      Boolean(element.closest("[contenteditable]"));
  }

  function clearPointerFocus() {
    var active = document.activeElement;
    if (active && active !== document.body && active !== document.documentElement &&
        active.blur && !isEditable(active)) active.blur();
  }

  document.addEventListener("pointerdown", function () {
    navigatingByKeyboard = false;
  }, true);

  document.addEventListener("click", function (event) {
    // Keyboard activation should retain focus for Tab and Shift+Tab navigation.
    if (event.detail === 0 || !event.target.closest) return;
    var control = event.target.closest("a, button, summary, [tabindex]");
    if (!control || isEditable(control)) return;
    requestAnimationFrame(function () {
      if (document.activeElement === control) control.blur();
    });
  }, true);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      navigatingByKeyboard = true;
    } else if (event.key === "Shift" && !navigatingByKeyboard) {
      clearPointerFocus();
    }
  }, true);

  window.addEventListener("pageshow", function (event) {
    if (!event.persisted) return;
    navigatingByKeyboard = false;
    requestAnimationFrame(clearPointerFocus);
  });
}());
