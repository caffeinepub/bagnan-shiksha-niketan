import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { SocialStudiesTopic } from '../../content/socialStudies';

interface TopicCardProps {
  topic: SocialStudiesTopic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <Card className="h-full border-2 border-warning/20 transition-all hover:shadow-playful hover:-translate-y-1">
      <CardHeader>
        <div className="mx-auto mb-4 p-3 rounded-xl bg-warning/10">
          <BookOpen className="h-8 w-8 text-warning" />
        </div>
        <CardTitle className="font-display text-center">{topic.title}</CardTitle>
        <CardDescription className="text-center">{topic.description}</CardDescription>
      </CardHeader>
      {topic.content && (
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{topic.content}</p>
        </CardContent>
      )}
    </Card>
  );
}

