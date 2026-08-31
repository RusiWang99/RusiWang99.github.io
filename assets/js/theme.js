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

    var nextSetting = settings[(settings.indexOf(setting) + 1) % settings.length];
    var labels = { system: 'System', light: 'Light', dark: 'Dark' };

    Array.prototype.forEach.call(toggle.querySelectorAll('[data-theme-icon]'), function (icon) {
      icon.hidden = icon.getAttribute('data-theme-icon') !== setting;
    });

    toggle.title = 'Theme: ' + labels[setting];
    toggle.setAttribute(
      'aria-label',
      'Theme: ' + labels[setting] + '. Activate to switch to ' + labels[nextSetting].toLowerCase() + ' mode.'
    );
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
    var setting = getStoredSetting();

    applySetting(setting, false, false);

    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme-setting') || 'system';
        var next = settings[(settings.indexOf(current) + 1) % settings.length];
        applySetting(next, true, true);
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
