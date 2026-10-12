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
    <footer className="border-t border-line/70 bg-surface/80 backdrop-blur-md">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Link to="/" className="text-base font-bold text-ink hover:text-accent transition-colors">
              {site.name}
            </Link>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="size-1 rounded-full bg-emerald-500 animate-pulse" />
              Available for hire
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">
            © {currentYear} {site.name}. Architected with React, Tailwind & Next-Gen Stack.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
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
                    className="inline-flex size-9 items-center justify-center rounded-xl border border-line bg-surface-raised text-muted hover:border-accent hover:text-accent shadow-sm transition-all hover:scale-105"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-raised px-3.5 py-2 text-xs font-semibold text-muted hover:border-accent hover:text-accent shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
