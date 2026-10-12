import { cn } from '../utils/cn.js'

export function Card({ as: Tag = 'div', className, children, hover = true, ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-2xl border border-line bg-surface/85 p-6 sm:p-7 shadow-card backdrop-blur-md',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
