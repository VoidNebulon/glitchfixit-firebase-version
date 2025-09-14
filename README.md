# GlitchFixIt - A Modern Blog Platform

Welcome to GlitchFixIt, a feature-rich, professional blogging platform built with a modern tech stack. This document provides a comprehensive overview of the project architecture, features, and conventions to help developers and AI assistants understand and contribute to the codebase effectively.

## 1. Project Overview

GlitchFixIt is a server-rendered blogging application designed for developers. It focuses on performance, maintainability, and a high-quality user experience. The content is managed through simple Markdown files, making it easy for authors to create and update posts.

### Core Features

- **Markdown-Based Content**: Blog posts and legal pages are written in Markdown with YAML frontmatter.
- **Dynamic Routing**: Pages for posts (`/post/[slug]`) and legal documents (`/legal/[slug]`) are generated dynamically.
- **Featured Posts**: Posts can be highlighted on the homepage and on a dedicated `/featured` page.
- **Categorization and Tagging**: Posts are organized by categories and tags for easy discovery.
- **Client-Side Search**: A powerful search page at `/search` allows users to filter posts by keyword, category, and sort order.
- **Responsive Design**: The UI is fully responsive and built with modern design principles.
- **SEO Optimized**: Includes support for metadata, structured data (JSON-LD), `sitemap.xml`, and `robots.ts`.

---

## 2. Tech Stack & Key Libraries

- **Framework**: [Next.js](https://nextjs.org/) (using the App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - A collection of beautifully designed, accessible, and reusable components.
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting & Formatting**: ESLint and Prettier (integrated into the Next.js build process).

---

## 3. Project Structure

The project follows a standard Next.js App Router structure. Key directories are outlined below:

``` text
.
├── src
│   ├── app/                # Main application routes (App Router)
│   │   ├── (page-routes)/  # Folders for each page (e.g., /about, /search)
│   │   │   └── page.tsx
│   │   ├── post/[slug]/    # Dynamic route for individual blog posts
│   │   ├── legal/[slug]/   # Dynamic route for legal pages
│   │   ├── layout.tsx      # Root layout for the entire application
│   │   ├── globals.css     # Global styles and Tailwind CSS theme configuration
│   │   └── page.tsx        # Homepage
│   │
│   ├── components/         # Custom React components used across the app
│   │   ├── ui/             # Unmodified shadcn/ui components
│   │   ├── NavBar.tsx      # Site navigation bar
│   │   ├── Footer.tsx      # Site footer
│   │   └── PostCard.tsx    # Card component for displaying post previews
│   │
│   ├── content/            # All website content is stored here
│   │   ├── posts/          # Blog post Markdown files
│   │   └── legal/          # Legal page Markdown files (e.g., privacy-policy.md)
│   │
│   ├── hooks/              # Custom React hooks (e.g., use-toast)
│   │
│   ├── lib/                # Core logic, utilities, and data-fetching functions
│   │   ├── posts.ts        # Functions for reading and parsing post data from Markdown
│   │   ├── socials.ts      # Centralized configuration for social media links
│   │   ├── types.ts        # TypeScript type definitions
│   │   └── utils.ts        # Utility functions (e.g., `cn` for classnames)
│
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── package.json            # Project dependencies and scripts
```

---

## 4. Key Concepts & Conventions

### Content Management

- All blog posts are located in `src/content/posts`.
- Each post is a Markdown file (`.md`) with YAML frontmatter at the top.
- The frontmatter defines the post's metadata (title, slug, date, author, categories, tags, etc.).
- The `src/lib/posts.ts` file contains the logic for reading the file system and parsing these Markdown files. It uses a custom frontmatter parser.

**Example Post Frontmatter (`.md` file):**

```yaml
---
title: "My Awesome Blog Post"
slug: "my-awesome-blog-post"
date: "2024-07-22T10:00:00Z"
author: "Jane Doe"
categories: ["Web Dev", "Tutorials"]
tags: ["nextjs", "react", "tailwind"]
featured: true
coverImage: "https://picsum.photos/seed/123/1200/630"
---

## My Post Content

The rest of the file is standard Markdown content...
```

### Styling

- Styling is primarily done using **Tailwind CSS utility classes**.
- The base theme (colors, fonts, radius) is defined in `src/app/globals.css` using CSS variables, following `shadcn/ui` conventions.
- When creating custom components, prefer passing class names and using `cn()` from `src/lib/utils.ts` to merge classes.
- Avoid writing custom CSS files where possible. If necessary, custom classes should be added to `globals.css`.

### Components

- Reusable UI primitives (Button, Card, Input, etc.) are from `shadcn/ui` and are located in `src/components/ui`. **Do not modify these directly.**
- Custom, application-specific components (e.g., `PostCard`, `Hero`) are located in `src/components`. These compose the `shadcn/ui` components to build the application's UI.

### Data Fetching

- The application uses `fs` (Node.js File System module) within async Server Components to read post and legal content directly from the filesystem at build time. This is handled in `src/lib/posts.ts`.
- Client-side data fetching is not currently used for primary content, keeping the app fast and static where possible.

---

## 5. How to Get Started

To run the project locally, follow these steps:

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Run the Development Server**:

    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

### How to Edit Content

- **Blog Posts**: To add or edit a blog post, create or modify a `.md` file in the `src/content/posts/` directory.
- **Legal Pages**: Edit the `.md` files in `src/content/legal/`.
- **Social Links**: Modify the array in `src/lib/socials.ts`.
- **Hero Text**: Edit the array in `src/lib/hero-phrases.json`.
