import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { Container } from './Container.jsx'
import { GithubIcon, LinkedinIcon, UpworkIcon } from './Icons.jsx'

const socialLinks = [
  { label: 'LinkedIn', href: site.social?.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', href: site.social?.github, icon: GithubIcon },
  { label: 'Upwork', href: site.social?.upwork, icon: UpworkIcon },
].filter((item) => Boolean(item.href))

const currentYear = new Date().getFullYear()

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="font-semibold text-ink">
            {site.name}
          </Link>
          <p className="mt-1 text-sm text-muted">
            © {currentYear} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <ul className="flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex size-10 items-center justify-center rounded-lg text-muted hover:bg-accent-soft hover:text-ink"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              )
            })}
          </ul>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-accent-soft hover:text-ink"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
