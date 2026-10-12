import { cn } from '../utils/cn.js'

export function Tag({ children, className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
