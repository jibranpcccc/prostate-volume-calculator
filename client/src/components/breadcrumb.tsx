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

    if (location === "/tools" || location === "/advanced-tools") {
      breadcrumbs.push({ 
        label: "Advanced Clinical Tools", 
        href: "/tools", 
        current: true 
      });
    } else if (location === "/calculator") {
      breadcrumbs.push({ 
        label: "Prostate Volume Calculator", 
        href: "/calculator", 
        current: true 
      });
    } else if (location === "/ipss") {
      breadcrumbs.push({ 
        label: "IPSS Assessment", 
        href: "/ipss", 
        current: true 
      });
    } else if (location === "/psa-density") {
      breadcrumbs.push({ 
        label: "PSA Density Calculator", 
        href: "/psa-density", 
        current: true 
      });
    } else if (location === "/treatment-guide") {
      breadcrumbs.push({ 
        label: "Treatment Decision Guide", 
        href: "/treatment-guide", 
        current: true 
      });
    } else if (location === "/") {
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