# Freelance Developer Portfolio

A production-ready, high-converting portfolio website built with **React 18**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Designed specifically for freelance web and mobile app developers to turn client visitors into booked calls and inquiries.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/) (single-scroll home + `/projects/:slug` case study pages)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (subtle scroll reveals with `prefers-reduced-motion` compliance)
- **Icons**: [Lucide React](https://lucide.dev/) + custom brand SVGs
- **SEO**: [react-helmet-async](https://github.com/staylor/react-helmet-async) with Open Graph, Twitter Cards, canonical tags, and JSON-LD Person schema
- **Contact Form**: EmailJS and Formspree support with client-side validation
- **Quality**: [Oxlint](https://oxc.rs/) for linting

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** 18+ installed on your machine.
- **npm**, **pnpm**, or **yarn**.

### 2. Installation
Clone the repository and install the dependencies:

```bash
npm install
```

### 3. Local Development
Run the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 4. Production Build & Linting
Validate that the code builds and lints without any errors:

```bash
# Check for lint errors
npm run lint

# Generate production bundle in /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 Customizing Your Content (`/src/data`)

All text content, links, projects, and personal data are decoupled from UI components and stored in `/src/data/`. You never need to touch the JSX code to update your information.

| File | What to update |
| --- | --- |
| `src/data/site.js` | Your name, headline, bio, location, email, WhatsApp, Calendly link, social links, resume link, and tech stack tags. |
| `src/data/projects.js` | Your real portfolio projects and case studies (title, problem, solution, features, metrics, live/repo links, screenshots). |
| `src/data/services.js` | The services you offer, icons, descriptions, and starting prices. |
| `src/data/process.js` | The steps in your development process (Discovery, Proposal, Design & Build, etc.). |
| `src/data/testimonials.js` | Client quotes, client names, roles, and avatar images. |
| `src/data/faq.js` | Frequently asked client questions (timelines, pricing, revisions, communication). |

> **Tip**: Search for `TODO` comments across `/src/data` to find all placeholder values quickly.

---

## 📬 Contact Form Configuration

The contact form in `src/sections/Contact.jsx` supports both **EmailJS** and **Formspree** out of the box.

Create a `.env` file in the project root (copied from `.env.example`):

```bash
cp .env.example .env
```

### Option A: EmailJS (Recommended)
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail).
3. Create an **Email Template** with variables: `{{from_name}}`, `{{from_email}}`, `{{project_type}}`, `{{budget}}`, and `{{message}}`.
4. Copy your keys into `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

### Option B: Formspree
1. Create a form at [Formspree](https://formspree.io/).
2. Add your endpoint to `.env`:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```

*Note: If no environment variables are set, the form runs in preview mode with simulated loading and console output.*

---

## 🚢 Deploying to Vercel

### Step 1: Push to GitHub
Commit your project and push it to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New...** > **Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Add your Environment Variables (`VITE_EMAILJS_*` or `VITE_FORMSPREE_ENDPOINT`) in the Vercel dashboard.
6. Click **Deploy**.

### Step 3: Add a Custom Domain
1. In your Vercel project dashboard, go to **Settings** > **Domains**.
2. Enter your custom domain (e.g. `yourname.dev` or `www.yourname.dev`).
3. Update your DNS records at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.) using the records provided by Vercel:
   - **A Record**: `@` points to `76.76.21.21`
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`
4. SSL certificates are generated automatically by Vercel within minutes.

---

## 📁 Project Directory Structure

```
portfolio/
├── public/                  # Static assets (robots.txt, sitemap.xml, favicon)
├── src/
│   ├── assets/              # Static images & local assets
│   ├── components/          # Reusable UI components (Button, Card, Tag, SEO, etc.)
│   ├── data/                # Content files (site.js, projects.js, services.js, etc.)
│   ├── hooks/               # Custom hooks (useTheme, useActiveSection)
│   ├── pages/               # Route views (Home, ProjectDetail, NotFound)
│   ├── sections/            # Home sections (Hero, Work, Services, Process, etc.)
│   ├── utils/               # Utility helpers (cn.js)
│   ├── App.jsx              # Routing & Suspense setup
│   ├── index.css            # Tailwind CSS & design tokens
│   └── main.jsx             # React DOM entry point
├── .env.example             # Example environment variables
└── package.json
```

---

## 📄 License

MIT. Feel free to use this template for your personal portfolio website!
