---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for news in sorted_news %}
  {{ news.content }}
{% endfor %}

[Back](/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
