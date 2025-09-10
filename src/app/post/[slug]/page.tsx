import { notFound } from 'next/navigation';
import Image from 'next/image';
import { type Metadata } from 'next';
import { format } from 'date-fns';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import type { Post } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, UserCircle, Tag, Clock, Star } from 'lucide-react';
import { MdxContent } from '@/components/MdxContent';
import { ShareButtons } from '@/components/ShareButtons';
import { AdSlot } from '@/components/AdSlot';
import { PostCard } from '@/components/PostCard';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/post/${post.slug}`;

  return {
    title: post.title,
    description: post.content.substring(0, 150),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 150),
      url,
      type: 'article',
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.content.substring(0, 150),
      images: [post.coverImage],
    },
  };
}

// Simple reading time calculation
const calculateReadingTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};


export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 3);

  const postUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/post/${post.slug}`;
  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="bg-background py-12 md:py-20">
      <header className="container mx-auto px-4 max-w-4xl text-center">
        {post.featured && (
          <Badge className="mb-4">
            <Star className="mr-1.5 h-3.5 w-3.5" />
            Featured
          </Badge>
        )}
        <h1 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6 border-2 border-primary/20">
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        <div className="mt-4 flex justify-center flex-wrap gap-2">
            {post.categories.map(cat => <Badge key={cat} variant="secondary">{cat}</Badge>)}
        </div>
      </header>

      <div className="container mx-auto px-4 mt-8 max-w-5xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <Image src={post.coverImage} alt={post.title} layout="fill" objectFit="cover" priority data-ai-hint="blog cover" />
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <MdxContent content={post.content} />
            <div className="mt-12 flex justify-between items-center border-t pt-6">
              <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium mr-2">Tags:</span>
                  {post.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
              <ShareButtons title={post.title} url={postUrl} />
            </div>
             <div className="mt-12 lg:hidden">
              <AdSlot />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:sticky top-24 self-start space-y-8">
            {/* TOC Placeholder */}
            <div className="p-6 rounded-2xl bg-muted border">
              <h3 className="font-headline text-lg font-bold mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">Introduction</li>
                  <li className="hover:text-primary cursor-pointer pl-4">First Section</li>
                  <li className="hover:text-primary cursor-pointer pl-4">Second Section</li>
                  <li className="hover:text-primary cursor-pointer">Conclusion</li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <AdSlot />
            </div>
          </aside>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-24 border-t bg-muted">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-headline font-bold text-center mb-12">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(p => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
