import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import FreePSARatioCalculator from "@/components/free-psa-ratio-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Percent, Calculator, AlertTriangle, BookOpen, Activity } from "lucide-react";
import { Link } from "wouter";

export default function FreePSARatioCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="Free PSA Ratio Calculator | Calculate Free to Total PSA Percentage"
        description="Free PSA Ratio calculator to assess prostate cancer risk. Calculate the percentage of free PSA to total PSA and interpret cancer probability based on ratio."
        canonical="https://prostatevolumecalc.com/psa-calculators/free-psa-ratio-calculator/"
        keywords={["free PSA ratio calculator", "free PSA percentage", "PSA ratio", "prostate cancer risk", "free to total PSA"]}
        medicalCondition="Prostate Cancer Screening"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Percent className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free PSA Ratio Calculator</h1>
              <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
                The free PSA ratio measures the percentage of free PSA relative to total PSA, providing crucial insights for prostate cancer risk assessment. This is one of several important tools in our <a href="/psa-calculators/" className="text-purple-200 hover:text-white underline font-medium">PSA calculators</a> that help provide a more complete picture of prostate health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Percent className="w-4 h-4 mr-2" />
                  Ratio Analysis
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
                      <Percent className="w-5 h-5 text-purple-600" />
                      Free PSA Ratio Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FreePSARatioCalculator />
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
                        <h4 className="font-semibold text-purple-800 mb-2">Free PSA Ratio Risk Levels:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Free PSA Ratio</th>
                                <th className="text-left py-2">Cancer Risk</th>
                                <th className="text-left py-2">Probability</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">&gt; 25%</td>
                                <td className="py-2 text-green-600 font-medium">Low</td>
                                <td className="py-2">~8% cancer risk</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">15-25%</td>
                                <td className="py-2 text-yellow-600 font-medium">Moderate</td>
                                <td className="py-2">~16% cancer risk</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">10-15%</td>
                                <td className="py-2 text-orange-600 font-medium">High</td>
                                <td className="py-2">~24% cancer risk</td>
                              </tr>
                              <tr>
                                <td className="py-2">&lt; 10%</td>
                                <td className="py-2 text-red-600 font-medium">Very High</td>
                                <td className="py-2">~56% cancer risk</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/free-psa-ratio-interpretation" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">read our complete guide to free PSA ratio interpretation</a>.
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

        {/* Why is Free PSA Ratio Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is Free PSA Ratio Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  The free PSA ratio helps distinguish between benign prostatic hyperplasia and prostate cancer in men with elevated PSA levels. 
                  It is particularly useful because <a href="/education/understanding-bph" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">a high PSA level can also be caused by benign prostatic hyperplasia (BPH)</a>, 
                  but the ratio provides additional discriminatory power for cancer detection.
                </p>
                <p className="text-gray-700 mb-6">
                  If you have multiple PSA readings over time, you should also use the <a href="/psa-calculators/psa-velocity-calculator/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">PSA Velocity Calculator</a> to track changes over time and get a comprehensive PSA assessment.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Cancer risk stratification</li>
                        <li>• Biopsy decision support</li>
                        <li>• Reducing unnecessary biopsies</li>
                        <li>• Enhanced PSA interpretation</li>
                        <li>• Screening optimization</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Most useful when total PSA 4-10 ng/mL</li>
                        <li>• Age and prostate size influence interpretation</li>
                        <li>• Combined with other PSA parameters</li>
                        <li>• Clinical context essential</li>
                        <li>• Not replacement for clinical judgment</li>
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
                Comprehensive PSA evaluation requires multiple assessment tools. Since free PSA ratio is often used to assess cancer risk, you may also want to check your symptoms with our <a href="/bph-luts-tools/ipss-questionnaire/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">IPSS Questionnaire for BPH</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 text-blue-600 mr-3" />
                    PSA Density Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate PSA density to complement ratio analysis by accounting for prostate size.
                  </p>
                  <a href="/psa-calculators/psa-density-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    Calculate PSA Density →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 text-orange-600 mr-3" />
                    Age-Specific PSA Ranges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate PSA levels using age-adjusted reference ranges for enhanced interpretation.
                  </p>
                  <a href="/psa-calculators/age-specific-psa-calculator/" className="text-orange-600 hover:text-orange-800 font-medium hover:underline">
                    Check Age-Specific PSA →
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
                  <CardTitle className="text-lg">Free PSA Ratio Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to understanding free PSA ratio calculations and clinical applications.
                  </p>
                  <a href="/blog/free-psa-ratio-calculator-guide" className="text-purple-600 hover:text-purple-800 font-medium hover:underline text-sm">
                    Complete Free PSA Ratio Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PSA Biomarkers Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Advanced concepts in PSA biomarkers including free PSA, complexed PSA, and novel markers.
                  </p>
                  <a href="/education/psa-biomarkers-overview" className="text-purple-600 hover:text-purple-800 font-medium hover:underline text-sm">
                    PSA Biomarkers Overview →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Biopsy Decision Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn how free PSA ratio fits into biopsy decision-making and risk assessment protocols.
                  </p>
                  <a href="/education/prostate-biopsy-guidelines" className="text-purple-600 hover:text-purple-800 font-medium hover:underline text-sm">
                    Biopsy Decision Guidelines →
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