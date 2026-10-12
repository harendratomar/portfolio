import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Cpu, Play, Radio, Sparkles, Terminal } from 'lucide-react'

export function HeroConsole() {
  const [activeTab, setActiveTab] = useState('terminal')
  const [copied, setCopied] = useState(false)
  const [simulatedPing, setSimulatedPing] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npx harendra-singh')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRunPing = () => {
    setSimulatedPing(true)
    setTimeout(() => setSimulatedPing(false), 2500)
  }

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Ambient gradient glow behind the console */}
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-indigo-500/20 to-emerald-500/25 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 dark:opacity-50"
      />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-2xl backdrop-blur-xl transition-all">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-line/80 px-4 py-3 bg-surface-raised/60">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-rose-500/80" />
            <div className="size-3 rounded-full bg-amber-500/80" />
            <div className="size-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs font-semibold text-muted">
              harendra.dev@system-v2
            </span>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center rounded-lg bg-canvas p-0.5 border border-line/60">
            <button
              type="button"
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === 'terminal'
                  ? 'bg-accent text-accent-fg shadow-sm font-semibold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Terminal className="size-3" />
              Terminal
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === 'architecture'
                  ? 'bg-accent text-accent-fg shadow-sm font-semibold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Cpu className="size-3" />
              Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('metrics')}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                activeTab === 'metrics'
                  ? 'bg-accent text-accent-fg shadow-sm font-semibold'
                  : 'text-muted hover:text-ink'
              }`}
            >
              <Sparkles className="size-3" />
              Impact
            </button>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="p-5 font-mono text-xs sm:text-sm">
          <AnimatePresence mode="wait">
            {activeTab === 'terminal' && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between text-muted pb-1 border-b border-line/40">
                  <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
                    <Radio className="size-3 animate-pulse" />
                    STATUS: READY FOR PRODUCTION
                  </span>
                  <span className="text-[11px] text-muted">Node v22.x · React Native · Agora</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-ink">
                    <span className="text-accent font-bold">$</span>
                    <span>harendra.queryCapabilities()</span>
                  </div>
                  <div className="rounded-lg bg-surface-raised/70 p-3 text-xs leading-relaxed text-muted border border-line/50">
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{`{`}</p>
                    <p className="pl-4">
                      <span className="text-muted">specialties:</span> [
                      <span className="text-emerald-600 dark:text-emerald-400">"React Native"</span>,{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">"Next.js"</span>,{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">"Agora WebRTC"</span>,{' '}
                      <span className="text-emerald-600 dark:text-emerald-400">"AI Workflows"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-muted">realTimeLatency:</span>{' '}
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">"&lt; 200ms audio/video"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted">appStoreReady:</span>{' '}
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">true</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-muted">turnaroundSpeed:</span>{' '}
                      <span className="text-cyan-600 dark:text-cyan-400">"MVP in 2–4 weeks"</span>
                    </p>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold">{`}`}</p>
                  </div>
                </div>

                {/* Interactive Action Row inside console */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleRunPing}
                    disabled={simulatedPing}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-raised px-3 py-1.5 text-xs font-medium text-ink transition-all hover:border-accent hover:text-accent"
                  >
                    <Play className="size-3" />
                    {simulatedPing ? 'Testing latency... 18ms OK' : 'Simulate RTC Ping'}
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted transition-all hover:text-ink"
                    title="Copy CLI alias"
                  >
                    {copied ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                    <span>{copied ? 'Copied' : 'npx harendra-singh'}</span>
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <p className="text-xs text-muted font-medium">Production Architecture Topology</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="font-semibold text-ink text-xs">Client Apps (iOS/Android/Web)</span>
                    </div>
                    <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] text-cyan-600 dark:text-cyan-300 font-bold">
                      React Native / Next.js
                    </span>
                  </div>

                  <div className="flex justify-center text-muted">
                    <span className="text-[11px]">▼ Real-Time Sync (Agora RTC & Socket.io)</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/5 p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-indigo-400 animate-pulse" />
                      <span className="font-semibold text-ink text-xs">Backend & AI Pipeline</span>
                    </div>
                    <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] text-indigo-600 dark:text-indigo-300 font-bold">
                      Node.js · LLM API · Razorpay
                    </span>
                  </div>

                  <div className="flex justify-center text-muted">
                    <span className="text-[11px]">▼ Scalable Persistence</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      <span className="font-semibold text-ink text-xs">Cloud Database & Storage</span>
                    </div>
                    <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-600 dark:text-emerald-300 font-bold">
                      MongoDB / Firebase / AWS
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'metrics' && (
              <motion.div
                key="metrics"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="rounded-xl border border-line bg-surface-raised p-3.5">
                  <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">20+</div>
                  <div className="mt-1 text-xs font-semibold text-ink">Apps Delivered</div>
                  <div className="mt-0.5 text-[10px] text-muted">Production deployed</div>
                </div>
                <div className="rounded-xl border border-line bg-surface-raised p-3.5">
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">3+ Yrs</div>
                  <div className="mt-1 text-xs font-semibold text-ink">Experience</div>
                  <div className="mt-0.5 text-[10px] text-muted">Web & Mobile ecosystem</div>
                </div>
                <div className="rounded-xl border border-line bg-surface-raised p-3.5">
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">&lt;200ms</div>
                  <div className="mt-1 text-xs font-semibold text-ink">WebRTC Latency</div>
                  <div className="mt-0.5 text-[10px] text-muted">Hlotalk audio/video</div>
                </div>
                <div className="rounded-xl border border-line bg-surface-raised p-3.5">
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400">4+</div>
                  <div className="mt-1 text-xs font-semibold text-ink">Countries</div>
                  <div className="mt-0.5 text-[10px] text-muted">US, UK, Bahamas, India</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
