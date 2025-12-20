import { useState } from 'react';
import { motion } from "framer-motion";
import { Key, Sparkles, ExternalLink, Copy, Check, Image as ImageIcon, Video } from 'lucide-react';
import { MediaBlock } from './MediaBlock';

export function KeyAccessCard() {
  const [key, setKey] = useState('');
  const [result, setResult] = useState<{
    title: string;
    link: string;
    description: string;
    instructions: string;
    images?: string[];
    videos?: { src: string; thumbnail: string }[];
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleGenerate = () => {
    if (key.trim()) {
      // Mock result - replace with actual logic
      setResult({
        title: 'Премиум материалы разблокированы',
        link: 'https://t.me/your_exclusive_content',
        description: 'Получите доступ к эксклюзивным обучающим материалам, шаблонам кода и видео-урокам по разработке Telegram Mini Apps.',
        instructions: 'Перейдите по ссылке выше для доступа к материалам. Ваш ключ действителен в течение 30 дней. Сохраните ссылку для быстрого доступа.',
        images: [
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
        ],
        videos: [
          {
            src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
            thumbnail: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&h=450&fit=crop',
          },
        ],
      });
    }
  };

  const copyToClipboard = () => {
    if (result?.link) {
      navigator.clipboard.writeText(result.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Input Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <Key className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-white">Ввод ключа доступа</h3>
            <p className="text-zinc-500 text-xs">Введите ваш уникальный ключ</p>
          </div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Введите ключ..."
            className="w-full px-4 py-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGenerate}
            disabled={!key.trim()}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            <Sparkles className="w-5 h-5" />
            <span>Разблокировать контент</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Result Card */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Animated glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5" />
            
            <div className="relative z-10 space-y-4">
              {/* Success indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm">Доступ активирован</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="text-green-400 text-xs">Действителен 30 дней</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white">{result.title}</h3>

              {/* Link */}
              <div className="p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <ExternalLink className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a 
                      href={result.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors truncate"
                    >
                      {result.link}
                    </a>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors flex-shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-zinc-300 text-sm leading-relaxed">{result.description}</p>
              </div>

              {/* Instructions */}
              <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                <h4 className="text-blue-400 mb-2 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Инструкции
                </h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{result.instructions}</p>
              </div>
            </div>
          </div>

          {/* Images */}
          {result.images && result.images.length > 0 && (
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl">
              <h4 className="text-white mb-4 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-purple-400" />
                Материалы и скриншоты
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {result.images.map((image, index) => (
                  <MediaBlock
                    key={index}
                    type="image"
                    src={image}
                    alt={`Материал ${index + 1}`}
                    onImageClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {result.videos && result.videos.length > 0 && (
            <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl">
              <h4 className="text-white mb-4 flex items-center gap-2">
                <Video className="w-4 h-4 text-blue-400" />
                Видео-уроки
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {result.videos.map((video, index) => (
                  <MediaBlock
                    key={index}
                    type="video"
                    src={video.src}
                    thumbnail={video.thumbnail}
                    alt={`Видео-урок ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Image Viewer Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </div>
  );
}