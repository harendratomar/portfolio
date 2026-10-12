import { cn } from '../utils/cn.js'

export function SectionHeading({ eyebrow, title, description, align = 'left', className }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <div className={cn('mb-3.5 flex', align === 'center' && 'justify-center')}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent uppercase tracking-wider shadow-sm">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
