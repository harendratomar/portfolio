import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'

export function ThemeToggle({ className }) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={className ?? 'inline-flex size-10 items-center justify-center rounded-lg text-ink hover:bg-accent-soft'}
    >
      {isDark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
    </button>
  )
}
