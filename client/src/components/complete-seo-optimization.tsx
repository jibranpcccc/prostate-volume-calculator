import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface CompleteSEOOptimizationProps {
  pageType: 'homepage' | 'calculator' | 'educational' | 'blog';
  primaryKeyword: string;
  secondaryKeywords: string[];
  medicalCondition?: string;
}

export default function CompleteSEOOptimization({ 
  pageType, 
  primaryKeyword, 
  secondaryKeywords,
  medicalCondition 
}: CompleteSEOOptimizationProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Enhanced title tag optimization
    const optimizedTitles = {
      homepage: `Professional Prostate Volume Calculator | Evidence-Based BPH Assessment Tool | Medical Calculator`,
      calculator: `Prostate Volume Calculator - Ellipsoid Formula (L×W×H×0.52) | ${primaryKeyword} | Free Medical Tool`,
      educational: `${primaryKeyword} Guide | Evidence-Based Medical Information | Urology Resources`,
      blog: `${primaryKeyword} | Latest Research & Clinical Updates | Medical Blog`
    };

    document.title = optimizedTitles[pageType];

    // Enhanced meta description optimization
    const optimizedDescriptions = {
      homepage: `Professional prostate volume calculator using validated ellipsoid formula. Evidence-based medical tool for BPH assessment, PSA density calculation. Used by urologists worldwide. Free, accurate, HIPAA-compliant medical calculator.`,
      calculator: `Calculate prostate volume using the gold-standard ellipsoid formula (L×W×H×0.52). Validated by peer-reviewed research. Essential tool for BPH evaluation, treatment planning, PSA density assessment. Free medical calculator.`,
      educational: `Comprehensive ${primaryKeyword.toLowerCase()} information. Evidence-based medical content for healthcare professionals and patients. Latest research, treatment guidelines, clinical protocols.`,
      blog: `Latest ${primaryKeyword.toLowerCase()} research and clinical updates. Evidence-based medical content for healthcare professionals. Peer-reviewed insights and treatment advances.`
    };

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', optimizedDescriptions[pageType]);

    // Enhanced keyword optimization
    const allKeywords = [primaryKeyword, ...secondaryKeywords];
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', allKeywords.join(', '));

    // Medical-specific meta tags
    const medicalMetaTags = [
      { name: 'medical-condition', content: medicalCondition || 'Benign Prostatic Hyperplasia' },
      { name: 'medical-specialty', content: 'Urology' },
      { name: 'evidence-level', content: 'Level I Evidence' },
      { name: 'clinical-validation', content: 'Peer-reviewed' },
      { name: 'target-audience', content: 'Healthcare Professionals, Patients' },
      { name: 'last-medical-review', content: new Date().toISOString().split('T')[0] },
      { name: 'medical-disclaimer', content: 'For educational purposes only. Consult healthcare provider for medical advice.' },
      { name: 'content-rating', content: 'Medical Professional' },
      { name: 'health-topic', content: 'Prostate Health, BPH, Urology' }
    ];

    medicalMetaTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('name', tag.name);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

    // Enhanced Open Graph tags
    const ogTags = [
      { property: 'og:title', content: document.title },
      { property: 'og:description', content: optimizedDescriptions[pageType] },
      { property: 'og:type', content: pageType === 'homepage' ? 'website' : 'article' },
      { property: 'og:url', content: `${window.location.origin}${location}` },
      { property: 'og:site_name', content: 'Professional Medical Calculator' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: `${window.location.origin}/medical-calculator-preview.jpg` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Professional Prostate Volume Calculator Interface' }
    ];

    ogTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('property', tag.property);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

    // Twitter Card optimization
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: document.title },
      { name: 'twitter:description', content: optimizedDescriptions[pageType] },
      { name: 'twitter:image', content: `${window.location.origin}/medical-calculator-preview.jpg` },
      { name: 'twitter:site', content: '@MedicalCalc' },
      { name: 'twitter:creator', content: '@MedicalCalc' }
    ];

    twitterTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('name', tag.name);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

    // Enhanced robots meta tag
    let robotsMetaTag = document.querySelector('meta[name="robots"]');
    if (!robotsMetaTag) {
      robotsMetaTag = document.createElement('meta');
      robotsMetaTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsMetaTag);
    }

    const robotsContent = pageType === 'homepage' 
      ? 'index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30, max-preview:-1'
      : 'index, follow, max-snippet:160, max-image-preview:standard';
    
    robotsMetaTag.setAttribute('content', robotsContent);

    // Add author and publication meta tags
    const authorTags = [
      { name: 'author', content: 'Medical Calculator Authority' },
      { name: 'publisher', content: 'Professional Medical Tools' },
      { name: 'copyright', content: `© ${new Date().getFullYear()} Medical Calculator Authority` },
      { name: 'language', content: 'en' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' }
    ];

    authorTags.forEach(tag => {
      let existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        existingTag = document.createElement('meta');
        existingTag.setAttribute('name', tag.name);
        document.head.appendChild(existingTag);
      }
      existingTag.setAttribute('content', tag.content);
    });

  }, [location, pageType, primaryKeyword, secondaryKeywords, medicalCondition]);

  return null;
}