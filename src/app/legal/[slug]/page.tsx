// import { notFound } from 'next/navigation';
// import { type Metadata } from 'next';
// import fs from 'fs';
// import path from 'path';
// import { MdxContent } from '@/components/MdxContent';

// type Props = {
//   params: { slug: string };
// };

// const contentDirectory = path.join(process.cwd(), 'src/content/legal');

// function parseFrontmatter(fileContent: string) {
//   const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
//   const match = frontmatterRegex.exec(fileContent);
//   const frontmatter = match ? match[1] : '';
//   const content = fileContent.replace(frontmatterRegex, '').trim();

//   const metadata: { [key: string]: string } = {};
//   frontmatter.split('\n').forEach((line) => {
//     const [key, ...valueParts] = line.split(':');
//     if (key && valueParts.length) {
//       metadata[key.trim()] = valueParts.join(':').trim().replace(/['"]/g, '');
//     }
//   });

//   return { metadata, content };
// }


// async function getLegalDoc(slug: string) {
//   const filePath = path.join(contentDirectory, `${slug}.md`);
//   if (!fs.existsSync(filePath)) {
//     return null;
//   }
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const { metadata, content } = parseFrontmatter(fileContents);
//   return {
//     title: metadata.title || 'Untitled',
//     content,
//   };
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const doc = await getLegalDoc(params.slug);
//   if (!doc) return {};
//   return { title: doc.title };
// }

// export default async function LegalPage({ params }: Props) {
//   const doc = await getLegalDoc(params.slug);

//   if (!doc) {
//     notFound();
//   }

//   return (
//     <div className="bg-muted py-12 md:py-20">
//       <div className="container mx-auto px-4">
//         <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 shadow-lg sm:p-12">
//           <h1 className="mb-8 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
//             {doc.title}
//           </h1>
//           <div className="prose-styles">
//             <MdxContent content={doc.content} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import fs from "fs";
import path from "path";
import { MdxContent } from "@/components/MdxContent";

type Props = {
  params: Promise<{ slug: string }>; // ✅ must be a Promise
};

const contentDirectory = path.join(process.cwd(), "src/content/legal");

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontmatter = match ? match[1] : "";
  const content = fileContent.replace(frontmatterRegex, "").trim();

  const metadata: { [key: string]: string } = {};
  frontmatter.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(":").trim().replace(/['"]/g, "");
    }
  });

  return { metadata, content };
}

async function getLegalDoc(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { metadata, content } = parseFrontmatter(fileContents);
  return {
    title: metadata.title || "Untitled",
    content,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ await params
  const doc = await getLegalDoc(slug);
  if (!doc) return {};
  return { title: doc.title };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params; // ✅ await params
  const doc = await getLegalDoc(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 shadow-lg sm:p-12">
          <h1 className="mb-8 font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {doc.title}
          </h1>
          <div className="prose-styles">
            <MdxContent content={doc.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
