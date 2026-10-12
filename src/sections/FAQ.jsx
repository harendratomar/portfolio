import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Container } from '../components/Container.jsx'
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
    <Section id="faq" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about working together, timelines, and costs."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            const answerId = `faq-answer-${faq.id}`
            const buttonId = `faq-button-${faq.id}`

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-line bg-canvas transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggle(faq.id)}
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-muted transition-transform duration-200',
                        isOpen && 'rotate-180 text-accent'
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
                    className="border-t border-line/60 px-5 pt-3 pb-5 text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
