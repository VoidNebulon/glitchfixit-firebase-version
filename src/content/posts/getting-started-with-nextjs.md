---
title: "Getting Started with Next.js"
slug: "getting-started-with-nextjs"
date: "2024-07-18T14:30:00Z"
author: "John Smith"
categories: ["Web Dev", "Coding", "Software", "Technology", "Latest News"]
tags: ["framework", "ssr", "routing"]
featured: true
coverImage: "https://picsum.photos/seed/102/1200/630"
---

## What is Next.js?

Next.js is a React framework that gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## App Router vs Pages Router

Next.js 13 introduced the App Router, a new paradigm for building applications. It lives alongside the more traditional Pages Router, offering powerful features like layouts, server components, and streaming. We'll focus on the App Router for this guide.

## Creating your first page

Creating a new route is as simple as creating a folder inside the `app` directory. For example, to create an `/about` page, you would create `app/about/page.tsx`.

`export default function AboutPage() {
  return <h1>About Us</h1>;
}`

It's that easy! Next.js handles all the routing for you.
