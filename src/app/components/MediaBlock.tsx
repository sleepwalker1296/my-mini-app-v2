import { useState } from 'react';
import { motion } from "framer-motion";
import { Play, ZoomIn } from 'lucide-react';

interface MediaBlockProps {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt?: string;
  onImageClick?: () => void;
}

export function MediaBlock({ type, src, thumbnail, alt, onImageClick }: MediaBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (type === 'video') {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900/50">
        {!isPlaying ? (
          <motion.div
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsPlaying(true)}
            className="relative w-full h-full cursor-pointer"
            style={{ willChange: 'transform' }}
          >
            <img
              src={thumbnail || src}
              alt={alt || 'Video thumbnail'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center active:bg-black/50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </motion.div>
        ) : (
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onImageClick}
      className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900/50 cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      <img
        src={src}
        alt={alt || 'Image'}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {onImageClick && (
        <div className="absolute inset-0 bg-black/40 opacity-0 active:opacity-100 transition-opacity flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white" />
        </div>
      )}
    </motion.div>
  );
}