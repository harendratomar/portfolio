import { cn } from '../utils/cn.js'

export function Tag({ children, className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg border border-line/70 bg-surface-raised px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
