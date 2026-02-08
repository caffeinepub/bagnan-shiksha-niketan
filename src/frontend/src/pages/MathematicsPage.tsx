import AnimatedSection from '../components/site/AnimatedSection';
import ClassSelector from '../components/learning/ClassSelector';
import MathSectionTabs from '../components/math/MathSectionTabs';
import { useClassSelection } from '../learning/ClassSelectionContext';
import { getClassLevelDisplayName } from '../learning/classLevels';
import { MATH_CONTENT } from '../content/math';

export default function MathematicsPage() {
  const { selectedClass } = useClassSelection();
  const sections = MATH_CONTENT[selectedClass] || [];

  return (
    <div className="py-12 md:py-16 relative">
      {/* Animated Mascot - Rocket Fox */}
      <img
        src="/assets/generated/mascot-rocketfox.dim_768x768.png"
        alt=""
        className="absolute top-12 right-8 w-24 h-24 md:w-32 md:h-32 animate-wiggle motion-reduce:animate-none pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      
      <div className="container">
        <AnimatedSection>
          <div className="text-center space-y-4 mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground animate-wiggle">
              Mathematics Practice
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practice math problems and improve your skills! Select your class to see appropriate exercises.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-md mx-auto mb-12">
            <ClassSelector />
            <div className="text-center mt-4 p-4 bg-primary/5 rounded-lg animate-float">
              <p className="text-sm text-muted-foreground">Showing content for:</p>
              <p className="text-lg font-semibold text-primary">
                {getClassLevelDisplayName(selectedClass)}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <MathSectionTabs sections={sections} />
        </AnimatedSection>
      </div>
    </div>
  );
}
