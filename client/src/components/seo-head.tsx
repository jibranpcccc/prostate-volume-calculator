import { useLocation } from "wouter";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  pageType?: "homepage" | "tools" | "calculator";
}

export default function SEOHead({ 
  title, 
  description, 
  canonical,
  pageType = "homepage" 
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
          schema: {
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
          }
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
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema)
        }}
      />
    </>
  );
}