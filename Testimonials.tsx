import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Ananya Rathore',
    role: 'Bridal Client',
    review: '“Best salon experience. Professional staff, premium atmosphere and amazing hair transformation. My bridal makeup was absolutely flawless and photographed incredibly well!”',
    rating: 5,
    date: 'Reviewed on Google',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Karan Vir Singh',
    role: 'Regular Grooming Client',
    review: '“XXXX Unisex Salon sets the standard for premium grooming. Their Schwarzkopf hair spa and precision beard sculpting are truly international tier. Highly recommended.”',
    rating: 5,
    date: 'Reviewed on Google',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Aesthetician & Client',
    review: '“Extremely clean, highly hygienic, and the staff is genuinely trained. I had a keratin treatment done and the liquid-silk finish is lasting beautifully. Worth every penny.”',
    rating: 5,
    date: 'Reviewed on Google',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Rohan Malhotra',
    role: 'Event Groom',
    review: '“If you are looking for an elite salon, look no further. The ambiance feels like a 5-star hotel spa. Complete personalization and zero rush.”',
    rating: 5,
    date: 'Reviewed on Google',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3"
        >
          Uncompromising Trust
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white"
        >
          Customer <span className="text-gradient-gold italic">Experiences</span>
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
          Real reviews inspired by our 260+ highly satisfied clients who experience our unparalleled devotion to luxury beauty.
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonialsData.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-panel p-8 sm:p-10 rounded-2xl relative flex flex-col justify-between hover-gold-glow transition-all duration-300"
          >
            {/* Absolute Large decorative Quote Icon */}
            <div className="absolute top-6 right-6 text-[#d4af37]/10 pointer-events-none">
              <Quote className="w-16 h-16" />
            </div>

            <div>
              {/* Star Ratings */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#d4af37] text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-stone-200 text-sm sm:text-base font-light leading-relaxed relative z-10 italic">
                {item.review}
              </p>
            </div>

            {/* Client Meta */}
            <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#d4af37]/40"
                />
                <div>
                  <div className="text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  </div>
                  <div className="text-[10px] text-stone-400 mt-0.5">{item.role}</div>
                </div>
              </div>

              <div className="text-[9px] uppercase tracking-widest text-stone-500 font-medium">
                {item.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Aggregate Rating Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <div className="flex items-center gap-1">
          <span className="text-xs uppercase tracking-widest text-stone-400">Google Overall Rating:</span>
          <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
        </div>

        <div className="hidden sm:block w-1 h-1 rounded-full bg-stone-700" />

        <div className="text-xs text-stone-400">
          Based on <span className="text-[#d4af37] font-semibold">260+ Verified Customer Ratings</span>
        </div>
      </motion.div>

    </section>
  );
};
