import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, Activity, BarChart3, Calendar, Droplets, Users } from "lucide-react";
import { Link } from "wouter";

interface BPHTool {
  title: string;
  description: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  difficulty: 'Easy' | 'Moderate' | 'Advanced';
  duration: string;
  features: string[];
}

export default function BPHLUTSTools() {
  const bphTools: BPHTool[] = [
    {
      title: "IPSS Questionnaire",
      description: "International Prostate Symptom Score assessment for BPH severity evaluation",
      url: "/bph-luts-tools/ipss-questionnaire/",
      icon: ClipboardList,
      difficulty: 'Easy',
      duration: '3-5 minutes',
      features: [
        'Standardized symptom assessment',
        'Quality of life evaluation',
        'Treatment decision support',
        'Progress monitoring'
      ]
    },
    {
      title: "Post-Void Residual Calculator",
      description: "Clinical significance assessment of bladder emptying efficiency",
      url: "/bph-luts-tools/post-void-residual-calculator/",
      icon: Activity,
      difficulty: 'Easy',
      duration: '1-2 minutes',
      features: [
        'PVR volume interpretation',
        'Severity classification',
        'Treatment recommendations',
        'Risk stratification'
      ]
    },
    {
      title: "Bladder Capacity Calculator",
      description: "Functional and anatomical bladder capacity assessment",
      url: "/bph-luts-tools/bladder-capacity-calculator/",
      icon: BarChart3,
      difficulty: 'Moderate',
      duration: '2-3 minutes',
      features: [
        'Age-adjusted normal ranges',
        'Capacity categorization',
        'Treatment planning',
        'Follow-up recommendations'
      ]
    },
    {
      title: "Voiding Diary Analyzer",
      description: "Comprehensive 24-hour voiding pattern analysis and interpretation",
      url: "/bph-luts-tools/voiding-diary-analyzer/",
      icon: Calendar,
      difficulty: 'Advanced',
      duration: '10-15 minutes',
      features: [
        'Frequency analysis',
        'Volume patterns',
        'Urgency assessment',
        'Fluid intake correlation'
      ]
    },
    {
      title: "OAB Symptom Score Calculator",
      description: "Overactive bladder symptom severity assessment and management guidance",
      url: "/bph-luts-tools/oab-symptom-score-calculator/",
      icon: Droplets,
      difficulty: 'Easy',
      duration: '3-5 minutes',
      features: [
        'OAB-q questionnaire',
        'Symptom severity scoring',
        'Treatment recommendations',
        'Quality of life impact'
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <EnhancedSEOHead
        title="The Ultimate Guide to BPH & LUTS Assessment Tools | ProstateVolumeCalc"
        description="Comprehensive BPH and lower urinary tract symptom evaluation tools including IPSS questionnaire, voiding diary analyzer, bladder capacity calculator, and post-void residual assessment."
        canonical="https://prostatevolumecalc.com/bph-luts-tools/"
        keywords={[
          "BPH assessment tools",
          "LUTS evaluation",
          "IPSS questionnaire",
          "voiding diary",
          "bladder function",
          "prostate symptoms"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "primary care physicians", "patients"]}
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
                  <ClipboardList className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Ultimate Guide to BPH & LUTS Assessment Tools
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                A comprehensive overview of benign prostatic hyperplasia (BPH) and lower urinary tract symptoms (LUTS) evaluation. BPH affects over 50% of men over age 60, causing urinary symptoms that significantly impact quality of life. Our assessment suite includes the International Prostate Symptom Score (IPSS), voiding diary analysis, bladder capacity calculations, and post-void residual measurements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Clinical Assessment
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Symptom Analysis
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Activity className="w-4 h-4 mr-2" />
                  Function Evaluation
                </Badge>
              </div>
            </div>
          </section>

          {/* Tools Grid */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete BPH & LUTS Evaluation Suite
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional-grade assessment tools for comprehensive evaluation of benign prostatic hyperplasia 
                  and lower urinary tract symptoms, supporting evidence-based clinical decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bphTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <Badge className={getDifficultyColor(tool.difficulty)}>
                            {tool.difficulty}
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
                            <Activity className="h-4 w-4 mr-1" />
                            Duration: {tool.duration}
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
                            Start Assessment
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Clinical Applications */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Clinical Applications & Guidelines
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Evidence-based assessment protocols aligned with international urological guidelines
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <ClipboardList className="h-6 w-6 text-blue-600" />
                      Initial Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• IPSS questionnaire for symptom severity</li>
                      <li>• Quality of life impact evaluation</li>
                      <li>• Baseline functional assessment</li>
                      <li>• Treatment necessity determination</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                      Diagnostic Workup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Post-void residual measurement</li>
                      <li>• Bladder capacity assessment</li>
                      <li>• Voiding pattern analysis</li>
                      <li>• Symptom correlation studies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Activity className="h-6 w-6 text-purple-600" />
                      Treatment Monitoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Response to medical therapy</li>
                      <li>• Post-surgical outcomes</li>
                      <li>• Long-term follow-up assessment</li>
                      <li>• Quality of life improvements</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="/bph-luts-tools/"
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