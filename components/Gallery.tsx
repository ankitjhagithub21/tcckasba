'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const galleryItems = [
  {
    title: 'Holi Cricket Begins',
    description: 'The colorful opening ceremony',
    emoji: '🏏',
    color: 'from-orange-400 to-red-500',
    pattern: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
  {
    title: 'Team A Batting',
    description: 'Seniors showing their class',
    emoji: '🏆',
    color: 'from-emerald-500 to-teal-600',
    pattern: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
  {
    title: 'Team B Bowling',
    description: 'Juniors strike with pace',
    emoji: '⚡',
    color: 'from-blue-500 to-purple-600',
    pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
  {
    title: 'Colors & Celebration',
    description: 'Holi colors fill the ground',
    emoji: '🎨',
    color: 'from-pink-500 to-rose-600',
    pattern: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
  {
    title: 'The Winning Moment',
    description: 'Victory celebrations',
    emoji: '🎉',
    color: 'from-yellow-400 to-orange-500',
    pattern: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
  {
    title: 'Community Together',
    description: 'Village united through cricket',
    emoji: '🤝',
    color: 'from-indigo-500 to-blue-600',
    pattern: 'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-dark relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2">
            <Camera size={16} />
            Moments
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            Memorable <span className="gradient-text">Moments</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every year brings new stories, new heroes, and unforgettable moments. 
            Follow us on Facebook to see all the action live!
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedItem(i)}
              className="cursor-pointer group"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 h-64 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0" style={{ background: item.pattern }} />
                
                {/* Floating emoji */}
                <motion.div
                  className="text-6xl opacity-20 absolute top-4 right-4"
                  animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {item.emoji}
                </motion.div>

                <div className="relative z-10">
                  <span className="text-5xl">{item.emoji}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{item.description}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Camera className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Facebook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.facebook.com/tcckasba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Camera size={20} />
            See More on Facebook
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className={`bg-gradient-to-br ${galleryItems[selectedItem].color} rounded-3xl p-12 max-w-lg w-full text-center relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-8xl mb-6">{galleryItems[selectedItem].emoji}</div>
              <h3 className="text-3xl font-black text-white mb-3">{galleryItems[selectedItem].title}</h3>
              <p className="text-white/80 text-lg">{galleryItems[selectedItem].description}</p>
              <p className="mt-6 text-white/50 text-sm">
                Visit our Facebook page for real photos and videos!
              </p>
              <motion.a
                href="https://www.facebook.com/tcckasba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                View on Facebook →
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
