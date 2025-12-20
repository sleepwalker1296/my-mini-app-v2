import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageViewerProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export function ImageViewer({ images, initialIndex, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setScale(1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setScale(1);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
    >
      {/* Close button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center text-white z-10"
      >
        <X className="w-6 h-6" />
      </motion.button>

      {/* Zoom controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900/80 border border-zinc-800/50 rounded-full p-2 z-10">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={zoomOut}
          disabled={scale <= 1}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800/50 transition-colors"
        >
          <ZoomOut className="w-5 h-5" />
        </motion.button>
        <span className="text-white text-sm min-w-12 text-center">{Math.round(scale * 100)}%</span>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={zoomIn}
          disabled={scale >= 3}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-800/50 transition-colors"
        >
          <ZoomIn className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrevious}
            className="absolute left-4 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="absolute right-4 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-zinc-900/80 border border-zinc-800/50 rounded-full z-10">
          <span className="text-white text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Image container */}
      <div className="w-full h-full flex items-center justify-center p-4 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-full object-contain"
            style={{ transition: 'scale 0.2s ease-out' }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
