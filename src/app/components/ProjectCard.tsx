import { motion } from 'framer-motion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export interface Project {
  id: string;
  title: string;
  description: string;
  preview: string;
  images: string[];
  content: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 cursor-pointer border border-zinc-800/50 backdrop-blur-xl shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-shadow duration-300"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Preview Image — с fallback */}
        <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-zinc-800/50">
          <ImageWithFallback
            src={project.preview}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category Tag */}
        <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
          <span className="text-blue-400 text-xs">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-white mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
}