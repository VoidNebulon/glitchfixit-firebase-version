import { cn } from "@/lib/utils";

type MdxContentProps = {
  content: string;
};

export function MdxContent({ content }: MdxContentProps) {
  // A simple markdown-to-html renderer as a fallback.
  // This is very basic and only for demonstration due to package restrictions.
  // In a real project, use next-mdx-remote or a similar library.
  const toHtml = (md: string) => {
    return md
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 border-b pb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5 border-b pb-3">$1</h1>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-muted text-primary rounded-sm px-1 py-0.5 font-code">$1</code>')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic my-4">$1</blockquote>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div
      className={cn(
        'prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-primary prose-code:font-code'
      )}
      dangerouslySetInnerHTML={{ __html: toHtml(content) }}
    />
  );
}
