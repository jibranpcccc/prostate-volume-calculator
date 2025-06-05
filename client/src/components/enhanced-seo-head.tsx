import { useLocation } from "wouter";

interface EnhancedSEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  imageUrl?: string;
  imageAlt?: string;
  articleSection?: string;
  medicalCondition?: string;
  targetAudience?: string[];
  noindex?: boolean;
}

export default function EnhancedSEOHead({
  title,
  description,
  canonical,
  keywords = [],
  author = "ProstateVolumeCalc Medical Team",
  publishedTime,
  modifiedTime,
  imageUrl = "https://prostatevolumecalc.com/og-image-medical.jpg",
  imageAlt = "ProstateVolumeCalc Medical Calculator Interface",
  articleSection,
  medicalCondition,
  targetAudience = ["Healthcare Professionals", "Urologists", "Medical Students"],
  noindex = false
}: EnhancedSEOHeadProps) {
  const [location] = useLocation();
  
  const currentUrl = canonical || `https://prostatevolumecalc.com${location}`;
  const currentTitle = title || "Prostate Volume Calculator - Medical Grade Tool | ProstateVolumeCalc";
  const currentDescription = description || "Professional medical calculator for prostate volume assessment and BPH evaluation using validated ellipsoid formula. Trusted by healthcare professionals worldwide.";

  // Enhanced keyword generation based on page content
  const defaultKeywords = [
    "prostate volume calculator",
    "BPH assessment",
    "TRUS measurements", 
    "PSA density",
    "urology calculator",
    "medical calculator",
    "benign prostatic hyperplasia",
    "prostate health",
    "clinical decision support",
    "evidence-based medicine"
  ];

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  // Generate comprehensive structured data
  const generateStructuredData = () => {
    const baseStructuredData: any = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": currentTitle,
      "description": currentDescription,
      "url": currentUrl,
      "datePublished": publishedTime || "2024-01-01",
      "dateModified": modifiedTime || new Date().toISOString().split('T')[0],
      "author": {
        "@type": "Organization",
        "name": author,
        "url": "https://prostatevolumecalc.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ProstateVolumeCalc",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prostatevolumecalc.com/logo-medical.png",
          "width": 512,
          "height": 512
        }
      },
      "medicalAudience": targetAudience.map(audience => ({
        "@type": "MedicalAudience",
        "audienceType": audience
      })),
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "Prostate Volume Calculator",
        "applicationCategory": "MedicalApplication",
        "operatingSystem": "Web Browser",
        "description": "Medical-grade calculator for prostate volume assessment",
        "url": currentUrl,
        "screenshot": imageUrl
      }
    };

    if (medicalCondition) {
      baseStructuredData.about = {
        "@type": "MedicalCondition",
        "name": medicalCondition,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": "Prostate Gland"
        }
      };
    }

    if (articleSection) {
      baseStructuredData["@type"] = "Article";
      baseStructuredData.articleSection = articleSection;
    }

    return baseStructuredData;
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={allKeywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ProstateVolumeCalc" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Medical-specific meta tags */}
      <meta name="medical-audience" content={targetAudience.join(", ")} />
      <meta name="medical-specialty" content="Urology" />
      <meta name="content-type" content="Medical Calculator" />
      <meta name="clinical-evidence" content="Peer-reviewed" />
      
      {/* Article-specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {articleSection && <meta property="article:section" content={articleSection} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      {/* Additional structured data for medical organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "ProstateVolumeCalc",
            "url": "https://prostatevolumecalc.com",
            "logo": "https://prostatevolumecalc.com/logo-medical.png",
            "description": "Medical technology platform providing validated prostate volume calculation tools",
            "medicalSpecialty": "Urology",
            "serviceType": "Medical Calculator",
            "areaServed": "Worldwide",
            "audience": {
              "@type": "MedicalAudience",
              "audienceType": "Healthcare Professionals"
            }
          })
        }}
      />
    </>
  );
}