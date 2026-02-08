import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '../components/site/AnimatedSection';
import TracingCanvas from '../components/learning/TracingCanvas';
import AlphabetNumbersPicker from '../components/learning/AlphabetNumbersPicker';
import { BookA, Hash } from 'lucide-react';

export default function AlphabetNumbersPage() {
  const [mode, setMode] = useState<'alphabet' | 'number'>('alphabet');
  const [selectedAlphabet, setSelectedAlphabet] = useState('A');
  const [selectedNumber, setSelectedNumber] = useState('0');

  const currentCharacter = mode === 'alphabet' ? selectedAlphabet : selectedNumber;

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-6xl">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Learn Alphabets & Numbers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practice writing letters and numbers! Select a character and trace it on the canvas below.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <AnimatedSection animation="slide-right" delay={100}>
            <Tabs value={mode} onValueChange={(v) => setMode(v as 'alphabet' | 'number')}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="alphabet" className="gap-2">
                  <BookA className="h-4 w-4" />
                  Alphabets
                </TabsTrigger>
                <TabsTrigger value="number" className="gap-2">
                  <Hash className="h-4 w-4" />
                  Numbers
                </TabsTrigger>
              </TabsList>

              <TabsContent value="alphabet">
                <AlphabetNumbersPicker
                  type="alphabet"
                  selected={selectedAlphabet}
                  onSelect={setSelectedAlphabet}
                />
              </TabsContent>

              <TabsContent value="number">
                <AlphabetNumbersPicker
                  type="number"
                  selected={selectedNumber}
                  onSelect={setSelectedNumber}
                />
              </TabsContent>
            </Tabs>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="border-2 border-primary/20 shadow-playful">
                <CardHeader className="text-center">
                  <CardTitle className="text-6xl md:text-8xl font-bold text-primary animate-bounce-gentle">
                    {currentCharacter}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground">
                    {mode === 'alphabet' ? 'Letter' : 'Number'}: <span className="font-bold text-foreground">{currentCharacter}</span>
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <TracingCanvas character={currentCharacter} showGuide={true} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
