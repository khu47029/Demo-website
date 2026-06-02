import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onTriggerToast: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onTriggerToast }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'services', 'about', 'gallery', 'reviews', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleSimulatedCall = (e: React.MouseEvent) => {
    e.preventDefault();
    onTriggerToast("Direct call feature is currently disabled in this template. Please book via the form.");
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    // Allow a brief moment for mobile drawers to close before triggering the smooth scroll directly
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#0b0b0d]/85 backdrop-blur-md border-b border-[#d4af37]/15 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-start group"
          aria-label="Return to Home"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-xl md:text-2xl font-serif-luxury tracking-widest text-white uppercase font-light group-hover:text-[#d4af37] transition-colors">
              XXXX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.28em] text-stone-400 group-hover:text-stone-300 transition-colors">
            Unisex Salon • XXXX
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs uppercase tracking-widest transition-all relative py-1 group font-medium ${
                  isActive ? 'text-[#d4af37]' : 'text-stone-300 hover:text-[#d4af37]'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 h-[1px] bg-[#d4af37] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            onClick={handleSimulatedCall}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-300 hover:text-white transition-colors py-2 px-3 rounded-md hover:bg-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>+91 XXXXX XXXXX</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620] rounded-full transition-all duration-300 group-hover:scale-105" />
            <span className="relative block px-5 py-2.5 rounded-full bg-[#0b0b0d] transition-all duration-300 group-hover:bg-transparent">
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] group-hover:text-black font-semibold transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                Book Appointment
              </span>
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-black text-[10px] uppercase tracking-wider font-semibold"
          >
            Book
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden border-b border-[#d4af37]/20 bg-[#0b0b0d]/95 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm uppercase tracking-widest py-2 border-b border-stone-800/60 flex items-center justify-between ${
                      isActive ? 'text-[#d4af37] font-bold' : 'text-stone-200 hover:text-[#d4af37]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="text-[#d4af37] text-xs">●</span>}
                  </a>
                );
              })}
              
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleSimulatedCall(e);
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-stone-900 border border-stone-800 text-xs tracking-widest uppercase text-stone-200"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call: +91 XXXXX XXXXX</span>
                </a>
                
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620] text-black text-xs font-bold tracking-widest uppercase shadow-lg"
                >
                  Book Premium Experience
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
