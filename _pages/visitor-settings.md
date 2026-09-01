---
layout: archive
permalink: /visitor-settings/
title: "Visitor Settings"
author_profile: false
noindex: true
sitemap: false
---

<div class="visitor-settings" data-visitor-settings>
  <p class="visitor-settings__intro">Use this page to prevent this browser from being included in the visitor map statistics.</p>

  <section class="visitor-settings__panel" aria-labelledby="visitor-settings-status-title">
    <h2 id="visitor-settings-status-title">This browser</h2>
    <p class="visitor-settings__status" role="status" aria-live="polite">
      <span class="visitor-settings__status-dot" aria-hidden="true"></span>
      <span data-visitor-settings-status>Checking the current setting…</span>
    </p>
    <p class="visitor-settings__note" data-visitor-settings-note>This setting is stored only in this browser.</p>

    <div class="visitor-settings__actions">
      <button class="btn visitor-settings__button visitor-settings__button--primary" type="button" data-visitor-settings-exclude>Exclude this browser</button>
      <button class="btn btn--inverse visitor-settings__button" type="button" data-visitor-settings-include>Resume counting</button>
    </div>
  </section>

  <p class="visitor-settings__privacy">This page is not listed in the website navigation. The setting applies only to the current browser and may be cleared if browser data is deleted.</p>
</div>

<style>
  .visitor-settings {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
  }

  .visitor-settings__intro {
    margin-bottom: 1.25rem;
    color: var(--rw-muted);
  }

  .visitor-settings__panel {
    padding: 1.35rem 1.5rem;
    border: 1px solid var(--rw-line);
    border-radius: 5px;
    background: var(--rw-surface);
  }

  .visitor-settings__panel h2 {
    margin: 0 0 0.85rem;
    padding: 0;
    border: 0;
    font-size: 1.15rem;
  }

  .visitor-settings__status {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin: 0 0 0.45rem;
    font-weight: 700;
  }

  .visitor-settings__status-dot {
    flex: 0 0 auto;
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 50%;
    background: var(--rw-muted);
  }

  .visitor-settings[data-excluded="true"] .visitor-settings__status-dot {
    background: var(--rw-link);
  }

  .visitor-settings__note,
  .visitor-settings__privacy {
    color: var(--rw-muted);
    font-size: 0.875rem !important;
  }

  .visitor-settings__note {
    margin: 0;
  }

  .visitor-settings__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: 1.3rem;
  }

  .visitor-settings__button {
    margin: 0;
    font-size: 0.9rem;
  }

  .visitor-settings__button--primary {
    background: var(--rw-link);
  }

  .visitor-settings__button--primary:hover,
  .visitor-settings__button--primary:focus-visible {
    background: var(--rw-link-hover);
  }

  .visitor-settings__button[disabled] {
    cursor: default;
    opacity: 0.55;
  }

  .visitor-settings__privacy {
    margin: 1rem 0 0;
  }

  @media (max-width: 520px) {
    .visitor-settings__panel {
      padding: 1.15rem;
    }

    .visitor-settings__actions {
      align-items: stretch;
      flex-direction: column;
    }

    .visitor-settings__button {
      width: 100%;
    }
  }
</style>

<script>
  (function () {
    'use strict';

    var storageKey = 'rusi-mapmyvisitors-optout';
    var root = document.querySelector('[data-visitor-settings]');
    if (!root) return;

    var status = root.querySelector('[data-visitor-settings-status]');
    var note = root.querySelector('[data-visitor-settings-note]');
    var excludeButton = root.querySelector('[data-visitor-settings-exclude]');
    var includeButton = root.querySelector('[data-visitor-settings-include]');

    function readSetting() {
      try {
        return localStorage.getItem(storageKey) === 'true';
      } catch (error) {
        return false;
      }
    }

    function render(isExcluded, message) {
      root.setAttribute('data-excluded', isExcluded ? 'true' : 'false');
      status.textContent = isExcluded
        ? 'Excluded — visits from this browser will not be counted.'
        : 'Included — visits from this browser may be counted.';
      note.textContent = message || 'This setting is stored only in this browser.';
      excludeButton.disabled = isExcluded;
      includeButton.disabled = !isExcluded;
    }

    function saveSetting(isExcluded) {
      try {
        if (isExcluded) {
          localStorage.setItem(storageKey, 'true');
        } else {
          localStorage.removeItem(storageKey);
        }
        render(isExcluded, 'Setting saved for this browser.');
      } catch (error) {
        render(readSetting(), 'The setting could not be saved because browser storage is unavailable.');
      }
    }

    excludeButton.addEventListener('click', function () {
      saveSetting(true);
    });

    includeButton.addEventListener('click', function () {
      saveSetting(false);
    });

    render(readSetting());
  }());
</script>
