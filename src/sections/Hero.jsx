import { ArrowRight, Calendar, MessageSquare, Sparkles } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { HeroConsole } from '../components/HeroConsole.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { site } from '../data/site.js'

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28">
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7">
            <MotionReveal>
              {/* Futuristic Eyebrow Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent shadow-sm">
                <span className="flex size-2">
                  <span className="animate-radar-ping absolute inline-flex size-2 rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                <span>AI-Era Full-Stack & Mobile Engineer</span>
                <span className="text-muted/60">|</span>
                <span className="text-muted dark:text-muted/90 font-medium">{site.availability}</span>
              </div>

              {/* Bold Gradient Headline */}
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                I build{' '}
                <span className="bg-gradient-to-r from-accent via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  revenue-ready
                </span>{' '}
                web, mobile & AI apps.
              </h1>

              {/* Subtext */}
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
                Specialising in <strong className="font-semibold text-ink">React Native</strong>,{' '}
                <strong className="font-semibold text-ink">Next.js</strong>, and{' '}
                <strong className="font-semibold text-ink">Agora RTC</strong> audio/video platforms. 
                I turn rough concepts into polished, scalable software — from discovery to App Store launch.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/#work" size="lg" className="rounded-xl shadow-lg shadow-accent/20">
                  {site.cta.viewWork}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="lg"
                  className="rounded-xl"
                >
                  <Calendar className="size-4" aria-hidden="true" />
                  {site.cta.book}
                </Button>
                {site.whatsappUrl && (
                  <Button
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                    size="lg"
                    className="rounded-xl border border-line/60"
                  >
                    <MessageSquare className="size-4 text-emerald-500" aria-hidden="true" />
                    WhatsApp Chat
                  </Button>
                )}
              </div>

              {/* Key Trust Highlights */}
              <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted">
                {site.trust.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line/70 bg-surface px-3 py-1 font-medium text-ink shadow-sm"
                  >
                    <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: High-Tech Interactive Console */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.15}>
              <HeroConsole />
            </MotionReveal>
          </div>
        </div>

        {/* Tech Stack Interactive Ribbon */}
        <MotionReveal delay={0.25} className="mt-16 sm:mt-20 border-t border-line/60 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-between">
            <p className="text-xs font-bold tracking-widest text-muted uppercase">
              Core Tech Stack & Architectures
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {site.techStack.map((tech) => (
                <span
                  key={tech.slug}
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-all hover:scale-105 hover:border-accent hover:text-accent hover:shadow-sm"
                >
                  <span className="size-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  )
}
