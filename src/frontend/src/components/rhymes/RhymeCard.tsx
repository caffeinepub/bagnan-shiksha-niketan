import { Music, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Rhyme } from '../../content/rhymes';

interface RhymeCardProps {
  rhyme: Rhyme;
  onPlay: (rhyme: Rhyme) => void;
}

export default function RhymeCard({ rhyme, onPlay }: RhymeCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-playful hover:-translate-y-1 border-2 border-accent/20">
      <CardHeader>
        <div className="mx-auto mb-4 p-4 rounded-2xl bg-accent/10">
          <Music className="h-12 w-12 text-accent" />
        </div>
        <CardTitle className="font-display text-center">{rhyme.title}</CardTitle>
        <CardDescription className="text-center">{rhyme.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => onPlay(rhyme)}
          className="w-full"
          size="lg"
        >
          <Play className="mr-2 h-4 w-4" />
          Play Rhyme
        </Button>
      </CardContent>
    </Card>
  );
}

