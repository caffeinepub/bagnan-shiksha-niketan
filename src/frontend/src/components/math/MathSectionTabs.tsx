import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { MathSection } from '../../content/math';
import PracticeCard from './PracticeCard';

interface MathSectionTabsProps {
  sections: MathSection[];
}

export default function MathSectionTabs({ sections }: MathSectionTabsProps) {
  if (sections.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No math content available for this class yet.</p>
      </div>
    );
  }

  return (
    <Tabs defaultValue={sections[0].id} className="w-full">
      <ScrollArea className="w-full whitespace-nowrap">
        <TabsList className="inline-flex w-auto">
          {sections.map((section) => (
            <TabsTrigger key={section.id} value={section.id}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {sections.map((section) => (
        <TabsContent key={section.id} value={section.id} className="space-y-6 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {section.problems.map((problem) => (
              <PracticeCard key={problem.id} problem={problem} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
