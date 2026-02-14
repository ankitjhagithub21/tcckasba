
'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Trophy, Star, Zap } from 'lucide-react';

const timelineEvents = [
  {
    year: '1997',
    title: 'The Beginning',
    description: 'TCC Cup was born during the vibrant Holi celebrations in Kasba village. The first ever match between Team A (Seniors) and Team B (Juniors) was played.',
    icon: Star,
    highlight: true,
  },
  {
    year: '2002',
    title: '5 Years Milestone',
    description: 'The tournament had become an integral part of the Holi tradition. More villagers joined as players and supporters, building a strong community.',
    icon: Calendar,
  },
  {
    year: '2007',
    title: 'A Decade of Cricket',
    description: 'Celebrating 10 years of cricketing legacy. The rivalry between seniors and juniors grew fiercer and more competitive with each passing year.',
    icon: Trophy,
  },
  {
    year: '2012',
    title: '15 Years & Growing',
    description: 'The tournament expanded in scale. New generation of players from the junior team started challenging the experienced senior team.',
    icon: Zap,
  },
  {
    year: '2017',
    title: 'Two Decades of Glory',
    description: '20 years of TCC Cup! The event became legendary in Kasba and surrounding areas. The Facebook page was created to share the spirit online.',
    icon: Star,
    highlight: true,
  },
  {
    year: '2025',
    title: '28 Years & Counting',
    description: 'Nearly three decades of unbroken tradition. TCC Cup Kasba stands as a testament to community, cricket, and the spirit of Holi celebrations.',
    icon: Trophy,
    highlight: true,
  },
];

export function History() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="history" className="py-24 sm:py-32 bg-dark relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Our Journey</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            28 Years of <span className="gradient-text">Cricketing Glory</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Every Holi, the village of Kasba transforms into a cricket arena where Team A (Seniors) 
            battles Team B (Juniors) in an epic annual showdown.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden lg:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent lg:hidden" />

          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 lg:ml-0 ${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`inline-block rounded-2xl p-6 sm:p-8 ${
                      event.highlight
                        ? 'bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30'
                        : 'glass-card'
                    }`}
                  >
                    <span className="text-accent font-black text-3xl sm:text-4xl">{event.year}</span>
                    <h3 className="mt-2 text-xl font-bold text-white">{event.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed text-sm sm:text-base">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      event.highlight
                        ? 'bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/30'
                        : 'bg-primary-light border-2 border-accent/30'
                    }`}
                  >
                    <event.icon size={18} className={event.highlight ? 'text-dark' : 'text-accent'} />
                  </motion.div>
                </div>

                {/* Empty side for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
