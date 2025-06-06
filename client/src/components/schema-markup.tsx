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
      "isPartOf": {
        "@type": "WebSite",
        "name": "ProstateVolumeCalc",
        "url": "https://prostatevolumecalc.com"
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
        }
      },
      "medicalAudience": [
        {
          "@type": "MedicalAudience",
          "audienceType": "Urologist"
        },
        {
          "@type": "MedicalAudience",
          "audienceType": "Primary Care Physician"
        },
        {
          "@type": "MedicalAudience",
          "audienceType": "Radiologist"
        }
      ],
      "about": {
        "@type": "MedicalCondition",
        "name": medicalCondition,
        "associatedAnatomy": {
          "@type": "AnatomicalStructure",
          "name": "Prostate Gland"
        }
      }
    };

    // Add calculator-specific schema
    if (pageType === 'calculator' && calculatorType) {
      return {
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
            "Mobile responsive"
          ],
          "applicationSubCategory": "Medical Calculator",
          "screenshot": "https://prostatevolumecalc.com/screenshot-calculator.jpg"
        }
      };
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}