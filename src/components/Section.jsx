import { cn } from '../utils/cn.js'

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-8 sm:py-12 lg:py-14', className)} {...props}>
      {children}
    </section>
  )
}
