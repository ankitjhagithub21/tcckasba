'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, X, Facebook, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const galleryItems = [
  {
    title: 'Holi Cricket Begins',
    description: 'The colorful opening ceremony where festival of colors meets the spirit of cricket on the field.',
    image: '/gallery/c0.jpg',
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-72 lg:h-full',
  },
  {
    title: 'Team A Batting',
    description: 'Seniors showcasing their batting prowess with years of experience.',
    image: '/gallery/c1.jpg',
    span: '',
    height: 'h-72',
  },
  {
    title: 'The Bowling Attack',
    description: 'Juniors unleashing fiery pace and spin on the pitch.',
    image: '/gallery/c2.jpg',
    span: '',
    height: 'h-72',
  },
  {
    title: 'Colors & Celebration',
    description: 'Holi colors paint the ground as players celebrate in style.',
    image: '/gallery/c3.jpg',
    span: '',
    height: 'h-72',
  },
  {
    title: 'The Winning Moment',
    description: 'Victory celebrations that echo through the entire village.',
    image: '/gallery/c4.jpg',
    span: '',
    height: 'h-72',
  },
  {
    title: 'The Seniors',
    description: 'The village comes alive – united through the love of cricket and tradition.',
    image: '/gallery/c6.jpg',
    span: 'lg:col-span-2',
    height: 'h-72',
  },
  {
    title: 'The Juniors',
    description: 'The village comes alive – united through the love of cricket and tradition.',
    image: '/gallery/c8.jpg',
    span: '',
    height: 'h-72',
  },

  
  
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedItem === null) return;
    if (direction === 'next') {
      setSelectedItem((selectedItem + 1) % galleryItems.length);
    } else {
      setSelectedItem((selectedItem - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-dark relative overflow-hidden" ref={ref}>
      {/* Background blurs */}
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
            Gallery
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

        {/* Gallery Grid – Masonry-style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedItem(i)}
              className={`cursor-pointer group relative rounded-2xl overflow-hidden ${item.span} ${item.height}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Accent border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                {/* Category tag */}
                

                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* View icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-accent/40">
                    <Camera className="text-dark" size={22} />
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
          className="text-center mt-14"
        >
          <motion.a
            href="https://www.facebook.com/tcckasba"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-2xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={20} />
            See More Photos on Facebook
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* ─── Lightbox Modal ─── */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={22} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image + Info Card */}
            <motion.div
              key={selectedItem}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] sm:aspect-video bg-gray-900">
                <img
                  src={galleryItems[selectedItem].image}
                  alt={galleryItems[selectedItem].title}
                  className="w-full h-full object-cover"
                />
              
              </div>

             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
