---
title: "Tailwind CSS Best Practices"
slug: "tailwind-css-best-practices"
date: "2024-07-08T08:30:00Z"
author: "Diana Prince"
categories: ["Web Dev", "Coding", "Must Read"]
tags: ["tailwind", "utility-first", "design-systems"]
featured: true
coverImage: "https://picsum.photos/seed/106/1200/630"
---

## Embrace the Utility-First Workflow

The core idea of Tailwind is to build complex components from a constrained set of primitive utilities. Instead of writing custom CSS for every component, you apply existing classes directly in your HTML. This might feel strange at first, but it leads to faster development and more consistent designs.

## Don't Over-Abstract

A common mistake is to immediately start abstracting utility classes into component classes with `@apply`. While `@apply` has its uses, you should first try to create reusable components at the template level (e.g., React or Vue components). This keeps your styling and markup co-located and easier to reason about.

## Use theme() to access your design tokens

Your `tailwind.config.js` file is the source of truth for your design system. When you need to write custom CSS (and you sometimes will), use the `theme()` function to access your design tokens directly. This ensures your custom styles are consistent with your utility classes.

` .my-custom-class {
   background-color: theme('colors.primary');
 }`
