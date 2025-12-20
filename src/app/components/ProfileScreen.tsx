import { motion } from "framer-motion";
import { Globe, Bot, Smartphone, Workflow, ExternalLink, Mail, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'websites',
    title: 'Веб-сайты',
    description: 'Лендинги, корпоративные сайты, e-commerce платформы',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'telegram-bots',
    title: 'Telegram боты',
    description: 'Автоматизация, интеграции, бизнес-процессы',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'mini-apps',
    title: 'Mini Apps',
    description: 'Telegram Mini Apps для бизнеса и сервисов',
    icon: Smartphone,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'automation',
    title: 'Автоматизация',
    description: 'Интеграции API, воркфлоу, системы уведомлений',
    icon: Workflow,
    color: 'from-orange-500 to-red-500',
  },
];

const contacts = [
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@username',
    icon: MessageCircle,
    link: '*',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'contact@example.com',
    icon: Mail,
    link: 'mailto:contact@example.com',
  },
];

export function ProfileScreen() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-3xl p-6 border border-zinc-800/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
        
        <div className="relative z-10">
          {/* Avatar and Info */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-white mb-1">Senior Developer</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Разрабатываю современные веб-решения, Telegram-ботов и автоматизацию для бизнеса
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800/50">
            <div className="text-center">
              <div className="text-white mb-1">50+</div>
              <div className="text-zinc-500 text-xs">Проектов</div>
            </div>
            <div className="text-center border-x border-zinc-800/50">
              <div className="text-white mb-1">5+</div>
              <div className="text-zinc-500 text-xs">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-white mb-1">100%</div>
              <div className="text-zinc-500 text-xs">Качество</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services */}
      <div>
        <h3 className="text-white mb-4 px-1">Услуги</h3>
        <div className="space-y-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-2xl p-4 border border-zinc-800/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white mb-1">{service.title}</h4>
                    <p className="text-zinc-400 text-sm">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white mb-4 px-1">Контакты</h3>
        <div className="space-y-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 rounded-2xl border border-zinc-800/50 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-shadow group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/50 flex items-center justify-center group-hover:bg-zinc-700/50 transition-colors">
                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-zinc-500 text-xs mb-0.5">{contact.label}</div>
                    <div className="text-white text-sm">{contact.value}</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-xl"
      >
        <h4 className="text-white mb-2">Готовы начать проект?</h4>
        <p className="text-zinc-400 text-sm mb-4">
          Свяжитесь со мной для обсуждения вашей задачи
        </p>
        <motion.a
          href="*"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Написать в Telegram</span>
        </motion.a>
      </motion.div>
    </div>
  );
}
