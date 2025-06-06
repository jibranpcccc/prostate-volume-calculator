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
  
  // Dynamic title generation based on page context
  const generateOptimizedTitle = () => {
    if (title) return title;
    
    const pathSegments = location.split('/').filter(Boolean);
    if (pathSegments.length === 0) {
      return "Prostate Volume Calculator - Medical Grade BPH Assessment Tool | ProstateVolumeCalc";
    }
    
    // Page-specific title optimization
    const titleMap: { [key: string]: string } = {
      'psa-calculators': 'PSA Calculators Suite - Density, Velocity & Doubling Time | ProstateVolumeCalc',
      'psa-density-calculator': 'PSA Density Calculator - Improve Prostate Cancer Detection | ProstateVolumeCalc',
      'psa-velocity-calculator': 'PSA Velocity Calculator - Track Cancer Risk Over Time | ProstateVolumeCalc',
      'psa-doubling-time-calculator': 'PSA Doubling Time Calculator - Monitor Cancer Progression | ProstateVolumeCalc',
      'free-psa-ratio-calculator': 'Free PSA Ratio Calculator - Enhanced Cancer Screening | ProstateVolumeCalc',
      'age-specific-psa-calculator': 'Age-Specific PSA Calculator - Personalized Reference Ranges | ProstateVolumeCalc',
      'bph-luts-tools': 'BPH & LUTS Assessment Tools - Comprehensive Urinary Symptom Analysis | ProstateVolumeCalc',
      'ipss-questionnaire': 'IPSS Questionnaire - International Prostate Symptom Score | ProstateVolumeCalc',
      'post-void-residual-calculator': 'Post-Void Residual Calculator - Bladder Emptying Assessment | ProstateVolumeCalc',
      'bladder-capacity-calculator': 'Bladder Capacity Calculator - Functional Volume Assessment | ProstateVolumeCalc',
      'voiding-diary-analyzer': 'Voiding Diary Analyzer - 24-Hour LUTS Pattern Analysis | ProstateVolumeCalc',
      'prostate-cancer-tools': 'Prostate Cancer Risk Tools - Comprehensive Assessment Suite | ProstateVolumeCalc',
      'risk-calculator': 'Prostate Cancer Risk Calculator - PCPT Algorithm | ProstateVolumeCalc',
      'mens-health-calculators': 'Men\'s Health Calculators - Comprehensive Assessment Tools | ProstateVolumeCalc',
      'erectile-dysfunction-calculator': 'Erectile Dysfunction Calculator - IIEF-5 Assessment | ProstateVolumeCalc',
      'testosterone-deficiency-calculator': 'Testosterone Deficiency Calculator - ADAM Questionnaire | ProstateVolumeCalc',
      'free-testosterone-calculator': 'Free Testosterone Calculator - Bioavailable Levels | ProstateVolumeCalc',
      'cardiovascular-risk-calculator': 'Cardiovascular Risk Calculator - 10-Year Assessment | ProstateVolumeCalc',
      'bmi-calculator': 'BMI Calculator - Body Mass Index with Health Risk Analysis | ProstateVolumeCalc',
      'education': 'Medical Education Hub - BPH & Prostate Health Resources | ProstateVolumeCalc',
      'understanding-bph': 'Understanding BPH - Complete Clinical Guide | ProstateVolumeCalc',
      'blog': 'Medical Blog - Latest Urology Research & Clinical Insights | ProstateVolumeCalc',
      'case-studies': 'Clinical Case Studies - Real-World BPH Management | ProstateVolumeCalc',
      'resources': 'Clinical Resources - Medical Guidelines & References | ProstateVolumeCalc',
      'faq': 'FAQ - Prostate Health & Calculator Questions Answered | ProstateVolumeCalc'
    };
    
    const lastSegment = pathSegments[pathSegments.length - 1];
    return titleMap[lastSegment] || `${lastSegment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} | ProstateVolumeCalc`;
  };
  
  // Dynamic description generation
  const generateOptimizedDescription = () => {
    if (description) return description;
    
    const pathSegments = location.split('/').filter(Boolean);
    if (pathSegments.length === 0) {
      return "Professional medical calculator for accurate prostate volume assessment using validated ellipsoid formula. Calculate PSA density, evaluate BPH severity, and support clinical decision-making with evidence-based tools trusted by urologists worldwide.";
    }
    
    const descriptionMap: { [key: string]: string } = {
      'psa-calculators': 'Complete PSA analysis toolkit including density, velocity, doubling time, free ratio, and age-specific calculators. Evidence-based tools for improved prostate cancer detection and risk stratification.',
      'psa-density-calculator': 'Calculate PSA density to improve prostate cancer detection accuracy. Uses prostate volume and PSA levels for enhanced diagnostic precision in clinical practice.',
      'psa-velocity-calculator': 'Track PSA rate of change over time to identify aggressive prostate cancer. Calculate annual PSA velocity with multiple data points for improved risk assessment.',
      'psa-doubling-time-calculator': 'Monitor PSA doubling time to assess cancer progression risk. Essential tool for active surveillance and treatment decision-making in prostate cancer management.',
      'free-psa-ratio-calculator': 'Calculate free to total PSA percentage ratio for improved prostate cancer screening specificity. Reduce unnecessary biopsies with enhanced diagnostic accuracy.',
      'age-specific-psa-calculator': 'Age-adjusted PSA reference ranges for personalized prostate cancer screening. Compare patient PSA levels against age-appropriate normal values for improved sensitivity.',
      'bph-luts-tools': 'Comprehensive BPH and LUTS assessment tools including IPSS questionnaire, post-void residual calculator, and voiding diary analyzer for complete urinary symptom evaluation.',
      'ipss-questionnaire': 'International Prostate Symptom Score (IPSS) questionnaire for standardized BPH severity assessment. Calculate symptom scores and quality of life impact with validated clinical tool.',
      'post-void-residual-calculator': 'Assess bladder emptying efficiency with post-void residual volume calculator. Determine clinical significance and treatment implications for LUTS management.',
      'bladder-capacity-calculator': 'Calculate functional and estimated bladder capacity for comprehensive LUTS evaluation. Assess voiding patterns and bladder function with evidence-based formulas.',
      'voiding-diary-analyzer': 'Analyze 24-hour voiding patterns with comprehensive diary assessment tool. Evaluate frequency, urgency, nocturia, and functional capacity for LUTS diagnosis.',
      'prostate-cancer-tools': 'Advanced prostate cancer risk assessment and diagnostic tools. Multi-factor risk calculators using validated algorithms for clinical decision support.',
      'risk-calculator': 'Prostate Cancer Prevention Trial (PCPT) risk calculator for comprehensive cancer probability assessment. Multi-factor analysis including age, PSA, DRE, and family history.',
      'mens-health-calculators': 'Comprehensive men\'s health assessment tools including erectile dysfunction, testosterone deficiency, cardiovascular risk, and BMI calculators for complete evaluation.',
      'erectile-dysfunction-calculator': 'IIEF-5 (International Index of Erectile Function) calculator for standardized erectile dysfunction severity assessment. Evidence-based questionnaire for clinical evaluation.',
      'testosterone-deficiency-calculator': 'ADAM (Androgen Deficiency in Aging Males) questionnaire for testosterone deficiency screening. Validated tool for identifying low testosterone symptoms.',
      'free-testosterone-calculator': 'Calculate free and bioavailable testosterone levels using total testosterone, SHBG, and albumin values. Essential for accurate hormone assessment.',
      'cardiovascular-risk-calculator': 'Calculate 10-year cardiovascular disease risk using validated algorithms. Assess heart disease probability with comprehensive risk factor analysis.',
      'bmi-calculator': 'Body Mass Index calculator with comprehensive health risk assessment. Calculate BMI category, ideal weight range, and obesity-related health implications.',
      'education': 'Comprehensive medical education resources on benign prostatic hyperplasia, prostate cancer screening, and urological assessment techniques for healthcare professionals.',
      'understanding-bph': 'Complete clinical guide to benign prostatic hyperplasia including pathophysiology, diagnosis, treatment options, and management algorithms for healthcare providers.',
      'blog': 'Latest urology research insights, clinical updates, and evidence-based medicine articles covering prostate health, BPH management, and diagnostic innovations.',
      'case-studies': 'Real-world clinical case studies demonstrating practical applications of prostate volume calculations and BPH management strategies in diverse patient populations.',
      'resources': 'Professional medical resources including clinical guidelines, reference materials, research papers, and evidence-based protocols for urological practice.',
      'faq': 'Frequently asked questions about prostate health, volume calculations, PSA interpretation, and BPH management answered by medical professionals.'
    };
    
    const lastSegment = pathSegments[pathSegments.length - 1];
    return descriptionMap[lastSegment] || `Professional medical calculator and assessment tool for ${lastSegment.replace(/-/g, ' ')}. Evidence-based clinical support for healthcare professionals.`;
  };
  
  const currentTitle = generateOptimizedTitle();
  const currentDescription = generateOptimizedDescription();

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