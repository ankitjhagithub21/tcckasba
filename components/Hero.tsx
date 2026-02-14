'use client'
import { motion } from 'framer-motion';
import { Facebook, MapPin, Calendar, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
     

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-accent text-sm font-medium mb-8"
        >
          <Calendar size={16} />
          <span>Celebrating 28 Years of Cricket Legacy</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-none tracking-tighter mb-2">
            TCC <span className="gradient-text">CUP</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white/90 tracking-tight">
            KASBA
          </h2>
        </motion.div>

        {/* Cricket Ball Divider */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="my-8 flex items-center justify-center gap-4"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-accent/50" />
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-600 to-red-800 border-2 border-white/20 pulse-glow relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-px bg-white/40 rotate-45" />
            </div>
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-accent/50" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto space-y-4 mb-10"
        >
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light">
            For us cricket is not just a game – it is a <span className="text-accent font-medium">celebration</span> that brings us together and allows us to share <span className="text-accent font-medium">love and happiness</span>.
          </p>
          <p className="hindi-text text-base sm:text-lg text-white/60 leading-relaxed">
            हमारे लिए क्रिकेट सिर्फ एक खेल नहीं है - यह एक <span className="text-accent">उत्सव</span> है जो हमें एक साथ लाता है और हमें <span className="text-accent">प्यार और खुशियाँ</span> साझा करने की अनुमति देता है।
          </p>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-2 text-white/50 text-sm mb-10"
        >
          <MapPin size={16} className="text-accent" />
          <span>Kasba, Shambhuganj, Banka, Bihar – 813211</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://www.facebook.com/tcckasba"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all flex items-center gap-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={20} />
            Visit Our Facebook Page
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#history"
            className="px-8 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/15 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Legacy
          </motion.a>
        </motion.div>

        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-accent/50" size={28} />
      </motion.div>
    </section>
  );
}
