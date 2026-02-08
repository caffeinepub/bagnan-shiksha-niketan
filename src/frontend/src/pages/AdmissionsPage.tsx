import { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/site/AnimatedSection';
import AdmissionForm from '../components/admissions/AdmissionForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-12 md:py-16">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <Card className="border-2 border-success/30 shadow-playful-lg bg-gradient-to-br from-success/5 to-accent/5">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto p-6 rounded-full bg-success/10">
                  <CheckCircle className="h-20 w-20 text-success animate-scale-in" />
                </div>
                <CardTitle className="font-display text-3xl md:text-4xl text-success">
                  Thank You!
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80">
                  Your admission enquiry has been submitted successfully.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div className="p-6 bg-card rounded-lg border-2 border-success/20">
                  <p className="text-muted-foreground mb-2">
                    We have received your enquiry and will get back to you within 1-2 business days.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please check your email and phone for our response.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="lg"
                  >
                    Submit Another Enquiry
                  </Button>
                  <Button asChild size="lg">
                    <a href="/">Back to Home</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-3xl">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary animate-bounce-gentle" />
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Admissions
              </h1>
              <Sparkles className="h-8 w-8 text-accent animate-bounce-gentle" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the Bagnan Shiksha Niketan family! Fill out the form below to start your child's learning journey with us.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mb-8">
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="font-display text-xl text-center">
                  Why Choose Bagnan Shiksha Niketan?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-muted-foreground">Quality education from Nursery to Class 10</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                    </span>
                    <span className="text-muted-foreground">Interactive online learning for young children</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-muted-foreground">Experienced and caring teachers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-warning/20 flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-warning" />
                    </span>
                    <span className="text-muted-foreground">Safe and nurturing environment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <AdmissionForm onSuccess={() => setSubmitted(true)} />
        </AnimatedSection>
      </div>
    </div>
  );
}

