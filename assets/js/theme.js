(function () {
  'use strict';

  var root = document.documentElement;
  var systemTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  var settings = ['system', 'light', 'dark'];

  function getStoredSetting() {
    var setting = 'system';

    try {
      setting = localStorage.getItem('theme') || 'system';
    } catch (error) {
      setting = 'system';
    }

    return settings.indexOf(setting) === -1 ? 'system' : setting;
  }

  function getComputedTheme(setting) {
    if (setting !== 'system') return setting;
    return systemTheme && systemTheme.matches ? 'dark' : 'light';
  }

  function updateToggle(setting) {
    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    var labels = { system: 'System', light: 'Light', dark: 'Dark' };

    Array.prototype.forEach.call(toggle.querySelectorAll('[data-theme-icon]'), function (icon) {
      icon.hidden = icon.getAttribute('data-theme-icon') !== setting;
    });

    Array.prototype.forEach.call(document.querySelectorAll('[data-theme-option]'), function (option) {
      var isActive = option.getAttribute('data-theme-option') === setting;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });

    toggle.title = 'Theme: ' + labels[setting];
    toggle.setAttribute('aria-label', 'Choose theme. Current theme: ' + labels[setting] + '.');
  }

  function updateBrowserColor(theme) {
    var meta = document.getElementById('theme-color');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1b1f22' : '#ffffff');
  }

  function applySetting(setting, persist, animate) {
    var theme = getComputedTheme(setting);

    if (animate) root.classList.add('theme-transition');
    root.setAttribute('data-theme-setting', setting);
    root.setAttribute('data-theme', theme);
    updateToggle(setting);
    updateBrowserColor(theme);

    if (persist) {
      try {
        localStorage.setItem('theme', setting);
      } catch (error) {
        // The selected theme still applies for this page when storage is unavailable.
      }
    }

    if (animate) {
      window.setTimeout(function () {
        root.classList.remove('theme-transition');
      }, 220);
    }
  }

  function initializeThemeToggle() {
    var toggle = document.getElementById('theme-toggle');
    var menu = document.getElementById('theme-menu');
    var themeControl = toggle ? toggle.closest('.masthead__theme') : null;
    var setting = getStoredSetting();

    applySetting(setting, false, false);

    function closeMenu(returnFocus) {
      if (!toggle || !menu) return;
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      if (returnFocus) toggle.focus();
    }

    function openMenu() {
      if (!toggle || !menu) return;
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');

      var active = menu.querySelector('.is-active');
      if (active) active.focus();
    }

    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        if (menu.hidden) openMenu();
        else closeMenu(false);
      });

      toggle.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault();
          openMenu();
        }
      });

      menu.addEventListener('click', function (event) {
        var option = event.target.closest('[data-theme-option]');
        if (!option) return;

        applySetting(option.getAttribute('data-theme-option'), true, true);
        closeMenu(true);
      });

      menu.addEventListener('keydown', function (event) {
        var options = Array.prototype.slice.call(menu.querySelectorAll('[data-theme-option]'));
        var index = options.indexOf(document.activeElement);

        if (event.key === 'Escape') {
          event.preventDefault();
          closeMenu(true);
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault();
          index = event.key === 'ArrowDown' ? index + 1 : index - 1;
          options[(index + options.length) % options.length].focus();
        } else if (event.key === 'Home' || event.key === 'End') {
          event.preventDefault();
          options[event.key === 'Home' ? 0 : options.length - 1].focus();
        }
      });

      document.addEventListener('click', function (event) {
        if (!menu.hidden && themeControl && !themeControl.contains(event.target)) {
          closeMenu(false);
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !menu.hidden) {
          closeMenu(true);
        }
      });
    }

    var handleSystemChange = function () {
      if ((root.getAttribute('data-theme-setting') || 'system') === 'system') {
        applySetting('system', false, true);
      }
    };

    if (systemTheme) {
      if (systemTheme.addEventListener) systemTheme.addEventListener('change', handleSystemChange);
      else if (systemTheme.addListener) systemTheme.addListener(handleSystemChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
  } else {
    initializeThemeToggle();
  }
}());
