---
title: "Web Accessibility Basics (a11y)"
slug: "web-accessibility-basics"
date: "2024-06-01T09:00:00Z"
author: "Charles Xavier"
categories: ["Best Practices", "HTML"]
tags: ["accessibility", "a11y", "semantic-html"]
featured: false
coverImage: "https://picsum.photos/seed/112/1200/630"
---

## Building for Everyone

Web accessibility (often abbreviated as a11y) is the inclusive practice of ensuring there are no barriers that prevent interaction with, or access to, websites on the World Wide Web by people with physical disabilities, situational disabilities, and socio-economic restrictions on bandwidth and speed.

## Semantic HTML

The foundation of an accessible website is semantic HTML. Using elements like `<nav>`, `<main>`, `<article>`, `<button>`, and `<header>` for their intended purpose provides meaning to your content that can be understood by assistive technologies like screen readers. Don't just use `<div>` for everything.

## ARIA Roles

Where semantic HTML isn't enough, Accessible Rich Internet Applications (ARIA) roles and attributes can help bridge the gaps. ARIA can be used to describe the purpose and state of custom widgets to assistive technologies. For example, adding `role="alert"` to a `div` will cause screen readers to announce its content immediately when it appears. However, the first rule of ARIA is: don't use ARIA if a native HTML element has the semantics you need.