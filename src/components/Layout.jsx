import { Outlet } from 'react-router-dom'
import { BackgroundGlow } from './BackgroundGlow.jsx'
import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'
import { ScrollToHash } from './ScrollToHash.jsx'

export function Layout() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <BackgroundGlow />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <ScrollToHash />
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
