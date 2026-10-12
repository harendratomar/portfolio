/**
 * Services offered. Shown in the Services section on the home page.
 *
 * Fields:
 *   id          – unique key
 *   icon        – lucide-react icon name (imported in the component)
 *   title       – service name
 *   description – what the client gets
 *   startingAt  – placeholder pricing note (no fixed prices)
 */
export const services = [
  {
    id: 'website',
    icon: 'Globe',
    title: 'Business Website / Landing Page',
    description:
      'Fast, SEO-optimised, mobile-friendly websites that look great and convert visitors into customers. Perfect for startups and small businesses that need a professional online presence — fast.',
    startingAt: 'Starting from $500',
  },
  {
    id: 'webapp',
    icon: 'LayoutDashboard',
    title: 'Web App / Dashboard / SaaS MVP',
    description:
      'Custom web applications with modern UI, role-based access, real-time data, and third-party integrations. I build MVPs that are investor-ready and scalable from day one.',
    startingAt: 'Starting from $2,000',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    title: 'Mobile App (Android + iOS) MVP',
    description:
      'Cross-platform mobile apps using React Native or Flutter. One codebase, two platforms, native performance. From concept to App Store and Play Store.',
    startingAt: 'Starting from $3,000',
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    title: 'Maintenance & Optimisation',
    description:
      'Bug fixing, performance tuning, accessibility audits, and ongoing maintenance for existing apps. I also help teams migrate legacy codebases to modern stacks.',
    startingAt: 'Hourly or retainer',
  },
]
