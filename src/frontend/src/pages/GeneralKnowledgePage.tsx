import AnimatedSection from '../components/site/AnimatedSection';
import ClassSelector from '../components/learning/ClassSelector';
import QuestionList from '../components/qa/QuestionList';
import { useClassSelection } from '../learning/ClassSelectionContext';
import { getClassLevelDisplayName } from '../learning/classLevels';
import { GK_CONTENT } from '../content/gk';

export default function GeneralKnowledgePage() {
  const { selectedClass } = useClassSelection();
  const questions = GK_CONTENT[selectedClass] || [];

  return (
    <div className="py-12 md:py-16">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              General Knowledge
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge with fun questions! Click on each question to reveal the answer.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md mx-auto mb-12">
            <ClassSelector />
            <div className="text-center mt-4 p-4 bg-secondary/5 rounded-lg">
              <p className="text-sm text-muted-foreground">Showing questions for:</p>
              <p className="text-lg font-semibold text-secondary">
                {getClassLevelDisplayName(selectedClass)}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <QuestionList questions={questions} />
        </AnimatedSection>
      </div>
    </div>
  );
}

