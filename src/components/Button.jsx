import { Link } from 'react-router-dom'
import { cn } from '../utils/cn.js'

const variants = {
  primary:
    'bg-gradient-to-r from-accent via-cyan-500 to-indigo-600 hover:from-accent-hover hover:via-cyan-600 hover:to-indigo-700 text-white shadow-md shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 active:scale-97',
  secondary:
    'bg-surface/90 backdrop-blur-md text-ink border border-line hover:border-accent/50 hover:bg-surface-raised active:scale-97 shadow-sm',
  ghost: 'bg-transparent text-ink hover:bg-surface-raised active:scale-97',
}

const sizes = {
  sm: 'px-3.5 py-1.5 text-xs',
  md: 'px-4.5 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
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
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200',
    'disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
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
