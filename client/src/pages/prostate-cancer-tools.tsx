import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Activity, Calendar, Shield, Users } from "lucide-react";
import { Link } from "wouter";

interface CancerTool {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'Screening' | 'Treatment' | 'Monitoring' | 'Prognosis';
  evidence: string;
  features: string[];
}

export default function ProstateCancerTools() {
  const cancerTools: CancerTool[] = [
    {
      title: "Prostate Cancer Risk Calculator",
      description: "PCPT-based risk assessment for prostate cancer detection probability",
      url: "/prostate-cancer-tools/risk-calculator/",
      icon: Target,
      category: 'Screening',
      evidence: 'PCPT Study (18,000+ patients)',
      features: [
        'Pre-biopsy risk assessment',
        'Age and PSA integration',
        'DRE findings incorporation',
        'High-grade cancer probability'
      ]
    },
    {
      title: "Treatment Decision Guide",
      description: "Evidence-based treatment selection for localized prostate cancer",
      url: "/prostate-cancer-tools/treatment-decision-guide/",
      icon: Shield,
      category: 'Treatment',
      evidence: 'NCCN Guidelines 2024',
      features: [
        'Risk stratification',
        'Treatment options comparison',
        'Outcome predictions',
        'Patient preference integration'
      ]
    },
    {
      title: "Post-Prostatectomy PSA Doubling Time",
      description: "Biochemical recurrence assessment after radical prostatectomy",
      url: "/prostate-cancer-tools/post-prostatectomy-psadt-calculator/",
      icon: TrendingUp,
      category: 'Monitoring',
      evidence: 'Hopkins Criteria',
      features: [
        'PSA kinetics analysis',
        'Recurrence risk assessment',
        'Salvage therapy timing',
        'Prognosis prediction'
      ]
    },
    {
      title: "Post-Radiation PSA Nadir Calculator",
      description: "PSA nadir analysis and bounce phenomenon evaluation",
      url: "/prostate-cancer-tools/post-radiation-psa-nadir-calculator/",
      icon: Activity,
      category: 'Monitoring',
      evidence: 'Phoenix Definition',
      features: [
        'Nadir value assessment',
        'Bounce detection',
        'Treatment response evaluation',
        'Follow-up recommendations'
      ]
    },
    {
      title: "Biochemical Recurrence Risk Calculator",
      description: "Comprehensive recurrence risk assessment using multiple variables",
      url: "/prostate-cancer-tools/biochemical-recurrence-risk-calculator/",
      icon: Calendar,
      category: 'Prognosis',
      evidence: 'Memorial Sloan Kettering',
      features: [
        'Multi-variable analysis',
        'Long-term risk prediction',
        'Treatment-specific outcomes',
        'Surveillance planning'
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Screening': return 'bg-blue-100 text-blue-800';
      case 'Treatment': return 'bg-green-100 text-green-800';
      case 'Monitoring': return 'bg-yellow-100 text-yellow-800';
      case 'Prognosis': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <EnhancedSEOHead
        title="Prostate Cancer Assessment Tools | Risk Calculators and Treatment Guides"
        description="Comprehensive prostate cancer evaluation tools including PCPT risk calculator, treatment decision guides, and biochemical recurrence assessment for evidence-based patient care."
        canonical="/prostate-cancer-tools/"
        keywords={[
          "prostate cancer calculator",
          "PCPT risk calculator",
          "prostate cancer risk",
          "biochemical recurrence",
          "PSA doubling time",
          "cancer treatment guide"
        ]}
        medicalCondition="Prostate Cancer"
        targetAudience={["urologists", "oncologists", "radiation oncologists"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-20">
          <Breadcrumb />
          
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Target className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prostate Cancer Assessment Tools
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Evidence-based calculators and decision support tools for prostate cancer screening, 
                treatment planning, and outcome prediction. Validated algorithms for clinical practice.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Target className="w-4 h-4 mr-2" />
                  Risk Assessment
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Shield className="w-4 h-4 mr-2" />
                  Treatment Planning
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Outcome Prediction
                </Badge>
              </div>
            </div>
          </section>

          {/* Tools Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Comprehensive Cancer Assessment Suite
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional tools for prostate cancer evaluation across the entire patient journey, 
                  from initial screening to long-term surveillance and outcome assessment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cancerTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <Badge className={getCategoryColor(tool.category)}>
                            {tool.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="mb-4">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Shield className="h-4 w-4 mr-1" />
                            Evidence: {tool.evidence}
                          </div>
                          <ul className="space-y-1">
                            {tool.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="text-green-500 mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link href={tool.url}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Access Calculator
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Clinical Workflow */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Clinical Decision Workflow
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Integrated approach to prostate cancer assessment and management
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Screening</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Risk calculator for pre-biopsy probability assessment and informed decision-making
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Diagnosis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Treatment decision guide for optimal therapy selection based on patient factors
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-yellow-600 font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Treatment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Post-treatment monitoring with PSA kinetics and response evaluation tools
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Surveillance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Long-term recurrence risk assessment and surveillance planning algorithms
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Evidence Base */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Evidence-Based Validation
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  All tools are based on large-scale clinical studies and professional guidelines
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-blue-600" />
                      PCPT Study
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• 18,882 men followed for 7 years</li>
                      <li>• Validated risk prediction model</li>
                      <li>• High-grade cancer detection</li>
                      <li>• Clinical decision support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-green-600" />
                      NCCN Guidelines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Evidence-based recommendations</li>
                      <li>• Risk stratification protocols</li>
                      <li>• Treatment selection criteria</li>
                      <li>• Annual updates and validation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                      Memorial Sloan Kettering
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Large institutional database</li>
                      <li>• Outcome prediction models</li>
                      <li>• Long-term follow-up data</li>
                      <li>• Multi-variable analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="/prostate-cancer-tools/"
                category="calculators"
                limit={6}
              />
            </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </>
  );
}