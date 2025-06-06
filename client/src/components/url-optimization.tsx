import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface URLOptimizationProps {
  pageType: 'homepage' | 'calculator' | 'educational' | 'blog';
  primaryKeyword: string;
  canonicalUrl?: string;
}

export default function URLOptimization({ 
  pageType, 
  primaryKeyword, 
  canonicalUrl 
}: URLOptimizationProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Set canonical URL
    const canonical = canonicalUrl || `${window.location.origin}${location}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Add hreflang for international SEO
    const hreflangLinks = [
      { lang: 'en', href: canonical },
      { lang: 'x-default', href: canonical }
    ];

    hreflangLinks.forEach(({ lang, href }) => {
      let hreflangLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflangLink) {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', lang);
        document.head.appendChild(hreflangLink);
      }
      hreflangLink.setAttribute('href', href);
    });

    // Add page-specific meta robots
    let robotsMetaTag = document.querySelector('meta[name="robots"]');
    if (!robotsMetaTag) {
      robotsMetaTag = document.createElement('meta');
      robotsMetaTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsMetaTag);
    }

    const robotsContent = pageType === 'homepage' 
      ? 'index, follow, max-snippet:160, max-image-preview:large, max-video-preview:30'
      : 'index, follow, max-snippet:160';
    
    robotsMetaTag.setAttribute('content', robotsContent);

    // Add breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": generateBreadcrumbItems(location, pageType)
    };

    let breadcrumbScript = document.getElementById('breadcrumb-schema');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-schema';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

  }, [location, pageType, canonicalUrl]);

  const generateBreadcrumbItems = (currentLocation: string, type: string) => {
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      }
    ];

    if (type === 'calculator') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Medical Calculators",
        "item": `${window.location.origin}/calculators`
      });
      
      if (currentLocation.includes('prostate-volume')) {
        items.push({
          "@type": "ListItem",
          "position": 3,
          "name": "Prostate Volume Calculator",
          "item": `${window.location.origin}${currentLocation}`
        });
      }
    }

    if (type === 'educational') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Educational Resources",
        "item": `${window.location.origin}/education`
      });
    }

    return items;
  };

  return null; // This component only handles SEO meta tags
}