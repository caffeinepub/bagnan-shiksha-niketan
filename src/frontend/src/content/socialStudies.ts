import type { ClassLevel } from '../learning/classLevels';

export interface SocialStudiesTopic {
  id: string;
  title: string;
  description: string;
  content?: string;
}

export interface SocialStudiesQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface SocialStudiesContent {
  topics: SocialStudiesTopic[];
  questions: SocialStudiesQuestion[];
}

export const SOCIAL_STUDIES_CONTENT: Record<ClassLevel, SocialStudiesContent> = {
  nursery: {
    topics: [
      {
        id: '1',
        title: 'My Family',
        description: 'Learn about family members',
        content: 'A family is made up of people who love and care for each other. We have parents, siblings, grandparents, and more!',
      },
      {
        id: '2',
        title: 'My Home',
        description: 'Understanding our living space',
        content: 'Our home is where we live with our family. It keeps us safe and comfortable.',
      },
    ],
    questions: [
      { id: '1', question: 'Who takes care of you at home?', answer: 'Parents, family members' },
      { id: '2', question: 'What do we call the place where we live?', answer: 'Home or house' },
    ],
  },
  lkg: {
    topics: [
      {
        id: '1',
        title: 'Community Helpers',
        description: 'People who help us',
        content: 'Community helpers are people who help us every day. They include doctors, teachers, police officers, and firefighters.',
      },
      {
        id: '2',
        title: 'My School',
        description: 'Learning about school',
        content: 'School is where we go to learn new things, make friends, and have fun!',
      },
    ],
    questions: [
      { id: '1', question: 'Who helps us when we are sick?', answer: 'Doctor' },
      { id: '2', question: 'Who teaches us at school?', answer: 'Teacher' },
      { id: '3', question: 'Who keeps us safe?', answer: 'Police officer' },
    ],
  },
  ukg: {
    topics: [
      {
        id: '1',
        title: 'Our Neighborhood',
        description: 'Understanding our community',
        content: 'A neighborhood is the area around our home where our neighbors live. We share parks, shops, and streets.',
      },
      {
        id: '2',
        title: 'Festivals',
        description: 'Celebrations we enjoy',
        content: 'Festivals are special days when we celebrate with family and friends. India has many colorful festivals!',
      },
    ],
    questions: [
      { id: '1', question: 'What do we call the people living near us?', answer: 'Neighbors' },
      { id: '2', question: 'Name a festival celebrated in India', answer: 'Diwali, Holi, Eid, Christmas (any)' },
      { id: '3', question: 'Where do we buy groceries?', answer: 'Market or shop' },
    ],
  },
  class1: {
    topics: [
      {
        id: '1',
        title: 'Our Country - India',
        description: 'Learning about India',
        content: 'India is our country. It is a large and beautiful nation with diverse cultures, languages, and traditions.',
      },
      {
        id: '2',
        title: 'Means of Transport',
        description: 'How we travel',
        content: 'We use different vehicles to travel: cars, buses, trains, airplanes, and boats.',
      },
    ],
    questions: [
      { id: '1', question: 'What is the name of our country?', answer: 'India' },
      { id: '2', question: 'What is the capital of India?', answer: 'New Delhi' },
      { id: '3', question: 'Name a means of transport on water', answer: 'Boat or ship' },
      { id: '4', question: 'What do we use to travel in the sky?', answer: 'Airplane' },
    ],
  },
  class2: {
    topics: [
      {
        id: '1',
        title: 'Maps and Directions',
        description: 'Understanding directions',
        content: 'Maps help us find places. The four main directions are North, South, East, and West.',
      },
      {
        id: '2',
        title: 'Natural Resources',
        description: 'Gifts from nature',
        content: 'Natural resources are things we get from nature like water, air, soil, and sunlight. We must use them wisely.',
      },
    ],
    questions: [
      { id: '1', question: 'How many main directions are there?', answer: 'Four (4): North, South, East, West' },
      { id: '2', question: 'What do we call water, air, and soil?', answer: 'Natural resources' },
      { id: '3', question: 'Why should we save water?', answer: 'Because it is precious and limited' },
      { id: '4', question: 'What helps us find places?', answer: 'Map' },
    ],
  },
  class3: {
    topics: [
      {
        id: '1',
        title: 'States of India',
        description: 'India\'s diversity',
        content: 'India has 28 states and 8 union territories. Each state has its own language, culture, and traditions.',
      },
      {
        id: '2',
        title: 'Environment and Conservation',
        description: 'Protecting our planet',
        content: 'The environment includes all living and non-living things around us. We must protect it by reducing pollution and planting trees.',
      },
    ],
    questions: [
      { id: '1', question: 'How many states does India have?', answer: '28 states' },
      { id: '2', question: 'What is the state where Bagnan is located?', answer: 'West Bengal' },
      { id: '3', question: 'Why should we plant trees?', answer: 'To clean the air and protect the environment' },
      { id: '4', question: 'What is pollution?', answer: 'Making the environment dirty and harmful' },
      { id: '5', question: 'Name one way to save the environment', answer: 'Plant trees, save water, reduce waste (any)' },
    ],
  },
};

