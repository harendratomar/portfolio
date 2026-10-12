import { Download, MapPin } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { Tag } from '../components/Tag.jsx'
import { site } from '../data/site.js'

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Bridging design, code, and business value"
          description="A quick look into my background, focus areas, and development philosophy."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Bio + Avatar Column */}
          <div className="space-y-6 lg:col-span-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Photo placeholder or Avatar */}
              <div className="relative flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-accent bg-accent-soft text-accent shadow-sm sm:size-32">
                {site.about.photo ? (
                  <img
                    src={site.about.photo}
                    alt={site.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-3xl font-bold tracking-tight">
                    {site.shortName || 'YN'}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-ink">{site.name}</h3>
                <p className="flex items-center gap-1.5 text-sm font-medium text-muted">
                  <MapPin className="size-4 text-accent" aria-hidden="true" />
                  {site.location}
                </p>
                <p className="mt-1 text-xs text-accent font-medium">
                  {site.availability}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted">
              {site.about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-2">
              <Button
                href={site.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="md"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Grouped Skills Column */}
          <div className="space-y-6 rounded-2xl border border-line bg-canvas p-6 shadow-sm lg:col-span-5 sm:p-8">
            <h3 className="text-lg font-bold text-ink">Skills & Expertise</h3>

            <div className="space-y-6">
              {site.skills.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h4 className="text-xs font-semibold tracking-wider text-muted uppercase">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Tag key={skill} className="px-3 py-1 text-xs font-medium">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
