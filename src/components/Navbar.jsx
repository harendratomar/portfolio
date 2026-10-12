import { Menu, Sparkles, X } from 'lucide-react'
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
  const [scrolled, setScrolled] = useState(false)
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className="sticky top-0 z-50 w-full transition-all duration-300 py-3 sm:py-4">
      <Container>
        <div
          className={cn(
            'flex h-14 items-center justify-between gap-4 rounded-full px-4 sm:px-6 transition-all duration-300',
            scrolled
              ? 'glass-panel shadow-lg shadow-black/5 dark:shadow-black/50'
              : 'border border-line/50 bg-surface/60 backdrop-blur-md',
          )}
        >
          {/* Logo with live status ping */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-ink transition-transform hover:scale-102"
            aria-label={`${site.name} home`}
          >
            <div className="relative flex size-8 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-indigo-500 font-mono text-xs font-black text-white shadow-sm shadow-accent/20">
              {site.shortName || 'HS'}
              <span className="absolute -top-0.5 -right-0.5 flex size-2.5">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
            </div>
            <span className="hidden sm:inline font-bold">{site.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {site.nav.map((item) => {
              const isActive = isHome && activeId === item.id
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={cn(
                    'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-accent font-semibold bg-accent-soft'
                      : 'text-muted hover:text-ink hover:bg-surface-raised/80',
                  )}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live availability pill badge */}
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </div>

            <ThemeToggle />

            <Button
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              size="sm"
              className="relative hidden sm:inline-flex overflow-hidden rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <Sparkles className="size-3.5 mr-1" aria-hidden="true" />
              {site.cta.hire}
            </Button>

            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-full text-ink hover:bg-surface-raised md:hidden transition-colors"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-4 top-20 z-50 rounded-2xl glass-panel p-5 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-2">
            <div className="mb-2 flex items-center justify-between pb-2 border-b border-line">
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">Navigation</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available Worldwide
              </span>
            </div>
            {site.nav.map((item) => {
              const isActive = isHome && activeId === item.id
              return (
                <NavLink
                  key={item.id}
                  to={item.href}
                  className={cn(
                    'rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                    isActive ? 'bg-accent-soft text-accent font-semibold' : 'text-ink hover:bg-surface-raised',
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
              className="mt-3 w-full rounded-xl"
              onClick={() => setOpen(false)}
            >
              <Sparkles className="size-4 mr-1.5" aria-hidden="true" />
              {site.cta.hire}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
