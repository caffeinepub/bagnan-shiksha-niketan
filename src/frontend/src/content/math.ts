import type { ClassLevel } from '../learning/classLevels';

export interface MathProblem {
  id: string;
  question: string;
  answer: string;
  explanation?: string;
}

export interface MathSection {
  id: string;
  title: string;
  problems: MathProblem[];
}

export const MATH_CONTENT: Record<ClassLevel, MathSection[]> = {
  nursery: [
    {
      id: 'counting',
      title: 'Counting',
      problems: [
        { id: '1', question: 'Count: 🍎 🍎 🍎', answer: '3', explanation: 'There are 3 apples' },
        { id: '2', question: 'Count: ⭐ ⭐', answer: '2', explanation: 'There are 2 stars' },
        { id: '3', question: 'Count: 🌸 🌸 🌸 🌸 🌸', answer: '5', explanation: 'There are 5 flowers' },
        { id: '4', question: 'Count: 🎈 🎈 🎈 🎈', answer: '4', explanation: 'There are 4 balloons' },
        { id: '5', question: 'Count: 🐟', answer: '1', explanation: 'There is 1 fish' },
        { id: '6', question: 'Count: 🦋 🦋 🦋 🦋 🦋 🦋', answer: '6', explanation: 'There are 6 butterflies' },
        { id: '7', question: 'Count: 🍌 🍌 🍌 🍌 🍌 🍌 🍌', answer: '7', explanation: 'There are 7 bananas' },
      ],
    },
    {
      id: 'shapes',
      title: 'Shapes',
      problems: [
        { id: '1', question: 'How many sides does a triangle have?', answer: '3' },
        { id: '2', question: 'How many sides does a square have?', answer: '4' },
        { id: '3', question: 'How many sides does a circle have?', answer: '0' },
        { id: '4', question: 'How many corners does a rectangle have?', answer: '4' },
      ],
    },
  ],
  lkg: [
    {
      id: 'addition',
      title: 'Addition',
      problems: [
        { id: '1', question: '1 + 1 = ?', answer: '2' },
        { id: '2', question: '2 + 1 = ?', answer: '3' },
        { id: '3', question: '2 + 2 = ?', answer: '4' },
        { id: '4', question: '3 + 1 = ?', answer: '4' },
        { id: '5', question: '3 + 2 = ?', answer: '5' },
        { id: '6', question: '4 + 1 = ?', answer: '5' },
        { id: '7', question: '2 + 3 = ?', answer: '5' },
        { id: '8', question: '4 + 2 = ?', answer: '6' },
      ],
    },
    {
      id: 'subtraction',
      title: 'Subtraction',
      problems: [
        { id: '1', question: '2 - 1 = ?', answer: '1' },
        { id: '2', question: '3 - 1 = ?', answer: '2' },
        { id: '3', question: '4 - 2 = ?', answer: '2' },
        { id: '4', question: '5 - 2 = ?', answer: '3' },
        { id: '5', question: '5 - 3 = ?', answer: '2' },
        { id: '6', question: '6 - 3 = ?', answer: '3' },
      ],
    },
  ],
  ukg: [
    {
      id: 'addition',
      title: 'Addition',
      problems: [
        { id: '1', question: '4 + 3 = ?', answer: '7' },
        { id: '2', question: '5 + 4 = ?', answer: '9' },
        { id: '3', question: '6 + 2 = ?', answer: '8' },
        { id: '4', question: '7 + 3 = ?', answer: '10' },
        { id: '5', question: '5 + 5 = ?', answer: '10' },
        { id: '6', question: '6 + 4 = ?', answer: '10' },
        { id: '7', question: '8 + 2 = ?', answer: '10' },
        { id: '8', question: '3 + 6 = ?', answer: '9' },
      ],
    },
    {
      id: 'subtraction',
      title: 'Subtraction',
      problems: [
        { id: '1', question: '7 - 3 = ?', answer: '4' },
        { id: '2', question: '8 - 4 = ?', answer: '4' },
        { id: '3', question: '9 - 5 = ?', answer: '4' },
        { id: '4', question: '10 - 6 = ?', answer: '4' },
        { id: '5', question: '10 - 5 = ?', answer: '5' },
        { id: '6', question: '9 - 3 = ?', answer: '6' },
        { id: '7', question: '8 - 2 = ?', answer: '6' },
      ],
    },
  ],
  class1: [
    {
      id: 'tables',
      title: 'Tables',
      problems: [
        { id: '1', question: '2 × 1 = ?', answer: '2' },
        { id: '2', question: '2 × 2 = ?', answer: '4' },
        { id: '3', question: '2 × 3 = ?', answer: '6' },
        { id: '4', question: '2 × 4 = ?', answer: '8' },
        { id: '5', question: '2 × 5 = ?', answer: '10' },
        { id: '6', question: '2 × 6 = ?', answer: '12' },
        { id: '7', question: '2 × 7 = ?', answer: '14' },
        { id: '8', question: '2 × 8 = ?', answer: '16' },
      ],
    },
    {
      id: 'addition',
      title: 'Addition',
      problems: [
        { id: '1', question: '12 + 8 = ?', answer: '20' },
        { id: '2', question: '15 + 5 = ?', answer: '20' },
        { id: '3', question: '23 + 7 = ?', answer: '30' },
        { id: '4', question: '18 + 12 = ?', answer: '30' },
        { id: '5', question: '14 + 6 = ?', answer: '20' },
        { id: '6', question: '25 + 15 = ?', answer: '40' },
        { id: '7', question: '17 + 13 = ?', answer: '30' },
      ],
    },
    {
      id: 'subtraction',
      title: 'Subtraction',
      problems: [
        { id: '1', question: '20 - 8 = ?', answer: '12' },
        { id: '2', question: '25 - 10 = ?', answer: '15' },
        { id: '3', question: '30 - 15 = ?', answer: '15' },
        { id: '4', question: '40 - 20 = ?', answer: '20' },
        { id: '5', question: '35 - 15 = ?', answer: '20' },
        { id: '6', question: '28 - 8 = ?', answer: '20' },
      ],
    },
  ],
  class2: [
    {
      id: 'tables',
      title: 'Tables',
      problems: [
        { id: '1', question: '3 × 3 = ?', answer: '9' },
        { id: '2', question: '3 × 4 = ?', answer: '12' },
        { id: '3', question: '4 × 4 = ?', answer: '16' },
        { id: '4', question: '4 × 5 = ?', answer: '20' },
        { id: '5', question: '5 × 5 = ?', answer: '25' },
        { id: '6', question: '3 × 6 = ?', answer: '18' },
        { id: '7', question: '4 × 6 = ?', answer: '24' },
        { id: '8', question: '5 × 6 = ?', answer: '30' },
      ],
    },
    {
      id: 'multiplication',
      title: 'Multiplication',
      problems: [
        { id: '1', question: '6 × 2 = ?', answer: '12' },
        { id: '2', question: '7 × 3 = ?', answer: '21' },
        { id: '3', question: '8 × 2 = ?', answer: '16' },
        { id: '4', question: '9 × 2 = ?', answer: '18' },
        { id: '5', question: '6 × 3 = ?', answer: '18' },
        { id: '6', question: '7 × 2 = ?', answer: '14' },
        { id: '7', question: '8 × 3 = ?', answer: '24' },
      ],
    },
    {
      id: 'division',
      title: 'Division',
      problems: [
        { id: '1', question: '10 ÷ 2 = ?', answer: '5' },
        { id: '2', question: '12 ÷ 3 = ?', answer: '4' },
        { id: '3', question: '15 ÷ 5 = ?', answer: '3' },
        { id: '4', question: '20 ÷ 4 = ?', answer: '5' },
        { id: '5', question: '18 ÷ 3 = ?', answer: '6' },
        { id: '6', question: '16 ÷ 4 = ?', answer: '4' },
      ],
    },
  ],
  class3: [
    {
      id: 'tables',
      title: 'Tables',
      problems: [
        { id: '1', question: '6 × 6 = ?', answer: '36' },
        { id: '2', question: '7 × 7 = ?', answer: '49' },
        { id: '3', question: '8 × 8 = ?', answer: '64' },
        { id: '4', question: '9 × 9 = ?', answer: '81' },
        { id: '5', question: '10 × 10 = ?', answer: '100' },
        { id: '6', question: '6 × 7 = ?', answer: '42' },
        { id: '7', question: '7 × 8 = ?', answer: '56' },
        { id: '8', question: '8 × 9 = ?', answer: '72' },
      ],
    },
    {
      id: 'multiplication',
      title: 'Multiplication',
      problems: [
        { id: '1', question: '12 × 3 = ?', answer: '36' },
        { id: '2', question: '15 × 4 = ?', answer: '60' },
        { id: '3', question: '11 × 5 = ?', answer: '55' },
        { id: '4', question: '13 × 3 = ?', answer: '39' },
        { id: '5', question: '14 × 2 = ?', answer: '28' },
        { id: '6', question: '16 × 3 = ?', answer: '48' },
        { id: '7', question: '12 × 4 = ?', answer: '48' },
      ],
    },
    {
      id: 'division',
      title: 'Division',
      problems: [
        { id: '1', question: '36 ÷ 6 = ?', answer: '6' },
        { id: '2', question: '48 ÷ 8 = ?', answer: '6' },
        { id: '3', question: '54 ÷ 9 = ?', answer: '6' },
        { id: '4', question: '72 ÷ 8 = ?', answer: '9' },
        { id: '5', question: '63 ÷ 7 = ?', answer: '9' },
        { id: '6', question: '81 ÷ 9 = ?', answer: '9' },
        { id: '7', question: '56 ÷ 7 = ?', answer: '8' },
      ],
    },
  ],
};
