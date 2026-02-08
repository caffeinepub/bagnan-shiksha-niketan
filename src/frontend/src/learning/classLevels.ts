export type ClassLevel = 'nursery' | 'lkg' | 'ukg' | 'class1' | 'class2' | 'class3';

export interface ClassLevelOption {
  value: ClassLevel;
  label: string;
  displayName: string;
}

export const CLASS_LEVELS: ClassLevelOption[] = [
  { value: 'nursery', label: 'Nursery', displayName: 'Nursery' },
  { value: 'lkg', label: 'LKG', displayName: 'Lower Kindergarten (LKG)' },
  { value: 'ukg', label: 'UKG', displayName: 'Upper Kindergarten (UKG)' },
  { value: 'class1', label: 'Class 1', displayName: 'Class 1' },
  { value: 'class2', label: 'Class 2', displayName: 'Class 2' },
  { value: 'class3', label: 'Class 3', displayName: 'Class 3' },
];

export function getClassLevelLabel(level: ClassLevel): string {
  return CLASS_LEVELS.find((cl) => cl.value === level)?.label || level;
}

export function getClassLevelDisplayName(level: ClassLevel): string {
  return CLASS_LEVELS.find((cl) => cl.value === level)?.displayName || level;
}

