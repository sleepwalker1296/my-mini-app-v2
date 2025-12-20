import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectCard, type Project } from './components/ProjectCard';
import { ProjectDetail } from './components/ProjectDetail';
import { ImageViewer } from './components/ImageViewer';
import { KeyAccessCard } from './components/KeyAccessCard';
import { ProfileScreen } from './components/ProfileScreen';
import { BottomNavigation } from './components/BottomNavigation';

// Mock project data
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Современная платформа для онлайн-торговли с интеграцией платежных систем',
    preview: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop',
    category: 'Web Development',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
    ],
    content: 'Полнофункциональная e-commerce платформа, разработанная с использованием React и Node.js. Включает корзину покупок, систему управления заказами, интеграцию с платежными системами и админ-панель для управления товарами.',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Интуитивное банковское приложение с фокусом на безопасность',
    preview: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
    category: 'Mobile App',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    ],
    content: 'Мобильное банковское приложение с современным интерфейсом, биометрической аутентификацией, мгновенными переводами и детальной аналитикой расходов. Разработано с учетом всех стандартов безопасности.',
  },
  {
    id: '3',
    title: 'AI Dashboard',
    description: 'Дашборд для визуализации данных машинного обучения',
    preview: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Data Visualization',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop',
    ],
    content: 'Интерактивный дашборд для визуализации результатов работы ML-моделей. Включает графики в реальном времени, метрики производительности и инструменты для анализа данных.',
  },
  {
    id: '4',
    title: 'Social Media Platform',
    description: 'Платформа для социального взаимодействия с акцентом на креативность',
    preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    category: 'Social Network',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    ],
    content: 'Социальная платформа нового поколения с инструментами для креативного самовыражения, системой рекомендаций на базе AI и безопасным пространством для общения.',
  },
];

type Tab = 'portfolio' | 'access' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewerImages, setViewerImages] = useState<string[] | null>(null);
  const [viewerIndex, setViewerIndex] = useState(0);

  const openImageViewer = (images: string[], index: number) => {
    setViewerImages(images);
    setViewerIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-900/50">
        <div className="px-4 py-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-white">
                {activeTab === 'portfolio' && 'Portfolio'}
                {activeTab === 'access' && 'Key Access'}
                {activeTab === 'profile' && 'Profile'}
              </h1>
              <p className="text-zinc-500 text-xs">
                {activeTab === 'portfolio' && 'Мои работы и проекты'}
                {activeTab === 'access' && 'Эксклюзивные материалы'}
                {activeTab === 'profile' && 'Обо мне и услугах'}
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Main Content */}
<div className="px-4 pt-6 max-w-2xl mx-auto">
  {activeTab === 'portfolio' && (
    <div className="space-y-4">
      {mockProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => setSelectedProject(project)}
        />
      ))}
    </div>
  )}

  {activeTab === 'access' && <KeyAccessCard />}

  {activeTab === 'profile' && <ProfileScreen />}
</div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onImageClick={(index) => openImageViewer(selectedProject.images, index)}
          />
        )}
      </AnimatePresence>

      {/* Image Viewer */}
      <AnimatePresence>
        {viewerImages && (
          <ImageViewer
            images={viewerImages}
            initialIndex={viewerIndex}
            onClose={() => setViewerImages(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}