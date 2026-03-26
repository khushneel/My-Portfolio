import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/utils/constants";

export default function SEO({
  title,
  description,
  path = "/",
  structuredData,
}) {
  const currentUrl = `https://khushneel.in${path}`;
  const seoTitle = title
    ? `${title} | ${SITE_CONFIG.title}`
    : `${SITE_CONFIG.fullName} | ${SITE_CONFIG.title}`;
  const seoDescription = description || SITE_CONFIG.bioShort;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.fullName,
    url: "https://khushneel.in",
    sameAs: [
      "https://github.com/khushneel",
      "https://linkedin.com/in/khushneel",
      "https://twitter.com/khushneel",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: SITE_CONFIG.bioShort,
    address: {
      "@type": "PostalAddress",
      addressCountry: SITE_CONFIG.location,
    },
    ...structuredData,
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={currentUrl} />

      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content="https://khushneel.in/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="https://khushneel.in/og-image.png" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
