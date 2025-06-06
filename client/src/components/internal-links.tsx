import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calculator, BookOpen, FileText, Users } from "lucide-react";
import { Link } from "wouter";

interface InternalLink {
  title: string;
  href: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  priority: 'high' | 'medium' | 'low';
}

interface InternalLinksProps {
  currentPage?: string;
  category?: 'calculators' | 'education' | 'resources' | 'support';
  limit?: number;
}

export default function InternalLinks({ 
  currentPage = '', 
  category,
  limit = 6 
}: InternalLinksProps) {
  
  const allLinks: InternalLink[] = [
    {
      title: "Prostate Volume Calculator",
      href: "/",
      description: "Primary ellipsoid formula calculator for accurate prostate volume assessment",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "PSA Calculators", 
      href: "/psa-calculators/",
      description: "Comprehensive PSA analysis tools including density, velocity, and doubling time",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "PSA Density Calculator",
      href: "/psa-calculators/psa-density-calculator/",
      description: "Calculate PSA density for improved diagnostic accuracy",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "PSA Velocity Calculator",
      href: "/psa-calculators/psa-velocity-calculator/",
      description: "Track PSA rate of change over time for cancer detection",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "PSA Doubling Time Calculator",
      href: "/psa-calculators/psa-doubling-time-calculator/",
      description: "Monitor PSA growth rate and assess cancer progression risk",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Free PSA Ratio Calculator",
      href: "/psa-calculators/free-psa-ratio-calculator/",
      description: "Calculate free to total PSA percentage for improved specificity",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Age-Specific PSA Calculator",
      href: "/psa-calculators/age-specific-psa-calculator/",
      description: "Age-adjusted PSA reference ranges for accurate screening",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "BPH & LUTS Tools",
      href: "/bph-luts-tools/",
      description: "Assessment tools for benign prostatic hyperplasia and lower urinary tract symptoms",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "IPSS Questionnaire",
      href: "/bph-luts-tools/ipss-questionnaire/",
      description: "International Prostate Symptom Score assessment",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Post-Void Residual Calculator",
      href: "/bph-luts-tools/post-void-residual-calculator/",
      description: "Assess bladder emptying efficiency and clinical significance",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Bladder Capacity Calculator",
      href: "/bph-luts-tools/bladder-capacity-calculator/",
      description: "Calculate functional and estimated bladder capacity",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Voiding Diary Analyzer",
      href: "/bph-luts-tools/voiding-diary-analyzer/",
      description: "24-hour voiding pattern analysis and LUTS assessment",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Prostate Cancer Tools",
      href: "/prostate-cancer-tools/",
      description: "Risk assessment and diagnostic tools for prostate cancer",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Prostate Cancer Risk Calculator",
      href: "/prostate-cancer-tools/risk-calculator/",
      description: "Multi-factor prostate cancer risk assessment using PCPT algorithm",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Men's Health Calculators",
      href: "/mens-health-calculators/", 
      description: "Specialized calculators for erectile dysfunction, testosterone deficiency, and more",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Erectile Dysfunction Calculator",
      href: "/mens-health-calculators/erectile-dysfunction-calculator/",
      description: "IIEF-5 assessment for erectile dysfunction severity",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Testosterone Deficiency Calculator",
      href: "/mens-health-calculators/testosterone-deficiency-calculator/",
      description: "ADAM questionnaire for testosterone deficiency screening",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Free Testosterone Calculator",
      href: "/mens-health-calculators/free-testosterone-calculator/",
      description: "Calculate free and bioavailable testosterone levels",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "BMI Calculator",
      href: "/mens-health-calculators/bmi-calculator/",
      description: "Body Mass Index calculator with health risk assessment",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Cardiovascular Risk Calculator",
      href: "/mens-health-calculators/cardiovascular-risk-calculator/",
      description: "10-year cardiovascular disease risk assessment",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Clinical Tools",
      href: "/tools/",
      description: "Professional assessment suite including treatment guides and risk calculators",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "Education",
      href: "/education/",
      description: "Comprehensive educational resources on benign prostatic hyperplasia",
      category: "education",
      icon: BookOpen,
      priority: "high"
    },
    {
      title: "Understanding BPH",
      href: "/education/understanding-bph",
      description: "Complete guide to benign prostatic hyperplasia",
      category: "education",
      icon: BookOpen,
      priority: "high"
    },
    {
      title: "PSA Density in Clinical Practice",
      href: "/education/psa-density-clinical-practice",
      description: "Clinical applications and interpretation of PSA density",
      category: "education",
      icon: BookOpen,
      priority: "medium"
    },
    {
      title: "Blog",
      href: "/blog/",
      description: "Latest research insights and clinical updates in urology",
      category: "education", 
      icon: FileText,
      priority: "medium"
    },
    {
      title: "Resources",
      href: "/resources/",
      description: "Professional medical resources, guidelines, and reference materials",
      category: "resources",
      icon: FileText,
      priority: "medium"
    },
    {
      title: "Case Studies",
      href: "/case-studies/",
      description: "Real-world clinical applications and decision-making examples",
      category: "education",
      icon: Users,
      priority: "medium"
    },
    {
      title: "FAQ",
      href: "/faq",
      description: "Frequently asked questions about prostate health and calculations",
      category: "support",
      icon: FileText,
      priority: "medium"
    },
    {
      title: "About Our Platform",
      href: "/about",
      description: "Learn about our medical team and evidence-based approach",
      category: "support", 
      icon: Users,
      priority: "low"
    }
  ];

  // Filter links based on category and exclude current page
  let filteredLinks = allLinks.filter(link => 
    link.href !== currentPage && 
    (!category || link.category === category)
  );

  // Sort by priority and limit results
  filteredLinks = filteredLinks
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, limit);

  if (filteredLinks.length === 0) {
    return null;
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'calculators': return 'Related Calculators';
      case 'education': return 'Educational Resources';
      case 'resources': return 'Clinical Resources';
      case 'support': return 'Support & Information';
      default: return 'Related Pages';
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'calculators': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'resources': return 'bg-purple-100 text-purple-800';
      case 'support': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="bg-gray-50">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">
          {getCategoryTitle()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {filteredLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <div className="group bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {link.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {link.description}
                      </p>
                      <Badge className={getCategoryColor(link.category)} variant="secondary">
                        {link.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}