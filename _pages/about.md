---
layout: archive
permalink: /
browser_title: "Rusi Wang’s Homepage - 同济大学王铷锶个人主页"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<header class="home-identity">
  <h1 class="home-identity__name">Rusi Wang</h1>
  <p class="home-identity__affiliation">Ph.D. candidate at <a href="https://en.wikipedia.org/wiki/Tongji_University" target="_blank" rel="noopener noreferrer">Tongji University</a></p>
</header>

<div style="text-align: justify; text-justify: inter-word; hyphens: auto;" markdown="1">

Hi there, I am Rusi Wang (Chinese name: 王铷锶), and you can call me "Royce". I was born in February 1999 in Shanghai, China. I obtained my B.Eng. degree from the [University of Electronic Science and Technology of China](https://en.wikipedia.org/wiki/University_of_Electronic_Science_and_Technology_of_China){:target="_blank"}&nbsp;<span class="institution-rank" tabindex="0">[<span class="institution-rank__label">Rank</span>]<span class="institution-rank__tooltip"><span>Project 985</span><span>Double First-Class University (Class A)</span><span>QS World University Rankings 2027: #=488</span><span>U.S. News Best Global Universities 2026–2027: #=152</span></span></span> in 2021 and my M.Sc.(Eng.) degree from <span class="institution-name-with-rank"><a href="https://en.wikipedia.org/wiki/Tongji_University" target="_blank">Tongji University</a>&nbsp;<span class="institution-rank institution-rank--opens-left" tabindex="0">[<span class="institution-rank__label">Rank</span>]<span class="institution-rank__tooltip"><span>Project 985</span><span>Double First-Class University (Class A)</span><span>QS World University Rankings 2027: #146</span><span>U.S. News Best Global Universities 2026–2027: #110</span></span></span></span> in 2024. I am currently a Ph.D. candidate at [Urban Mobility Institute](http://umi.tongji.edu.cn/){:target="_blank"}, Tongji University.

Since August 2024, I have been conducting my Ph.D. research under the supervision of [Professor Chi Xie](https://scholar.google.com/citations?hl=en&user=LQ3KKYQAAAAJ&view_op=list_works){:target="_blank"} at the Transport and Energy Systems Laboratory (TESLA) [[📍Location](https://www.google.com/maps/place/4801+Caoan+Hwy,+Jia+Ding+Qu,+Shang+Hai+Shi,+China,+201804/@31.2810611,121.2100163,19z/data=!3m1!4b1!4m6!3m5!1s0x35b25cd3667ad407:0xa0105b5da462cc70!8m2!3d31.28106!4d121.21066!16s%2Fg%2F11r8dwp7vp?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOS4xIKXMDSoASAFQAw%3D%3D){:target="_blank"}], with a primary research interest in network modeling and optimization. My Ph.D. dissertation focuses on travel demand management (TDM) in dynamic equilibrium traffic networks. A key contribution of my work is the development of an analytical dynamic traffic assignment (DTA) model that is computationally tractable for large-scale networks and accommodates multimodal transportation (e.g., solo driving, e-hailing, carpooling, public transit, and combined modes). Based on this equilibrium model, I analyze and solve a class of TDM strategy (e.g., congestion pricing, tradable mobility credit, and booking cum rationing) optimization problems with specific mathematical structures.

**For collaboration inquiries, please feel free to email me at [rusiwang@tongji.edu.cn](mailto:rusiwang@tongji.edu.cn).**

</div>

<style>
  .institution-rank {
    position: relative;
    display: inline-block;
    cursor: help;
    white-space: nowrap;
  }

  .institution-rank__label {
    border-bottom: 1px dashed #999;
  }

  .institution-name-with-rank {
    white-space: nowrap;
  }

  .institution-rank__tooltip {
    visibility: hidden;
    position: absolute;
    z-index: 20;
    top: 135%;
    left: 0;
    width: max-content;
    max-width: min(430px, calc(100vw - 2rem));
    padding: 0.45em 0.65em;
    border-radius: 5px;
    background: #333;
    color: #fff;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.45;
    white-space: normal;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .institution-rank__tooltip span {
    display: block;
  }

  .institution-rank__tooltip::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 18px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }

  .institution-rank--opens-left .institution-rank__tooltip {
    right: 0;
    left: auto;
  }

  .institution-rank--opens-left .institution-rank__tooltip::after {
    right: 18px;
    left: auto;
  }

  .institution-rank:hover .institution-rank__tooltip,
  .institution-rank:focus .institution-rank__tooltip {
    visibility: visible;
    opacity: 1;
  }

</style>

<h1 class="home-section-title">Selected Publications</h1>

{% assign featured_portfolio = site.data.research_portfolio | where: "featured", true %}
{% for item in featured_portfolio limit: 3 %}
  {% include research-card.html item=item %}
{% endfor %}

[View portfolio](/research_portfolio/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}

<h1 class="home-section-title">News</h1>

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for news in sorted_news limit:3 %}
  {{ news.content }}
{% endfor %}

[View all news](https://rusiwang99.github.io/news/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
