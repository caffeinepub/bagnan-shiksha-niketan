import { Link } from '@tanstack/react-router';
import { Music, Calculator, Brain, Globe, BookA } from 'lucide-react';
import AnimatedSection from '../components/site/AnimatedSection';
import ClassSelector from '../components/learning/ClassSelector';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useClassSelection } from '../learning/ClassSelectionContext';
import { getClassLevelDisplayName } from '../learning/classLevels';

const learningModules = [
  {
    icon: Music,
    title: 'Rhymes & Songs',
    description: 'Sing along with fun nursery rhymes',
    link: '/rhymes',
    color: 'text-accent',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'Practice math problems and exercises',
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
    description: 'Expand your knowledge with fun facts',
    link: '/general-knowledge',
    color: 'text-secondary',
  },
  {
    icon: Globe,
    title: 'Social Studies',
    description: 'Discover the world around you',
    link: '/social-studies',
    color: 'text-success',
  },
];

export default function LearnPage() {
  const { selectedClass } = useClassSelection();

  return (
    <div className="py-12 md:py-16 relative">
      {/* Animated Mascot - Girl */}
      <img
        src="/assets/generated/mascot-girl.dim_768x768.png"
        alt=""
        className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 animate-float pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Learning Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your class level and explore our interactive learning modules!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md mx-auto mb-12">
            <ClassSelector />
            <div className="text-center mt-4 p-4 bg-primary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">Currently selected:</p>
              <p className="text-lg font-semibold text-primary">
                {getClassLevelDisplayName(selectedClass)}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningModules.map((module, index) => (
            <AnimatedSection key={module.title} animation="scale-in" delay={index * 100 + 200}>
              <Card className="h-full transition-all hover:shadow-playful hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <module.icon className={`h-12 w-12 mb-2 ${module.color} animate-wiggle-hover`} />
                  <CardTitle className="font-display">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={module.link}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
