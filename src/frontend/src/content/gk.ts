import type { ClassLevel } from '../learning/classLevels';

export interface GKQuestion {
  id: string;
  question: string;
  answer: string;
}

export const GK_CONTENT: Record<ClassLevel, GKQuestion[]> = {
  nursery: [
    { id: '1', question: 'What color is the sky?', answer: 'Blue' },
    { id: '2', question: 'How many legs does a dog have?', answer: 'Four (4)' },
    { id: '3', question: 'What sound does a cat make?', answer: 'Meow' },
    { id: '4', question: 'What do we use to write?', answer: 'Pencil or pen' },
    { id: '5', question: 'What color is grass?', answer: 'Green' },
  ],
  lkg: [
    { id: '1', question: 'What is the color of the sun?', answer: 'Yellow' },
    { id: '2', question: 'How many fingers do you have on one hand?', answer: 'Five (5)' },
    { id: '3', question: 'What do bees make?', answer: 'Honey' },
    { id: '4', question: 'What animal says "Moo"?', answer: 'Cow' },
    { id: '5', question: 'What do we drink to stay healthy?', answer: 'Water or milk' },
  ],
  ukg: [
    { id: '1', question: 'What is the capital of India?', answer: 'New Delhi' },
    { id: '2', question: 'How many days are there in a week?', answer: 'Seven (7)' },
    { id: '3', question: 'What is the largest animal on land?', answer: 'Elephant' },
    { id: '4', question: 'What do plants need to grow?', answer: 'Water, sunlight, and soil' },
    { id: '5', question: 'What is the opposite of hot?', answer: 'Cold' },
  ],
  class1: [
    { id: '1', question: 'What is the national bird of India?', answer: 'Peacock' },
    { id: '2', question: 'How many months are there in a year?', answer: 'Twelve (12)' },
    { id: '3', question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
    { id: '4', question: 'What do we call a baby cat?', answer: 'Kitten' },
    { id: '5', question: 'What is the color of blood?', answer: 'Red' },
    { id: '6', question: 'Which fruit is known as the "King of Fruits"?', answer: 'Mango' },
  ],
  class2: [
    { id: '1', question: 'What is the national animal of India?', answer: 'Tiger' },
    { id: '2', question: 'How many continents are there in the world?', answer: 'Seven (7)' },
    { id: '3', question: 'What is the smallest planet in our solar system?', answer: 'Mercury' },
    { id: '4', question: 'Who is known as the "Father of the Nation" in India?', answer: 'Mahatma Gandhi' },
    { id: '5', question: 'What is the largest ocean on Earth?', answer: 'Pacific Ocean' },
    { id: '6', question: 'How many sides does a hexagon have?', answer: 'Six (6)' },
  ],
  class3: [
    { id: '1', question: 'What is the national flower of India?', answer: 'Lotus' },
    { id: '2', question: 'Which gas do plants absorb from the air?', answer: 'Carbon dioxide (CO2)' },
    { id: '3', question: 'What is the hardest natural substance on Earth?', answer: 'Diamond' },
    { id: '4', question: 'How many bones are there in the human body?', answer: '206' },
    { id: '5', question: 'What is the capital of France?', answer: 'Paris' },
    { id: '6', question: 'Which planet is known as the "Red Planet"?', answer: 'Mars' },
    { id: '7', question: 'What is the largest mammal in the world?', answer: 'Blue whale' },
  ],
};

