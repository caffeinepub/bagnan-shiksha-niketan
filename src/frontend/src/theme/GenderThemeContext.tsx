import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type GenderTheme = 'neutral' | 'girl' | 'boy';

interface GenderThemeContextValue {
  theme: GenderTheme;
  setTheme: (theme: GenderTheme) => void;
}

const GenderThemeContext = createContext<GenderThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'gender-theme';

export function GenderThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<GenderTheme>(() => {
    if (typeof window === 'undefined') return 'neutral';
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === 'girl' || stored === 'boy' || stored === 'neutral') ? stored : 'neutral';
  });

  const [isInitialized, setIsInitialized] = useState(false);

  // Apply theme immediately on mount and whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove any existing gender attributes
    root.removeAttribute('data-gender');
    
    // Apply new theme
    if (theme !== 'neutral') {
      root.setAttribute('data-gender', theme);
    }
    
    // Persist to localStorage
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Mark as initialized after first render
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [theme, isInitialized]);

  const setTheme = (newTheme: GenderTheme) => {
    setThemeState(newTheme);
  };

  return (
    <GenderThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </GenderThemeContext.Provider>
  );
}

export function useGenderTheme() {
  const context = useContext(GenderThemeContext);
  if (!context) {
    throw new Error('useGenderTheme must be used within GenderThemeProvider');
  }
  return context;
}
