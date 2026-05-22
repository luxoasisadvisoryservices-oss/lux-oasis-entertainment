# Lux Oasis Advisory — Entertainment Consultancy Website

Premium operational consultancy website for Lux Oasis Advisory & Services LLC, Entertainment Division.

## Tech Stack

- React 18
- Tailwind CSS 3
- Vercel (deployment)

---

## Local Development

```bash
npm install
npm start
```

Opens on `http://localhost:3000`

---

## Deploy to GitHub + Vercel

### Step 1 — Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it: `lux-oasis-entertainment`
4. Set to **Private**
5. Do NOT initialise with README (we have one)
6. Click **Create repository**

### Step 2 — Push this code to GitHub

In your terminal, inside this project folder:

```bash
git init
git add .
git commit -m "Initial commit — Lux Oasis Entertainment Consultancy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lux-oasis-entertainment.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub login)
2. Click **Add New Project**
3. Select your `lux-oasis-entertainment` repository
4. Vercel will auto-detect it as a React app
5. Leave all settings as default
6. Click **Deploy**

Your site will be live at: `https://lux-oasis-entertainment.vercel.app`

---

## Add a Custom Domain (Optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `entertainment.luxoasis.ae`)
3. Follow DNS instructions Vercel provides
4. SSL certificate is automatic

---

## Project Structure

```
src/
  App.jsx                  # Main assembly
  index.js                 # React entry point
  index.css                # Tailwind + global styles
  components/
    Nav.jsx                # Fixed navigation bar
    Hero.jsx               # Full-screen hero section
    About.jsx              # Stats + about text
    Services.jsx           # 9 service cards
    Portfolio.jsx          # 9 production portfolio cards
    Italy.jsx              # Italy experience section
    Experience.jsx         # Career timeline
    Sections.jsx           # Philosophy, Company, Contact, Footer
    UI.jsx                 # Shared UI primitives
```

---

## Updating Content

All content is in the component files as plain JavaScript arrays and strings.
No CMS or database required. To update:

- **Services** → edit `src/components/Services.jsx` — the `services` array
- **Portfolio** → edit `src/components/Portfolio.jsx` — the `productions` array
- **Timeline** → edit `src/components/Experience.jsx` — the `items` array
- **Italy section** → edit `src/components/Italy.jsx` — the `venues` array
- **Contact info** → edit `src/components/Sections.jsx` — Contact component

After any edit: `git add . && git commit -m "Update content" && git push`

Vercel redeploys automatically within 30 seconds.

---

## Contact Form

The form currently runs a frontend-only confirmation state.
To wire it to a real backend, the recommended options are:

- **Formspree** — free tier, no code needed: [formspree.io](https://formspree.io)
- **EmailJS** — sends directly from the browser
- **Vercel serverless function** — full control, stays on Vercel

To use Formspree:
1. Create a free account and get your form endpoint
2. In `Sections.jsx`, replace the `handleSubmit` function with a `fetch` POST to your Formspree endpoint
