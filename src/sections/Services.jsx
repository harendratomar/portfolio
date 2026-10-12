import { Globe, LayoutDashboard, Smartphone, Sparkles, Check, ArrowRight } from 'lucide-react'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { site } from '../data/site.js'

const enhancedServices = [
  {
    id: 'mobile',
    icon: Smartphone,
    tag: 'Flagship Specialty',
    title: 'Cross-Platform Mobile Apps (iOS & Android)',
    description:
      'High-performance native-feeling mobile applications built with React Native & Expo. Integrated with low-latency WebRTC audio/video, real-time messaging, and in-app monetization.',
    highlights: [
      'App Store & Google Play compliance & deployment',
      'Agora RTC low-latency audio/video calling',
      'In-App Purchases (IAP) & payment checkout',
      'Offline-first caching & push notifications',
    ],
    startingAt: 'Turnaround in 3–6 weeks',
  },
  {
    id: 'webapp',
    icon: LayoutDashboard,
    tag: 'Full-Stack Architecture',
    title: 'Modern Web Apps & SaaS Platforms',
    description:
      'Scalable web applications, high-converting customer portals, and administrative dashboards built with Next.js, React, and Node.js with secure auth and real-time syncing.',
    highlights: [
      'Role-based access control & analytics dashboards',
      'Sub-second page speeds with server components',
      'Stripe & Razorpay automated billing & invoices',
      'RESTful & WebSocket backend architecture',
    ],
    startingAt: 'Turnaround in 2–4 weeks',
  },
  {
    id: 'ai-integrations',
    icon: Sparkles,
    tag: 'Next-Gen Capabilities',
    title: 'AI Workflows & Intelligent Integrations',
    description:
      'Enhance digital products with generative AI capabilities—from automated PDF report analysis and diagnosis summaries to custom conversational assistants and smart search.',
    highlights: [
      'OpenAI & Claude API prompt chaining & pipelines',
      'Structured document parsing & medical vitals extraction',
      'Conversational AI chatbots with contextual memory',
      'Automated background jobs & intelligent notifications',
    ],
    startingAt: 'Custom integration or MVP',
  },
  {
    id: 'realtime-rtc',
    icon: Globe,
    tag: 'Real-Time Systems',
    title: 'Real-Time Communication & APIs',
    description:
      'Low-latency interactive experiences: peer-to-peer live streaming, instant socket messaging, geolocation ride tracking, and custom payment webhooks.',
    highlights: [
      'Agora WebRTC voice and video streams',
      'Socket.io real-time chat, typing & presence',
      'Google Maps API routing & fare calculation',
      'Scalable MongoDB / PostgreSQL database models',
    ],
    startingAt: 'Milestone or retainer basis',
  },
]

export function Services() {
  return (
    <Section id="services" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Specialized Services"
            title="What I Build For Startups & Businesses"
            description="End-to-end engineering from architectural design to deployment. No cookie-cutter templates."
            align="center"
          />
        </MotionReveal>

        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
          {enhancedServices.map((service, i) => {
            const Icon = service.icon
            return (
              <MotionReveal key={service.id} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 sm:p-8 backdrop-blur-md shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                  {/* Subtle hover gradient background */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Top Tag and Icon */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="size-6" />
                      </div>
                      <span className="rounded-full border border-line bg-surface-raised px-3 py-1 text-[11px] font-mono font-semibold text-muted">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-ink group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-5 space-y-2 border-t border-line/60 pt-4">
                      {service.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-muted">
                          <Check className="size-4 shrink-0 text-accent mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-semibold">
                    <span className="text-accent font-mono">{service.startingAt}</span>
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-ink group-hover:text-accent transition-colors"
                    >
                      <span>Discuss Project</span>
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
