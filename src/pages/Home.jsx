import { SEO } from '../components/SEO.jsx'
import { site } from '../data/site.js'
import { About } from '../sections/About.jsx'
import { Contact } from '../sections/Contact.jsx'
import { FAQ } from '../sections/FAQ.jsx'
import { Hero } from '../sections/Hero.jsx'
import { Process } from '../sections/Process.jsx'
import { Services } from '../sections/Services.jsx'
import { Testimonials } from '../sections/Testimonials.jsx'
import { Work } from '../sections/Work.jsx'

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: 'Freelance Web and Mobile App Developer',
    description: site.headline,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India',
      addressLocality: site.location,
    },
    url: 'https://yourname.dev',
    sameAs: [site.social.linkedin, site.social.github, site.social.upwork],
    knowsAbout: site.techStack.map((t) => t.label),
  }

  return (
    <>
      <SEO
        title={`${site.name} — Freelance Web & Mobile Developer`}
        description={`${site.headline} ${site.subtext}`}
        canonical="/"
        schema={personSchema}
      />
      <Hero />
      <Work />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
