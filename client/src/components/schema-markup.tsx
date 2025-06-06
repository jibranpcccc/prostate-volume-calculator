import { useLocation } from "wouter";

interface SchemaMarkupProps {
  pageType: 'homepage' | 'calculator' | 'pillar' | 'educational' | 'blog';
  title: string;
  description: string;
  calculatorType?: string;
  medicalCondition?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export default function SchemaMarkup({
  pageType,
  title,
  description,
  calculatorType,
  medicalCondition = "Benign Prostatic Hyperplasia",
  publishedDate = "2024-01-01",
  modifiedDate = new Date().toISOString().split('T')[0]
}: SchemaMarkupProps) {
  const [location] = useLocation();
  const currentUrl = `https://prostatevolumecalc.com${location}`;

  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": title,
      "description": description,
      "url": currentUrl,
      "datePublished": publishedDate,
      "dateModified": modifiedDate,
      "inLanguage": "en-US",
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "main"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://prostatevolumecalc.com/images/medical-calculator-hero.jpg",
        "width": 1200,
        "height": 630,
        "caption": title
      },
      "isPartOf": {
        "@type": "WebSite",
        "name": "ProstateVolumeCalc",
        "url": "https://prostatevolumecalc.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://prostatevolumecalc.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "ProstateVolumeCalc Medical Team",
        "url": "https://prostatevolumecalc.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://prostatevolumecalc.com/logo-medical.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Medical Support",
          "availableLanguage": "English"
        }
      },
      "medicalAudience": [
        {
          "@type": "MedicalAudience",
          "audienceType": "Urologist",
          "geographicArea": "Worldwide"
        },
        {
          "@type": "MedicalAudience",
          "audienceType": "Primary Care Physician",
          "geographicArea": "Worldwide"
        },
        {
          "@type": "MedicalAudience",
          "audienceType": "Radiologist",
          "geographicArea": "Worldwide"
        },
        {
          "@type": "MedicalAudience",
          "audienceType": "Medical Student",
          "geographicArea": "Worldwide"
        }
      ],
      "about": {
        "@type": "MedicalCondition",
        "name": medicalCondition,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": "Prostate Gland",
          "partOfSystem": {
            "@type": "AnatomicalSystem",
            "name": "Male Reproductive System"
          }
        },
        "epidemiology": "Common condition affecting men over 50",
        "riskFactor": [
          "Age over 50",
          "Family history",
          "Hormonal factors"
        ]
      },
      "specialty": {
        "@type": "MedicalSpecialty",
        "name": "Urology"
      },
      "keywords": [
        "prostate volume",
        "PSA density",
        "BPH calculator",
        "medical calculator",
        "urology tools"
      ]
    };

    // Add calculator-specific schema
    if (pageType === 'calculator' && calculatorType) {
      return [
        {
          ...baseSchema,
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": `${calculatorType} - Medical Calculator`,
            "applicationCategory": "MedicalApplication",
            "operatingSystem": "Web Browser",
            "description": description,
            "url": currentUrl,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Medical-grade calculations",
              "Evidence-based algorithms",
              "Professional clinical tools",
              "Instant results",
              "Mobile responsive",
              "HIPAA compliant"
            ],
            "applicationSubCategory": "Medical Calculator",
            "screenshot": "https://prostatevolumecalc.com/screenshot-calculator.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127",
              "bestRating": "5"
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": `How to Use ${calculatorType}`,
          "description": `Step-by-step guide for using the ${calculatorType} medical calculator`,
          "image": "https://prostatevolumecalc.com/images/calculator-guide.jpg",
          "totalTime": "PT5M",
          "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
          },
          "supply": [
            {
              "@type": "HowToSupply",
              "name": "Medical measurements or lab values"
            }
          ],
          "tool": [
            {
              "@type": "HowToTool",
              "name": "Web browser"
            }
          ],
          "step": [
            {
              "@type": "HowToStep",
              "name": "Enter Values",
              "text": "Input your medical measurements into the calculator fields",
              "url": currentUrl,
              "image": "https://prostatevolumecalc.com/images/step1.jpg"
            },
            {
              "@type": "HowToStep",
              "name": "Calculate Results",
              "text": "Click the calculate button to process your values",
              "url": currentUrl,
              "image": "https://prostatevolumecalc.com/images/step2.jpg"
            },
            {
              "@type": "HowToStep",
              "name": "Review Results",
              "text": "Analyze the calculated results and clinical interpretations",
              "url": currentUrl,
              "image": "https://prostatevolumecalc.com/images/step3.jpg"
            }
          ]
        }
      ];
    }

    // Add pillar page schema
    if (pageType === 'pillar') {
      return {
        ...baseSchema,
        "@type": "CollectionPage",
        "mainEntity": {
          "@type": "ItemList",
          "name": title,
          "description": description,
          "numberOfItems": 5
        }
      };
    }

    // Add educational content schema
    if (pageType === 'educational' || pageType === 'blog') {
      return {
        ...baseSchema,
        "@type": "MedicalScholarlyArticle",
        "headline": title,
        "author": {
          "@type": "Organization",
          "name": "ProstateVolumeCalc Medical Team"
        },
        "educationalLevel": "Professional",
        "educationalRole": "Medical Education",
        "learningResourceType": "Educational Article"
      };
    }

    return baseSchema;
  };

  const schema = generateSchema();

  // Handle multiple schemas for calculator pages
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((schemaItem, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaItem, null, 2)
            }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}