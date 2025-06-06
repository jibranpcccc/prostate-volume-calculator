import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ClipboardList, Activity, BarChart3, Calendar, Droplets, Users, BookOpen } from "lucide-react";
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

          {/* BPH & LUTS Calculator Links Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">BPH & LUTS Assessment Suite</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Professional-grade assessment tools for comprehensive evaluation of benign prostatic hyperplasia and lower urinary tract symptoms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* IPSS Questionnaire */}
                <Card className="hover:shadow-xl transition-all border-t-4 border-t-blue-600 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <ClipboardList className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">
                      <Link href="/bph-luts-tools/ipss-questionnaire/" className="text-gray-900 hover:text-blue-600 transition-colors">
                        IPSS Questionnaire
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      International Prostate Symptom Score assessment for standardized BPH severity evaluation and quality of life impact.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>• Standardized symptom assessment</div>
                      <div>• Quality of life evaluation</div>
                      <div>• Treatment decision support</div>
                      <div>• Progress monitoring</div>
                    </div>
                    <Link href="/bph-luts-tools/ipss-questionnaire/">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Start IPSS Assessment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Post-Void Residual Calculator */}
                <Card className="hover:shadow-xl transition-all border-t-4 border-t-green-600 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">
                      <Link href="/bph-luts-tools/post-void-residual-calculator/" className="text-gray-900 hover:text-green-600 transition-colors">
                        Post-Void Residual Calculator
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Clinical significance assessment of bladder emptying efficiency and residual urine volume interpretation.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>• PVR volume interpretation</div>
                      <div>• Severity classification</div>
                      <div>• Treatment recommendations</div>
                      <div>• Risk stratification</div>
                    </div>
                    <Link href="/bph-luts-tools/post-void-residual-calculator/">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Calculate PVR Significance
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Bladder Capacity Calculator */}
                <Card className="hover:shadow-xl transition-all border-t-4 border-t-purple-600 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">
                      <Link href="/bph-luts-tools/bladder-capacity-calculator/" className="text-gray-900 hover:text-purple-600 transition-colors">
                        Bladder Capacity Calculator
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Functional bladder capacity assessment with age-adjusted normal ranges and capacity optimization strategies.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>• Functional capacity assessment</div>
                      <div>• Age-adjusted normal ranges</div>
                      <div>• Capacity optimization</div>
                      <div>• Treatment planning</div>
                    </div>
                    <Link href="/bph-luts-tools/bladder-capacity-calculator/">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Calculate Bladder Capacity
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Voiding Diary Analyzer */}
                <Card className="hover:shadow-xl transition-all border-t-4 border-t-orange-600 group">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">
                      <Link href="/bph-luts-tools/voiding-diary-analyzer/" className="text-gray-900 hover:text-orange-600 transition-colors">
                        Voiding Diary Analyzer
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Comprehensive analysis of voiding patterns, fluid intake, and bladder function based on detailed diary data.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div>• Voiding pattern analysis</div>
                      <div>• Fluid intake assessment</div>
                      <div>• Frequency/urgency evaluation</div>
                      <div>• Behavioral recommendations</div>
                    </div>
                    <Link href="/bph-luts-tools/voiding-diary-analyzer/">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Analyze Voiding Diary
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Supporting Articles Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Supporting Educational Content</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Deepen your understanding with our comprehensive educational resources and clinical insights.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                      Understanding BPH
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Comprehensive guide to benign prostatic hyperplasia, including causes, symptoms, and relationship to LUTS.
                    </p>
                    <Link href="/education/understanding-bph" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                      Learn about benign prostatic hyperplasia and its impact →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 text-green-600 mr-3" />
                      Minimally Invasive BPH Procedures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Explore modern treatment options for BPH including minimally invasive procedures and their outcomes.
                    </p>
                    <Link href="/blog/minimally-invasive-bph-procedures" className="text-green-600 hover:text-green-800 font-medium hover:underline">
                      Discover modern minimally invasive BPH procedures →
                    </Link>
                  </CardContent>
                </Card>
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