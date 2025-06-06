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

    // PSA Calculators Section
    if (location === "/psa-calculators/") {
      breadcrumbs.push({ 
        label: "PSA Calculators", 
        href: "/psa-calculators/", 
        current: true 
      });
    } else if (location.startsWith("/psa-calculators/")) {
      breadcrumbs.push({ label: "PSA Calculators", href: "/psa-calculators/" });
      
      if (location === "/psa-calculators/psa-density-calculator/") {
        breadcrumbs.push({ label: "PSA Density Calculator", href: "/psa-calculators/psa-density-calculator/", current: true });
      } else if (location === "/psa-calculators/psa-velocity-calculator/") {
        breadcrumbs.push({ label: "PSA Velocity Calculator", href: "/psa-calculators/psa-velocity-calculator/", current: true });
      } else if (location === "/psa-calculators/psa-doubling-time-calculator/") {
        breadcrumbs.push({ label: "PSA Doubling Time Calculator", href: "/psa-calculators/psa-doubling-time-calculator/", current: true });
      } else if (location === "/psa-calculators/free-psa-ratio-calculator/") {
        breadcrumbs.push({ label: "Free PSA Ratio Calculator", href: "/psa-calculators/free-psa-ratio-calculator/", current: true });
      } else if (location === "/psa-calculators/age-specific-psa-calculator/") {
        breadcrumbs.push({ label: "Age-Specific PSA Calculator", href: "/psa-calculators/age-specific-psa-calculator/", current: true });
      }
    }
    
    // BPH & LUTS Tools Section
    else if (location === "/bph-luts-tools/") {
      breadcrumbs.push({ 
        label: "BPH & LUTS Tools", 
        href: "/bph-luts-tools/", 
        current: true 
      });
    } else if (location.startsWith("/bph-luts-tools/")) {
      breadcrumbs.push({ label: "BPH & LUTS Tools", href: "/bph-luts-tools/" });
      
      if (location === "/bph-luts-tools/ipss-questionnaire/") {
        breadcrumbs.push({ label: "IPSS Questionnaire", href: "/bph-luts-tools/ipss-questionnaire/", current: true });
      } else if (location === "/bph-luts-tools/post-void-residual-calculator/") {
        breadcrumbs.push({ label: "Post-Void Residual Calculator", href: "/bph-luts-tools/post-void-residual-calculator/", current: true });
      } else if (location === "/bph-luts-tools/bladder-capacity-calculator/") {
        breadcrumbs.push({ label: "Bladder Capacity Calculator", href: "/bph-luts-tools/bladder-capacity-calculator/", current: true });
      } else if (location === "/bph-luts-tools/voiding-diary-analyzer/") {
        breadcrumbs.push({ label: "Voiding Diary Analyzer", href: "/bph-luts-tools/voiding-diary-analyzer/", current: true });
      }
    }
    
    // Prostate Cancer Tools Section
    else if (location === "/prostate-cancer-tools/") {
      breadcrumbs.push({ 
        label: "Prostate Cancer Tools", 
        href: "/prostate-cancer-tools/", 
        current: true 
      });
    } else if (location.startsWith("/prostate-cancer-tools/")) {
      breadcrumbs.push({ label: "Prostate Cancer Tools", href: "/prostate-cancer-tools/" });
      
      if (location === "/prostate-cancer-tools/risk-calculator/") {
        breadcrumbs.push({ label: "Risk Calculator", href: "/prostate-cancer-tools/risk-calculator/", current: true });
      } else if (location === "/prostate-cancer-tools/treatment-decision-guide/") {
        breadcrumbs.push({ label: "Treatment Decision Guide", href: "/prostate-cancer-tools/treatment-decision-guide/", current: true });
      }
    }
    
    // Men's Health Calculators Section
    else if (location === "/mens-health-calculators/") {
      breadcrumbs.push({ 
        label: "Men's Health Calculators", 
        href: "/mens-health-calculators/", 
        current: true 
      });
    } else if (location.startsWith("/mens-health-calculators/")) {
      breadcrumbs.push({ label: "Men's Health Calculators", href: "/mens-health-calculators/" });
      
      if (location === "/mens-health-calculators/erectile-dysfunction-calculator/") {
        breadcrumbs.push({ label: "Erectile Dysfunction Calculator", href: "/mens-health-calculators/erectile-dysfunction-calculator/", current: true });
      } else if (location === "/mens-health-calculators/testosterone-deficiency-calculator/") {
        breadcrumbs.push({ label: "Testosterone Deficiency Calculator", href: "/mens-health-calculators/testosterone-deficiency-calculator/", current: true });
      } else if (location === "/mens-health-calculators/free-testosterone-calculator/") {
        breadcrumbs.push({ label: "Free Testosterone Calculator", href: "/mens-health-calculators/free-testosterone-calculator/", current: true });
      } else if (location === "/mens-health-calculators/cardiovascular-risk-calculator/") {
        breadcrumbs.push({ label: "Cardiovascular Risk Calculator", href: "/mens-health-calculators/cardiovascular-risk-calculator/", current: true });
      } else if (location === "/mens-health-calculators/bmi-calculator/") {
        breadcrumbs.push({ label: "BMI Calculator", href: "/mens-health-calculators/bmi-calculator/", current: true });
      } else if (location === "/mens-health-calculators/waist-hip-ratio-calculator/") {
        breadcrumbs.push({ label: "Waist-Hip Ratio Calculator", href: "/mens-health-calculators/waist-hip-ratio-calculator/", current: true });
      }
    }
    
    // Clinical Tools Routes (legacy)
    else if (location === "/tools/" || location === "/advanced-tools" || location === "/clinical-tools") {
      breadcrumbs.push({ 
        label: "Clinical Tools", 
        href: "/tools/", 
        current: true 
      });
    }
    
    // Educational Content Routes
    else if (location === "/education/") {
      breadcrumbs.push({ 
        label: "Education", 
        href: "/education/", 
        current: true 
      });
    } else if (location.startsWith("/education/")) {
      breadcrumbs.push({ label: "Education", href: "/education/" });
      
      if (location === "/education/understanding-bph") {
        breadcrumbs.push({ label: "Understanding BPH", href: "/education/understanding-bph", current: true });
      } else if (location === "/education/prostate-volume-measurement-techniques") {
        breadcrumbs.push({ label: "Prostate Volume Measurement Techniques", href: "/education/prostate-volume-measurement-techniques", current: true });
      } else if (location === "/education/psa-density-clinical-practice") {
        breadcrumbs.push({ label: "PSA Density in Clinical Practice", href: "/education/psa-density-clinical-practice", current: true });
      } else if (location === "/education/ipss-scoring-interpretation") {
        breadcrumbs.push({ label: "IPSS Scoring & Interpretation", href: "/education/ipss-scoring-interpretation", current: true });
      } else if (location === "/education/medical-management-bph") {
        breadcrumbs.push({ label: "Medical Management of BPH", href: "/education/medical-management-bph", current: true });
      } else if (location === "/education/surgical-options-bph") {
        breadcrumbs.push({ label: "Surgical Options for BPH", href: "/education/surgical-options-bph", current: true });
      }
    }
    
    // Blog Routes
    else if (location === "/blog/") {
      breadcrumbs.push({ 
        label: "Blog", 
        href: "/blog/", 
        current: true 
      });
    } else if (location.startsWith("/blog/")) {
      breadcrumbs.push({ label: "Blog", href: "/blog/" });
      
      if (location === "/blog/prostate-volume-measurement-guide") {
        breadcrumbs.push({ label: "Prostate Volume Measurement Guide", href: "/blog/prostate-volume-measurement-guide", current: true });
      } else if (location === "/blog/psa-density-calculator-guide") {
        breadcrumbs.push({ label: "PSA Density Calculator Guide", href: "/blog/psa-density-calculator-guide", current: true });
      } else if (location === "/blog/ipss-assessment-guide") {
        breadcrumbs.push({ label: "IPSS Assessment Guide", href: "/blog/ipss-assessment-guide", current: true });
      } else if (location === "/blog/bph-treatment-algorithms") {
        breadcrumbs.push({ label: "BPH Treatment Algorithms", href: "/blog/bph-treatment-algorithms", current: true });
      }
    }
    
    // Case Studies Routes
    else if (location === "/case-studies/") {
      breadcrumbs.push({ 
        label: "Case Studies", 
        href: "/case-studies/", 
        current: true 
      });
    } else if (location.startsWith("/case-studies/")) {
      breadcrumbs.push({ label: "Case Studies", href: "/case-studies/" });
      
      if (location === "/case-studies/large-prostate-bph-management") {
        breadcrumbs.push({ label: "Large Prostate BPH Management", href: "/case-studies/large-prostate-bph-management", current: true });
      } else if (location === "/case-studies/psa-density-guided-biopsy") {
        breadcrumbs.push({ label: "PSA Density Guided Biopsy", href: "/case-studies/psa-density-guided-biopsy", current: true });
      }
    }
    
    // Resources Routes
    else if (location === "/resources/") {
      breadcrumbs.push({ 
        label: "Resources", 
        href: "/resources/", 
        current: true 
      });
    }
    
    // FAQ Routes
    else if (location === "/faq") {
      breadcrumbs.push({ 
        label: "FAQ", 
        href: "/faq", 
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