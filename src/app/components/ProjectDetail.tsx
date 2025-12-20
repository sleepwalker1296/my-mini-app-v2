import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import type { Project } from './ProjectCard';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onImageClick: (imageIndex: number) => void;
}

export function ProjectDetail({ project, onClose, onImageClick }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-xs">{project.category}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Content Card */}
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl">
            {/* Title */}
            <h2 className="text-white mb-4">{project.title}</h2>

            {/* Description */}
            <p className="text-zinc-300 mb-6">{project.description}</p>

            {/* Content */}
            <div className="prose prose-invert max-w-none mb-6">
              <p className="text-zinc-400 text-sm leading-relaxed">{project.content}</p>
            </div>

            {/* Image Gallery */}
            <div>
              <h3 className="text-white mb-4">Галерея</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onImageClick(index)}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-800/50 cursor-pointer group"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - изображение ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
