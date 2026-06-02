import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Sparkles, Users, Cpu, HeartHandshake } from 'lucide-react';

const reasonsData = [
  {
    title: 'Schwarzkopf Professional Products',
    description: 'We exclusively source genuine international salon chemicals, keratin treatments, and hair color lines directly from accredited European distributors.',
    icon: Award,
  },
  {
    title: 'Hygienic Luxury Environment',
    description: 'Every tool, comb, and styling station undergoes absolute, hospital-grade UV sterilization between each and every appointment.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Stylists',
    description: 'Our core staff undergo rigorous, continuous masterclass modules to remain at the apex of avant-garde and traditional beauty technique.',
    icon: Users,
  },
  {
    title: 'Personalized Consultation',
    description: 'No treatment begins blindly. We evaluate your baseline hair health, skin subtype, and personal lifestyle to draft custom beauty regimens.',
    icon: Sparkles,
  },
  {
    title: 'Modern Equipment',
    description: 'Outfitted with state-of-the-art diagnostic scalp scanners, precision heat regulators, and ultra-comfortable hydraulic luxury seats.',
    icon: Cpu,
  },
  {
    title: 'Premium Customer Experience',
    description: 'From our complimentary organic refreshments to private bridal chambers, we cultivate an oasis of serene pampering and VIP attention.',
    icon: HeartHandshake,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3"
        >
          The International Benchmark
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white"
        >
          Why Choose <span className="text-gradient-gold italic">XXXX</span>
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
          We transcend standard models by operating under an unyielding manifesto of luxury, authentic product integrity, and pristine environment.
        </motion.p>
      </div>

      {/* Grid of Reason Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasonsData.map((reason, index) => {
          const IconComponent = reason.icon;

          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group hover-gold-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top background highlight */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#0b0b0d] border border-stone-800 flex items-center justify-center text-[#d4af37] mb-6 group-hover:border-[#d4af37]/40 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-serif-luxury text-white tracking-wide font-medium group-hover:text-[#d4af37] transition-colors">
                  {reason.title}
                </h3>

                <p className="mt-3 text-xs text-stone-400 font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Decorative base indicator */}
              <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center justify-between text-[9px] text-stone-500 uppercase tracking-widest">
                <span>Premium Tier</span>
                <span className="text-[#d4af37]">✓</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Authentic Branding Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#141417] via-[#1a1a1e] to-[#141417] border border-stone-800/80 text-center flex flex-col sm:flex-row items-center justify-around gap-6"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl font-serif-luxury tracking-widest text-[#d4af37]">Schwarzkopf</span>
          <span className="text-stone-700">|</span>
          <span className="text-xs uppercase tracking-widest text-stone-400">Professional Partner</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl font-serif-luxury tracking-widest text-[#d4af37]">L'Oréal</span>
          <span className="text-stone-700">|</span>
          <span className="text-xs uppercase tracking-widest text-stone-400">Keratin & Colour</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl font-serif-luxury tracking-widest text-[#d4af37]">O3+</span>
          <span className="text-stone-700">|</span>
          <span className="text-xs uppercase tracking-widest text-stone-400">Dermal Infusion</span>
        </div>
      </motion.div>

    </section>
  );
};
