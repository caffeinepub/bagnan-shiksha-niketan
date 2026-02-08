export interface Rhyme {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  audioSrc?: string;
  videoSrc?: string;
  lyrics?: string;
}

export const RHYMES: Rhyme[] = [
  {
    id: 'twinkle-star',
    title: 'Twinkle Twinkle Little Star',
    description: 'A classic nursery rhyme about a shining star in the night sky',
    lyrics: `Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.
Twinkle, twinkle, little star,
How I wonder what you are!`,
  },
  {
    id: 'baa-baa-sheep',
    title: 'Baa Baa Black Sheep',
    description: 'A fun rhyme about a friendly black sheep with wool',
    lyrics: `Baa, baa, black sheep,
Have you any wool?
Yes sir, yes sir,
Three bags full.
One for the master,
One for the dame,
And one for the little boy
Who lives down the lane.`,
  },
  {
    id: 'humpty-dumpty',
    title: 'Humpty Dumpty',
    description: 'The story of Humpty Dumpty who sat on a wall',
    lyrics: `Humpty Dumpty sat on a wall,
Humpty Dumpty had a great fall.
All the king's horses and all the king's men
Couldn't put Humpty together again.`,
  },
  {
    id: 'jack-jill',
    title: 'Jack and Jill',
    description: 'Jack and Jill went up the hill to fetch water',
    lyrics: `Jack and Jill went up the hill
To fetch a pail of water.
Jack fell down and broke his crown,
And Jill came tumbling after.`,
  },
  {
    id: 'mary-lamb',
    title: 'Mary Had a Little Lamb',
    description: 'Mary had a little lamb with fleece as white as snow',
    lyrics: `Mary had a little lamb,
Little lamb, little lamb,
Mary had a little lamb,
Its fleece was white as snow.
And everywhere that Mary went,
Mary went, Mary went,
Everywhere that Mary went,
The lamb was sure to go.`,
  },
  {
    id: 'row-boat',
    title: 'Row Row Row Your Boat',
    description: 'A cheerful song about rowing a boat down the stream',
    lyrics: `Row, row, row your boat,
Gently down the stream.
Merrily, merrily, merrily, merrily,
Life is but a dream.`,
  },
  {
    id: 'old-macdonald',
    title: 'Old MacDonald Had a Farm',
    description: 'A fun song about farm animals and their sounds',
    lyrics: `Old MacDonald had a farm, E-I-E-I-O!
And on his farm he had a cow, E-I-E-I-O!
With a moo-moo here and a moo-moo there,
Here a moo, there a moo, everywhere a moo-moo!
Old MacDonald had a farm, E-I-E-I-O!`,
  },
  {
    id: 'wheels-bus',
    title: 'The Wheels on the Bus',
    description: 'A lively song about a bus ride with fun actions',
    lyrics: `The wheels on the bus go round and round,
Round and round, round and round.
The wheels on the bus go round and round,
All through the town!`,
  },
  {
    id: 'itsy-spider',
    title: 'Itsy Bitsy Spider',
    description: 'A spider climbs up the water spout',
    lyrics: `The itsy bitsy spider climbed up the water spout.
Down came the rain and washed the spider out.
Out came the sun and dried up all the rain,
And the itsy bitsy spider climbed up the spout again.`,
  },
  {
    id: 'five-ducks',
    title: 'Five Little Ducks',
    description: 'Five little ducks went out one day',
    lyrics: `Five little ducks went out one day,
Over the hill and far away.
Mother duck said, "Quack, quack, quack, quack."
But only four little ducks came back.`,
  },
  {
    id: 'abc-song',
    title: 'ABC Song',
    description: 'Learn the alphabet with this classic song',
    lyrics: `A B C D E F G,
H I J K L M N O P,
Q R S T U V,
W X Y and Z.
Now I know my ABCs,
Next time won't you sing with me!`,
  },
  {
    id: 'head-shoulders',
    title: 'Head, Shoulders, Knees and Toes',
    description: 'A fun action song about body parts',
    lyrics: `Head, shoulders, knees and toes, knees and toes.
Head, shoulders, knees and toes, knees and toes.
And eyes and ears and mouth and nose,
Head, shoulders, knees and toes, knees and toes!`,
  },
];
