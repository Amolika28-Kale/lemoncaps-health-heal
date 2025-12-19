import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = "https://lemoncapshealth.com/og-image.jpg", // Default premium medical image
}) {
  // Medical Business Structured Data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Lemoncaps Health & Heal",
    "url": "https://lemoncapshealth.com",
    "logo": "https://lemoncapshealth.com/logo.png",
    "description": "Premium healthcare facilitation connecting international patients to India’s top accredited hospitals.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Theme Color for Mobile Browsers - Clinical White */}
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph (Social Sharing) - Clean Look */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Lemoncaps Health & Heal" />

      {/* Twitter - Large Image Summary */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data for Medical Tourism Authority */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}