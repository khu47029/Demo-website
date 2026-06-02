import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface BookingCTAProps {
  onTriggerToast: (msg: string) => void;
}

const availableServices = [
  'Hair Styling & Haircuts',
  'Hair Coloring & Highlights',
  'Keratin & Smoothening',
  'Bridal & HD Makeup',
  'Facial & Skin Treatments',
  'Beard Styling & Grooming',
  'Nail Art & Extensions',
  'Hair Spa & Wellness',
  'Custom Premium Package'
];

export const BookingCTA: React.FC<BookingCTAProps> = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling & Haircuts',
    date: '',
    time: 'Morning (9AM - 12PM)'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Set to submitted state
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    onTriggerToast("WhatsApp booking simulated successfully! In this template mode, external messages are disabled.");
  };

  const handleCallSimulated = (e: React.MouseEvent) => {
    e.preventDefault();
    onTriggerToast("Direct calling is simulated. Please request your slot directly through the form below.");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Immersive Outer Wrapper with deep glows */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#141417] to-[#0b0b0d] border border-[#d4af37]/30 p-8 sm:p-12 lg:p-16 gold-glow-lg"
      >
        {/* Background Ambient Aura */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & High-Impact Direct Contacts */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <span className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold block mb-3">
              Reserve Your Time
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury tracking-wide text-white leading-tight">
              Your Premium <br />
              <span className="text-gradient-gold italic">Transformation</span> <br />
              Starts Here.
            </h2>

            <div className="h-[1px] w-20 bg-[#d4af37]/60 mt-4 mb-6" />

            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
              Skip the queue. Secure a dedicated session with our creative directors. For immediate makeover scheduling, connect with our front desk.
            </p>

            {/* Direct Action Buttons as Requested */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
              {/* WhatsApp Booking */}
              <button
                onClick={handleWhatsAppDirect}
                className="flex-1 py-4 px-6 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg hover:bg-[#20ba59] transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Booking</span>
              </button>

              {/* Call Now */}
              <a
                href="#"
                onClick={handleCallSimulated}
                className="flex-1 py-4 px-6 rounded-xl glass-panel-gold text-white hover:text-[#d4af37] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Small Trust Microcopy */}
            <div className="mt-6 flex items-center gap-2 text-[11px] text-stone-400">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Instant internal dashboard confirmation</span>
            </div>

          </div>

          {/* Right Column: Built-in Custom Interactive Booking Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-stone-800 relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  <div className="text-center pb-2 border-b border-stone-800">
                    <h3 className="text-lg font-serif-luxury text-white">Direct Booking Request</h3>
                    <p className="text-[11px] text-stone-400">Receive priority response within 15 minutes</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Select Premium Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    >
                      {availableServices.map((service) => (
                        <option key={service} value={service} className="bg-[#0b0b0d]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                      >
                        <option value="Morning (9AM - 12PM)" className="bg-[#0b0b0d]">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 4PM)" className="bg-[#0b0b0d]">Afternoon (12PM - 4PM)</option>
                        <option value="Evening (4PM - 9PM)" className="bg-[#0b0b0d]">Evening (4PM - 9PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full py-3.5 rounded-lg bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620] text-black font-bold text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-opacity"
                  >
                    Request Priority Slot
                  </button>

                </form>
              ) : (
                /* Success Confirmed state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-serif-luxury text-white">Request Received!</h3>
                  
                  <p className="mt-2 text-xs text-stone-300 max-w-sm font-light">
                    Thank you, <span className="text-[#d4af37] font-medium">{formData.name}</span>. Our salon management team will evaluate availability for <span className="text-white font-medium">{formData.service}</span> and connect with you shortly.
                  </p>

                  {/* Simulated real-time interaction */}
                  <div className="mt-8 pt-6 border-t border-stone-800/80 w-full">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Simulate WhatsApp Sync</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-300 underline"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
