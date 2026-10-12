import { ArrowLeft, Calendar, Compass, Home } from 'lucide-react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { Section } from '../components/Section.jsx'
import { SEO } from '../components/SEO.jsx'
import { site } from '../data/site.js'

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you requested could not be found." />
      <Section className="py-24 sm:py-32">
      <Container className="text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-accent-soft text-accent">
          <Compass className="size-8 animate-spin-slow" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm font-bold tracking-widest text-accent uppercase">
          Error 404
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-muted sm:text-lg">
          The link you followed may be broken, or the page may have been removed. Let's get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">
            <Home className="size-4" aria-hidden="true" />
            Back to Home
          </Button>
          <Button to="/#work" variant="secondary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Explore Projects
          </Button>
          <Button
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
          >
            <Calendar className="size-4" aria-hidden="true" />
            Book a Call
          </Button>
        </div>

        <div className="mt-12 border-t border-line/60 pt-8">
          <p className="text-xs text-muted">
            Looking for something specific? Contact directly at{' '}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent hover:underline"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  </>
  )
}
