import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import IPSSQuestionnaire from "@/components/ipss-questionnaire";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ClipboardList, TrendingUp, AlertTriangle, BookOpen, Activity } from "lucide-react";
import { Link } from "wouter";

export default function IPSSQuestionnairePage() {
  return (
    <>
      <SEOHead 
        title="IPSS Questionnaire | International Prostate Symptom Score Assessment"
        description="Free IPSS questionnaire for BPH symptom assessment. International Prostate Symptom Score evaluation with quality of life analysis and treatment recommendations."
        canonical="https://prostatevolumecalc.com/bph-luts-tools/ipss-questionnaire/"
        keywords={["IPSS questionnaire", "International Prostate Symptom Score", "BPH symptoms", "prostate symptom assessment", "LUTS evaluation"]}
        medicalCondition="Benign Prostatic Hyperplasia"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <ClipboardList className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free IPSS Questionnaire</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                The International Prostate Symptom Score (IPSS) is a standardized questionnaire used to assess the severity of lower urinary tract symptoms related to benign prostatic hyperplasia. This is one of the essential tools in our <a href="/bph-luts-tools/" className="text-blue-200 hover:text-white underline font-medium">BPH & LUTS assessment tools</a> that help provide comprehensive evaluation of prostate-related symptoms.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Symptom Assessment
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Questionnaire Tool Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Questionnaire */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-blue-600" />
                      IPSS Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <IPSSQuestionnaire />
                  </CardContent>
                </Card>
              </div>

              {/* How to Interpret Your Results */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Interpret Your Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">IPSS Severity Levels:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">IPSS Score</th>
                                <th className="text-left py-2">Severity</th>
                                <th className="text-left py-2">Symptoms</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">0-7</td>
                                <td className="py-2 text-green-600 font-medium">Mild</td>
                                <td className="py-2">Minimal impact</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">8-19</td>
                                <td className="py-2 text-yellow-600 font-medium">Moderate</td>
                                <td className="py-2">Bothersome symptoms</td>
                              </tr>
                              <tr>
                                <td className="py-2">20-35</td>
                                <td className="py-2 text-red-600 font-medium">Severe</td>
                                <td className="py-2">Significant impact</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/ipss-scoring-interpretation" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">read our complete guide to IPSS scoring interpretation</a>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-red-300 bg-red-50">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong className="block mb-2">Medical Disclaimer:</strong>
                    This tool is for informational purposes only and is not medical advice. Discuss your results with a qualified healthcare provider.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

        {/* Why is IPSS Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is IPSS Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  The IPSS questionnaire provides a standardized method for evaluating the severity of lower urinary tract symptoms (LUTS) associated with benign prostatic hyperplasia (BPH). 
                  It helps track symptom progression over time and guides treatment decisions.
                </p>
                <p className="text-gray-700 mb-6">
                  Since IPSS assessment is often used to evaluate BPH progression, <a href="/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">prostate size is a key factor; measure it with our Prostate Volume Calculator</a>. 
                  Larger prostate volumes typically correlate with higher IPSS scores and more severe symptoms.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Baseline symptom assessment</li>
                        <li>• Treatment response monitoring</li>
                        <li>• Surgical candidacy evaluation</li>
                        <li>• Quality of life impact measurement</li>
                        <li>• Research and clinical trials</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">When to Use IPSS</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Initial BPH evaluation</li>
                        <li>• Pre-treatment assessment</li>
                        <li>• Follow-up visits</li>
                        <li>• Treatment effectiveness monitoring</li>
                        <li>• Surgical planning decisions</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools (Sideways Linking) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Related Assessment Tools</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive BPH evaluation requires multiple assessment tools. Explore these related calculators for a complete picture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 text-green-600 mr-3" />
                    Voiding Diary Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Track your daily habits with a voiding diary to complement your IPSS assessment with detailed frequency and volume data.
                  </p>
                  <a href="/bph-luts-tools/voiding-diary-analyzer/" className="text-green-600 hover:text-green-800 font-medium hover:underline">
                    Track your daily habits with a voiding diary →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    Bladder Function Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate your bladder capacity and post-void residual to assess functional aspects of your urinary symptoms.
                  </p>
                  <a href="/bph-luts-tools/bladder-capacity-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    Assess your bladder function →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Further Reading */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Further Reading</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expand your knowledge with our comprehensive educational resources and clinical insights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">IPSS Scoring Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Detailed interpretation guide for IPSS scores including clinical significance and treatment implications.
                  </p>
                  <a href="/education/ipss-scoring-interpretation" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    IPSS Scoring & Interpretation →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">IPSS Assessment Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Step-by-step guide to using the IPSS questionnaire effectively in clinical practice.
                  </p>
                  <a href="/blog/ipss-assessment-guide" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    Complete IPSS Assessment Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Understanding BPH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn about benign prostatic hyperplasia, its symptoms, and how IPSS helps in evaluation.
                  </p>
                  <a href="/education/understanding-bph" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    Understanding BPH →
                  </a>
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