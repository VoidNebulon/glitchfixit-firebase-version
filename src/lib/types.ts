export type Post = {
  title: string;
  slug: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  featured: boolean;
  coverImage: string;
  readingTime?: string; // This can be from frontmatter as a fallback
  content: string;
};
