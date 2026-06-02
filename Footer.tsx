import React from 'react';
import { MapPin, Phone, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onTriggerToast: (msg: string) => void;
}

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

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
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

export const Footer: React.FC<FooterProps> = ({ onTriggerToast }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSimulatedLink = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    onTriggerToast(`${type} features are running in demo mode. Outgoing requests are securely disabled.`);
  };

  return (
    <footer className="bg-[#0b0b0d] border-t border-stone-900 relative z-10 pt-16 pb-12 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-900">
          
          {/* Brand & Narrative */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex flex-col items-start group mb-4">
              <span className="text-2xl font-serif-luxury tracking-widest text-white uppercase font-light group-hover:text-[#d4af37] transition-colors">
                XXXX
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#d4af37]">
                Unisex Salon • Premium
              </span>
            </a>
            
            <p className="text-xs font-light text-stone-400 leading-relaxed pr-4">
              The quintessential beauty and grooming benchmark. Offering masterfully executed international aesthetics, elite bridal art, and dermatologically tailored well-being.
            </p>

            {/* Social Connection Badges */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => handleSimulatedLink(e, 'Instagram')}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#141417] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="#"
                onClick={(e) => handleSimulatedLink(e, 'WhatsApp')}
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#141417] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              <a
                href="#"
                onClick={(e) => handleSimulatedLink(e, 'Call')}
                aria-label="Call directly"
                className="w-9 h-9 rounded-full bg-[#141417] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-white/40 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Salon Location & Hours
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 mt-2">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300 leading-relaxed">
                <span className="text-white font-medium block">XXXX Unisex Salon</span>
                XXXXX, XXXXX <br />
                XXXXX, XXXXX <br />
                Premium District
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div className="text-xs text-stone-300">
                <a href="#" onClick={(e) => handleSimulatedLink(e, 'Call')} className="hover:text-[#d4af37] transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="text-xs text-stone-300">
                <span className="text-white block font-medium">Open Daily (7 Days a Week)</span>
                9:00 AM – 9:00 PM
              </div>
            </div>
          </div>

          {/* Simulated Premium Map Interface */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">
              Interactive Hub
            </h4>

            <div className="w-full h-44 rounded-xl overflow-hidden border border-stone-800 relative bg-[#141417] flex flex-col items-center justify-center p-4 text-center group">
              {/* Background Map Graphic Pattern */}
              <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
                <div className="w-full h-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              
              <div className="w-10 h-10 rounded-full bg-[#0b0b0d] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mb-2 group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>

              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                XXXX Location Overview
              </span>
              <p className="text-[10px] text-stone-400 mt-1 max-w-[200px]">
                Centrally located in the premium commercial district.
              </p>

              <div className="absolute bottom-2 right-2 text-[8px] uppercase tracking-widest text-[#d4af37] bg-black/60 px-2 py-0.5 rounded">
                Map Simulated
              </div>
            </div>
            
            <span className="text-[10px] text-stone-500 mt-2">
              Ample private valet parking available for all clients
            </span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-[11px] text-stone-500 text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-stone-300">XXXX Unisex Salon</span>. All Rights Reserved. <br className="hidden sm:inline" />
            Designed for World-Class Aesthetic Perfection.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Philosophy
            </a>
            <a 
              href="#gallery" 
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('gallery');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Portfolio
            </a>
            
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#141417] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
