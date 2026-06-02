/* ==========================================================================
   XXXX Unisex Salon - Vanilla JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ========================================================================
     1. DATA - All dynamic content centralized for easy editing
     ======================================================================== */
  const servicesData = [
    { title: 'Hair Styling & Haircuts', icon: 'fa-scissors', desc: 'Bespoke cuts and high-fashion styling tailored to your facial architecture and personal aesthetic.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800' },
    { title: 'Hair Coloring & Highlights', icon: 'fa-palette', desc: 'Advanced balayage, multidimensional highlights, and global color with pure Schwarzkopf brilliance.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Keratin & Smoothening', icon: 'fa-wand-magic-sparkles', desc: 'Transformative protein rituals for liquid-silk smoothness, extreme shine, and zero frizz.', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800' },
    { title: 'Bridal & HD Makeup', icon: 'fa-crown', desc: 'Flawless, ultra-photogenic bridal makeovers designed for spectacular cinematic elegance.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Facial & Skin Treatments', icon: 'fa-spa', desc: 'Dermatologically advanced facials, skin tightening, and instant radiance infused with premium serums.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
    { title: 'Beard Styling & Grooming', icon: 'fa-user-check', desc: 'Masterful beard sculpting, precision shaves, and conditioning treatments for the modern gentleman.', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800' },
    { title: 'Nail Art & Extensions', icon: 'fa-hand-sparkles', desc: 'Luxury acrylics, gel extensions, and intricate custom nail art polished to absolute perfection.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800' },
    { title: 'Hair Spa & Wellness', icon: 'fa-heart', desc: 'Deep therapeutic scalp conditioning and luxury massages that rejuvenate hair from root to tip.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800' }
  ];

  const galleryData = [
    { id: 1, title: 'Platinum Balayage Transformation', category: 'Hair Artistry', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', span: 'tall' },
    { id: 2, title: 'Royal Bridal HD Makeup', category: 'Bridal & HD Makeup', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800', span: 'normal' },
    { id: 3, title: 'Sharp Executive Beard Sculpting', category: 'Beard Styling', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800', span: 'normal' },
    { id: 4, title: 'Signature Skin Glass Radiance', category: 'Skin Glow', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800', span: 'normal' },
    { id: 5, title: 'Keratin Liquid Silk Finish', category: 'Hair Artistry', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800', span: 'tall' },
    { id: 6, title: 'Contemporary Layered Bob', category: 'Hair Artistry', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800', span: 'normal' }
  ];

  const reviewsData = [
    {
      name: 'Ananya Rathore',
      role: 'Bridal Client',
      text: '"Best salon experience. Professional staff, premium atmosphere and amazing hair transformation. My bridal makeup was absolutely flawless and photographed incredibly well!"',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Karan Vir Singh',
      role: 'Regular Grooming Client',
      text: '"XXXX Unisex Salon sets the standard for premium grooming. Their Schwarzkopf hair spa and precision beard sculpting are truly international tier. Highly recommended."',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Aesthetician & Client',
      text: '"Extremely clean, highly hygienic, and the staff is genuinely trained. I had a keratin treatment done and the liquid-silk finish is lasting beautifully. Worth every penny."',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: 'Rohan Malhotra',
      role: 'Event Groom',
      text: '"If you are looking for an elite salon, look no further. The ambiance feels like a 5-star hotel spa. Complete personalization and zero rush."',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const whyData = [
    { title: 'Schwarzkopf Professional Products', desc: 'We exclusively source genuine international salon chemicals, keratin treatments, and hair color lines directly from accredited European distributors.', icon: 'fa-award' },
    { title: 'Hygienic Luxury Environment', desc: 'Every tool, comb, and styling station undergoes absolute, hospital-grade UV sterilization between each and every appointment.', icon: 'fa-shield-halved' },
    { title: 'Expert Stylists', desc: 'Our core staff undergo rigorous, continuous masterclass modules to remain at the apex of avant-garde and traditional beauty technique.', icon: 'fa-users' },
    { title: 'Personalized Consultation', desc: 'No treatment begins blindly. We evaluate your baseline hair health, skin subtype, and personal lifestyle to draft custom beauty regimens.', icon: 'fa-wand-magic-sparkles' },
    { title: 'Modern Equipment', desc: 'Outfitted with state-of-the-art diagnostic scalp scanners, precision heat regulators, and ultra-comfortable hydraulic luxury seats.', icon: 'fa-microchip' },
    { title: 'Premium Customer Experience', desc: 'From our complimentary organic refreshments to private bridal chambers, we cultivate an oasis of serene pampering and VIP attention.', icon: 'fa-handshake' }
  ];

  const recentBookings = [
    { name: 'Priya S.', service: 'Keratin & Smoothening', time: 'Just now' },
    { name: 'Rahul V.', service: 'Schwarzkopf Hair Spa', time: '2 mins ago' },
    { name: 'Simran K.', service: 'Bridal HD Makeup Trial', time: '5 mins ago' },
    { name: 'Amit M.', service: 'Executive Beard Styling', time: '12 mins ago' },
    { name: 'Dr. Neha R.', service: 'O3+ Dermal Infusion Facial', time: '18 mins ago' }
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000',
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=2000'
  ];

  /* ========================================================================
     2. PRELOADER
     ======================================================================== */
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progress = document.getElementById('preloaderProgress');
    const percent = document.getElementById('preloaderPercent');
    if (!preloader) return;

    let value = 0;
    const duration = 1600;
    const step = 20;
    const inc = (step / duration) * 100;

    const interval = setInterval(() => {
      value += inc;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('hidden');
          setTimeout(() => preloader.style.display = 'none', 800);
        }, 300);
      }
      progress.style.width = value + '%';
      percent.textContent = Math.min(100, Math.floor(value)) + '%';
    }, step);
  }

  /* ========================================================================
     3. PARTICLE CANVAS BACKGROUND
     ======================================================================== */
  function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animId;

    const particles = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedY: -(Math.random() * 0.3 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseVal: Math.random() * Math.PI
      });
    }

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient gradient
      const grad = ctx.createRadialGradient(width * 0.2, height * 0.3, 0, width * 0.2, height * 0.3, width * 0.5);
      grad.addColorStop(0, 'rgba(212, 175, 55, 0.03)');
      grad.addColorStop(1, 'rgba(11, 11, 13, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        p.pulseVal += p.pulseSpeed;
        const op = Math.max(0.05, Math.min(0.7, p.opacity + Math.sin(p.pulseVal) * 0.15));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, ' + op + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };
    render();
  }

  /* ========================================================================
     4. HERO BACKGROUND SLIDER
     ======================================================================== */
  function initHeroBg() {
    const bg = document.getElementById('heroBg');
    if (!bg) return;
    let current = 0;
    bg.style.backgroundImage = 'url(' + heroImages[0] + ')';
    bg.classList.add('active');

    setInterval(() => {
      current = (current + 1) % heroImages.length;
      bg.classList.remove('active');
      setTimeout(() => {
        bg.style.backgroundImage = 'url(' + heroImages[current] + ')';
        bg.classList.add('active');
      }, 200);
    }, 6000);
  }

  /* ========================================================================
     5. HEADER SCROLL & ACTIVE NAV
     ======================================================================== */
  function initHeader() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const sections = ['home', 'services', 'about', 'gallery', 'reviews', 'why-us', 'contact'];

    const update = () => {
      const y = window.scrollY;
      if (header) {
        if (y > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }

      const pos = y + 300;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (pos >= top && pos < top + h) {
            navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === s));
            mobileLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === s));
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', update);
    update();
  }

  /* ========================================================================
     6. SMOOTH SCROLL ON NAV CLICK
     ======================================================================== */
  function initSmoothNav() {
    const allLinks = document.querySelectorAll('[data-nav]');
    const drawer = document.getElementById('mobileDrawer');

    allLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = link.dataset.nav;
        setActiveLink(id);
        if (drawer) drawer.classList.remove('open');

        setTimeout(() => {
          if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(id);
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }
        }, 50);
      });
    });
  }

  function setActiveLink(id) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.nav === id));
    document.querySelectorAll('.mobile-link').forEach(l => l.classList.toggle('active', l.dataset.nav === id));
  }

  /* ========================================================================
     7. MOBILE DRAWER
     ======================================================================== */
  function initMobileDrawer() {
    const toggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('mobileDrawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (drawer.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  }

  /* ========================================================================
     8. TOAST SYSTEM
     ======================================================================== */
  let toastTimer;
  function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
  }

  /* ========================================================================
     9. INTERCEPTED CALL / WHATSAPP / SOCIAL ACTIONS
     ======================================================================== */
  function initSimulatedActions() {
    const simMessage = (type) => {
      const messages = {
        call: 'Direct call feature is currently disabled in this template. Please book via the form.',
        whatsapp: 'Live chat simulated! In this demo template, direct WhatsApp routing is safely disabled.',
        instagram: 'Instagram features are running in demo mode. External requests are securely disabled.',
        social: 'Social features are running in demo mode. Outgoing requests are securely disabled.'
      };
      showToast(messages[type] || messages.social);
    };

    document.getElementById('phoneLink')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('call'); });
    document.getElementById('phoneLinkMobile')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('call'); });
    document.getElementById('callBtn')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('call'); });
    document.getElementById('whatsappBtn')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('whatsapp'); });
    document.getElementById('whatsappFloat')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('whatsapp'); });
    document.getElementById('instagramLink')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('instagram'); });
    document.getElementById('successWhatsapp')?.addEventListener('click', (e) => { e.preventDefault(); simMessage('whatsapp'); });

    document.querySelectorAll('[data-social]').forEach(btn => {
      btn.addEventListener('click', (e) => { e.preventDefault(); simMessage(btn.dataset.social.toLowerCase()); });
    });
  }

  /* ========================================================================
     10. RENDER SERVICES
     ======================================================================== */
  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = servicesData.map((s, i) => `
      <div class="service-card reveal" data-service="${s.title}">
        <div class="service-bg">
          <img src="${s.image}" alt="${s.title}" />
        </div>
        <div class="service-content">
          <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
          <h3 class="service-title">${s.title}</h3>
          <p class="service-desc">${s.desc}</p>
        </div>
        <div class="service-action">
          <div class="service-divider"></div>
          <button class="service-book" data-service="${s.title}">
            <span>Book Now</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div class="service-corner"></div>
      </div>
    `).join('');

    // Bind book buttons
    grid.querySelectorAll('.service-book, .service-card').forEach(el => {
      el.addEventListener('click', () => {
        const name = el.dataset.service;
        openBookingModal(name);
      });
    });

    // Bind banner-cta consultation
    document.querySelectorAll('[data-service]').forEach(btn => {
      if (btn.classList.contains('btn-outline')) {
        btn.addEventListener('click', () => openBookingModal(btn.dataset.service));
      }
    });

    // Populate service selects
    const serviceOptions = servicesData.map(s => `<option value="${s.title}">${s.title}</option>`).join('') + '<option value="Bridal & Groom Custom Package">Bridal & Groom Custom Package</option><option value="Custom Premium Package">Custom Premium Package</option>';
    document.querySelectorAll('#serviceSelect, #modalServiceSelect').forEach(sel => {
      sel.innerHTML = serviceOptions;
    });
  }

  /* ========================================================================
     11. RENDER REVIEWS
     ======================================================================== */
  function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;
    grid.innerHTML = reviewsData.map(r => `
      <div class="review-card reveal">
        <i class="fa-solid fa-quote-right review-quote-icon"></i>
        <div>
          <div class="review-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
          </div>
          <p class="review-text">${r.text}</p>
        </div>
        <div class="review-meta">
          <div class="review-author">
            <img src="${r.avatar}" alt="${r.name}" class="review-avatar" />
            <div>
              <div class="review-name">${r.name} <i class="fa-solid fa-circle-check"></i></div>
              <div class="review-role">${r.role}</div>
            </div>
          </div>
          <div class="review-date">Reviewed on Google</div>
        </div>
      </div>
    `).join('');
  }

  /* ========================================================================
     12. RENDER WHY US
     ======================================================================== */
  function renderWhy() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;
    grid.innerHTML = whyData.map(w => `
      <div class="why-card reveal">
        <div>
          <div class="why-icon"><i class="fa-solid ${w.icon}"></i></div>
          <h3 class="why-title">${w.title}</h3>
          <p class="why-desc">${w.desc}</p>
        </div>
        <div class="why-footer">
          <span>Premium Tier</span>
          <span class="check">✓</span>
        </div>
      </div>
    `).join('');
  }

  /* ========================================================================
     13. RENDER GALLERY + FILTER
     ======================================================================== */
  function renderGallery() {
    const grid = document.getElementById('masonryGrid');
    const tabs = document.getElementById('filterTabs');
    if (!grid || !tabs) return;

    const categories = ['All', 'Hair Artistry', 'Bridal & HD Makeup', 'Beard Styling', 'Skin Glow'];

    // Render tabs
    tabs.innerHTML = categories.map(cat => `<button class="filter-tab${cat === 'All' ? ' active' : ''}" data-cat="${cat}">${cat}</button>`).join('');

    const renderItems = (cat) => {
      const items = cat === 'All' ? galleryData : galleryData.filter(i => i.category === cat);
      grid.innerHTML = items.map(item => `
        <div class="masonry-item ${item.span}">
          <img src="${item.image}" alt="${item.title}" />
          <div class="masonry-overlay">
            <div class="masonry-instagram"><i class="fa-brands fa-instagram"></i></div>
            <div class="masonry-category">${item.category}</div>
            <h4 class="masonry-title">${item.title}</h4>
            <div class="masonry-tag">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <span>XXXX Signature Form</span>
            </div>
          </div>
        </div>
      `).join('');
    };

    renderItems('All');

    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-tab');
      if (!btn) return;
      tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderItems(btn.dataset.cat);
    });
  }

  /* ========================================================================
     14. BEFORE / AFTER SLIDER
     ======================================================================== */
  function initSlider() {
    const container = document.getElementById('sliderContainer');
    const divider = document.getElementById('sliderDivider');
    const beforeWrap = document.getElementById('sliderBeforeWrap');
    if (!container || !divider || !beforeWrap) return;

    let isDragging = false;

    const update = (clientX) => {
      const rect = container.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      divider.style.left = pct + '%';
      beforeWrap.style.width = pct + '%';
      beforeWrap.querySelector('img').style.width = rect.width + 'px';
    };

    const onDown = (e) => {
      isDragging = true;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      update(x);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      update(x);
    };

    const onUp = () => { isDragging = false; };

    container.addEventListener('mousedown', onDown);
    container.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    // Click to position
    container.addEventListener('click', (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      update(x);
    });
  }

  /* ========================================================================
     15. COUNTER ANIMATION
     ======================================================================== */
  function initCounters() {
    const cards = document.querySelectorAll('.counter-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    cards.forEach(c => observer.observe(c));
  }

  function animateCounter(card) {
    const target = parseFloat(card.dataset.target);
    const suffix = card.dataset.suffix || '';
    const isDecimal = card.dataset.decimal === 'true';
    const numEl = card.querySelector('.counter-num');
    const duration = 2000;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      numEl.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ========================================================================
     16. SCROLL REVEAL
     ======================================================================== */
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => observer.observe(el));
  }

  /* ========================================================================
     17. BOOKING MODAL
     ======================================================================== */
  function openBookingModal(serviceName) {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    const sel = document.getElementById('modalServiceSelect');
    if (sel && serviceName) {
      const opt = Array.from(sel.options).find(o => o.value === serviceName);
      if (opt) sel.value = serviceName;
    }
    const form = document.getElementById('modalForm');
    const success = document.getElementById('modalSuccess');
    if (form) form.style.display = 'flex';
    if (success) success.style.display = 'none';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function initBookingModal() {
    const close = document.getElementById('modalClose');
    const backdrop = document.getElementById('modalBackdrop');
    const form = document.getElementById('modalForm');
    const success = document.getElementById('modalSuccess');
    const successClose = document.getElementById('successClose');

    close?.addEventListener('click', closeBookingModal);
    backdrop?.addEventListener('click', closeBookingModal);
    successClose?.addEventListener('click', closeBookingModal);

    // Top + Mobile book buttons
    document.getElementById('bookBtnNav')?.addEventListener('click', () => openBookingModal());
    document.getElementById('bookBtnMobile')?.addEventListener('click', () => openBookingModal());
    document.getElementById('bookBtnMobileFull')?.addEventListener('click', () => openBookingModal());
    document.getElementById('heroBookBtn')?.addEventListener('click', () => openBookingModal());

    // Modal form submission
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name');
      const service = fd.get('service');
      document.getElementById('successName').textContent = name;
      document.getElementById('successService').textContent = service;
      form.style.display = 'none';
      if (success) success.style.display = 'flex';
    });

    // Bottom contact form
    const bottomForm = document.getElementById('bookingForm');
    bottomForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(bottomForm);
      const name = fd.get('name');
      const service = fd.get('service');
      document.getElementById('successName').textContent = name;
      document.getElementById('successService').textContent = service;
      openBookingModal(service);
    });
  }

  /* ========================================================================
     18. FLOATING BOOKING ALERT
     ======================================================================== */
  function initFloatingAlert() {
    const alert = document.getElementById('floatingAlert');
    const close = document.getElementById('floatingClose');
    const nameEl = document.getElementById('alertName');
    const serviceEl = document.getElementById('alertService');
    const timeEl = document.getElementById('alertTime');
    if (!alert) return;

    let idx = 0;

    setTimeout(() => {
      const b = recentBookings[idx];
      nameEl.textContent = b.name;
      serviceEl.textContent = b.service;
      timeEl.textContent = b.time;
      alert.classList.add('show');
    }, 4000);

    setInterval(() => {
      alert.classList.remove('show');
      setTimeout(() => {
        idx = (idx + 1) % recentBookings.length;
        const b = recentBookings[idx];
        nameEl.textContent = b.name;
        serviceEl.textContent = b.service;
        timeEl.textContent = b.time;
        alert.classList.add('show');
      }, 1000);
    }, 15000);

    close?.addEventListener('click', () => alert.classList.remove('show'));
  }

  /* ========================================================================
     19. SCROLL TO TOP
     ======================================================================== */
  function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ========================================================================
     20. CURRENT YEAR
     ======================================================================== */
  function setYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ========================================================================
     INIT ON DOM READY
     ======================================================================== */
  function init() {
    initPreloader();
    initParticles();
    initHeroBg();
    renderServices();
    renderReviews();
    renderWhy();
    renderGallery();
    initSlider();
    initCounters();
    initReveal();
    initHeader();
    initSmoothNav();
    initMobileDrawer();
    initSimulatedActions();
    initBookingModal();
    initFloatingAlert();
    initScrollTop();
    setYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
