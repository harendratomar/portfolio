import emailjs from '@emailjs/browser'
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '../components/Button.jsx'
import { Container } from '../components/Container.jsx'
import { Section } from '../components/Section.jsx'
import { SectionHeading } from '../components/SectionHeading.jsx'
import { site } from '../data/site.js'

const projectTypes = [
  'Business Website / Landing Page',
  'Web App / SaaS MVP / Dashboard',
  'Mobile App (React Native / Flutter)',
  'Maintenance / Bug Fixes / Optimization',
  'Other / Consultation',
]

const budgetRanges = [
  '< $1,000',
  '$1,000 - $3,000',
  '$3,000 - $5,000',
  '$5,000+',
  'Not sure yet',
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
        // Send via EmailJS
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
        // Send via Formspree
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
        // Demo fallback when no API keys are provided yet
        await new Promise((resolve) => setTimeout(resolve, 800))
        console.info(
          'Form submitted in preview mode (no EmailJS or Formspree keys configured):',
          formData
        )
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
    <Section id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s discuss your next project"
          description="Have an idea or need an experienced developer to jump into your project? Fill out the form or reach out directly."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Direct channels column */}
          <div className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="text-lg font-bold text-ink">Direct Channels</h3>
              <p className="mt-2 text-sm text-muted">
                Prefer skip the form? Connect with me directly on any of these platforms:
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 rounded-xl border border-line bg-canvas p-4 text-ink transition-all hover:border-accent hover:text-accent"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Mail className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Email</div>
                    <div className="font-semibold text-sm sm:text-base break-all">{site.email}</div>
                  </div>
                </a>

                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-line bg-canvas p-4 text-ink transition-all hover:border-accent hover:text-accent"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <MessageSquare className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">WhatsApp</div>
                    <div className="font-semibold text-sm sm:text-base">{site.whatsapp}</div>
                  </div>
                </a>

                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-line bg-canvas p-4 text-ink transition-all hover:border-accent hover:text-accent"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Calendar className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-muted">Calendly</div>
                    <div className="font-semibold text-sm sm:text-base">Book a 20-min intro call</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                <Clock className="size-4" aria-hidden="true" />
                Response Time
              </div>
              <p className="mt-2 text-sm text-muted">
                I typically respond within 24 hours on weekdays.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-8 lg:col-span-7">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <CheckCircle className="size-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-ink">Message Received!</h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                  Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400"
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
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
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
                    Project Details <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you're building, target deadlines, or any specific requirements..."
                    className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-4 py-2.5 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={status === 'loading'}
                >
                  <Send className="size-4" aria-hidden="true" />
                  {status === 'loading' ? 'Sending enquiry...' : 'Send Enquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
