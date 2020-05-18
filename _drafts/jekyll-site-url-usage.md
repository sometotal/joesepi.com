---
title: "Jekyll's site url usage in themes"
categories:
  - Code
tags:
  - code
  - Jekyll
---

Hey Jekyll authors. Most of you are using the `{{ site.url }}` tag wrong. It does not below EvErYwHeRe!! Only use it in canonical urls in the head and use it in your feed.xml. Otherwise, go root relative, i.e. `/whatever/path/to.file`. While I appreciate the work that has gone into each theme, please use `{{ site.url }}` sparingly and only when needed. Here is a commit showing you what I mean: http://fillthisinlater.
