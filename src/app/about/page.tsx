import { type Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about GlitchFixIt and our mission to help developers.',
};

export default function AboutPage() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            About GlitchFixIt
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            We are a team of passionate developers dedicated to creating high-quality content to help you on your coding journey.
          </p>
        </div>

        <Card className="mt-16 overflow-hidden rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://picsum.photos/800/600"
                alt="Our team working"
                fill
                className="object-cover"
                data-ai-hint="team collaboration"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="mb-4 font-headline text-3xl font-bold text-primary">Our Mission</h2>
              <p className="mb-4 text-foreground/90">
                At GlitchFix, our mission is to demystify the complexities of modern web development. We believe that with the right guidance, anyone can overcome coding challenges and build amazing things. Whether you're a beginner taking your first steps or a seasoned pro looking to stay updated, our blog is your trusted companion.
              </p>
              <p className="text-foreground/90">
                We focus on providing practical tutorials, in-depth guides, and honest reviews of the latest tools and technologies. Our goal is to create content that is not only informative but also engaging and easy to understand.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
