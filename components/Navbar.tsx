"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "History", href: "#history" },
  { name: "Teams", href: "#teams" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
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
              <h1 className="text-white font-bold text-xl tracking-tight leading-none">
                TCC CUP
              </h1>
              <p className="text-white text-xs font-medium tracking-widest uppercase">
                Kasba
              </p>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-accent transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="https://www.facebook.com/tcckasba"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-light text-dark font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={16} />
              Follow Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/80 hover:text-accent font-medium rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
