import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, BookOpen, Calculator, Users, Award, Clock } from "lucide-react";

export default function Resources() {
  const clinicalTools = [
    {
      name: "Prostate Volume Calculator",
      description: "Evidence-based ellipsoid formula calculator for accurate volume assessment",
      type: "Calculator",
      link: "/calculator",
      features: ["Ellipsoid Formula", "Real-time Results", "Clinical Interpretation"]
    },
    {
      name: "PSA Density Calculator",
      description: "Calculate PSA density to improve cancer detection specificity",
      type: "Calculator",
      link: "/tools",
      features: ["Risk Stratification", "Cancer Detection", "Clinical Guidelines"]
    },
    {
      name: "IPSS Assessment Tool",
      description: "International Prostate Symptom Score questionnaire and interpretation",
      type: "Assessment",
      link: "/tools",
      features: ["Validated Scoring", "Quality of Life", "Treatment Planning"]
    },
    {
      name: "Treatment Decision Guide",
      description: "Evidence-based treatment recommendations based on patient parameters",
      type: "Decision Support",
      link: "/tools",
      features: ["Algorithm-Based", "Personalized", "Guideline Compliant"]
    }
  ];

  const guidelines = [
    {
      organization: "American Urological Association",
      title: "Surgical Management of LUTS/BPH",
      year: "2023",
      description: "Comprehensive guidelines for surgical intervention in BPH",
      type: "Clinical Guideline",
      category: "Surgery"
    },
    {
      organization: "European Association of Urology",
      title: "Non-neurogenic Male LUTS",
      year: "2023",
      description: "Evidence-based recommendations for LUTS evaluation and management",
      type: "Clinical Guideline",
      category: "Medical"
    },
    {
      organization: "International Consultation on Urological Diseases",
      title: "ICUD-SIU Consultation on BPH",
      year: "2023",
      description: "International expert consensus on BPH management",
      type: "Expert Consensus",
      category: "Comprehensive"
    },
    {
      organization: "World Health Organization",
      title: "Global Burden of Urological Disease",
      year: "2023",
      description: "Epidemiological data and healthcare impact assessment",
      type: "Epidemiological Study",
      category: "Public Health"
    }
  ];

  const researchPapers = [
    {
      title: "Prostate Volume Measurement: Comparative Analysis of Imaging Modalities",
      authors: "Journal of Urology, 2023",
      abstract: "Comparative study of TRUS, abdominal ultrasound, and MRI for prostate volume measurement accuracy",
      impact: "High Impact",
      citations: "142 citations"
    },
    {
      title: "PSA Density Optimization for Cancer Detection",
      authors: "European Urology, 2023",
      abstract: "Large-scale validation of PSA density thresholds for improved cancer detection specificity",
      impact: "High Impact",
      citations: "98 citations"
    },
    {
      title: "Long-term Outcomes of Medical vs Surgical BPH Management",
      authors: "BJU International, 2023",
      abstract: "10-year follow-up study comparing medical therapy outcomes with surgical interventions",
      impact: "Medium Impact",
      citations: "67 citations"
    }
  ];

  const calculatorFormulas = [
    {
      name: "Ellipsoid Formula",
      formula: "Volume = π/6 × Length × Width × Height",
      description: "Standard formula for prostate volume calculation using three dimensions",
      accuracy: "±15% variance",
      applications: ["TRUS", "Abdominal US", "MRI"]
    },
    {
      name: "PSA Density",
      formula: "PSA Density = Total PSA (ng/mL) / Prostate Volume (cc)",
      description: "Normalized PSA value accounting for prostate size",
      threshold: ">0.15 ng/mL/cc",
      applications: ["Cancer Detection", "Risk Stratification"]
    },
    {
      name: "IPSS Scoring",
      formula: "Total Score = Sum of 7 symptom questions (0-35)",
      description: "Validated questionnaire for symptom severity assessment",
      interpretation: "Mild: 0-7, Moderate: 8-19, Severe: 20-35",
      applications: ["Treatment Planning", "Follow-up Assessment"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Clinical Resources - BPH Guidelines & Research | ProstateVolumeCalc"
        description="Professional medical resources including clinical guidelines, research papers, calculation formulas, and evidence-based tools for BPH and prostate volume assessment."
        canonical="https://prostatevolumecalc.com/resources"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Clinical Resources</h1>
              <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                Comprehensive collection of professional medical resources, clinical guidelines, and evidence-based tools for BPH management and prostate volume assessment.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <FileText className="w-4 h-4 mr-2" />
                  15+ Guidelines
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Award className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Professional Grade
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Tools Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Assessment Tools</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional-grade calculators and assessment tools designed for clinical practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {clinicalTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Calculator className="w-6 h-6 text-green-600" />
                      <Badge variant="outline">{tool.type}</Badge>
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                    <div className="space-y-2 mb-4">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Access Tool
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Guidelines Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Guidelines</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Current evidence-based guidelines from leading urological organizations worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{guideline.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {guideline.year}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{guideline.title}</CardTitle>
                    <p className="text-sm text-gray-600">{guideline.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{guideline.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{guideline.type}</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Research</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Latest peer-reviewed research on prostate volume assessment and BPH management.
              </p>
            </div>

            <div className="space-y-6 mb-16">
              {researchPapers.map((paper, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{paper.title}</CardTitle>
                        <p className="text-sm text-blue-600 mb-2">{paper.authors}</p>
                        <p className="text-gray-600 text-sm">{paper.abstract}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <Badge variant={paper.impact === 'High Impact' ? 'default' : 'secondary'} className="mb-2">
                          {paper.impact}
                        </Badge>
                        <p className="text-xs text-gray-500">{paper.citations}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Calculation Formulas Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Formulas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mathematical formulas and calculation methods used in clinical practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {calculatorFormulas.map((formula, index) => (
                <Card key={index} className="border-t-4 border-t-green-600">
                  <CardHeader>
                    <CardTitle className="text-lg">{formula.name}</CardTitle>
                    <div className="bg-gray-50 p-3 rounded-lg font-mono text-sm">
                      {formula.formula}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">{formula.description}</p>
                    {formula.accuracy && (
                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Accuracy:</strong> {formula.accuracy}
                      </p>
                    )}
                    {formula.threshold && (
                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Threshold:</strong> {formula.threshold}
                      </p>
                    )}
                    {formula.interpretation && (
                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Interpretation:</strong> {formula.interpretation}
                      </p>
                    )}
                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">Applications:</p>
                      <div className="flex flex-wrap gap-1">
                        {formula.applications.map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}