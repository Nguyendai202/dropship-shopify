---
layout: layout.njk
title: Sổ tay Dropship
---

<section class="hero">
  <h1>Sổ tay Dropship</h1>
  <p>Ghi chú học dropshipping Shopify, từ dựng store, tìm sản phẩm, chạy quảng cáo đến xây brand và vận hành. Viết ngắn gọn, có sơ đồ và bảng thuật ngữ để ôn nhanh.</p>
  <a class="btn" href="{{ '/posts/b0-tong-quan-khoa-hoc/' | url }}">Bắt đầu từ tổng quan →</a>
</section>

<div class="cards">
{%- for post in collections.posts %}
  <a class="card" href="{{ post.url | url }}">
    <span class="eyebrow">{{ post.data.module | tag }} · {{ post.templateContent | readTime }} phút đọc</span>
    <strong>{{ post.data.title | shortTitle }}</strong>
    <span class="sum">{{ post.data.summary }}</span>
  </a>
{%- endfor %}
</div>
