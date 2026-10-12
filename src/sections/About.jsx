import { useState } from 'react'
import { Download, MapPin, Check, Copy, Sparkles, Code2, Globe2 } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { site } from '../data/site.js'

export function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(site.skills[0]?.category)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <Section id="about" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Architect & Builder"
            title="Bridging High-Fidelity Code & Business Value"
            description="Proven experience shipping robust mobile apps and scalable web platforms for international clients."
            align="center"
          />
        </MotionReveal>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:gap-10 lg:grid-cols-12 lg:items-start">
          {/* Bio + Avatar Column */}
          <div className="space-y-6 lg:col-span-7">
            <MotionReveal delay={0.1}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* Cyber Avatar Frame */}
                <div className="relative group size-28 sm:size-32 shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent via-cyan-400 to-indigo-500 opacity-75 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"
                  />
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-line bg-surface text-accent shadow-md">
                    {site.about.photo ? (
                      <img
                        src={site.about.photo}
                        alt={site.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-3xl font-extrabold tracking-tight font-mono">
                        {site.shortName || 'HS'}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-ink">{site.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Online
                    </span>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-muted mt-1">
                    <MapPin className="size-4 text-accent" aria-hidden="true" />
                    {site.location}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-accent">
                    {site.availability}
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Bio paragraphs */}
            <MotionReveal delay={0.15} className="space-y-4 text-sm sm:text-base leading-relaxed text-muted">
              {site.about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </MotionReveal>

            {/* Actions & Global Proof */}
            <MotionReveal delay={0.2} className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                size="md"
                className="rounded-xl shadow-sm"
              >
                <Download className="size-4 mr-1.5" aria-hidden="true" />
                Download Resume
              </Button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-all hover:border-accent hover:text-accent shadow-sm"
              >
                {copiedEmail ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </MotionReveal>

            {/* International Presence Pills */}
            <MotionReveal delay={0.25} className="pt-2">
              <div className="flex items-center gap-2 text-xs text-muted">
                <Globe2 className="size-4 text-accent" />
                <span className="font-semibold text-ink">Client footprint:</span>
                <span className="rounded bg-surface-raised px-2 py-0.5 border border-line">🇬🇧 United Kingdom</span>
                <span className="rounded bg-surface-raised px-2 py-0.5 border border-line">🇧🇸 Bahamas</span>
                <span className="rounded bg-surface-raised px-2 py-0.5 border border-line">🇮🇳 India</span>
                <span className="rounded bg-surface-raised px-2 py-0.5 border border-line">🇺🇸 United States</span>
              </div>
            </MotionReveal>
          </div>

          {/* Grouped Skills Column with interactive categories */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface/90 p-6 shadow-xl backdrop-blur-md sm:p-8">
                <div className="flex items-center justify-between pb-4 border-b border-line/60">
                  <div className="flex items-center gap-2">
                    <Code2 className="size-5 text-accent" />
                    <h3 className="text-lg font-bold text-ink">Specialized Skillset</h3>
                  </div>
                  <span className="font-mono text-xs text-muted">v2026.1</span>
                </div>

                {/* Skill Category Selector Tabs */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {site.skills.map((group) => {
                    const isSelected = activeSkillCategory === group.category
                    return (
                      <button
                        key={group.category}
                        type="button"
                        onClick={() => setActiveSkillCategory(group.category)}
                        className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-accent text-accent-fg shadow-sm'
                            : 'bg-surface-raised text-muted hover:text-ink border border-line/60'
                        }`}
                      >
                        {group.category}
                      </button>
                    )
                  })}
                </div>

                {/* Detailed Active Skills Display */}
                <div className="mt-6 space-y-4">
                  {site.skills
                    .filter((group) => group.category === activeSkillCategory)
                    .map((group) => (
                      <div key={group.category} className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              className="group inline-flex items-center gap-1.5 rounded-xl border border-line bg-surface-raised px-3 py-2 text-xs font-medium text-ink transition-all hover:border-accent hover:text-accent shadow-sm"
                            >
                              <span className="size-1.5 rounded-full bg-accent" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Architecture Highlights Box */}
                <div className="mt-8 rounded-xl border border-accent/20 bg-accent-soft p-4 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-accent mb-1">
                    <Sparkles className="size-3.5" />
                    Engineering Standard
                  </div>
                  <p className="text-muted leading-relaxed">
                    Clean modular codebases, TypeScript strict checking, automated CI/CD builds, and high-coverage unit & integration flows.
                  </p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
