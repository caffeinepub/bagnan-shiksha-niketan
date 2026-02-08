import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026. Built with{' '}
            <Heart className="inline h-4 w-4 text-accent fill-accent" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-xs text-muted-foreground max-w-md">
            Bagnan Shiksha Niketan - Empowering young minds with quality education and joyful learning experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

