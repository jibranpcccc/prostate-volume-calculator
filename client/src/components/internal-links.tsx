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
      title: "PSA Calculator Suite", 
      href: "/psa-calculators",
      description: "Comprehensive PSA analysis tools including density, velocity, and doubling time",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Advanced Clinical Tools",
      href: "/tools",
      description: "Professional assessment suite including IPSS, treatment guides, and risk calculators",
      category: "calculators",
      icon: Calculator,
      priority: "high"
    },
    {
      title: "Men's Health Calculators",
      href: "/mens-health-calculators", 
      description: "Specialized calculators for erectile dysfunction, testosterone deficiency, and more",
      category: "calculators",
      icon: Calculator,
      priority: "medium"
    },
    {
      title: "BPH Education Center",
      href: "/education",
      description: "Comprehensive educational resources on benign prostatic hyperplasia",
      category: "education",
      icon: BookOpen,
      priority: "high"
    },
    {
      title: "Medical Blog",
      href: "/blog",
      description: "Latest research insights and clinical updates in urology",
      category: "education", 
      icon: FileText,
      priority: "medium"
    },
    {
      title: "Clinical Resources",
      href: "/resources",
      description: "Professional medical resources, guidelines, and reference materials",
      category: "resources",
      icon: FileText,
      priority: "medium"
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      description: "Real-world clinical applications and decision-making examples",
      category: "education",
      icon: Users,
      priority: "medium"
    },
    {
      title: "Medical FAQ",
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