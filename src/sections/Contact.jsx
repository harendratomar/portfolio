import emailjs from '@emailjs/browser'
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { MotionReveal } from '../components/MotionReveal.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { site } from '../data/site.js'

const projectTypes = [
  'Mobile App (React Native / iOS / Android)',
  'Web App / SaaS MVP / Dashboard',
  'AI Integration / Automation / Workflows',
  'Business Website / High-Converting Landing Page',
  'Codebase Maintenance / WebRTC Optimization',
  'Consultation / Architecture Review',
]

const budgetRanges = [
  '< $1,000',
  '$1,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000+',
  'Open to proposal / Undecided',
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: projectTypes[0],
    budget: budgetRanges[1],
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please provide your name.'
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief summary of your project or requirements.'
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message should be at least 15 characters long.'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            project_type: formData.projectType,
            budget: formData.budget,
            message: formData.message,
            to_name: site.name,
          },
          publicKey
        )
      } else if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error('Formspree submission failed')
      } else {
        // FormSubmit.co direct integration sending to site.email (buildwith06@gmail.com)
        const targetEmail = site.email || 'buildwith06@gmail.com'
        const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            'Project Scope': formData.projectType,
            'Estimated Budget': formData.budget,
            'Project Details': formData.message,
            _subject: `New Project Inquiry from ${formData.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        })

        if (!res.ok) {
          throw new Error('Form submission could not be completed')
        }
      }

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        projectType: projectTypes[0],
        budget: budgetRanges[1],
        message: '',
      })
    } catch (err) {
      console.error('Contact form submission error:', err)
      setStatus('error')
      setErrorMessage(
        'Could not send message automatically. Please reach out directly via email or WhatsApp.'
      )
    }
  }

  return (
    <Section id="contact" className="relative">
      <Container>
        <MotionReveal>
          <SectionHeading
            eyebrow="Initiate Project"
            title="Let’s Build Something Exceptional"
            description="Have a greenfield idea, an MVP to launch, or need an experienced full-stack engineer? Connect directly or submit your specs."
            align="center"
          />
        </MotionReveal>

        <div className="mt-8 sm:mt-10 grid gap-8 lg:gap-10 lg:grid-cols-12 lg:items-start">
          {/* Direct channels column */}
          <div className="space-y-6 lg:col-span-5">
            <MotionReveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-surface/90 p-6 sm:p-8 backdrop-blur-md shadow-card">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-accent" />
                  <h3 className="text-lg font-bold text-ink">Direct Channels</h3>
                </div>
                <p className="mt-2 text-sm text-muted">
                  Need a faster response? Reach out directly across any preferred platform:
                </p>

                <div className="mt-6 space-y-3.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 rounded-xl border border-line bg-surface-raised p-4 text-ink transition-all hover:border-accent hover:text-accent shadow-sm"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Mail className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-muted font-mono">Email Address</div>
                      <div className="font-semibold text-sm sm:text-base break-all">{site.email}</div>
                    </div>
                  </a>

                  {site.whatsappUrl && (
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-xl border border-line bg-surface-raised p-4 text-ink transition-all hover:border-emerald-500 hover:text-emerald-500 shadow-sm"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                        <MessageSquare className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-mono">WhatsApp Instant</div>
                        <div className="font-semibold text-sm sm:text-base">{site.whatsapp}</div>
                      </div>
                    </a>
                  )}

                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-line bg-surface-raised p-4 text-ink transition-all hover:border-accent hover:text-accent shadow-sm"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Calendar className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-muted font-mono">Calendly Scheduling</div>
                      <div className="font-semibold text-sm sm:text-base">Book a 30-min discovery call</div>
                    </div>
                  </a>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.15}>
              <div className="rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                  <Clock className="size-4" aria-hidden="true" />
                  Response SLA
                </div>
                <p className="mt-2 text-sm text-muted">
                  Guaranteed response within 24 hours on business days with actionable scope recommendations.
                </p>
              </div>
            </MotionReveal>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.15}>
              <div className="rounded-2xl border border-line bg-surface/90 p-6 shadow-xl backdrop-blur-md sm:p-8">
                {status === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                      <CheckCircle className="size-8" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-ink">Project Inquiry Dispatched!</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                      Thank you for reaching out. I will review your requirements and follow up within 24 hours with an initial estimation.
                    </p>
                    <div className="mt-6">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setStatus('idle')}
                        className="rounded-xl"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {status === 'error' && (
                      <div
                        role="alert"
                        className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
                      >
                        <AlertCircle className="size-5 shrink-0" aria-hidden="true" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink"
                        >
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Morgan"
                          className="mt-1.5 w-full rounded-xl border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          required
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink"
                        >
                          Work Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="mt-1.5 w-full rounded-xl border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                          required
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-project-type"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink"
                        >
                          Project Scope
                        </label>
                        <select
                          id="contact-project-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="mt-1.5 w-full rounded-xl border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-budget"
                          className="block text-xs font-semibold uppercase tracking-wider text-ink"
                        >
                          Estimated Budget
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="mt-1.5 w-full rounded-xl border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        >
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-ink"
                      >
                        Project Details & Objectives <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about what you're building, target delivery timeline, target platforms (iOS/Android/Web)..."
                        className="mt-1.5 w-full rounded-xl border border-line bg-surface-raised px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                        required
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto rounded-xl shadow-lg shadow-accent/20"
                      disabled={status === 'loading'}
                    >
                      <Send className="size-4 mr-1.5" aria-hidden="true" />
                      {status === 'loading' ? 'Transmitting...' : 'Send Inquiry'}
                    </Button>
                  </form>
                )}
              </div>
            </MotionReveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
