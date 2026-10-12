import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Sparkles, Smartphone, Globe, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { Tag } from '../components/Tag.jsx'
import { projects } from '../data/projects.js'

const FILTER_TABS = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'ai-health', label: 'AI & Healthcare', icon: Sparkles },
  { id: 'web', label: 'Web & SaaS', icon: Globe },
  { id: 'realtime', label: 'Real-Time & RTC', icon: Radio },
]

function ProjectCard({ project }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Derive badges
  const isMobile = project.category?.toLowerCase().includes('mobile')
  const isAI = project.tech?.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('openai')) ||
               project.category?.toLowerCase().includes('ai')
  const isRTC = project.tech?.some(t => t.toLowerCase().includes('agora') || t.toLowerCase().includes('webrtc') || t.toLowerCase().includes('socket'))

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      {/* Interactive mouse spotlight glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-raised border-b border-line/60">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 to-indigo-500/10">
            <span className="text-4xl font-extrabold text-accent/40">{project.title[0]}</span>
          </div>
        )}

        {/* Gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

        {/* Platform & Special feature badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {isAI && (
            <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
              <Sparkles className="size-2.5" />
              AI Enabled
            </span>
          )}
          {isRTC && (
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-600/90 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
              <Radio className="size-2.5 animate-pulse" />
              Agora RTC
            </span>
          )}
          {isMobile ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/90 px-2.5 py-0.5 text-[10px] font-bold text-ink shadow-sm backdrop-blur-md">
              <Smartphone className="size-2.5 text-accent" />
              Mobile App
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/90 px-2.5 py-0.5 text-[10px] font-bold text-ink shadow-sm backdrop-blur-md">
              <Globe className="size-2.5 text-accent" />
              Web / SaaS
            </span>
          )}
        </div>

        {/* Client location badge */}
        {project.clientLocation && (
          <div className="absolute bottom-3 right-3 rounded-md bg-canvas/80 px-2 py-0.5 text-[10px] font-mono font-medium text-muted backdrop-blur-sm border border-line/60">
            📍 {project.clientLocation}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-semibold tracking-wider text-accent uppercase">
            {project.category}
          </span>
          {project.timeline && (
            <span className="text-[11px] font-mono text-muted">
              {project.timeline}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-muted line-clamp-2">
          {project.tagline || project.description}
        </p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Tag key={t} className="text-[11px] py-0.5 px-2 font-mono">
              {t}
            </Tag>
          ))}
          {project.tech.length > 4 && (
            <Tag className="text-[11px] py-0.5 px-2 font-mono text-muted">
              +{project.tech.length - 4}
            </Tag>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-line/60">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <span>View Architecture</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-ink transition-colors"
              title={project.linkLabel || 'Visit Live'}
            >
              <span>{project.linkLabel ? project.linkLabel.replace('View on ', '').replace('Visit Live ', '') : 'Live'}</span>
              <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Work() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'mobile') {
      return project.category?.toLowerCase().includes('mobile') || project.tech?.some(t => t.includes('React Native') || t.includes('Flutter'))
    }
    if (activeFilter === 'ai-health') {
      return (
        project.category?.toLowerCase().includes('ai') ||
        project.category?.toLowerCase().includes('health') ||
        project.tech?.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('openai'))
      )
    }
    if (activeFilter === 'web') {
      return project.category?.toLowerCase().includes('web') || project.category?.toLowerCase().includes('saas')
    }
    if (activeFilter === 'realtime') {
      return project.tech?.some(t => t.toLowerCase().includes('agora') || t.toLowerCase().includes('socket') || t.toLowerCase().includes('webrtc'))
    }
    return true
  })

  return (
    <Section id="work" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Engineered for Impact"
            title="Featured Production Work"
            description="Proven client applications running in production across iOS App Store, Google Play, and enterprise clouds."
            align="center"
          />
        </MotionReveal>

        {/* Filter Tabs Bar */}
        <MotionReveal delay={0.1} className="mt-8 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-line bg-surface/80 p-1.5 backdrop-blur-md shadow-sm">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-accent text-accent-fg shadow-sm'
                      : 'text-muted hover:text-ink hover:bg-surface-raised'
                  }`}
                >
                  {Icon && <Icon className="size-3.5" />}
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </MotionReveal>

        {/* Animated Projects Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  )
}
