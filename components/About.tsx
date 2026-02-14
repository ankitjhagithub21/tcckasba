'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Trophy, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Passion for Cricket',
    description: 'Cricket runs in our blood. Every Holi, our village comes alive with the spirit of the game.',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: Users,
    title: 'Community Spirit',
    description: 'TCC Cup brings generations together – seniors and juniors united by their love for cricket.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Trophy,
    title: '28 Years Strong',
    description: 'A legacy built over 28 years of unforgettable matches, rivalries, and celebrations.',
    color: 'from-accent to-accent-light',
  },
  {
    icon: Sparkles,
    title: 'Holi + Cricket',
    description: 'A unique tradition where the festival of colors meets the excitement of cricket.',
    color: 'from-purple-500 to-pink-600',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-dark tracking-tight">
            More Than Just <span className="text-primary">Cricket</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            TCC Cup Kasba is a celebration of community, tradition, and the undying spirit of cricket
            that has been the heartbeat of our village for nearly three decades.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-3xl p-8 shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 text-8xl font-serif text-white">"</div>
            <div className="absolute bottom-4 right-4 text-8xl font-serif text-white rotate-180">"</div>
          </div>
          <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto italic relative z-10">
            "For us cricket is not just a game – it is a celebration that brings us together and allows us to share love and happiness."
          </p>
          <div className="mt-6 hindi-text text-white/60 text-base sm:text-lg relative z-10">
            "हमारे लिए क्रिकेट सिर्फ एक खेल नहीं है - यह एक उत्सव है जो हमें एक साथ लाता है।"
          </div>
          <div className="mt-6 w-16 h-1 bg-accent mx-auto rounded-full relative z-10" />
          <p className="mt-4 text-accent font-semibold text-sm tracking-widest uppercase relative z-10">TCC Cup Kasba</p>
        </motion.div>
      </div>
    </section>
  );
}
