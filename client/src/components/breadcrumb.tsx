import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export default function Breadcrumb() {
  const [location] = useLocation();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", href: "/" }
    ];

    // Clinical Tools Routes
    if (location === "/tools" || location === "/advanced-tools" || location === "/clinical-tools") {
      breadcrumbs.push({ 
        label: "Clinical Tools", 
        href: "/tools", 
        current: true 
      });
    } else if (location.includes("/psa-density") || location === "/prostate-specific-antigen-density") {
      breadcrumbs.push({ label: "Clinical Tools", href: "/tools" });
      breadcrumbs.push({ 
        label: "PSA Density Calculator", 
        href: "/psa-density-calculator", 
        current: true 
      });
    } else if (location.includes("/ipss") || location === "/international-prostate-symptom-score") {
      breadcrumbs.push({ label: "Clinical Tools", href: "/tools" });
      breadcrumbs.push({ 
        label: "IPSS Assessment", 
        href: "/ipss-assessment", 
        current: true 
      });
    } else if (location.includes("/treatment") || location === "/bph-treatment-options") {
      breadcrumbs.push({ label: "Clinical Tools", href: "/tools" });
      breadcrumbs.push({ 
        label: "Treatment Guide", 
        href: "/treatment-decision-guide", 
        current: true 
      });
    } else if (location === "/comprehensive-calculator") {
      breadcrumbs.push({ label: "Clinical Tools", href: "/tools" });
      breadcrumbs.push({ 
        label: "Comprehensive Calculator", 
        href: "/comprehensive-calculator", 
        current: true 
      });
    }
    
    // Educational Content Routes
    else if (location === "/education" || location === "/bph-education" || location === "/medical-education" || location === "/benign-prostatic-hyperplasia" || location === "/lower-urinary-tract-symptoms") {
      breadcrumbs.push({ 
        label: "BPH Education", 
        href: "/education", 
        current: true 
      });
    }
    
    // FAQ Routes
    else if (location === "/faq" || location === "/medical-faq" || location === "/frequently-asked-questions") {
      breadcrumbs.push({ 
        label: "Medical FAQ", 
        href: "/faq", 
        current: true 
      });
    }
    
    // Resources Routes
    else if (location === "/resources" || location === "/clinical-resources" || location === "/medical-resources" || location === "/guidelines" || location === "/clinical-guidelines") {
      breadcrumbs.push({ 
        label: "Clinical Resources", 
        href: "/resources", 
        current: true 
      });
    }
    
    // Blog Routes
    else if (location === "/blog" || location === "/articles" || location === "/medical-blog" || location === "/clinical-articles") {
      breadcrumbs.push({ 
        label: "Medical Articles", 
        href: "/blog", 
        current: true 
      });
    }
    
    // Case Studies Routes
    else if (location === "/case-studies" || location === "/casestudy" || location === "/clinical-cases" || location === "/case-study") {
      breadcrumbs.push({ 
        label: "Clinical Case Studies", 
        href: "/case-studies", 
        current: true 
      });
    }
    
    // Calculator Routes
    else if (location === "/calculator" || location === "/prostate-volume-calculator" || location === "/prostate-volume-measurement" || location === "/bph-volume-calculator" || location === "/transrectal-ultrasound-volume") {
      breadcrumbs.push({ 
        label: "Prostate Volume Calculator", 
        href: "/calculator", 
        current: true 
      });
    }
    
    // Home Route
    else if (location === "/") {
      breadcrumbs[0].current = true;
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <>
      <nav 
        aria-label="Breadcrumb" 
        className="bg-gray-50 py-3 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {item.current ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {index === 0 && <Home className="w-4 h-4 mr-1 inline" />}
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* BreadcrumbList Schema */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `https://prostatevolumecalc.com${item.href}`
            }))
          })
        }}
      />
    </>
  );
}