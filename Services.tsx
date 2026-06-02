import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Palette, Sparkles, Crown, Flower2, UserCheck, Heart, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const servicesData = [
  {
    title: 'Hair Styling & Haircuts',
    description: 'Bespoke cuts and high-fashion styling tailored to your facial architecture and personal aesthetic.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hair Coloring & Highlights',
    description: 'Advanced balayage, multidimensional highlights, and global color with pure Schwarzkopf brilliance.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Keratin & Smoothening',
    description: 'Transformative protein rituals for liquid-silk smoothness, extreme shine, and zero frizz.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Bridal & HD Makeup',
    description: 'Flawless, ultra-photogenic bridal makeovers designed for spectacular cinematic elegance.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Facial & Skin Treatments',
    description: 'Dermatologically advanced facials, skin tightening, and instant radiance infused with premium serums.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Beard Styling & Grooming',
    description: 'Masterful beard sculpting, precision shaves, and conditioning treatments for the modern gentleman.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Nail Art & Extensions',
    description: 'Luxury acrylics, gel extensions, and intricate custom nail art polished to absolute perfection.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Hair Spa & Wellness',
    description: 'Deep therapeutic scalp conditioning and luxury massages that rejuvenate hair from root to tip.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3"
        >
          Signature Offerings
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white"
        >
          Premium <span className="text-gradient-gold italic">Services</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mx-auto mt-4 mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-stone-400 text-sm sm:text-base font-light"
        >
          Every service at XXXX is executed with peerless craftsmanship, uncompromising hygiene, and global benchmark luxury products.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group hover-zoom-container relative rounded-2xl overflow-hidden bg-[#141417] border border-stone-800/80 hover-gold-glow flex flex-col justify-between h-[420px]"
            >
              {/* Card Background image with soft zoom effect */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center hover-zoom opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/85 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Card Top Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[#0b0b0d]/80 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-serif-luxury text-white tracking-wide group-hover:text-[#d4af37] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs text-stone-300 font-light leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="relative z-10 p-6 sm:p-8 pt-0 mt-auto">
                <div className="w-full h-[1px] bg-stone-800/60 mb-4 group-hover:bg-[#d4af37]/20 transition-colors" />
                
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold group-hover:text-white transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Subtle accent corner line */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
                <div className="absolute top-[-24px] right-[-24px] w-12 h-12 bg-[#d4af37]/20 rotate-45 group-hover:bg-[#d4af37]/40 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom info banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 glass-panel-gold rounded-2xl p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="text-left">
          <h4 className="text-base sm:text-lg font-serif-luxury text-white tracking-wide">
            Looking for a customized Bridal or Groom package?
          </h4>
          <p className="text-xs text-stone-300 mt-1">
            We provide private premium trial sessions and comprehensive pre-wedding wellness timelines.
          </p>
        </div>

        <button
          onClick={() => onSelectService('Bridal & Groom Custom Package')}
          className="px-6 py-3 rounded-full bg-[#0b0b0d] border border-[#d4af37] text-[#d4af37] text-xs font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-all duration-300 shrink-0"
        >
          Request Consultation
        </button>
      </motion.div>
    </section>
  );
};
