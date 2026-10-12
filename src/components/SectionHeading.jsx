import { cn } from '../utils/cn.js'

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </div>
  )
}
