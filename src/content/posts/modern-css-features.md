---
title: "Modern CSS Features You Should Be Using"
slug: "modern-css-features"
date: "2024-06-10T18:00:00Z"
author: "Ben Grimm"
categories: ["Web Dev", "Coding"]
tags: ["features", "variables", "selectors"]
featured: false
coverImage: "https://picsum.photos/seed/110/1200/630"
---

## CSS is More Powerful Than Ever

CSS has evolved significantly over the past few years. Many tasks that once required JavaScript or complex hacks can now be accomplished with a few lines of CSS.

## Custom Properties (CSS Variables)

CSS Custom Properties allow you to define reusable values right in your CSS. This is a game-changer for theming and maintaining consistency in your design system.

`:root {
  --primary-color: #18A558;
}

.button {
  background-color: var(--primary-color);
}`

## The :is() Pseudo-class

The `:is()` pseudo-class selector takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This can help you write more compact and readable CSS.

`/* Instead of this: */
header h1, header h2, header h3 {
  color: blue;
}

/* You can write this: */
header :is(h1, h2, h3) {
  color: blue;
}`
