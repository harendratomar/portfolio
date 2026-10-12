import { cn } from '../utils/cn.js'

export function Card({ as: Tag = 'div', className, children, hover = true, ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-xl border border-line bg-surface p-6 shadow-card',
        hover && 'transition-shadow hover:shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
