/**
 * Site-wide copy and links. Edit this file instead of hunting through components.
 */
export const site = {
  name: 'Harendra Singh',
  shortName: 'HS',
  headline:
    'I build web and mobile apps for startups and small businesses, from idea to launch.',
  subtext:
    'Full-stack developer specialising in React, Node.js, and React Native. I turn rough ideas into polished, revenue-ready products — on time and on budget.',
  location: 'Gwalior, India',
  availability: 'Available worldwide · Remote',
  email: 'buildwith06@gmail.com',
  whatsapp: '+91 8827016637',
  whatsappUrl: 'https://wa.me/918827016637',
  bookingUrl: 'https://calendly.com/buildwith06/30min',
  resumeUrl: 'https://drive.google.com/file/d/11eiWF_NLaffs1EpE52OQt1ZSmqHZTRuS/view?usp=drive_link',

  social: {
    linkedin: 'https://www.linkedin.com/in/harendra-singh-tomar-184a9a342/',
    github: 'https://github.com/harendratomar',
  },

  nav: [
    { id: 'work', label: 'Work', href: '/#work' },
    { id: 'services', label: 'Services', href: '/#services' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'contact', label: 'Contact', href: '/#contact' },
  ],

  cta: {
    hire: 'Hire me',
    book: 'Book a call',
    viewWork: 'View my work',
  },

  /** Short trust badges shown under the hero CTAs */
  trust: [
    '3+ years experience',
    '20+ projects delivered',
    'Web & mobile',
  ],

  /**
   * Tech stack displayed as icon badges in the Hero.
   * Each entry has a label (tooltip/alt) and a slug used for matching icons.
   */
  techStack: [
    { label: 'React', slug: 'react' },
    { label: 'Next.js', slug: 'nextjs' },
    { label: 'Node.js', slug: 'nodejs' },
    { label: 'React Native', slug: 'react-native' },
    { label: 'Flutter', slug: 'flutter' },
    { label: 'MongoDB', slug: 'mongodb' },
    { label: 'Firebase', slug: 'firebase' },
    { label: 'Tailwind CSS', slug: 'tailwind' },
  ],

  /** About section */
  about: {
    bio: [
      "Hi, I'm Harendra Singh — a freelance full-stack developer based in Gwalior, India. Over the past 3+ years, I've helped startups, micro-agencies, and international businesses across India, the UK, and the Bahamas build and launch revenue-generating digital products.",
      'I specialise in architecting real-time mobile applications (audio/video calling, quick commerce, booking platforms) and scalable web dashboards using React, Next.js, React Native, Node.js, and cloud backends.',
      'From custom payment gateways and Agora WebRTC calling to AI-enabled report analysis and high-converting landing pages, I manage the end-to-end lifecycle from discovery to App Store / Play Store deployment.',
    ],
    photo: '/pic.png',
  },

  /** Skills grouped by category — shown in the About section */
  skills: [
    {
      category: 'Frontend & Web',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
    },
    {
      category: 'Mobile App Development',
      items: ['React Native', 'Flutter', 'Expo', 'iOS & Android Deployment', 'Push Notifications'],
    },
    {
      category: 'Backend & Real-Time',
      items: ['Node.js', 'Express', 'Socket.io', 'Agora RTC', 'REST APIs', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Payments & Integrations',
      items: ['Razorpay', 'Stripe', 'In-App Purchases', 'Google Maps API', 'Firebase', 'Vercel'],
    },
  ],
}

export const navSectionIds = site.nav.map((item) => item.id)
