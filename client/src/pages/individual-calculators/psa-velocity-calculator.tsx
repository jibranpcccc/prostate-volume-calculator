import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import SchemaMarkup from "@/components/schema-markup";
import PSAVelocityCalculator from "@/components/psa-velocity-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, Calculator, AlertTriangle, BookOpen, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PSAVelocityCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="PSA Velocity (PSAV) Calculator | Track PSA Rate of Change Over Time"
        description="Free PSA Velocity calculator to track PSA rate of change. Calculate PSAV with multiple PSA readings and assess prostate cancer risk based on velocity trends."
        canonical="https://prostatevolumecalc.com/psa-calculators/psa-velocity-calculator/"
        keywords={["PSA velocity calculator", "PSAV", "PSA rate of change", "PSA trend analysis", "prostate cancer screening"]}
        medicalCondition="Prostate Cancer Screening"
      />
      <SchemaMarkup
        pageType="calculator"
        title="PSA Velocity (PSAV) Calculator | Track PSA Rate of Change Over Time"
        description="Free PSA Velocity calculator to track PSA rate of change. Calculate PSAV with multiple PSA readings and assess prostate cancer risk based on velocity trends."
        calculatorType="PSA Velocity Calculator"
        medicalCondition="Prostate Cancer Screening"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-teal-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <TrendingUp className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free PSA Velocity (PSAV) Calculator</h1>
              <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                PSA velocity measures how quickly your PSA level is rising over time, providing crucial insights for prostate cancer risk assessment. This is one of several important tools in our <a href="/psa-calculators/" className="text-green-200 hover:text-white underline font-medium">PSA calculators</a> that help provide a more complete picture of prostate health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trend Analysis
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Calculator className="w-4 h-4 mr-2" />
                  Risk Assessment
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Tool Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      PSA Velocity Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PSAVelocityCalculator />
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
                        <h4 className="font-semibold text-green-800 mb-2">PSA Velocity Risk Levels:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">PSAV (ng/mL/year)</th>
                                <th className="text-left py-2">Risk Level</th>
                                <th className="text-left py-2">Clinical Significance</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">&lt; 0.75</td>
                                <td className="py-2 text-green-600 font-medium">Low</td>
                                <td className="py-2">Normal variation</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">0.75 - 2.0</td>
                                <td className="py-2 text-yellow-600 font-medium">Moderate</td>
                                <td className="py-2">Consider further evaluation</td>
                              </tr>
                              <tr>
                                <td className="py-2">&gt; 2.0</td>
                                <td className="py-2 text-red-600 font-medium">High</td>
                                <td className="py-2">Concerning rapid rise</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/psa-velocity-clinical-significance" className="text-green-600 hover:text-green-800 font-medium hover:underline">read our complete guide to PSA velocity interpretation</a>.
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

        {/* Why is PSA Velocity Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is PSA Velocity Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  PSA velocity (PSAV) tracks the rate of PSA change over time, providing dynamic information about prostate health. 
                  It is particularly useful because <a href="/education/understanding-bph" className="text-green-600 hover:text-green-800 font-medium hover:underline">a high PSA level can also be caused by benign prostatic hyperplasia (BPH)</a>, 
                  but the rate of change helps distinguish between benign and potentially malignant conditions.
                </p>
                <p className="text-gray-700 mb-6">
                  If you have multiple PSA readings over time, you should also use the <a href="/psa-calculators/psa-doubling-time-calculator/" className="text-green-600 hover:text-green-800 font-medium hover:underline">PSA Doubling Time Calculator</a> to get a complementary perspective on PSA kinetics.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Early cancer detection</li>
                        <li>• Risk stratification</li>
                        <li>• Monitoring disease progression</li>
                        <li>• Treatment response assessment</li>
                        <li>• Biopsy decision support</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Requires multiple PSA measurements</li>
                        <li>• Time intervals between tests matter</li>
                        <li>• Age and prostate size influence interpretation</li>
                        <li>• Combined with other PSA metrics</li>
                        <li>• Clinical context is essential</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Related PSA Tools</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive PSA evaluation requires multiple assessment tools. Since PSA velocity is often used to assess cancer risk, you may also want to check your symptoms with our <a href="/bph-luts-tools/ipss-questionnaire/" className="text-green-600 hover:text-green-800 font-medium hover:underline">IPSS Questionnaire for BPH</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                    PSA Doubling Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate PSA doubling time to complement velocity analysis with exponential growth modeling.
                  </p>
                  <a href="/psa-calculators/psa-doubling-time-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    Calculate PSA Doubling Time →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 text-purple-600 mr-3" />
                    PSA Density Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate PSA density to account for prostate size in cancer risk assessment.
                  </p>
                  <a href="/psa-calculators/psa-density-calculator/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">
                    Calculate PSA Density →
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
                  <CardTitle className="text-lg">PSA Velocity Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to understanding PSA velocity calculations and clinical applications.
                  </p>
                  <a href="/blog/psa-velocity-calculator-guide" className="text-green-600 hover:text-green-800 font-medium hover:underline text-sm">
                    Complete PSA Velocity Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PSA Kinetics Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Advanced concepts in PSA kinetics including velocity, doubling time, and trend analysis.
                  </p>
                  <a href="/education/psa-kinetics-analysis" className="text-green-600 hover:text-green-800 font-medium hover:underline text-sm">
                    PSA Kinetics Analysis →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Cancer Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn how PSA velocity fits into comprehensive prostate cancer risk assessment strategies.
                  </p>
                  <a href="/education/prostate-cancer-risk-factors" className="text-green-600 hover:text-green-800 font-medium hover:underline text-sm">
                    Cancer Risk Assessment →
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