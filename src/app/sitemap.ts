import { getAllPosts } from '@/lib/posts';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  const posts = await getAllPosts();
  const postUrls = posts.map(post => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const staticPages = [
    '/',
    '/about',
    '/categories',
    '/search',
    '/featured',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...postUrls];
}
