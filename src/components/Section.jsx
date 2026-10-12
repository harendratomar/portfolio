import { cn } from '../utils/cn.js'

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-24', className)} {...props}>
      {children}
    </section>
  )
}
