import { Link } from '@tanstack/react-router';
import { BookOpen, Music, Calculator, Brain, Globe, BookA } from 'lucide-react';
import AnimatedSection from '../components/site/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Music,
    title: 'Rhymes & Songs',
    description: 'Fun audio and video rhymes for early learners',
    link: '/rhymes',
    color: 'text-accent',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Tables, addition, subtraction, and more',
    link: '/mathematics',
    color: 'text-primary',
  },
  {
    icon: BookA,
    title: 'Alphabet & Numbers',
    description: 'Learn to write letters and numbers',
    link: '/alphabet-numbers',
    color: 'text-warning',
  },
  {
    icon: Brain,
    title: 'General Knowledge',
    description: 'Exciting questions to expand young minds',
    link: '/general-knowledge',
    color: 'text-secondary',
  },
  {
    icon: Globe,
    title: 'Social Studies',
    description: 'Learn about the world around us',
    link: '/social-studies',
    color: 'text-success',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Welcome to{' '}
                  <span className="text-primary">Bagnan Shiksha Niketan</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Quality coaching for kids from Class 1 to 10, with engaging online learning for Nursery to Class 3. 
                  Making education fun, interactive, and effective!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="text-lg px-8 shadow-playful hover:shadow-playful-lg transition-shadow">
                    <Link to="/learn">Start Learning</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/admissions">Admissions</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <picture>
                  <source
                    srcSet="/assets/sioj.png"
                    media="(prefers-reduced-motion: reduce)"
                  />
                  <img
                    src="/assets/generated/home-hero-animated.dim_1400x900.gif"
                    alt="Happy kids learning"
                    className="w-full h-auto rounded-3xl shadow-playful-lg"
                  />
                </picture>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        {/* Animated Mascot - Robot Cat */}
        <img
          src="/assets/generated/mascot-robotcat.dim_768x768.png"
          alt=""
          className="absolute bottom-8 left-8 w-20 h-20 md:w-28 md:h-28 animate-bounce-gentle pointer-events-none hidden lg:block"
          aria-hidden="true"
        />
        
        <div className="container">
          <AnimatedSection>
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Explore Our Learning Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interactive content designed for Nursery to Class 3, making learning an adventure!
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} animation="scale-in" delay={index * 100}>
                <Link to={feature.link}>
                  <Card className="h-full transition-all hover:shadow-playful hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50 animate-wiggle-hover">
                    <CardHeader>
                      <feature.icon className={`h-12 w-12 mb-2 ${feature.color}`} />
                      <CardTitle className="font-display">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-4">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  About Our Coaching Center
                </h2>
                <p className="text-lg text-muted-foreground">
                  Located in the heart of Bagnan, we provide comprehensive coaching for students from Class 1 to Class 10. 
                  Our experienced teachers focus on building strong fundamentals while making learning enjoyable.
                </p>
                <p className="text-lg text-muted-foreground">
                  For our youngest learners (Nursery to Class 3), we offer innovative online learning modules with 
                  animated content, interactive exercises, and engaging multimedia resources.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={200}>
              <Card className="border-2 border-primary/20 shadow-playful">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground">Experienced and caring teachers</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-muted-foreground">Interactive and fun learning methods</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-muted-foreground">Focus on both academics and character building</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-6 w-6 rounded-full bg-warning/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-warning" />
                    </div>
                    <p className="text-muted-foreground">Safe and nurturing environment</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection>
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 shadow-playful-lg">
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="font-display text-3xl md:text-4xl">
                  Ready to Join Our Learning Family?
                </CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg">
                  Enroll your child today and watch them thrive in a supportive, engaging environment
                </CardDescription>
                <div className="pt-4">
                  <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                    <Link to="/admissions">Apply for Admission</Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
