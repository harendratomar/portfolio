import { Globe, LayoutDashboard, Smartphone, Wrench } from 'lucide-react'
import { Card } from '../components/Card.jsx'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { services } from '../data/services.js'

/** Map icon slug from data to the actual lucide component */
const iconMap = {
  Globe,
  LayoutDashboard,
  Smartphone,
  Wrench,
}

export function Services() {
  return (
    <Section id="services" className="bg-surface">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Services"
            title="How I can help"
            description="From a simple landing page to a full SaaS product — I've got you covered."
            align="center"
          />
        </MotionReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <MotionReveal key={service.id} delay={i * 0.08}>
                <Card hover className="h-full">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    {Icon ? (
                      <Icon className="size-6" aria-hidden="true" />
                    ) : (
                      <span className="text-lg font-bold" aria-hidden="true">?</span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-accent">
                    {service.startingAt}
                  </p>
                </Card>
              </MotionReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
