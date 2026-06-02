import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

interface FloatingElementsProps {
  onTriggerToast: (msg: string) => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
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
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const recentBookings = [
  { name: 'Priya S.', service: 'Keratin & Smoothening', time: 'Just now' },
  { name: 'Rahul V.', service: 'Schwarzkopf Hair Spa', time: '2 mins ago' },
  { name: 'Simran K.', service: 'Bridal HD Makeup Trial', time: '5 mins ago' },
  { name: 'Amit M.', service: 'Executive Beard Styling', time: '12 mins ago' },
  { name: 'Dr. Neha R.', service: 'O3+ Dermal Infusion Facial', time: '18 mins ago' },
];

export const FloatingElements: React.FC<FloatingElementsProps> = ({ onTriggerToast }) => {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimer = setTimeout(() => {
      setShowAlert(true);
    }, 4000);

    // Interval to cycle through the custom premium live bookings
    const intervalTimer = setInterval(() => {
      setShowAlert(false);
      setTimeout(() => {
        setCurrentAlert((prev) => (prev + 1) % recentBookings.length);
        setShowAlert(true);
      }, 1000);
    }, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onTriggerToast("Live chat simulated! In this demo template, direct WhatsApp routing is safely disabled.");
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-between p-4 sm:p-6">
      
      {/* Spacer to push content to bottom */}
      <div />

      <div className="flex items-end justify-between w-full pointer-events-none">
        
        {/* Bottom Left: Live Floating Booking Animation */}
        <div className="pointer-events-auto">
          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel-gold py-2.5 px-3.5 rounded-xl flex items-center gap-3 shadow-2xl max-w-xs border border-[#d4af37]/40 backdrop-blur-xl"
              >
                <div className="w-7 h-7 rounded-lg bg-[#0b0b0d] flex items-center justify-center text-[#d4af37] shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>

                <div className="text-left pr-2">
                  <div className="text-[10px] text-stone-400">
                    <span className="text-white font-medium">{recentBookings[currentAlert].name}</span> booked
                  </div>
                  <div className="text-[11px] font-bold text-[#d4af37] tracking-tight leading-tight line-clamp-1">
                    {recentBookings[currentAlert].service}
                  </div>
                  <div className="text-[8px] text-stone-500 uppercase tracking-widest mt-0.5">
                    Verified • {recentBookings[currentAlert].time}
                  </div>
                </div>

                <button
                  onClick={() => setShowAlert(false)}
                  className="text-stone-500 hover:text-stone-300 self-start -mt-1 -mr-1"
                  aria-label="Close notification"
                >
                  <X className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Right: Persistent Floating WhatsApp CTA */}
        <div className="pointer-events-auto relative">
          
          {/* Animated radar rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          
          <a
            href="#"
            onClick={handleWhatsAppClick}
            aria-label="Chat with us on WhatsApp"
            className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-black shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
          >
            <WhatsAppIcon className="w-6 h-6 fill-black" />
            
            {/* Hover tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
              Chat Simulated
            </span>
          </a>

        </div>

      </div>

    </div>
  );
};
