import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { GKQuestion } from '../../content/gk';

interface QuestionListProps {
  questions: GKQuestion[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No questions available for this class yet.</p>
      </div>
    );
  }

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {questions.map((question, index) => (
        <AccordionItem
          key={question.id}
          value={question.id}
          className="border-2 border-secondary/20 rounded-lg px-4 bg-card hover:shadow-playful transition-shadow"
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-start text-left">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-semibold mr-3">
                {index + 1}
              </span>
              <span className="font-medium">{question.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="ml-11 p-4 bg-success/10 border-2 border-success/30 rounded-lg">
              <p className="font-semibold text-success mb-1">Answer:</p>
              <p className="text-foreground">{question.answer}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

