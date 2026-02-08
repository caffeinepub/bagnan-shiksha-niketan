import AnimatedSection from '../components/site/AnimatedSection';
import ClassSelector from '../components/learning/ClassSelector';
import TopicCard from '../components/social/TopicCard';
import QuestionList from '../components/qa/QuestionList';
import { useClassSelection } from '../learning/ClassSelectionContext';
import { getClassLevelDisplayName } from '../learning/classLevels';
import { SOCIAL_STUDIES_CONTENT } from '../content/socialStudies';

export default function SocialStudiesPage() {
  const { selectedClass } = useClassSelection();
  const content = SOCIAL_STUDIES_CONTENT[selectedClass] || { topics: [], questions: [] };

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Social Studies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the world around us! Learn about people, places, and our environment.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md mx-auto mb-12">
            <ClassSelector />
            <div className="text-center mt-4 p-4 bg-warning/5 rounded-lg">
              <p className="text-sm text-muted-foreground">Showing content for:</p>
              <p className="text-lg font-semibold text-warning">
                {getClassLevelDisplayName(selectedClass)}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {content.topics.length > 0 && (
          <AnimatedSection delay={200}>
            <div className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
                Topics to Explore
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {content.topics.map((topic, index) => (
                  <div key={topic.id} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <TopicCard topic={topic} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {content.questions.length > 0 && (
          <AnimatedSection delay={300}>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
                Questions & Answers
              </h2>
              <QuestionList questions={content.questions} />
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

