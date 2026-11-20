---
layout: layout.njk
title: Ghi chú Dropshipping Shopify
---

Nhật ký học khoá "Làm Chủ Dropshipping Shopify" (8 buổi). Mỗi video có phần ý chính, ví dụ và câu hỏi tự kiểm tra để ôn lại nhanh mà không cần xem lại video. Ghi chú được dùng làm nền cho việc xây thương hiệu và content của shop.

{% assign groups = collections.posts | groupByModule %}
{% for g in groups %}
<h2>{{ g.course }} · {{ g.module }}</h2>
<ul>
{%- for post in g.posts %}
  <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
{%- endfor %}
</ul>
{% endfor %}
