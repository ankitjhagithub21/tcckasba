'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Facebook, ExternalLink, Heart, Navigation } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-dark tracking-tight">
            Find Us & <span className="text-primary">Connect</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">Our Location</h3>
                  <p className="text-gray-500 text-sm">Where the magic happens</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation size={18} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-dark">Kasba Village</p>
                    <p className="text-gray-500 text-sm">Shambhuganj, Banka</p>
                    <p className="text-gray-500 text-sm">Bihar, India</p>
                    <p className="text-accent font-semibold text-sm mt-1">PIN: 813211</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-pitch/30 to-cricket-green/20 h-48 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 border-2 border-primary rounded-lg" />
                  </div>
                  <div className="text-center relative z-10">
                    <MapPin className="text-primary mx-auto mb-2" size={32} />
                    <p className="font-bold text-primary">Kasba Cricket Ground</p>
                    <p className="text-primary/60 text-sm">Shambhuganj, Banka, Bihar</p>
                  </div>
                </div>

                <motion.a
                  href="https://maps.google.com/?q=Kasba+Shambhuganj+Banka+Bihar+813211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MapPin size={18} />
                  Open in Google Maps
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social & Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Facebook Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Facebook size={40} className="mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Follow Us on Facebook</h3>
                <p className="text-white/70 mb-6">Stay updated with latest matches, scores, photos and all the TCC Cup Kasba action!</p>
                <div className="text-white/50 text-sm mb-6 font-mono">
                  facebook.com/tcckasba
                </div>
                <motion.a
                  href="https://www.facebook.com/tcckasba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                  Visit @tcckasba
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-4">Quick Info</h3>
              <div className="space-y-4">
                {[
                  { label: 'Event', value: 'TCC Cup Kasba', emoji: '🏏' },
                  { label: 'When', value: 'Every Holi Festival', emoji: '🎨' },
                  { label: 'Where', value: 'Kasba, Banka, Bihar', emoji: '📍' },
                  { label: 'Since', value: '28 Years (Est. ~1997)', emoji: '📅' },
                  { label: 'Teams', value: 'Team A (Seniors) vs Team B (Juniors)', emoji: '⚔️' },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <span className="text-2xl">{info.emoji}</span>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">{info.label}</p>
                      <p className="text-dark font-semibold text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
