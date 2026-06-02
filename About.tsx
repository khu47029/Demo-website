import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startVal = 0;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * (end - startVal) + startVal));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="glass-panel p-5 rounded-xl border border-stone-800/60 text-left relative overflow-hidden group hover:border-[#d4af37]/40 transition-colors">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full pointer-events-none" />
      
      <div className="text-2xl sm:text-3xl font-serif-luxury text-white font-bold tracking-tight group-hover:text-[#d4af37] transition-colors">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Luxury Offset Image Grid */}
        <div className="lg:col-span-6 relative">
          {/* Decorative Back Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#d4af37]/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
            
            {/* Main Tall Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-2xl relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Salon Artistry Architecture"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Secondary Floating Overlapped Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-6 col-start-7 -mt-24 sm:-mt-32 rounded-2xl overflow-hidden border-2 border-[#0b0b0d] shadow-2xl relative z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
                alt="Premium Hair Styling Environment"
                className="w-full h-[220px] sm:h-[280px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay" />
            </motion.div>

          </div>

          {/* Golden Circular Seal */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-4 left-4 z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0b0b0d] border border-[#d4af37] flex flex-col items-center justify-center p-2 text-center shadow-xl animate-[spin_20s_linear_infinite]"
          >
            <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">
              ★ Premium ★
            </span>
            <span className="text-[7px] sm:text-[8px] uppercase tracking-wider text-stone-300 mt-0.5">
              Finest Tier
            </span>
          </motion.div>
        </div>

        {/* Right Side: Brand Story & Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3"
          >
            The XXXX Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white leading-tight"
          >
            Redefining Luxury <br />
            <span className="text-gradient-gold italic">Grooming & Beauty</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] w-20 bg-[#d4af37]/60 mt-4 mb-6"
          />

          {/* Main anonymized quote text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-stone-300 text-base sm:text-lg font-light leading-relaxed"
          >
            “XXXX Unisex Salon is one of the premium grooming destinations offering luxury beauty experiences, advanced hair artistry, bridal makeovers, skincare treatments, and modern grooming services in a sophisticated environment.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xs sm:text-sm text-stone-400 font-light leading-relaxed"
          >
            Located conveniently at our primary hub, we have designed a sanctuary where international standards meet personalized hospitality. Every treatment begins with a precise consultation to guarantee flawless outcomes.
          </motion.p>

          {/* Premium Counters Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 w-full grid grid-cols-2 gap-4"
          >
            <Counter end={260} suffix="+" label="Happy Reviews" />
            <Counter end={7} suffix=" Days" label="Open Every Week" />
            <Counter end={100} suffix="%" label="Premium Int. Products" />
            <Counter end={3.5} suffix="k+" label="Happy Clients" />
          </motion.div>

          {/* Signature block */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pt-6 border-t border-stone-800/80 w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-white font-medium">Certified Master Stylists</div>
                <div className="text-[10px] text-stone-400">Schwarzkopf Professional Partners</div>
              </div>
            </div>

            <div className="text-right">
              <div className="font-serif-luxury text-lg text-[#d4af37] italic">XXXX</div>
              <div className="text-[9px] uppercase tracking-widest text-stone-500">Premium Tier</div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};
