import { motion, useReducedMotion } from 'framer-motion'

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    const Component = as
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    )
  }

  const MotionComponent = motion[as] || motion.div

  return (
    <MotionComponent
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
