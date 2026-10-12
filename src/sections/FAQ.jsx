import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { faqs } from '../data/faq.js'
import { cn } from '../utils/cn.js'

export function FAQ() {
  const [openId, setOpenId] = useState(faqs[0]?.id || null)

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <Section id="faq" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know"
            description="Clear answers regarding pricing, project timelines, code ownership, and communication."
            align="center"
          />
        </MotionReveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id
            const answerId = `faq-answer-${faq.id}`
            const buttonId = `faq-button-${faq.id}`

            return (
              <MotionReveal key={faq.id} delay={idx * 0.05}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border transition-all duration-200',
                    isOpen
                      ? 'border-accent/40 bg-surface/90 shadow-md backdrop-blur-md'
                      : 'border-line/70 bg-surface/60 hover:border-line hover:bg-surface/80',
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => toggle(faq.id)}
                      className="flex w-full items-center justify-between p-5 text-left font-semibold text-ink transition-colors hover:text-accent cursor-pointer"
                    >
                      <span className="text-base sm:text-lg flex items-center gap-2.5">
                        <HelpCircle className="size-4 text-accent shrink-0 hidden sm:inline" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          'size-5 shrink-0 text-muted transition-transform duration-300',
                          isOpen && 'rotate-180 text-accent',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="border-t border-line/60 px-5 pt-3 pb-5 text-sm leading-relaxed text-muted sm:text-base animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
