import { Helmet } from 'react-helmet-async'
import { site } from '../data/site.js'

export function SEO({
  title,
  description,
  canonical,
  type = 'website',
  schema,
}) {
  const fullTitle = title
    ? `${title} | ${site.name} — Full-Stack Developer`
    : `${site.name} — Freelance Web & Mobile App Developer`

  const metaDescription =
    description ||
    `${site.headline} Specialized in React, Next.js, Node.js, and React Native. Available for freelance projects worldwide.`

  const siteUrl = site.url || 'https://portfolio-flax-seven-apzgdi7j3e.vercel.app'
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={site.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
