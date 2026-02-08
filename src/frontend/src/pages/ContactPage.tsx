import { MapPin, Mail, Phone, Facebook, Twitter } from 'lucide-react';
import { SiFacebook, SiX } from 'react-icons/si';
import AnimatedSection from '../components/site/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '../content/contact';

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Reach out to us for admissions, inquiries, or any questions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatedSection animation="slide-right" delay={100}>
            <Card className="h-full border-2 border-primary/20 shadow-playful">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-primary/10">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-display text-center">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <Card className="h-full border-2 border-secondary/20 shadow-playful">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-secondary/10">
                  <Mail className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="font-display text-center">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {CONTACT_INFO.email ? (
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-secondary hover:underline font-medium"
                  >
                    {CONTACT_INFO.email}
                  </a>
                ) : (
                  <p className="text-muted-foreground">Coming soon</p>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={300}>
            <Card className="h-full border-2 border-accent/20 shadow-playful">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-accent/10">
                  <Phone className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="font-display text-center">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                {CONTACT_INFO.phone ? (
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-accent hover:underline font-medium"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                ) : (
                  <p className="text-muted-foreground">Coming soon</p>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={400}>
            <Card className="h-full border-2 border-warning/20 shadow-playful">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-2xl bg-warning/10">
                  <SiFacebook className="h-10 w-10 text-warning" />
                </div>
                <CardTitle className="font-display text-center">Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-3">
                {CONTACT_INFO.facebook ? (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={CONTACT_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiFacebook className="mr-2 h-4 w-4" />
                      Facebook
                    </a>
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">Facebook: Coming soon</p>
                )}
                {CONTACT_INFO.twitter ? (
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={CONTACT_INFO.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SiX className="mr-2 h-4 w-4" />
                      Twitter
                    </a>
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground">Twitter: Coming soon</p>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={500}>
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center">
                Ready to Enroll Your Child?
              </CardTitle>
              <CardDescription className="text-center text-base">
                Fill out our admission form and we'll get back to you soon!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="/admissions">Go to Admissions</a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}

