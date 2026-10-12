import { ThemeContext, useThemeState } from '../hooks/useTheme.js'

export function ThemeProvider({ children }) {
  const value = useThemeState()
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
