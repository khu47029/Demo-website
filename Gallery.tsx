import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sliders } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const galleryItems = [
  {
    id: 1,
    title: 'Platinum Balayage Transformation',
    category: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-2',
    height: 'h-[340px] md:h-[460px]',
  },
  {
    id: 2,
    title: 'Royal Bridal HD Makeup',
    category: 'Bridal & HD Makeup',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-1',
    height: 'h-[260px]',
  },
  {
    id: 3,
    title: 'Sharp Executive Beard Sculpting',
    category: 'Beard Styling',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-1',
    height: 'h-[260px]',
  },
  {
    id: 4,
    title: 'Signature Skin Glass Radiance',
    category: 'Skin Glow',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-1',
    height: 'h-[260px]',
  },
  {
    id: 5,
    title: 'Keratin Liquid Silk Finish',
    category: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-2',
    height: 'h-[340px] md:h-[460px]',
  },
  {
    id: 6,
    title: 'Contemporary Layered Bob',
    category: 'Hair Artistry',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    span: 'md:col-span-4 md:row-span-1',
    height: 'h-[260px]',
  },
];

const categories = ['All', 'Hair Artistry', 'Bridal & HD Makeup', 'Beard Styling', 'Skin Glow'];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Before / After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3"
        >
          Visual Masterpieces
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white"
        >
          Before & After <span className="text-gradient-gold italic">Transformations</span>
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
          Witness the extraordinary artistry of our team. Slide to experience real transformations directly inspired by our elite clientele.
        </motion.p>
      </div>

      {/* Interactive Before / After Transformation Slider */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="text-center mb-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]">
          <Sliders className="w-3.5 h-3.5" />
          <span>Interactive Comparison — Drag Handle</span>
        </div>

        <div
          ref={sliderRef}
          onMouseMove={handleSliderMove}
          onTouchMove={handleSliderMove}
          className="relative w-full h-[320px] sm:h-[450px] rounded-2xl overflow-hidden cursor-ew-resize border border-[#d4af37]/30 shadow-2xl select-none"
        >
          {/* AFTER Image (Bottom layer) */}
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1200"
            alt="After Salon Transformation"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute bottom-4 right-4 z-10 glass-panel-gold px-3 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest">
            After Treatment
          </div>

          {/* BEFORE Image (Top Layer cropped by width) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200"
              alt="Before Salon Treatment"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ width: sliderRef.current ? sliderRef.current.offsetWidth : '100%', maxWidth: 'none' }}
            />
            <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold text-stone-300 uppercase tracking-widest border border-stone-700">
              Before
            </div>
          </div>

          {/* Golden Divider Line and Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#d4af37] shadow-[0_0_15px_#d4af37] pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0b0b0d] border-2 border-[#d4af37] flex items-center justify-center shadow-lg">
              <div className="flex gap-0.5">
                <span className="w-1 h-3 bg-[#d4af37] rounded-full block" />
                <span className="w-1 h-3 bg-[#d4af37] rounded-full block" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Gallery Filter Categories */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4.5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#d4af37] text-black font-bold shadow-md'
                : 'glass-panel text-stone-300 hover:text-white hover:border-[#d4af37]/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className={`${item.span} ${item.height} group hover-zoom-container relative rounded-2xl overflow-hidden bg-[#141417] border border-stone-800 hover-gold-glow`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center hover-zoom"
              />

              {/* Instagram Luxury Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/40 to-transparent opacity-0 group-hover:opacity-10-transition-opacity duration-300 flex flex-col justify-end p-6">
                
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass-panel-gold flex items-center justify-center text-[#d4af37]">
                  <InstagramIcon className="w-4 h-4" />
                </div>

                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                  {item.category}
                </span>

                <h4 className="text-lg font-serif-luxury text-white font-medium">
                  {item.title}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-[11px] text-stone-300">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  <span>XXXX Signature Form</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Instagram Invitation Banner */}
      <div className="mt-16 text-center">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-panel text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all text-xs uppercase tracking-widest cursor-default"
        >
          <InstagramIcon className="w-4 h-4 text-[#d4af37]" />
          <span>Follow our Daily Transformations on Social Channels</span>
        </a>
      </div>

    </section>
  );
};
