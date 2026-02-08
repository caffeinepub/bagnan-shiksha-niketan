import { useState } from 'react';
import { Check, X, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { MathProblem } from '../../content/math';

interface PracticeCardProps {
  problem: MathProblem;
}

export default function PracticeCard({ problem }: PracticeCardProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(true);
    setShowAnswer(true);
  };

  const handleReveal = () => {
    setShowAnswer(true);
  };

  const isCorrect = userAnswer.trim() === problem.answer;

  return (
    <Card className="border-2 border-primary/20 transition-all hover:shadow-playful">
      <CardHeader>
        <CardTitle className="font-display text-xl text-center">{problem.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Your answer"
          value={userAnswer}
          onChange={(e) => {
            setUserAnswer(e.target.value);
            setChecked(false);
            setShowAnswer(false);
          }}
          className="text-center text-lg"
        />

        <div className="flex gap-2">
          <Button
            onClick={handleCheck}
            disabled={!userAnswer.trim() || checked}
            className="flex-1"
            variant="default"
          >
            <Check className="mr-2 h-4 w-4" />
            Check
          </Button>
          <Button
            onClick={handleReveal}
            variant="outline"
            className="flex-1"
          >
            <Eye className="mr-2 h-4 w-4" />
            Show Answer
          </Button>
        </div>

        {showAnswer && (
          <div className={`p-4 rounded-lg text-center animate-scale-in ${
            checked
              ? isCorrect
                ? 'bg-success/10 border-2 border-success/30'
                : 'bg-destructive/10 border-2 border-destructive/30'
              : 'bg-muted'
          }`}>
            {checked && (
              <div className="flex items-center justify-center mb-2">
                {isCorrect ? (
                  <>
                    <Check className="h-6 w-6 text-success mr-2" />
                    <span className="font-semibold text-success">Correct! 🎉</span>
                  </>
                ) : (
                  <>
                    <X className="h-6 w-6 text-destructive mr-2" />
                    <span className="font-semibold text-destructive">Try again!</span>
                  </>
                )}
              </div>
            )}
            <p className="text-lg font-semibold">Answer: {problem.answer}</p>
            {problem.explanation && (
              <p className="text-sm text-muted-foreground mt-2">{problem.explanation}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

