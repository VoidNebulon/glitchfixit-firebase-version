import fs from 'fs';
import path from 'path';
import type { Post } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatter = match ? match[1] : '';
  const content = fileContent.replace(frontmatterRegex, '').trim();

  const metadata: Partial<Post> = {};
  frontmatter.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      const cleanKey = key.trim() as keyof Post;

      if (value.startsWith('[') && value.endsWith(']')) {
        // @ts-ignore
        metadata[cleanKey] = value.substring(1, value.length - 1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      } else if (value === 'true' || value === 'false') {
        // @ts-ignore
        metadata[cleanKey] = value === 'true';
      } else {
        // @ts-ignore
        metadata[cleanKey] = value.replace(/['"]/g, '');
      }
    }
  });

  return { metadata, content };
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .map((fileName) => {
      if (!fileName.endsWith('.md')) return null;

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { metadata, content } = parseFrontmatter(fileContents);
      
      const post: Post = {
        title: metadata.title ?? 'Untitled',
        slug: metadata.slug ?? fileName.replace(/\.md$/, ''),
        date: metadata.date ?? new Date().toISOString(),
        author: metadata.author ?? 'Anonymous',
        categories: metadata.categories ?? [],
        tags: metadata.tags ?? [],
        featured: metadata.featured ?? false,
        coverImage: metadata.coverImage ?? 'https://picsum.photos/1200/630',
        content,
      };
      
      return post;
    })
    .filter((post): post is Post => post !== null);

  // Sort posts by date in descending order
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts();
  return allPosts.find((post) => post.slug === slug) ?? null;
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = new Set<string>();
  // console.log(allPosts)
  // allPosts.forEach(post => {
  //   post.categories.forEach(category => categories.add(category));
  // });
  allPosts.forEach((post) => {
    const cats = Array.isArray(post.categories)
      ? post.categories
      : [post.categories].filter(Boolean);
    cats.forEach((category) => categories.add(category));
  });
  return Array.from(categories);
}
