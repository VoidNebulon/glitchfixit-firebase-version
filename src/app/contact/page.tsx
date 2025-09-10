import { type Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the GlitchFix Blog team.',
};

export default function ContactPage() {
  return (
    <div className="bg-muted min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            Have a question, a suggestion, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="#" className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" rows={5} placeholder="Your Message" required />
                </div>
                <div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/10 p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@glitchfix.blog</p>
                  </div>
                </div>
              </CardContent>
            </Card>
             <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/10 p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
             <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-md bg-primary/10 p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Office</h3>
                    <p className="text-muted-foreground">123 Code Lane, Dev City, 10101</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
