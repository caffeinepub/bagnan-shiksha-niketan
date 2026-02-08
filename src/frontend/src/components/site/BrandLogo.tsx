import { Heart } from 'lucide-react';

export default function BrandLogo() {
  return (
    <div className="flex items-center space-x-3 group">
      <img
        src="/assets/generated/bagnan-shiksha-niketan-logo.dim_512x512.png"
        alt="Bagnan Shiksha Niketan"
        className="h-10 w-10 transition-transform group-hover:scale-110 group-hover:animate-wiggle"
      />
      <div className="flex flex-col">
        <span className="font-display text-lg font-bold text-primary leading-tight">
          Bagnan Shiksha Niketan
        </span>
        <span className="text-xs text-muted-foreground">Learning with Joy</span>
      </div>
    </div>
  );
}

