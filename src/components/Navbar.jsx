import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navSectionIds, site } from '../data/site.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { cn } from '../utils/cn.js'
import { Button } from './Button.jsx'
import { Container } from './Container.jsx'
import { ThemeToggle } from './ThemeToggle.jsx'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const activeId = useActiveSection(navSectionIds, isHome)

  const [prevKey, setPrevKey] = useState(location.key)
  if (prevKey !== location.key) {
    setPrevKey(location.key)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="shrink-0 text-base font-semibold tracking-tight text-ink"
          aria-label={`${site.name} home`}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const isActive = isHome && activeId === item.id
            return (
              <NavLink
                key={item.id}
                to={item.href}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-accent' : 'text-muted hover:text-ink',
                )}
                aria-current={isActive ? 'location' : undefined}
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {site.cta.hire}
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-ink hover:bg-accent-soft md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id={menuId}
          className="border-t border-line bg-canvas md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => {
              const isActive = isHome && activeId === item.id
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base font-medium',
                    isActive ? 'bg-accent-soft text-accent' : 'text-ink hover:bg-accent-soft',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              )
            })}
            <Button
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              {site.cta.hire}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
