---
layout: markdown
title: Toolbar Link
---

Drag this button to your toolbar

<a href='javascript:(function() { var url = window.location.href; if (url.indexOf("https://sourcegraph.com/") !== -1) { url = url.replace("https://sourcegraph.com/", "https://"); url = url.replace("/-/blob", "/blob"); window.location.href = url; } else if (url.indexOf("https://github.com/") !== -1) { url = url.replace("https://github.com/", "https://sourcegraph.com/github.com/"); url = url.replace("/blob", "/-/blob"); window.location.href = url; } }())'>Jump to Sourcegraph</a>