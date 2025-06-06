import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calculator, Users, BookOpen, MessageSquare, Shield } from "lucide-react";
import SEOHead from "@/components/seo-head";
import { Link } from "wouter";

interface SitemapSection {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  pages: {
    title: string;
    url: string;
    description: string;
    priority: "high" | "medium" | "low";
  }[];
}

export default function Sitemap() {
  const sitemapSections: SitemapSection[] = [
    {
      title: "Core Calculator Tools",
      icon: Calculator,
      pages: [
        {
          title: "Prostate Volume Calculator",
          url: "/",
          description: "Primary ellipsoid formula calculator for prostate volume assessment",
          priority: "high"
        },
        {
          title: "Advanced Clinical Tools",
          url: "/tools",
          description: "Comprehensive suite of BPH and prostate assessment calculators",
          priority: "high"
        },
        {
          title: "PSA Calculator Suite",
          url: "/psa-calculators",
          description: "PSA velocity, doubling time, free PSA ratio, and age-specific calculators",
          priority: "high"
        },
        {
          title: "BPH & LUTS Assessment Tools",
          url: "/bph-luts-tools",
          description: "Post-void residual, bladder capacity, and voiding diary analysis",
          priority: "high"
        },
        {
          title: "Prostate Cancer Risk Tools",
          url: "/prostate-cancer-tools",
          description: "Cancer risk assessment and clinical decision support",
          priority: "high"
        },
        {
          title: "Men's Health Calculators",
          url: "/mens-health-calculators",
          description: "Erectile dysfunction, testosterone, cardiovascular risk, and BMI calculators",
          priority: "medium"
        }
      ]
    },
    {
      title: "Individual PSA Calculators",
      icon: Calculator,
      pages: [
        {
          title: "PSA Density Calculator",
          url: "/psa-calculators/psa-density-calculator/",
          description: "Enhanced prostate cancer detection through PSA density calculation",
          priority: "high"
        },
        {
          title: "PSA Velocity Calculator",
          url: "/psa-calculators/psa-velocity-calculator/",
          description: "Calculate PSA rate of change over time for cancer surveillance",
          priority: "high"
        },
        {
          title: "PSA Doubling Time Calculator",
          url: "/psa-calculators/psa-doubling-time-calculator/",
          description: "Determine PSA doubling time for biochemical recurrence assessment",
          priority: "high"
        },
        {
          title: "Free PSA Ratio Calculator",
          url: "/psa-calculators/free-psa-ratio-calculator/",
          description: "Calculate free-to-total PSA ratio for biopsy decision-making",
          priority: "high"
        },
        {
          title: "Age-Specific PSA Calculator",
          url: "/psa-calculators/age-specific-psa-calculator/",
          description: "Age-adjusted PSA reference ranges and percentile analysis",
          priority: "medium"
        }
      ]
    },
    {
      title: "BPH & LUTS Assessment",
      icon: Calculator,
      pages: [
        {
          title: "IPSS Questionnaire",
          url: "/bph-luts-tools/ipss-questionnaire/",
          description: "International Prostate Symptom Score assessment for BPH severity",
          priority: "high"
        },
        {
          title: "Post-Void Residual Calculator",
          url: "/bph-luts-tools/post-void-residual-calculator/",
          description: "Assess bladder emptying efficiency and treatment planning",
          priority: "medium"
        },
        {
          title: "Bladder Capacity Calculator",
          url: "/bph-luts-tools/bladder-capacity-calculator/",
          description: "Estimate functional bladder capacity and voiding patterns",
          priority: "medium"
        },
        {
          title: "Voiding Diary Analyzer",
          url: "/bph-luts-tools/voiding-diary-analyzer/",
          description: "Comprehensive 24-hour voiding pattern analysis",
          priority: "medium"
        }
      ]
    },
    {
      title: "Cancer Risk Assessment",
      icon: Calculator,
      pages: [
        {
          title: "Prostate Cancer Risk Calculator",
          url: "/prostate-cancer-tools/risk-calculator/",
          description: "Multi-parameter cancer risk assessment and biopsy recommendations",
          priority: "high"
        },
        {
          title: "Treatment Decision Guide",
          url: "/prostate-cancer-tools/treatment-decision-guide/",
          description: "Evidence-based treatment recommendations for prostate cancer",
          priority: "medium"
        }
      ]
    },
    {
      title: "Men's Health Tools",
      icon: Users,
      pages: [
        {
          title: "Erectile Dysfunction Calculator",
          url: "/mens-health-calculators/erectile-dysfunction-calculator/",
          description: "SHIM/IIEF-5 erectile function assessment",
          priority: "medium"
        },
        {
          title: "Testosterone Deficiency Calculator",
          url: "/mens-health-calculators/testosterone-deficiency-calculator/",
          description: "ADAM questionnaire for testosterone deficiency screening",
          priority: "medium"
        },
        {
          title: "Free Testosterone Calculator",
          url: "/mens-health-calculators/free-testosterone-calculator/",
          description: "Calculate free and bioavailable testosterone levels",
          priority: "medium"
        },
        {
          title: "Cardiovascular Risk Calculator",
          url: "/mens-health-calculators/cardiovascular-risk-calculator/",
          description: "10-year cardiovascular disease risk assessment",
          priority: "low"
        },
        {
          title: "BMI Calculator",
          url: "/mens-health-calculators/bmi-calculator/",
          description: "Body mass index calculation and health risk assessment",
          priority: "low"
        },
        {
          title: "Waist-Hip Ratio Calculator",
          url: "/mens-health-calculators/waist-hip-ratio-calculator/",
          description: "Central obesity assessment and metabolic risk evaluation",
          priority: "low"
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: BookOpen,
      pages: [
        {
          title: "BPH Education Center",
          url: "/education",
          description: "Comprehensive educational content about benign prostatic hyperplasia",
          priority: "high"
        },
        {
          title: "Clinical Resources",
          url: "/resources",
          description: "Professional medical resources, guidelines, and reference materials",
          priority: "medium"
        },
        {
          title: "Medical Blog",
          url: "/blog",
          description: "Latest research insights and clinical updates in urology",
          priority: "medium"
        },
        {
          title: "Case Studies",
          url: "/case-studies",
          description: "Real-world clinical applications and decision-making examples",
          priority: "medium"
        }
      ]
    },
    {
      title: "Educational Articles",
      icon: BookOpen,
      pages: [
        {
          title: "Understanding BPH",
          url: "/education/understanding-bph",
          description: "Comprehensive guide to benign prostatic hyperplasia pathophysiology",
          priority: "medium"
        },
        {
          title: "Prostate Volume Measurement Techniques",
          url: "/education/prostate-volume-measurement-techniques",
          description: "Clinical methods for accurate prostate volume assessment",
          priority: "medium"
        },
        {
          title: "PSA Density in Clinical Practice",
          url: "/education/psa-density-clinical-practice",
          description: "Evidence-based applications of PSA density for cancer detection",
          priority: "medium"
        },
        {
          title: "IPSS Scoring and Interpretation",
          url: "/education/ipss-scoring-interpretation",
          description: "Complete guide to International Prostate Symptom Score assessment",
          priority: "medium"
        },
        {
          title: "Medical Management of BPH",
          url: "/education/medical-management-bph",
          description: "Current pharmacological approaches to BPH treatment",
          priority: "medium"
        },
        {
          title: "Surgical Options for BPH",
          url: "/education/surgical-options-bph",
          description: "Comprehensive overview of surgical interventions for BPH",
          priority: "medium"
        },
        {
          title: "Advanced Prostate Imaging",
          url: "/education/advanced-imaging-prostate",
          description: "Modern imaging techniques for prostate assessment",
          priority: "low"
        },
        {
          title: "Machine Learning in Urology",
          url: "/education/machine-learning-urology",
          description: "AI applications in urological diagnosis and treatment",
          priority: "low"
        }
      ]
    },
    {
      title: "Blog Articles",
      icon: BookOpen,
      pages: [
        {
          title: "Prostate Volume Measurement Guide",
          url: "/blog/prostate-volume-measurement-guide",
          description: "Step-by-step guide to accurate prostate volume calculation",
          priority: "medium"
        },
        {
          title: "PSA Density Calculator Guide",
          url: "/blog/psa-density-calculator-guide",
          description: "How to use PSA density for improved cancer detection",
          priority: "medium"
        },
        {
          title: "IPSS Assessment Guide",
          url: "/blog/ipss-assessment-guide",
          description: "Clinical applications of IPSS scoring in practice",
          priority: "medium"
        },
        {
          title: "BPH Treatment Algorithms",
          url: "/blog/bph-treatment-algorithms",
          description: "Evidence-based decision trees for BPH management",
          priority: "medium"
        },
        {
          title: "Age-Related Prostate Growth",
          url: "/blog/age-related-prostate-growth",
          description: "Understanding normal vs. pathological prostate enlargement",
          priority: "low"
        },
        {
          title: "Minimally Invasive BPH Procedures",
          url: "/blog/minimally-invasive-bph-procedures",
          description: "Latest advances in minimally invasive BPH treatments",
          priority: "medium"
        },
        {
          title: "Machine Learning in Prostate Assessment",
          url: "/blog/machine-learning-prostate-assessment",
          description: "AI applications in prostate health evaluation",
          priority: "low"
        },
        {
          title: "Volume-Adjusted PSA Screening",
          url: "/blog/volume-adjusted-psa-screening",
          description: "Optimizing PSA screening with volume considerations",
          priority: "medium"
        }
      ]
    },
    {
      title: "Support & Information",
      icon: MessageSquare,
      pages: [
        {
          title: "Medical FAQ",
          url: "/faq",
          description: "Frequently asked questions about prostate health and calculations",
          priority: "medium"
        },
        {
          title: "About Us",
          url: "/about",
          description: "Information about our medical team and platform mission",
          priority: "medium"
        },
        {
          title: "Contact Support",
          url: "/contact",
          description: "Professional support for healthcare providers and institutions",
          priority: "medium"
        }
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Shield,
      pages: [
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
          description: "HIPAA-compliant privacy practices and data protection policies",
          priority: "low"
        },
        {
          title: "Terms of Service",
          url: "/terms-of-service",
          description: "Professional terms governing use of medical calculation tools",
          priority: "low"
        },
        {
          title: "Medical Disclaimer",
          url: "/disclaimer",
          description: "Important legal notice regarding medical information and calculations",
          priority: "low"
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <SEOHead 
        title="Site Map - ProstateVolumeCalc Medical Calculator Navigation"
        description="Complete site navigation for ProstateVolumeCalc.com medical calculators, educational resources, clinical tools, and professional support pages."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <FileText className="h-16 w-16 text-blue-500 mx-auto" />
            <h1 className="text-4xl font-bold text-gray-900">Site Map</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete navigation guide to all medical calculators, educational resources, and professional tools on ProstateVolumeCalc.com
            </p>
          </div>

          {/* Statistics */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-blue-100 text-sm">Total Pages</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-blue-100 text-sm">Medical Calculators</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-blue-100 text-sm">Main Categories</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-blue-100 text-sm">Medical Grade</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sitemap Sections */}
          {sitemapSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            return (
              <Card key={sectionIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Link href={page.url}>
                                <h3 className="font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                                  {page.title}
                                </h3>
                              </Link>
                              <Badge className={getPriorityColor(page.priority)}>
                                {page.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                            <p className="text-xs text-gray-500 font-mono">{page.url}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Quick Navigation */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <Calculator className="h-5 w-5 text-blue-600 mb-2" />
                    <p className="font-semibold text-sm">Volume Calculator</p>
                    <p className="text-xs text-gray-600">Primary calculator tool</p>
                  </div>
                </Link>
                
                <Link href="/tools">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <Users className="h-5 w-5 text-green-600 mb-2" />
                    <p className="font-semibold text-sm">Clinical Tools</p>
                    <p className="text-xs text-gray-600">Advanced assessments</p>
                  </div>
                </Link>
                
                <Link href="/education">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <BookOpen className="h-5 w-5 text-purple-600 mb-2" />
                    <p className="font-semibold text-sm">Education</p>
                    <p className="text-xs text-gray-600">Learning resources</p>
                  </div>
                </Link>
                
                <Link href="/faq">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <MessageSquare className="h-5 w-5 text-orange-600 mb-2" />
                    <p className="font-semibold text-sm">Medical FAQ</p>
                    <p className="text-xs text-gray-600">Common questions</p>
                  </div>
                </Link>
                
                <Link href="/contact">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <Users className="h-5 w-5 text-red-600 mb-2" />
                    <p className="font-semibold text-sm">Contact</p>
                    <p className="text-xs text-gray-600">Professional support</p>
                  </div>
                </Link>
                
                <Link href="/about">
                  <div className="p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <Shield className="h-5 w-5 text-indigo-600 mb-2" />
                    <p className="font-semibold text-sm">About Us</p>
                    <p className="text-xs text-gray-600">Our mission</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Professional Notice */}
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">For Healthcare Professionals</h3>
              <p className="text-gray-700 text-sm">
                All calculators and tools are designed for professional medical use and should be integrated with clinical judgment. 
                We provide specialized support for healthcare institutions, educational partnerships, and clinical integration.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}