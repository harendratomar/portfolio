import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const STORAGE_KEY = 'theme'
export const ThemeContext = createContext(null)

export function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getStoredTheme() {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

export function applyThemeClass(resolved) {
  const root = document.documentElement
  root.classList.toggle('dark', resolved === 'dark')
  root.style.colorScheme = resolved
}

export function useThemeState() {
  const [preference, setPreference] = useState(() => getStoredTheme() ?? 'system')
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)

  const resolvedTheme = preference === 'system' ? systemTheme : preference

  useEffect(() => {
    applyThemeClass(resolvedTheme)
  }, [resolvedTheme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystemTheme(media.matches ? 'dark' : 'light')
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const setTheme = useCallback((next) => {
    setPreference(next)
    if (next === 'system') {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }, [resolvedTheme, setTheme])

  return useMemo(
    () => ({
      preference,
      resolvedTheme,
      setTheme,
      toggleTheme,
    }),
    [preference, resolvedTheme, setTheme, toggleTheme],
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
