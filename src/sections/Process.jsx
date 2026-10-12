import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { process } from '../data/process.js'

export function Process() {
  return (
    <Section id="process" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Workflow & Delivery"
            title="From Initial Spark to App Store Deployment"
            description="A transparent, agile, milestone-driven lifecycle. You get clear demos and total visibility every week."
            align="center"
          />
        </MotionReveal>

        <div className="relative mt-8 sm:mt-12">
          {/* Central glowing vertical timeline line (hidden on mobile) */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-6 hidden h-full w-0.5 bg-gradient-to-b from-accent via-indigo-500/40 to-transparent md:left-1/2 md:block md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {process.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <MotionReveal
                  key={step.id}
                  delay={index * 0.08}
                  className={`relative flex flex-col md:flex-row md:items-center md:gap-12 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step number glowing orb badge (on the timeline) */}
                  <div className="absolute left-6 z-10 hidden size-12 -translate-x-1/2 items-center justify-center rounded-2xl border-2 border-accent bg-surface font-mono text-sm font-black text-accent shadow-lg shadow-accent/20 md:left-1/2 md:flex">
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div
                    className={`group relative flex-1 overflow-hidden rounded-2xl border border-line bg-surface/90 p-6 sm:p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl md:max-w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    {/* Top ambient hover gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Mobile step badge */}
                    <span className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-accent font-mono text-xs font-bold text-accent-fg shadow-sm md:hidden">
                      {step.step}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Spacer for the opposite side */}
                  <div className="hidden flex-1 md:block" />
                </MotionReveal>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
