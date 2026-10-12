import { motion } from 'framer-motion'

export function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* High-tech grid overlay */}
      <div className="bg-tech-grid absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Cyber Cyan Ambient Orb */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent blur-[120px] dark:from-cyan-500/15 dark:via-cyan-600/10"
      />

      {/* Futuristic Purple/Indigo Orb */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.95, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-purple-500/10 to-transparent blur-[140px] dark:from-indigo-600/15 dark:via-purple-700/10"
      />

      {/* Emerald Core Orb */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[130px] dark:from-emerald-500/10"
      />
    </div>
  )
}
