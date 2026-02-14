'use client'
import { motion } from 'framer-motion';
import { Facebook, Heart, MapPin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="hero-gradient border-t text-white border-white/5 relative">
      {/* Back to Top */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.a
          href="#home"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="text-dark" size={20} />
        </motion.a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className=" rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg rounded-full">
                            <Image
                              src="/android-chrome-192x192.png"
                              className="rounded-full"
                              alt="TCC Cup Kasba"
                              width={32}
                              height={32}
                            />
                          </div>
              <div>
                <h3 className="text-white font-bold text-xl">TCC CUP</h3>
                <p className="text-accent text-xs tracking-widest uppercase">Kasba</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              For us cricket is not just a game – it is a celebration that brings us together and allows us to share love and happiness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'History', 'Teams', 'Gallery', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/40 hover:text-accent transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <a
              href="https://www.facebook.com/tcckasba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm mb-4"
            >
              <Facebook size={18} />
              facebook.com/tcckasba
            </a>
            <div className="flex items-start gap-2 text-white/40 text-sm mt-2">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Kasba, Shambhuganj, Banka, Bihar – 813211</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} TCC Cup Kasba. All rights reserved.
            </p>
            <p className="text-white/30 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> for Kasba Village
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
