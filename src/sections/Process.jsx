import { Container } from '../components/Container.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { process } from '../data/process.js'

export function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="How I work"
          description="A transparent, milestone-driven process so you always know what's happening."
          align="center"
        />

        <div className="relative mt-12">
          {/* Vertical connector line (hidden on mobile) */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-6 hidden h-full w-px bg-line md:left-1/2 md:block md:-translate-x-px"
          />

          <div className="space-y-8 md:space-y-12">
            {process.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row md:items-start md:gap-12 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step number badge (on the timeline) */}
                  <div className="absolute left-6 z-10 hidden size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-canvas text-sm font-bold text-accent md:left-1/2 md:flex">
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div
                    className={`relative flex-1 rounded-xl border border-line bg-surface p-6 shadow-card md:max-w-[calc(50%-2rem)] ${
                      isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    {/* Mobile step badge */}
                    <span className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-fg md:hidden">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden flex-1 md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
