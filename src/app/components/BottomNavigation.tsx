import { motion } from "framer-motion";
import { Briefcase, Key, User } from 'lucide-react';

type Tab = 'portfolio' | 'access' | 'profile';

interface BottomNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'portfolio' as Tab, label: 'Portfolio', icon: Briefcase },
    { id: 'access' as Tab, label: 'Access', icon: Key },
    { id: 'profile' as Tab, label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="bg-zinc-950/95 backdrop-blur-2xl border-t border-zinc-800/50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-around px-2 py-2 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTabChange(tab.id)}
                className="relative flex flex-col items-center justify-center py-2 px-6 rounded-2xl transition-all min-w-[80px]"
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl border border-purple-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <div className={`transition-colors ${isActive ? 'text-purple-400' : 'text-zinc-500'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs transition-colors ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                    {tab.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
