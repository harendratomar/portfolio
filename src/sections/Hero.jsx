import { ArrowRight, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { site } from '../data/site.js'

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative">
        <MotionReveal>
          {/* Trust line */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {site.trust.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
              >
                <CheckCircle className="size-3.5" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {site.headline}
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.subtext}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#work" size="lg">
              {site.cta.viewWork}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            >
              <Calendar className="size-4" aria-hidden="true" />
              {site.cta.book}
            </Button>
          </div>
        </MotionReveal>

        {/* Tech stack row */}
        {/* <MotionReveal delay={0.15} className="mt-12 border-t border-line pt-8">
          <p className="mb-4 text-xs font-medium tracking-widest text-muted uppercase">
            Tech I work with
          </p>
          <div className="flex flex-wrap gap-3">
            {site.techStack.map((tech) => (
              <span
                key={tech.slug}
                className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                title={tech.label}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </MotionReveal> */}
      </Container>
    </Section>
  )
}
