import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  pageType?: "homepage" | "tools" | "calculator";
  keywords?: string[];
  medicalCondition?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  canonical,
  pageType = "homepage",
  keywords = [],
  medicalCondition
}: SEOHeadProps) {
  const [location] = useLocation();

  const getPageSpecificData = () => {
    switch (pageType) {
      case "tools":
        return {
          schema: {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Advanced Clinical Assessment Tools",
            "description": "Comprehensive suite of medical calculators including PSA density, IPSS assessment, and treatment decision support tools",
            "url": `https://prostatevolumecalc.com${location}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 5,
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "PSA Density Calculator",
                  "description": "Calculate PSA density for enhanced cancer risk stratification",
                  "applicationCategory": "Medical Calculator"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 2,
                  "name": "IPSS Assessment Tool",
                  "description": "International Prostate Symptom Score questionnaire for symptom evaluation",
                  "applicationCategory": "Medical Assessment"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 3,
                  "name": "Treatment Decision Guide",
                  "description": "Evidence-based treatment recommendations for BPH management",
                  "applicationCategory": "Clinical Decision Support"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 4,
                  "name": "Medical Data Visualization",
                  "description": "Interactive charts for clinical data analysis and interpretation",
                  "applicationCategory": "Data Visualization"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 5,
                  "name": "Comprehensive Risk Assessment",
                  "description": "Multi-factor risk evaluation combining clinical and laboratory data",
                  "applicationCategory": "Risk Assessment"
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://prostatevolumecalc.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Advanced Tools",
                  "item": "https://prostatevolumecalc.com/tools"
                }
              ]
            }
          }
        };
      case "calculator":
        return {
          schema: {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Prostate Volume Calculator",
            "description": "Medical-grade prostate volume calculator using validated ellipsoid formula",
            "url": `https://prostatevolumecalc.com${location}`,
            "applicationCategory": "Medical Calculator",
            "operatingSystem": "Web Browser",
            "permissions": "No special permissions required",
            "installUrl": "https://prostatevolumecalc.com",
            "screenshot": "https://prostatevolumecalc.com/calculator-screenshot.jpg"
          }
        };
      default:
        return {
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ProstateVolumeCalc",
              "url": "https://prostatevolumecalc.com",
              "description": "Professional medical calculator for prostate volume assessment and BPH evaluation",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://prostatevolumecalc.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ProstateVolumeCalc",
              "url": "https://prostatevolumecalc.com",
              "logo": "https://prostatevolumecalc.com/logo.png",
              "description": "Medical technology organization providing validated prostate volume calculation tools for healthcare professionals",
              "knowsAbout": [
                "Prostate Volume Calculation",
                "BPH Assessment",
                "TRUS Measurements",
                "PSA Density",
                "IPSS Scoring",
                "Urology",
                "Medical Imaging"
              ],
              "areaServed": "Worldwide",
              "serviceType": "Medical Calculator",
              "audience": {
                "@type": "Audience",
                "audienceType": "Healthcare Professionals"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "Prostate Volume Calculator - Medical Grade Tool",
              "description": "Evidence-based prostate volume calculator using validated ellipsoid formula for clinical decision-making",
              "url": `https://prostatevolumecalc.com${location}`,
              "medicalAudience": [
                {
                  "@type": "MedicalAudience",
                  "audienceType": "Urologist"
                },
                {
                  "@type": "MedicalAudience", 
                  "audienceType": "Radiologist"
                },
                {
                  "@type": "MedicalAudience",
                  "audienceType": "Primary Care Physician"
                }
              ],
              "about": {
                "@type": "MedicalCondition",
                "name": "Benign Prostatic Hyperplasia",
                "alternateName": "BPH",
                "description": "Non-cancerous enlargement of the prostate gland",
                "associatedAnatomy": {
                  "@type": "AnatomicalStructure",
                  "name": "Prostate Gland"
                }
              }
            }
          ]
        };
    }
  };

  const { schema } = getPageSpecificData();

  return (
    <>
      {title && (
        <title>{title}</title>
      )}
      
      {description && (
        <meta name="description" content={description} />
      )}
      
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || "Prostate Volume Calculator - Medical Grade Tool"} />
      <meta property="og:description" content={description || "Professional medical calculator for prostate volume assessment and BPH evaluation"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || `https://prostatevolumecalc.com${location}`} />
      <meta property="og:image" content="https://prostatevolumecalc.com/og-image.jpg" />
      <meta property="og:site_name" content="ProstateVolumeCalc" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Prostate Volume Calculator - Medical Grade Tool"} />
      <meta name="twitter:description" content={description || "Professional medical calculator for prostate volume assessment and BPH evaluation"} />
      <meta name="twitter:image" content="https://prostatevolumecalc.com/twitter-image.jpg" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="author" content="ProstateVolumeCalc Medical Team" />
      <meta name="publisher" content="ProstateVolumeCalc" />
      
      {/* Schema Markup */}
      {Array.isArray(schema) ? (
        schema.map((schemaItem, index) => (
          <script 
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaItem)
            }}
          />
        ))
      ) : (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      )}
    </>
  );
}