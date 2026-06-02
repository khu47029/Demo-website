# ✨ XXXX Unisex Salon - Vanilla HTML/CSS/JS Version

This is the **plain HTML, CSS, and JavaScript** version of our luxury salon website. No build step, no Node.js, no npm install — just open `index.html` in a browser and you're live!

---

## 🚀 How to Use

### Option 1: Direct File Open
Just double-click `index.html` and it will open in your default browser. **It works offline too!**

### Option 2: Local Web Server (Recommended)
For best results, run a simple local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 3: Deploy to GitHub Pages
1. Upload all 3 files (`index.html`, `style.css`, `script.js`) to your repository
2. Go to **Settings → Pages**
3. Select **main branch** as source
4. Your site will be live at `https://username.github.io/repo-name/`

### Option 4: Deploy to Netlify / Vercel
- Drag & drop the folder onto [netlify.com/drop](https://app.netlify.com/drop)
- Or connect your GitHub repo on [vercel.com](https://vercel.com)

---

## 📁 File Structure

```text
vanilla/
├── index.html    (Page structure)
├── style.css     (All premium styling)
├── script.js     (Interactivity & animations)
└── README.md     (This file)
```

---

## ✨ Features Included

- ✅ **Cinematic Hero Section** with auto-changing background images
- ✅ **Premium Preloader** with elegant progress bar
- ✅ **Sticky Navigation** with active section detection
- ✅ **Smooth Scrolling** to all sections
- ✅ **Mobile Drawer Menu** with elegant animations
- ✅ **Particle Canvas Background** (subtle gold particles)
- ✅ **Services Grid** with hover effects
- ✅ **Animated Counters** (260+, 7 Days, 100%, 3.5k+)
- ✅ **Before/After Slider** (drag to compare)
- ✅ **Filterable Gallery** (All, Hair Artistry, Bridal, Beard, Skin)
- ✅ **Customer Reviews** with star ratings
- ✅ **Why Choose Us** with icon cards
- ✅ **Booking Forms** (Modal + inline)
- ✅ **Toast Notifications** for simulated actions
- ✅ **Floating Booking Feed** (recent client activity)
- ✅ **Floating WhatsApp Button** (simulated)
- ✅ **Footer** with map placeholder
- ✅ **Schema.org JSON-LD** for SEO
- ✅ **Fully Responsive** (Mobile, Tablet, Desktop)

---

## 🎨 Customization

### Change Brand Name
Search & replace `XXXX` in all 3 files.

### Change Phone Number
Search & replace `+91 XXXXX XXXXX` in all 3 files.

### Change Colors
Edit `:root` variables in `style.css`:
```css
--gold: #d4af37;        /* Primary gold */
--gold-light: #f9f1d1;  /* Light gold */
--gold-dark: #aa8620;   /* Dark gold */
--luxury-black: #0b0b0d; /* Background */
--charcoal: #141417;     /* Card background */
```

### Add/Edit Services
In `script.js`, edit the `servicesData` array.

### Add/Edit Gallery
In `script.js`, edit the `galleryData` array.

### Add/Edit Reviews
In `script.js`, edit the `reviewsData` array.

---

## 🔒 Anonymized Template

This version is fully anonymized:
- All brand names → `XXXX`
- All phone numbers → `+91 XXXXX XXXXX`
- All addresses → `XXXXX, Premium District`
- WhatsApp/Call actions show simulated toast notifications
- Google Maps is replaced with a beautiful placeholder

Perfect for showcasing UI/UX before final client integration.

---

## 📦 External Dependencies (CDN)

- **Google Fonts**: Cormorant Garamond, Syne, Plus Jakarta Sans
- **Font Awesome 6.5.1**: All icons
- **Unsplash**: High-quality images

Everything loads from CDN — **no local dependencies required**.

---

Crafted for World-Class Aesthetic Perfection.
