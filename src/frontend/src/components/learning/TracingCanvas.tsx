import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Undo, Trash2, Pencil } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TracingCanvasProps {
  character: string;
  showGuide?: boolean;
}

interface Stroke {
  points: { x: number; y: number }[];
  width: number;
}

export default function TracingCanvas({ character, showGuide = true }: TracingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<{ x: number; y: number }[]>([]);
  const [strokeWidth, setStrokeWidth] = useState(8);

  useEffect(() => {
    redrawCanvas();
  }, [strokes, character, showGuide]);

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw guide character
    if (showGuide) {
      ctx.save();
      ctx.font = 'bold 200px Arial';
      ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(character, canvas.width / 2, canvas.height / 2);
      ctx.restore();
    }

    // Draw all strokes
    strokes.forEach((stroke) => {
      if (stroke.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      stroke.points.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  };

  const getPointerPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const pos = getPointerPos(e);
    setCurrentStroke([pos]);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const pos = getPointerPos(e);
    setCurrentStroke((prev) => [...prev, pos]);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || currentStroke.length === 0) return;

    ctx.beginPath();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = strokeWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const lastPoint = currentStroke[currentStroke.length - 1];
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const handlePointerUp = () => {
    if (isDrawing && currentStroke.length > 0) {
      setStrokes((prev) => [...prev, { points: currentStroke, width: strokeWidth }]);
      setCurrentStroke([]);
    }
    setIsDrawing(false);
  };

  const handleClear = () => {
    setStrokes([]);
    setCurrentStroke([]);
    redrawCanvas();
  };

  const handleUndo = () => {
    setStrokes((prev) => prev.slice(0, -1));
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Pencil className="h-5 w-5" />
            Practice Writing
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-muted-foreground">Stroke Size:</span>
            <div className="w-32">
              <Slider
                value={[strokeWidth]}
                onValueChange={(value) => setStrokeWidth(value[0])}
                min={2}
                max={20}
                step={2}
              />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative bg-white rounded-lg border-2 border-dashed border-primary/30 overflow-hidden">
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className="w-full h-auto touch-none cursor-crosshair"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          />
        </div>
        <div className="flex gap-2 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleUndo}
            disabled={strokes.length === 0}
          >
            <Undo className="h-4 w-4 mr-2" />
            Undo
          </Button>
          <Button
            variant="destructive"
            size="lg"
            onClick={handleClear}
            disabled={strokes.length === 0}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
