import { Button } from '@/components/ui/button';
import { useGenderTheme } from '../../theme/GenderThemeContext';
import { Sparkles, Rocket } from 'lucide-react';

export default function GenderSelector() {
  const { theme, setTheme } = useGenderTheme();

  return (
    <div className="flex items-center gap-2 bg-card/50 rounded-full p-1 border border-border/50">
      <Button
        variant={theme === 'girl' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setTheme('girl')}
        className={`rounded-full transition-all ${
          theme === 'girl' 
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md' 
            : 'hover:bg-muted'
        }`}
      >
        <Sparkles className="h-4 w-4 mr-1" />
        <span className="hidden sm:inline">Baby Girl</span>
        <span className="sm:hidden">Girl</span>
      </Button>
      <Button
        variant={theme === 'boy' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setTheme('boy')}
        className={`rounded-full transition-all ${
          theme === 'boy' 
            ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md' 
            : 'hover:bg-muted'
        }`}
      >
        <Rocket className="h-4 w-4 mr-1" />
        <span className="hidden sm:inline">Baby Boy</span>
        <span className="sm:hidden">Boy</span>
      </Button>
    </div>
  );
}
