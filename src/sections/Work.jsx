import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { Tag } from '../components/Tag.jsx'
import { projects } from '../data/projects.js'

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden bg-accent-soft">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-bold text-accent/40">{project.title[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {project.category && (
          <span className="mb-1 text-[11px] font-semibold tracking-wider text-accent uppercase">
            {project.category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Tag key={t} className="text-[11px]">{t}</Tag>
          ))}
          {project.tech.length > 4 && (
            <Tag className="text-[11px]">+{project.tech.length - 4}</Tag>
          )}
        </div>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          View case study
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}

export function Work() {
  return (
    <Section id="work">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Work"
            title="Selected projects"
            description="Real problems, real solutions. Here's a few projects I'm proud of."
            align="center"
          />
        </MotionReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <MotionReveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </MotionReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
