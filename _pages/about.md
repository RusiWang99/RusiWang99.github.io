---
permalink: /
browser_title: "Rusi Wang’s Homepage"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="text-align: justify; text-justify: inter-word; hyphens: auto;" markdown="1">

Hi there, I am Rusi Wang (Chinese name: 王铷锶), and you can call me "Royce". I was born in February 1999 in Shanghai, China. I obtained my B.Eng. degree from the [University of Electronic Science and Technology of China](https://en.wikipedia.org/wiki/University_of_Electronic_Science_and_Technology_of_China){:target="_blank"} (Project 985, U.S. News Global Rank #152) in 2021 and my M.Sc.(Eng.) degree from [Tongji University](https://en.wikipedia.org/wiki/Tongji_University){:target="_blank"} (Project 985, U.S. News Global Rank #110) in 2024. I am currently a Ph.D. candidate at [Urban Mobility Institute](http://umi.tongji.edu.cn/){:target="_blank"}, Tongji University.

I have been supervised by [Professor Chi Xie](https://scholar.google.com/citations?hl=en&user=LQ3KKYQAAAAJ&view_op=list_works){:target="_blank"} at Transport and Energy Systems Laboratory (TESLA) [[📍Location](https://www.google.com/maps/place/4801+Caoan+Hwy,+Jia+Ding+Qu,+Shang+Hai+Shi,+China,+201804/@31.2810611,121.2100163,19z/data=!3m1!4b1!4m6!3m5!1s0x35b25cd3667ad407:0xa0105b5da462cc70!8m2!3d31.28106!4d121.21066!16s%2Fg%2F11r8dwp7vp?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOS4xIKXMDSoASAFQAw%3D%3D){:target="_blank"}] since August 2024, with a primary research interest in network modeling and optimization. I have completed a <em>pre-dissertation research</em> on subsidy reallocation in containerized freight transportation networks.

My Ph.D. dissertation focuses on travel demand management (TDM) in dynamic equilibrium traffic networks. A key contribution of my work is the development of an analytical dynamic traffic assignment (DTA) model that is computationally tractable for large-scale networks and accommodates multimodal transportation (e.g., solo driving, e-hailing, carpooling, public transit, and combined modes). Based on this equilibrium model, I analyze and solve a class of TDM strategy (e.g., congestion pricing, tradable mobility credit, and booking cum rationing) optimization problems with specific mathematical structures.

**For collaboration inquiries, please feel free to email me directly.**

</div>

<div class="featured-publication">
  <div class="featured-publication__visual">
    <span class="featured-publication__badge">Transport Policy</span>
    <div class="featured-publication__placeholder" role="img" aria-label="Poster placeholder for the Transport Policy paper">
      <span>Poster forthcoming</span>
    </div>
  </div>
  <div class="featured-publication__details">
    <p class="featured-publication__title"><a href="{{ '/publication/2025-09-23-Incorporating revenue loss and congestion cost into rail freight subsidy design Lessons learned from the China-Europe freight transportation network' | relative_url }}">Incorporating revenue loss and congestion cost into rail freight subsidy design: Lessons learned from the China-Europe freight transportation network</a></p>
    <p class="featured-publication__authors">Chi Xie*, <strong>Rusi Wang</strong>, Dianlei Wang, Bo Zou, Xiaowen Fu, Xiqun Chen, Qing-Chang Lu</p>
    <ul class="featured-publication__summary">
      <li>Develops a bilevel subsidy optimization framework based on multimodal, multicommodity network equilibrium to jointly mitigate carrier revenue loss and shippers’ congestion surcharge.</li>
    </ul>
  </div>
</div>

<h1 style="border-bottom: 1px solid #e1e4e8; padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 30px;">News</h1>

{% assign sorted_news = site.news | sort: "date" | reverse %}
{% for news in sorted_news limit:3 %}
  {{ news.content }}
{% endfor %}

[View all news](https://rusiwang99.github.io/news/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
