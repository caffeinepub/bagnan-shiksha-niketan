import { X, Music, Video } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Rhyme } from '../../content/rhymes';

interface RhymePlayerProps {
  rhyme: Rhyme | null;
  onClose: () => void;
}

export default function RhymePlayer({ rhyme, onClose }: RhymePlayerProps) {
  if (!rhyme) return null;

  const hasAudio = !!rhyme.audioSrc;
  const hasVideo = !!rhyme.videoSrc;
  const hasLyrics = !!rhyme.lyrics;

  return (
    <Dialog open={!!rhyme} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{rhyme.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {(hasAudio || hasVideo) ? (
            <Tabs defaultValue={hasVideo ? 'video' : 'audio'} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                {hasVideo && (
                  <TabsTrigger value="video">
                    <Video className="mr-2 h-4 w-4" />
                    Video
                  </TabsTrigger>
                )}
                {hasAudio && (
                  <TabsTrigger value="audio">
                    <Music className="mr-2 h-4 w-4" />
                    Audio
                  </TabsTrigger>
                )}
              </TabsList>

              {hasVideo && (
                <TabsContent value="video" className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-center p-4">
                      Video player will be available soon! 🎬
                    </p>
                  </div>
                </TabsContent>
              )}

              {hasAudio && (
                <TabsContent value="audio" className="space-y-4">
                  <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      Audio player will be available soon! 🎵
                    </p>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          ) : (
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <Music className="h-16 w-16 text-accent mx-auto mb-4" />
              <p className="text-muted-foreground">
                Audio and video coming soon! For now, enjoy the lyrics below.
              </p>
            </div>
          )}

          {hasLyrics && (
            <div className="space-y-2">
              <h3 className="font-display text-lg font-semibold">Lyrics</h3>
              <div className="bg-card border-2 border-accent/20 rounded-lg p-6">
                <pre className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed">
                  {rhyme.lyrics}
                </pre>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

