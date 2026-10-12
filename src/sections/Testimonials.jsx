import { Quote, Star } from 'lucide-react'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { testimonials } from '../data/testimonials.js'

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Trusted by Founders Worldwide"
            description="Direct feedback from startup founders and business owners who launched products with me."
            align="center"
          />
        </MotionReveal>

        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2">
          {testimonials.map((item, idx) => {
            const initials = item.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)

            return (
              <MotionReveal key={item.id} delay={idx * 0.1}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/85 p-6 sm:p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                  {/* Subtle top glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/15 transition-all" />

                  <div>
                    <div className="flex items-center justify-between text-amber-400">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-400" aria-hidden="true" />
                        ))}
                      </div>
                      <Quote className="size-6 text-muted/30 group-hover:text-accent/40 transition-colors" aria-hidden="true" />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink/90 italic sm:text-base">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-indigo-500 font-mono text-xs font-bold text-white shadow-sm">
                      {item.avatar ? (
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-full w-full rounded-xl object-cover"
                        />
                      ) : (
                        initials
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink">{item.name}</h4>
                      <p className="text-xs text-muted font-mono">{item.role}</p>
                    </div>
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
