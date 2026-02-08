import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { ClassLevel } from './classLevels';

interface ClassSelectionContextType {
  selectedClass: ClassLevel;
  setSelectedClass: (level: ClassLevel) => void;
}

const ClassSelectionContext = createContext<ClassSelectionContextType | undefined>(undefined);

const STORAGE_KEY = 'bagnan-selected-class';

export function ClassSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedClass, setSelectedClassState] = useState<ClassLevel>(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored && ['nursery', 'lkg', 'ukg', 'class1', 'class2', 'class3'].includes(stored)) {
        return stored as ClassLevel;
      }
    } catch (error) {
      console.warn('Failed to load selected class from session storage:', error);
    }
    return 'class1';
  });

  const setSelectedClass = (level: ClassLevel) => {
    setSelectedClassState(level);
    try {
      sessionStorage.setItem(STORAGE_KEY, level);
    } catch (error) {
      console.warn('Failed to save selected class to session storage:', error);
    }
  };

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, selectedClass);
    } catch (error) {
      console.warn('Failed to persist selected class:', error);
    }
  }, [selectedClass]);

  return (
    <ClassSelectionContext.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ClassSelectionContext.Provider>
  );
}

export function useClassSelection() {
  const context = useContext(ClassSelectionContext);
  if (!context) {
    throw new Error('useClassSelection must be used within ClassSelectionProvider');
  }
  return context;
}

