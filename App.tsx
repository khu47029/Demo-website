import { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { BookingModal } from './components/BookingModal';
import { Toast } from './components/Toast';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Hair Styling & Haircuts');
  
  // Custom global toast system to simulate external messaging & calls gracefully
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-stone-200 overflow-x-hidden font-sans">
      
      {/* Intercept Toast system */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />

      {/* Subtle particle canvas rendering deep cinematic ambient light */}
      <ParticleBackground />

      {/* Premium Cinematic Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Sticky Top Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} onTriggerToast={triggerToast} />

      {/* Main Page Layout */}
      <main className="relative z-10">
        
        {/* 1. HERO SECTION */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. PREMIUM SERVICES SECTION */}
        <Services onSelectService={handleOpenBooking} />

        {/* 3. ABOUT BRAND SECTION */}
        <About />

        {/* 4. BEFORE / AFTER TRANSFORMATION GALLERY */}
        <Gallery />

        {/* 5. CUSTOMER EXPERIENCE SECTION */}
        <Testimonials />

        {/* 6. WHY CHOOSE US SECTION */}
        <WhyChooseUs />

        {/* 7. APPOINTMENT CTA SECTION */}
        <BookingCTA onTriggerToast={triggerToast} />

      </main>

      {/* 8. FOOTER */}
      <Footer onTriggerToast={triggerToast} />

      {/* Floating Trust Pills & WhatsApp Live CTA */}
      <FloatingElements onTriggerToast={triggerToast} />

      {/* Global Interactive High-Converting Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        onTriggerToast={triggerToast}
      />

    </div>
  );
}
