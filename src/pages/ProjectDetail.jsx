import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  ExternalLink,
  Layers,
  Sparkles,
  User,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/Button.jsx'
import { Card } from '../components/Card.jsx'
import { Container } from '../components/Container.jsx'
import { GithubIcon } from '../components/Icons.jsx'
import { Section } from '../components/Section.jsx'
import { Tag } from '../components/Tag.jsx'
import { SEO } from '../components/SEO.jsx'
import { getNextProject, getProjectBySlug } from '../data/projects.js'
import { site } from '../data/site.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" />
        <Section className="py-24 text-center">
          <Container>
            <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
              Case Study Not Found
            </span>
            <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Project "{slug}" was not found
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-muted">
              The project you are looking for may have been moved or renamed.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button to="/#work">
                <ArrowLeft className="size-4" aria-hidden="true" />
                View all projects
              </Button>
              <Button to="/" variant="secondary">
                Go Home
              </Button>
            </div>
          </Container>
        </Section>
      </>
    )
  }

  const nextProject = getNextProject(slug)

  return (
    <article className="pb-20">
      <SEO
        title={`${project.title} — Case Study`}
        description={`${project.title}: ${project.tagline}`}
        canonical={`/projects/${project.slug}`}
        type="article"
      />
      {/* Back link & Hero Header */}
      <div className="border-b border-line bg-surface py-12 sm:py-16">
        <Container>
          <div className="mb-6">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to all projects
            </Link>
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-md bg-accent-soft px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
                {project.category || 'Case Study'}
              </span>
              {project.clientLocation && (
                <span className="text-xs font-medium text-muted">
                  · Client in {project.clientLocation}
                </span>
              )}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line/60 pt-6 sm:grid-cols-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted uppercase tracking-wider">
                <User className="size-3.5 text-accent" aria-hidden="true" />
                Role
              </div>
              <div className="mt-1 font-semibold text-sm text-ink sm:text-base">
                {project.role}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted uppercase tracking-wider">
                <Calendar className="size-3.5 text-accent" aria-hidden="true" />
                Timeline
              </div>
              <div className="mt-1 font-semibold text-sm text-ink sm:text-base">
                {project.timeline}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2">
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted uppercase tracking-wider">
                <Layers className="size-3.5 text-accent" aria-hidden="true" />
                Tech Stack
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Tag key={t} className="text-xs">
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer" size="md">
                <ExternalLink className="size-4" aria-hidden="true" />
                {project.linkLabel || 'Live Demo'}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="md"
              >
                <GithubIcon className="size-4" />
                View Code
              </Button>
            )}
          </div>
        </Container>
      </div>

      {/* Main Content Body */}
      <Container className="mt-12 space-y-16">
        {/* Featured Image / Visual representation */}
        <div className="overflow-hidden rounded-2xl border border-line bg-accent-soft shadow-card">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.title} preview`}
              className="w-full object-cover"
            />
          ) : (
            <div className="flex aspect-21/9 items-center justify-center p-8 text-center sm:p-16">
              <div className="space-y-2">
                <span className="text-5xl font-black text-accent/30 sm:text-6xl">
                  {project.title}
                </span>
                <p className="text-xs font-medium text-muted uppercase tracking-widest">
                  Preview Screenshot Placeholder
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">The Challenge</h2>
            <div className="mt-1 h-1 w-12 rounded bg-accent" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.problem}
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-xl font-bold text-ink sm:text-2xl">The Solution</h2>
            <div className="mt-1 h-1 w-12 rounded bg-accent" />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.solution}
            </p>
          </Card>
        </div>

        {/* Key Features */}
        <section aria-labelledby="key-features-heading">
          <h2 id="key-features-heading" className="text-2xl font-bold text-ink sm:text-3xl">
            Key Features Implemented
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
              >
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CheckCircle className="size-4" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-ink">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Business Outcomes */}
        <section
          aria-labelledby="results-heading"
          className="rounded-2xl border border-accent/20 bg-accent-soft/30 p-8 sm:p-10"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider">
            <Sparkles className="size-4" aria-hidden="true" />
            Impact & Measurable Results
          </div>
          <h2 id="results-heading" className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            Outcomes Delivered
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="rounded-xl border border-line bg-surface p-5 shadow-sm"
              >
                <div className="text-2xl font-bold text-accent">0{i + 1}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink font-medium">{result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshot Gallery placeholder */}
        {project.images && project.images.length > 0 && (
          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-2xl font-bold text-ink sm:text-3xl">
              Visual Gallery
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-line bg-surface shadow-card"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next Project & Bottom CTA Bar */}
        <div className="border-t border-line pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                Up Next
              </span>
              <h3 className="text-xl font-bold text-ink">
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="hover:text-accent transition-colors"
                >
                  {nextProject.title}
                </Link>
              </h3>
              <p className="text-sm text-muted">{nextProject.tagline}</p>
            </div>

            <Button to={`/projects/${nextProject.slug}`} variant="secondary">
              Next project
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Bottom Conversion Box */}
          <div className="mt-12 rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Need a project built like this?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              Whether you need a web app MVP, mobile app, or modern business website, let’s discuss your roadmap and launch timeline.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={site.bookingUrl} target="_blank" rel="noreferrer" size="lg">
                Book a discovery call
              </Button>
              <Button to="/#contact" variant="secondary" size="lg">
                Send an enquiry
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </article>
  )
}
