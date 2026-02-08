import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AlphabetNumbersPickerProps {
  type: 'alphabet' | 'number';
  selected: string;
  onSelect: (value: string) => void;
}

const ALPHABETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');

export default function AlphabetNumbersPicker({ type, selected, onSelect }: AlphabetNumbersPickerProps) {
  const items = type === 'alphabet' ? ALPHABETS : NUMBERS;

  return (
    <ScrollArea className="h-[400px] w-full rounded-lg border-2 border-primary/20 p-4">
      <div className="grid grid-cols-5 gap-3">
        {items.map((item) => (
          <Button
            key={item}
            variant={selected === item ? 'default' : 'outline'}
            size="lg"
            onClick={() => onSelect(item)}
            className={`h-16 text-2xl font-bold transition-all ${
              selected === item 
                ? 'scale-110 shadow-playful' 
                : 'hover:scale-105'
            }`}
          >
            {item}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
