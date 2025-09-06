'use client';

import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'Copied to clipboard!',
      description: 'You can now share the link.',
    });
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-foreground/80">Share:</span>
      <Button variant="outline" size="icon" asChild>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" onClick={copyToClipboard}>
        <LinkIcon className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
}
