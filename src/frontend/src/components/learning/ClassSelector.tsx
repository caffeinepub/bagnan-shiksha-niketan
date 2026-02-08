import { useClassSelection } from '../../learning/ClassSelectionContext';
import { CLASS_LEVELS } from '../../learning/classLevels';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function ClassSelector() {
  const { selectedClass, setSelectedClass } = useClassSelection();

  return (
    <div className="space-y-2">
      <Label htmlFor="class-select" className="text-sm font-medium">
        Select Your Class
      </Label>
      <Select value={selectedClass} onValueChange={(value) => setSelectedClass(value as any)}>
        <SelectTrigger id="class-select" className="w-full max-w-xs">
          <SelectValue placeholder="Choose a class" />
        </SelectTrigger>
        <SelectContent>
          {CLASS_LEVELS.map((level) => (
            <SelectItem key={level.value} value={level.value}>
              {level.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

