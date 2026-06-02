import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, Sparkles, Clock, MapPin, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const backgroundImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=2000',
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background slider with pure cinematic fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentBg]}
              alt="XXXX Salon Luxury Ambience"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Triple overlay gradient for perfect contrast and luxury mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-transparent to-[#0b0b0d]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Gold Glow Elements */}
      <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none z-1" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Subtle Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-stone-200 font-medium">
            XXXX, XXXX • Premium Destination
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif-luxury tracking-tight text-white max-w-5xl leading-[1.05]"
        >
          Luxury Beauty & <br className="hidden sm:inline" />
          <span className="text-gradient-gold italic font-normal">Grooming Experience</span> <br />
          in XXXX
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-stone-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Premium Hair, Makeup, Skin & Grooming Services for Men & Women. Crafted by internationally trained master stylists.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620] text-black font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white hover:text-[#d4af37] font-medium text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Animated Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-16 sm:mt-24 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {/* Badge 1 */}
          <div className="glass-panel py-3.5 px-4 rounded-xl flex items-center gap-3 group hover-gold-glow transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
              <Star className="w-5 h-5 fill-[#d4af37]" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white tracking-wider flex items-center gap-1">
                260+ REVIEWS
                <span className="text-[#d4af37] text-xs">★</span>
              </div>
              <p className="text-[10px] text-stone-400">4.9 Star Rating on Google</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="glass-panel py-3.5 px-4 rounded-xl flex items-center gap-3 group hover-gold-glow transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white tracking-wider">PREMIUM SALON</div>
              <p className="text-[10px] text-stone-400">International Products</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="glass-panel py-3.5 px-4 rounded-xl flex items-center gap-3 group hover-gold-glow transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white tracking-wider">OPEN DAILY</div>
              <p className="text-[10px] text-stone-400">9:00 AM – 9:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-500 hover:text-[#d4af37] transition-colors z-10"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};
