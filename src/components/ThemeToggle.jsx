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
      className={
        className ??
        'inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface-raised text-ink transition-all hover:border-accent hover:text-accent hover:scale-105 cursor-pointer shadow-sm'
      }
    >
      {isDark ? (
        <Sun className="size-4 transition-transform duration-300 hover:rotate-45 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="size-4 transition-transform duration-300 hover:-rotate-12 text-slate-700" aria-hidden="true" />
      )}
    </button>
  )
}
