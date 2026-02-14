'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Facebook, ExternalLink, Heart, Navigation, Instagram } from 'lucide-react';

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
          <span className="text-accent font-semibold  text-sm tracking-widest uppercase">Get In Touch</span>
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
            <div className=" rounded-3xl bg-white flex flex-col text-gray-800 p-8 sm:p-10 shadow-xl shadow-black/5 border border-gray-100 flex flex-col">
              <div className="flex  items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  <MapPin  size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark">Our Location</h3>
                  <p className=" text-sm">Where the magic happens</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation size={18} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-dark">Kasba Village</p>
                    <p className=" text-sm">Shambhuganj, Banka</p>
                    <p className=" text-sm">Bihar, India</p>
                    <p className="text-accent font-semibold text-sm mt-1">PIN: 813211</p>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8391661550163!2d86.7841696831001!3d25.073439820526126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1b1d71a632655%3A0xdcc19f9be0fbb1ac!2sGandhi%20Maidan%20Kasba%20%2C%20Shambhuganj%2C%20Banka%2C%20Bihar%20(%20813211%20)%20India.!5e0!3m2!1sen!2sin!4v1771040406141!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
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
              <div className="absolute top-0 right-0 w-64 h-64 /5 rounded-full -translate-y-1/2 translate-x-1/2" />
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
                  className="inline-flex items-center gap-3 px-8 py-4  font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook size={20} />
                  Visit @tcckasba
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 /5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Instagram size={40} className="mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Follow Us on Instagram</h3>
                <p className="text-white/70 mb-6">Catch behind-the-scenes moments, match highlights, player features and exclusive content!</p>
                <div className="text-white/50 text-sm mb-6 font-mono">
                  instagram.com/tcc_kasba
                </div>
                <motion.a
                  href="https://www.instagram.com/tcc_kasba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4  font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={20} />
                  Visit @tcc_kasba
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </div>

            {/* Quick Info */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}
