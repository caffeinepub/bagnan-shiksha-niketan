import { useState } from 'react';
import AnimatedSection from '../components/site/AnimatedSection';
import RhymeCard from '../components/rhymes/RhymeCard';
import RhymePlayer from '../components/rhymes/RhymePlayer';
import { RHYMES, type Rhyme } from '../content/rhymes';

export default function RhymesPage() {
  const [selectedRhyme, setSelectedRhyme] = useState<Rhyme | null>(null);

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground animate-bounce-gentle">
              Rhymes & Songs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sing along with your favorite nursery rhymes! Click on any rhyme to see the lyrics.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RHYMES.map((rhyme, index) => (
            <AnimatedSection key={rhyme.id} animation="scale-in" delay={index * 80}>
              <RhymeCard rhyme={rhyme} onPlay={setSelectedRhyme} />
            </AnimatedSection>
          ))}
        </div>

        <RhymePlayer rhyme={selectedRhyme} onClose={() => setSelectedRhyme(null)} />
      </div>
    </div>
  );
}
