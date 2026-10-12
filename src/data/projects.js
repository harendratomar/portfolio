/**
 * Project / case study data for Harendra Singh's Portfolio.
 * Real production projects across mobile apps (iOS & Android) and web platforms.
 */

export const projects = [
  {
    slug: 'hlotalk-dating-app',
    title: 'Hlotalk Dating App',
    category: 'Mobile App · Social & Dating',
    tagline: 'Real-time audio/video dating app with virtual coin gifting and in-app monetization.',
    description:
      'A feature-rich dating & social mobile app developed for a Bengaluru client, featuring low-latency audio/video calling via Agora RTC, real-time socket chat, in-app coin purchases, and Razorpay checkout.',
    role: 'Lead Mobile & Backend Developer',
    timeline: '8 weeks',
    clientLocation: 'Bengaluru, India',
    tech: [
      'React Native',
      'Node.js',
      'Socket.io',
      'Agora RTC',
      'Razorpay',
      'In-App Purchases',
      'MongoDB',
      'Firebase',
    ],
    problem:
      'The Bengaluru startup required a high-performance dating platform that could handle low-latency peer-to-peer audio and video calls, seamless real-time messaging, and a robust monetization engine where users could purchase virtual coins to send gifts during live chats.',
    solution:
      'I engineered a cross-platform mobile application utilizing the Agora RTC SDK for crystal-clear video and audio streaming, Socket.io for instant messaging and presence indicators, and integrated Google Play In-App Purchases alongside Razorpay for seamless coin wallet recharges.',
    features: [
      'High-definition 1-on-1 audio and video calling powered by Agora RTC',
      'Real-time messaging with instant delivery receipts and typing indicators',
      'In-App Purchases (IAP) & Razorpay gateway for wallet coin purchases',
      'Virtual coin gifting economy allowing users to send animated gifts',
      'User discovery matching algorithm with location and age preferences',
      'Automated user moderation, reporting, and secure profile verification',
    ],
    results: [
      // '10,000+ active installs on the Google Play Store',
      'Sub-200ms latency on real-time chats and call establishment',
      'Strong user retention driven by the interactive virtual gifting economy',
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.hlotalk&hl=en_IN',
    linkLabel: 'View on Google Play',
    githubUrl: null,
    thumbnail: '/projects/hlotalk.png',
    images: [],
  },
  {
    slug: 'first-choice-limo',
    title: 'First Choice Limo',
    category: 'Mobile App · iOS Ride Booking',
    tagline: 'Luxury chauffeur and vehicle booking application for the Bahamas.',
    description:
      'An on-demand luxury vehicle and limousine booking application built for travelers and residents in the Bahamas, offering scheduled rides, fleet selection, flight tracking, and secure payment processing.',
    role: 'Full-Stack Mobile Developer',
    timeline: '2 weeks',
    clientLocation: 'Bahamas',
    tech: [
      'React Native',
      'iOS',
      'Node.js',
      'Express',
      'Stripe',
      'Google Maps API',
      'MongoDB',
    ],
    problem:
      'A luxury transport service in the Bahamas needed to modernize their chauffeur and airport transfer operations, replacing manual phone dispatching and spreadsheet bookings with an elegant, tourist-friendly iOS mobile app.',
    solution:
      'I designed and built an intuitive iOS booking app with interactive pickup/dropoff mapping, vehicle category selection (Sedans, SUVs, Stretch Limos), upfront transparent fare estimates, automated ride reminders, and Stripe payment authorization.',
    features: [
      'Intuitive pickup & drop-off address autocomplete via Google Maps API',
      'Fleet category selection with transparent capacity and luggage limits',
      'Advance scheduled bookings and airport transfer flight number tracking',
      'Secure cashless checkout with Stripe credit card processing',
      'Real-time driver assignment notifications and ride status tracking',
    ],
    results: [
      'Successfully published and approved on Apple App Store',
      'Reduced dispatch overhead by 60% through automated booking confirmations',
      'High adoption rate among tourists visiting Nassau and Bahamian resorts',
    ],
    liveUrl: 'https://apps.apple.com/us/app/first-choice-limo/id6772989310',
    linkLabel: 'View on Apple App Store',
    githubUrl: null,
    thumbnail: '/projects/limo.png',
    images: [],
  },
  {
    slug: 'nlf-flower-cake-app',
    title: 'NLF Flower & Cake App',
    category: 'Mobile App · Quick-Commerce E-Commerce',
    tagline: 'Hyperlocal quick-commerce app delivering fresh cakes and flowers with scheduled and bulk orders.',
    description:
      'A Blinkit-style quick-commerce mobile app developed for an Udaipur client delivering occasion-specific cakes and bouquets with express delivery, custom scheduled slots, and bulk corporate orders.',
    role: 'Mobile App Developer',
    timeline: '5 weeks',
    clientLocation: 'Udaipur, India',
    tech: [
      'React Native',
      'Node.js',
      'Express',
      'MongoDB',
      'Razorpay',
      'Firebase Cloud Messaging',
    ],
    problem:
      'A prominent bakery and floral business in Udaipur required a dedicated quick-commerce mobile app to compete with third-party delivery platforms. They needed special features tailored for gifting—such as precise scheduled deliveries (midnight surprise deliveries) and bulk orders for weddings and events.',
    solution:
      'I architected an occasion-first quick-commerce Android app where users browse cakes, flowers, and combos by event (Birthdays, Anniversaries, Weddings). Implemented scheduled time-slot pickers, custom cake message inputs, Razorpay checkout, and push notifications.',
    features: [
      'Occasion-based curated catalog (Birthdays, Anniversaries, Romantic, Festivals)',
      'Scheduled delivery engine supporting midnight surprise delivery slots',
      'Bulk order inquiry workflow for large events and weddings',
      'Secure payments via Razorpay (UPI, Credit/Debit cards, Net Banking)',
      'Real-time order progress notifications via Firebase Cloud Messaging',
    ],
    results: [
      'Live on Google Play Store serving Udaipur local communities',
      'Over 35% higher average order value compared to standard e-commerce',
      'Eliminated 25-30% third-party marketplace commissions for the client',
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.freshflowers&hl=en_IN',
    linkLabel: 'View on Google Play',
    githubUrl: null,
    thumbnail: '/projects/nlf-app.png',
    images: [],
  },
  {
    slug: 'heal-247-doctor-app',
    title: 'Heal 24/7 Doctor App',
    category: 'Mobile App · Telemedicine & AI Healthcare',
    tagline: 'AI-enabled doctor consultation app with medical report analysis and digital prescriptions.',
    description:
      'An enterprise healthcare mobile app built for a Delhi medical network, enabling verified doctors to conduct encrypted audio/video consultations, review AI-analyzed patient lab reports, and issue digital prescriptions.',
    role: 'Lead Healthcare Mobile Developer',
    timeline: '6 weeks',
    clientLocation: 'Delhi, India',
    tech: [
      'React Native',
      'WebRTC',
      'Agora SDK',
      'Node.js',
      'OpenAI API',
      'MongoDB',
      'AWS S3',
    ],
    problem:
      'A Delhi healthcare network needed a physician-facing consultation app that would reduce diagnostic friction during remote appointments. Doctors needed to easily interpret complex medical reports without wasting valuable consultation minutes reading multi-page PDFs.',
    solution:
      'I developed a HIPAA-conscious React Native application integrating Agora video calling, digital prescription signing, patient follow-up scheduling, and an AI diagnostic assistant that summarizes key vitals and highlights abnormal values from uploaded lab reports.',
    features: [
      'Encrypted audio and HD video teleconsultations with screen and report sharing',
      'AI diagnostic assistant extracting abnormal parameters from PDF lab reports',
      'Digital prescription builder with dosage templates and pharmacy export',
      'Patient medical history review and longitudinal follow-up tracking',
      'Doctor availability scheduler and appointment slot manager',
    ],
    results: [
      'Available on Google Play Store and utilized by practicing clinicians',
      'Saved doctors an estimated 4-5 minutes per consultation via AI report summaries',
      '99.2% consultation connection reliability on 4G/5G networks',
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.heal247.doctor&hl=en_IN',
    linkLabel: 'View on Google Play',
    githubUrl: null,
    thumbnail: '/projects/heal-doctor.png',
    images: [],
  },
  {
    slug: 'nlf-flower-cake-web',
    title: 'NLF Flower & Cake Web Store',
    category: 'Web Platform · E-Commerce',
    tagline: 'Quick-commerce web store delivering fresh cakes and flowers with scheduled time slots.',
    description:
      'A responsive, high-converting e-commerce web platform syncing with the NLF inventory, enabling desktop and mobile browser users to order fresh bouquets, designer cakes, and bulk celebration packages online.',
    role: 'AI & Full-Stack Developer',
    timeline: '4 weeks',
    clientLocation: 'Udaipur, India',
    tech: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Node.js',
      'Razorpay',
      'MongoDB',
    ],
    problem:
      'To capture high-intent search engine traffic for gifts and flowers in Udaipur, the business needed an ultra-fast web store with full feature parity with the app—including scheduled midnight deliveries and corporate bulk bookings.',
    solution:
      'I engineered an SEO-optimized web application with clean product cards, occasion filters, streamlined 2-step checkout, Razorpay integration, and instant WhatsApp customer support integration.',
    features: [
      'Fast-loading, mobile-first responsive storefront optimized for local SEO',
      'Occasion-specific filtering and custom card message creator',
      'Dynamic delivery slot scheduler (Same-day, Next-day, Midnight slots)',
      'Bulk order quotation inquiry form for weddings and celebrations',
      'Automated order confirmation via SMS, Email, and WhatsApp',
    ],
    results: [
      'Live and generating daily online orders at flowersstoreonline.in',
      'Sub-1.2s page load speed achieving high mobile conversion rates',
      'Ranked on page 1 of Google for local Udaipur flower and cake delivery terms',
    ],
    liveUrl: 'https://flowersstoreonline.in/',
    linkLabel: 'Visit Live Web Store',
    githubUrl: null,
    thumbnail: '/projects/nlf-web.png',
    images: [],
  },
  {
    slug: 'heal-247-patient-portal',
    title: 'Heal 24/7 Patient Health Portal',
    category: 'Web Application · SaaS & AI Health',
    tagline: 'Online patient portal with appointment booking, report vault, and AI Daily Health Coach.',
    description:
      'A patient-facing healthcare web application featuring specialist doctor discovery, instant appointment booking, medical document management, and an interactive AI health coach guiding patients on wellness and symptoms.',
    role: 'Frontend Architect & Full-Stack Developer',
    timeline: '3 weeks',
    clientLocation: 'Delhi, India',
    tech: [
      'React',
      'Tailwind CSS',
      'OpenAI API',
      'Node.js',
      'WebRTC',
      'Vercel',
    ],
    problem:
      'Patients needed an easy, web-accessible interface to consult specialists without mandatory app installations, access diagnostic history, and receive daily proactive health advice.',
    solution:
      'I built a web application hosted on Vercel with clean medical aesthetics, one-click appointment scheduling, PDF diagnostic report uploads, secure video consultation rooms, and an AI Daily Health Coach chatbot.',
    features: [
      'Specialist doctor search and instantaneous calendar slot booking',
      'Secure patient medical records and lab report upload repository',
      'Browser-based WebRTC teleconsultation without third-party downloads',
      'AI Daily Health Coach for symptom triage and personalized lifestyle guidance',
      'Automated appointment reminders and prescription history download',
    ],
    results: [
      'Deployed on Vercel with 99.9% uptime (heal247.vercel.app)',
      'Over 65% of patients book follow-ups directly through the portal',
      'Interactive AI Coach handles initial triage queries, reducing clinic phone queues',
    ],
    liveUrl: 'https://heal247.vercel.app/',
    linkLabel: 'Visit Live Web App',
    githubUrl: null,
    thumbnail: '/projects/heal-portal.png',
    images: [],
  },
  {
    slug: 'v-brows-and-beauty',
    title: 'V Brows & Beauty London',
    category: 'Website · Local Business & Salon',
    tagline: 'Modern salon website for a premier beauty venue in Crystal Palace, London.',
    description:
      'A boutique salon website created for a premier London beauty parlour established in 2015. Features service menus for threading, tinting, waxing, and facials, walk-in directions, customer reviews, and appointment inquiries.',
    role: ' Web Developer',
    timeline: '2 weeks',
    clientLocation: 'London, UK',
    tech: [
      'React',
      'Tailwind CSS',
      'Vite',
      'SEO & Schema Markup',
      'Vercel',
    ],
    problem:
      'V Brows & Beauty—the highest-rated eyebrow threading venue in Crystal Palace Triangle since 2015—needed a modern, elegant web presence to replace their outdated site, communicate walk-in pricing clearly, and boost local Google Search rankings.',
    solution:
      'I designed and developed a chic, mobile-optimized website highlighting their full range of treatments, pricing menus, hygiene standards, customer reviews, and interactive Crystal Palace location map.',
    features: [
      'Comprehensive treatments menu with transparent pricing (Threading, Tinting, Waxing, Facials)',
      'Local SEO optimization with Google Business Profile & LocalBusiness Schema',
      'Walk-in service timetable and instant booking inquiry links',
      'Interactive Google Maps integration for Crystal Palace Triangle visitors',
      'High-resolution gallery showcasing eyebrow styling and salon ambiance',
    ],
    results: [
      'Live and driving daily walk-in inquiries at vbrowsandbeauty.com',
      'Ranked #1 for "eyebrow threading Crystal Palace" on local search',
      'Over 50% increase in mobile web visits inquiring about beauty services',
    ],
    liveUrl: 'https://www.vbrowsandbeauty.com/',
    linkLabel: 'Visit Salon Website',
    githubUrl: null,
    thumbnail: '/projects/vbrows.png',
    images: [],
  },
]

/**
 * Helper to find a project by slug.
 * Returns undefined if no match (the page should show 404).
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

/**
 * Given the current slug, return the next project in the list (wraps around).
 */
export function getNextProject(currentSlug) {
  const index = projects.findIndex((p) => p.slug === currentSlug)
  if (index === -1) return projects[0]
  return projects[(index + 1) % projects.length]
}
