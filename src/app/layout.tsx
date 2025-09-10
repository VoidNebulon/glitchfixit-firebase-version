import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GlitchFixIt - Your Guide to Modern Web Development',
    template: '%s | GlitchFixIt',
  },
  description:
    'A professional, responsive blogging website about fixing glitches and building modern web applications.',
  openGraph: {
    title: 'GlitchFixIt',
    description: 'Your guide to modern web development and debugging.',
    url: 'https://your-domain.com',
    siteName: 'GlitchFixIt',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlitchFixIt',
    description: 'Your guide to modern web development and debugging.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased overflow-x-hidden">
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
