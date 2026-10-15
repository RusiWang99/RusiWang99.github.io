---
layout: archive
title: "Experience"
browser_title: "Experience - Rusi Wang’s Homepage"
hide_title: true
permalink: /experience/
author_profile: true
---

{% include base_path %}

<div class="cv-entry-page" lang="en" style="text-align: justify; text-justify: inter-word; hyphens: auto;" markdown="1">

<h1 style="border-bottom: 1px solid var(--rw-line, #e1e4e8); padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 15px;">Education</h1>

<style>
  details > summary {
    list-style: none;
    cursor: pointer;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
  .expand-icon {
    color: #999;
    margin-left: 5px;
    margin-right: 0px;
    font-size: 0.8em;
    display: inline-block;
    transition: transform 0.2s ease;
  }
  details > summary:hover .expand-icon {
    color: #333;
  }
  .expand-icon::before {
    content: "►";
  }
  details[open] .expand-icon {
    transform: rotate(90deg);
  }
  .project-hover {
    position: relative;
    display: inline;
    border-bottom: 1px dashed #999;
    cursor: help;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .project-hover .tooltip-text {
    visibility: hidden;
    width: 360px;
    max-width: 80vw;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 6px 8px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -180px;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 14px;
    font-weight: normal;
    line-height: normal;
    white-space: normal;
    overflow-wrap: break-word;
  }
  .project-hover .tooltip-text::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
  .project-hover:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
</style>


<style>
  .education-cards {
    display: grid;
    gap: 14px;
    margin: 0 0 1em;
  }
  .education-card {
    display: grid;
    grid-template-columns: 94px minmax(0, 1fr);
    border: 1px solid var(--rw-line, #e1e4e8);
    border-radius: 6px;
    background: var(--rw-surface, #fff);
    overflow: hidden;
  }
  .education-card__visual {
    display: grid;
    place-items: center;
    width: 94px;
    height: 94px;
  }
  .education-card__visual img {
    width: 94px;
    height: 94px;
    object-fit: contain;
    box-shadow: none;
  }
  .education-card__main {
    min-width: 0;
    padding: 4px 14px;
    text-align: left;
  }
  .education-card__date {
    display: block;
    margin-bottom: 3px;
    color: var(--rw-muted, #727b81);
    font-size: 0.82em;
  }
  .education-card__school {
    margin: 0 0 3px;
    font-size: 1.03em;
    font-weight: 700;
    line-height: 1.35;
  }
  .education-card__degree {
    margin: 0;
  }
  .education-card__place {
    margin-top: 3px;
    color: var(--rw-muted, #727b81);
  }
  details.education-card__details {
    grid-column: 1 / -1;
    margin: 0;
    border-top: 1px solid var(--rw-line, #e1e4e8);
  }
  .education-card__details > summary {
    display: block;
    padding: 9px 16px;
    color: var(--rw-link, #3a83aa);
  }
  .education-card__details > summary::before {
    content: "▸";
    display: inline-block;
    margin-right: 0.45em;
    transition: transform 0.2s ease;
  }
  .education-card__details[open] > summary::before {
    transform: rotate(90deg);
  }
  .education-card__expanded {
    margin: 0 16px 14px;
    padding: 10px 12px;
    border-left: 3px solid var(--rw-line, #e1e4e8);
    background: var(--rw-surface-soft, #f5f7f8);
    font-size: 0.9em;
  }
  .education-card__expanded p {
    margin: 0 0 10px;
  }
  .education-card__expanded p:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 520px) {
    .education-card { grid-template-columns: 70px minmax(0, 1fr); }
    .education-card__visual { width: 70px; height: 70px; }
    .education-card__visual img { width: 70px; height: 70px; }
    .education-card__main { padding: 4px 10px; }
    .education-card__expanded { margin: 0 12px 12px; }
  }
  @media (prefers-reduced-motion: reduce) {
    .education-card__details > summary::before { transition: none; }
  }
</style>

<div class="education-cards">
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/tongji.svg" alt="Tongji University emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2024.09–present</span>
    <div class="education-card__school">Tongji University</div>
    <p class="education-card__degree">Ph.D. Candidate in Urban Mobility, College of Transportation</p>
    <div class="education-card__place">Shanghai, China</div>
  </div>
</article>
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/tongji.svg" alt="Tongji University emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2021.09–2024.05</span>
    <div class="education-card__school">Tongji University</div>
    <p class="education-card__degree">M.Sc.(Eng.) in Vehicle Operation Engineering, Institute of Rail Transit</p>
    <div class="education-card__place">Shanghai, China</div>
  </div>
</article>
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/uestc.svg" alt="University of Electronic Science and Technology of China emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2017.09–2021.07</span>
    <div class="education-card__school">University of Electronic Science and Technology of China</div>
    <p class="education-card__degree">B.Eng. in Internet of Things Engineering, School of Information and Communication Engineering</p>
    <div class="education-card__place">Chengdu, China</div>
  </div>
  <details class="education-card__details">
    <summary>More about this experience</summary>
    <div class="education-card__expanded">
      <p>In December 2017, I was selected into the "<a href="https://mp.weixin.qq.com/s/ew-8znWxv4uh3Q9MWJyc2A" target="_blank">Liren Honors Class of Project Pillars, School of Information and Communication Engineering</a>".</p>
      <p>During my undergraduate studies, I took <em>Optimization Theory for Computer Networking</em>, taught by <a href="https://www.sice.uestc.edu.cn/info/1450/11646.htm" target="_blank" rel="noopener noreferrer">Prof. Xiaoning Zhang</a>. The course covered graph traversal algorithms and graph optimization problems such as shortest paths, matching, and network flows. It also introduced algorithm design techniques including divide-and-conquer, greedy methods, and dynamic programming. The course helped me develop an interest in graph theory and later influenced my decision to work on transportation network equilibrium modeling and optimization in my Ph.D. research.</p>
    </div>
  </details>
</article>
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/isep.svg" alt="Institut Supérieur d'Électronique de Paris emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2019.09–2020.02</span>
    <div class="education-card__school">Institut Supérieur d'Électronique de Paris</div>
    <p class="education-card__degree">Visiting Undergraduate Student Awarded by China Scholarship Council (CSC)</p>
    <div class="education-card__place">Paris, France</div>
  </div>
  <details class="education-card__details">
    <summary>More about this experience</summary>
    <div class="education-card__expanded">
      <p>Conducted research at <a href="https://www.isep.fr/en/research-at-isep/" target="_blank">Laboratoire d’Informatique, Signal et Image, Électronique et Télécommunications</a> under the supervision of <a href="https://scholar.google.com/citations?user=1UesTpIAAAAJ&hl=en" target="_blank">Dr. Ercüment Yılmaz</a> (post-doctoral fellow) and <a href="https://scholar.google.com/citations?user=XEnZikgAAAAJ&hl=en&oi=sra" target="_blank">Prof. Maria Trocan</a>, focusing on melanoma classification using CNN models (AlexNet, GoogLeNet, ResNet) trained on dermoscopic images from the ISIC database.</p>
      <p>Intensive French language training (CEFR B1.1) at the <a href="https://ilcf.icp.fr/en" target="_blank">Institute of French Languages ​​and Culture (ILCF)</a>. Achieved a top grade A, ranking first in a class of 14 students of homogeneous level.</p>
    </div>
  </details>
</article>
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/nuk.svg" alt="National University of Kaohsiung emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2019.02–2019.06</span>
    <div class="education-card__school">National University of Kaohsiung</div>
    <p class="education-card__degree">Exchange Student, Department of Electrical Engineering</p>
    <div class="education-card__place">Kaohsiung, Taiwan, China</div>
  </div>
</article>
<article class="education-card">
  <div class="education-card__visual"><img src="/images/education/yanan.svg" alt="Shanghai Yan’an High School emblem" width="94" height="94" loading="lazy"></div>
  <div class="education-card__main">
    <span class="education-card__date">2014.09–2017.06</span>
    <div class="education-card__school">Shanghai Yan’an High School</div>
    <p class="education-card__degree">High School Diploma</p>
    <div class="education-card__place">Shanghai, China</div>
  </div>
</article>
</div>

{% comment %}
<h1 style="border-bottom: 1px solid var(--rw-line, #e1e4e8); padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 30px;">Research Projects</h1>

* 2027.01–2030.12, Participant: <span class="project-hover"><i>System Equilibrium, Incentive Mechanisms, and Infrastructure Deployment for Large-Scale Vehicle–Grid Interaction</i><span class="tooltip-text">大规模车网互动的系统均衡、激励机制和设施配置</span></span>. Supported by the General Program of the National Natural Science Foundation of China. Principal Investigator: Prof. Chi Xie.
{% endcomment %}

<h1 style="border-bottom: 1px solid var(--rw-line, #e1e4e8); padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 30px;">Academic Service</h1>
* **Journal Reviewer:** *Socio-Economic Planning Sciences* (2026)

<h1 style="border-bottom: 1px solid var(--rw-line, #e1e4e8); padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 30px;">Scholarships</h1>
* 2023.12, Chuangmai Scholarship, Tongji University (¥5,000, Rank: 2/32)
* 2019.12, Excellent Student Scholarship, University of Electronic Science and Technology of China (¥2,000)
* 2019.06, Scholarship Under the State Scholarship Fund (€5,250, Awarded by China Scholarship Council)

<h1 style="border-bottom: 1px solid var(--rw-line, #e1e4e8); padding-bottom: 0.5em; margin-bottom: 0.3em; margin-top: 30px;">Honors and Awards</h1>
* 2019.04, Honorable Mention, 2019 Interdisciplinary Contest in Modeling (with <a href="https://scholar.google.com/citations?user=cvcZWesAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener noreferrer">Ran Mao</a> and <a href="https://au.linkedin.com/in/fangping-ning-9932a8377" target="_blank" rel="noopener noreferrer">Fangping Ning</a>)
* 2018.08, First Prize, 2018 Sichuan Provincial Undergraduate Electronic Design Contest (with <a href="https://zobinhuang.github.io/sec_about/" target="_blank" rel="noopener noreferrer">Zhuobin Huang</a> and Zhe Xu)

</div>

[Back](/){: .btn .btn--inverse style="text-decoration: none; font-size: 1em; font-weight: normal;"}
