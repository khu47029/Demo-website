import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
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
  'Bridal & Groom Custom Package'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Hair Styling & Haircuts',
  onTriggerToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService,
    date: '',
    time: 'Morning (9AM - 12PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Update internal service if prop changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
      }, 400);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    onTriggerToast("WhatsApp sync simulated successfully! External messaging is disabled in this luxury template.");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden bg-[#141417] border border-[#d4af37]/30 shadow-2xl my-8"
          >
            {/* Premium Header */}
            <div className="relative py-6 px-8 bg-gradient-to-r from-[#0b0b0d] via-[#141417] to-[#0b0b0d] border-b border-stone-800 flex items-center justify-between">
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-serif-luxury text-white tracking-wide font-medium">
                    Reserve Premium Session
                  </h3>
                  <span className="text-[9px] uppercase tracking-widest text-[#d4af37] block">
                    XXXX • Premium
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
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
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Selected Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                    >
                      {availableServices.map((srv) => (
                        <option key={srv} value={srv} className="bg-[#0b0b0d]">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors"
                      >
                        <option value="Morning (9AM - 12PM)" className="bg-[#0b0b0d]">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 4PM)" className="bg-[#0b0b0d]">Afternoon (12PM - 4PM)</option>
                        <option value="Evening (4PM - 9PM)" className="bg-[#0b0b0d]">Evening (4PM - 9PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-medium">
                      Special Requirements / Stylist Preference
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific instructions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-[#0b0b0d] border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-[#d4af37]/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-3 w-full py-3.5 rounded-lg bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa8620] text-black font-bold text-xs uppercase tracking-widest shadow-lg hover:opacity-95 transition-opacity"
                  >
                    Confirm Booking Request
                  </button>

                  <div className="text-center mt-1">
                    <span className="text-[9px] text-stone-500">
                      🔒 Your details are kept completely private and confidential.
                    </span>
                  </div>

                </form>
              ) : (
                /* Success confirmation view */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37] mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-serif-luxury text-white">Priority Session Reserved!</h4>
                  
                  <p className="mt-2 text-xs text-stone-300 font-light max-w-sm">
                    Thank you, <span className="text-[#d4af37] font-medium">{formData.name}</span>. We have assigned a director to review your slot for <span className="text-white font-medium">{formData.service}</span>.
                  </p>

                  <div className="mt-6 pt-6 border-t border-stone-800/80 w-full">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Simulate WhatsApp Request</span>
                    </button>
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-6 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white underline"
                  >
                    Return to Homepage
                  </button>
                </motion.div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
