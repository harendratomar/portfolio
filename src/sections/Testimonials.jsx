import { Quote, Star } from 'lucide-react'
import { Card } from '../components/Card.jsx'
import { Container } from '../components/Container.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { testimonials } from '../data/testimonials.js'

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          description="Direct feedback from founders and teams I've partnered with."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((item) => {
            const initials = item.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2)

            return (
              <Card key={item.id} className="flex flex-col justify-between" hover>
                <div>
                  <div className="flex items-center justify-between text-accent">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-accent" aria-hidden="true" />
                      ))}
                    </div>
                    <Quote className="size-6 opacity-30" aria-hidden="true" />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink italic sm:text-base">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-line/60 pt-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      initials
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink">{item.name}</h4>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
