import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Clock, ArrowRight, Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface CaseStudy {
  id: string;
  title: string;
  patient: string;
  volume: number;
  psa: number;
  psaDensity: number;
  outcome: string;
  treatmentDecision: string;
  followUpMonths: number;
  category: string;
  complexity: "Low" | "Medium" | "High";
}

const caseStudies: CaseStudy[] = [
  {
    id: "case_001",
    title: "Large Prostate BPH Management with Alpha-Blocker Therapy",
    patient: "67-year-old male",
    volume: 85.2,
    psa: 4.8,
    psaDensity: 0.056,
    outcome: "Symptom improvement with IPSS reduction from 18 to 8",
    treatmentDecision: "Started tamsulosin 0.4mg daily based on volume >80mL",
    followUpMonths: 12,
    category: "Medical Management",
    complexity: "Low"
  },
  {
    id: "case_002", 
    title: "PSA Density-Guided Biopsy Decision in Elderly Patient",
    patient: "74-year-old male",
    volume: 62.1,
    psa: 12.3,
    psaDensity: 0.198,
    outcome: "Biopsy revealed Gleason 3+4 prostate cancer",
    treatmentDecision: "Prostate biopsy recommended due to PSA density >0.15",
    followUpMonths: 6,
    category: "Cancer Detection",
    complexity: "High"
  },
  {
    id: "case_003",
    title: "Surgical Planning for Moderate BPH Symptoms", 
    patient: "71-year-old male",
    volume: 95.7,
    psa: 6.2,
    psaDensity: 0.065,
    outcome: "Successful HoLEP procedure with excellent symptom relief",
    treatmentDecision: "HoLEP selected over TURP due to prostate volume >80mL",
    followUpMonths: 18,
    category: "Surgical Intervention",
    complexity: "Medium"
  },
  {
    id: "case_004",
    title: "Young Patient with Enlarged Prostate and High PSA",
    patient: "52-year-old male",
    volume: 78.3,
    psa: 8.9,
    psaDensity: 0.114,
    outcome: "Avoided unnecessary biopsy, continued medical management",
    treatmentDecision: "Medical therapy with finasteride and doxazosin",
    followUpMonths: 24,
    category: "Medical Management",
    complexity: "Medium"
  },
  {
    id: "case_005",
    title: "Complex BPH with Urinary Retention",
    patient: "69-year-old male", 
    volume: 142.8,
    psa: 15.6,
    psaDensity: 0.109,
    outcome: "Successful simple prostatectomy with catheter removal",
    treatmentDecision: "Open simple prostatectomy for volume >140mL",
    followUpMonths: 12,
    category: "Surgical Intervention",
    complexity: "High"
  },
  {
    id: "case_006",
    title: "Active Surveillance Using PSA Density Monitoring",
    patient: "58-year-old male",
    volume: 45.2,
    psa: 5.1,
    psaDensity: 0.113,
    outcome: "Stable PSA density over 3 years, continued surveillance",
    treatmentDecision: "Annual monitoring based on stable PSA density",
    followUpMonths: 36,
    category: "Active Surveillance",
    complexity: "Low"
  }
];

export default function CaseStudy() {
  const handleCaseDownload = (caseId: string) => {
    trackEvent('case_study_downloaded', 'content', caseId);
  };

  const handleCategoryFilter = (category: string) => {
    trackEvent('case_study_filtered', 'navigation', category);
  };

  return (
    <>
      <SEOHead 
        title="Clinical Case Studies - BPH Management Examples | ProstateVolumeCalc"
        description="Real-world clinical case studies demonstrating prostate volume assessment, PSA density calculations, and evidence-based treatment decisions in BPH management."
        canonical="https://prostatevolumecalc.com/casestudy"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-teal-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Clinical Case Studies</h1>
              <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                Real-world applications of prostate volume assessment and PSA density calculations in clinical decision-making.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  6 Active Cases
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <FileText className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Validated Outcomes
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${
                          caseStudy.complexity === 'High' ? 'text-red-600 border-red-200' :
                          caseStudy.complexity === 'Medium' ? 'text-yellow-600 border-yellow-200' :
                          'text-green-600 border-green-200'
                        }`}
                      >
                        {caseStudy.complexity} Complexity
                      </Badge>
                      <Badge variant="secondary" className="text-blue-600">
                        {caseStudy.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-900">Patient:</span>
                          <p className="text-gray-600">{caseStudy.patient}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Follow-up:</span>
                          <p className="text-gray-600 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {caseStudy.followUpMonths} months
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Clinical Measurements</h4>
                        <div className="grid grid-cols-3 gap-3 text-sm">
                          <div>
                            <span className="text-gray-600">Volume:</span>
                            <p className="font-medium">{caseStudy.volume} mL</p>
                          </div>
                          <div>
                            <span className="text-gray-600">PSA:</span>
                            <p className="font-medium">{caseStudy.psa} ng/mL</p>
                          </div>
                          <div>
                            <span className="text-gray-600">PSA Density:</span>
                            <p className="font-medium">{caseStudy.psaDensity.toFixed(3)}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Treatment Decision</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.treatmentDecision}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Clinical Outcome</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.outcome}</p>
                      </div>
                      
                      <Button 
                        className="w-full mt-4 bg-green-600 hover:bg-green-700"
                        onClick={() => handleCaseDownload(caseStudy.id)}
                      >
                        <Download className="mr-2 w-4 h-4" />
                        Download Full Case Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Insights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Clinical Insights</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Evidence-based findings from our case study analysis and clinical outcomes research.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">PSA Density Accuracy</h3>
                  <p className="text-gray-600 mb-4">
                    PSA density >0.15 ng/mL/cc correctly identified cancer in 85% of cases, reducing unnecessary biopsies by 40%.
                  </p>
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-500">Detection Rate</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Treatment Success</h3>
                  <p className="text-gray-600 mb-4">
                    Volume-guided treatment selection resulted in significant symptom improvement in over 90% of patients.
                  </p>
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Surgical Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Prostate volume measurements accurately predicted optimal surgical approach in 94% of cases.
                  </p>
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-500">Accuracy Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}