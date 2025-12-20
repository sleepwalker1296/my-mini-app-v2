import { motion } from 'framer-motion';

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
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 cursor-pointer border border-zinc-800/50 backdrop-blur-xl shadow-2xl active:shadow-xl transition-shadow duration-150"
      style={{ willChange: 'transform' }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 active:opacity-100 transition-opacity duration-150" />
      
      <div className="relative z-10">
        {/* Preview Image */}
        <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-zinc-800/50">
          <img 
            src={project.preview} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
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