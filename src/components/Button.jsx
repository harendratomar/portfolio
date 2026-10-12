import { Link } from 'react-router-dom'
import { cn } from '../utils/cn.js'

const variants = {
  primary:
    'bg-accent text-accent-fg shadow-card hover:bg-accent-hover',
  secondary:
    'bg-surface text-ink ring-1 ring-line hover:bg-accent-soft',
  ghost: 'bg-transparent text-ink hover:bg-accent-soft',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

export function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const Tag = as ?? 'button'
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
