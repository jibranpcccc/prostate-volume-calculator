import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import AgeSpecificPSACalculator from "@/components/age-specific-psa-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Calculator, AlertTriangle, BookOpen, Activity } from "lucide-react";
import { Link } from "wouter";

export default function AgeSpecificPSACalculatorPage() {
  return (
    <>
      <SEOHead 
        title="Age-Specific PSA Calculator | Age-Adjusted PSA Reference Ranges"
        description="Free Age-Specific PSA calculator with age-adjusted reference ranges. Evaluate PSA levels based on age groups for enhanced prostate cancer screening accuracy."
        canonical="https://prostatevolumecalc.com/psa-calculators/age-specific-psa-calculator/"
        keywords={["age-specific PSA calculator", "age-adjusted PSA", "PSA reference ranges", "PSA by age", "prostate screening"]}
        medicalCondition="Prostate Cancer Screening"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-cyan-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Calendar className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free Age-Specific PSA Calculator</h1>
              <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
                Age-specific PSA reference ranges provide enhanced screening accuracy by accounting for natural PSA increases with age. This is one of several important tools in our <a href="/psa-calculators/" className="text-teal-200 hover:text-white underline font-medium">PSA calculators</a> that help provide a more complete picture of prostate health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Calendar className="w-4 h-4 mr-2" />
                  Age-Adjusted
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Calculator className="w-4 h-4 mr-2" />
                  Reference Ranges
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
                      <Calendar className="w-5 h-5 text-teal-600" />
                      Age-Specific PSA Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AgeSpecificPSACalculator />
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
                        <h4 className="font-semibold text-teal-800 mb-2">Age-Specific PSA Reference Ranges:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Age Group</th>
                                <th className="text-left py-2">Normal Range</th>
                                <th className="text-left py-2">Upper Limit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">40-49 years</td>
                                <td className="py-2">0-2.5 ng/mL</td>
                                <td className="py-2">2.5 ng/mL</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">50-59 years</td>
                                <td className="py-2">0-3.5 ng/mL</td>
                                <td className="py-2">3.5 ng/mL</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">60-69 years</td>
                                <td className="py-2">0-4.5 ng/mL</td>
                                <td className="py-2">4.5 ng/mL</td>
                              </tr>
                              <tr>
                                <td className="py-2">70+ years</td>
                                <td className="py-2">0-6.5 ng/mL</td>
                                <td className="py-2">6.5 ng/mL</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/age-specific-psa-interpretation" className="text-teal-600 hover:text-teal-800 font-medium hover:underline">read our complete guide to age-specific PSA interpretation</a>.
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

        {/* Why are Age-Specific PSA Ranges Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why are Age-Specific PSA Ranges Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Age-specific PSA reference ranges account for the natural increase in PSA levels that occurs with aging, providing more accurate screening thresholds. 
                  It is particularly useful because <a href="/education/understanding-bph" className="text-teal-600 hover:text-teal-800 font-medium hover:underline">a high PSA level can also be caused by benign prostatic hyperplasia (BPH)</a>, 
                  which becomes more common with age, and age-adjusted ranges help distinguish normal aging from pathological conditions.
                </p>
                <p className="text-gray-700 mb-6">
                  If you have multiple PSA readings over time, you should also use the <a href="/psa-calculators/psa-velocity-calculator/" className="text-teal-600 hover:text-teal-800 font-medium hover:underline">PSA Velocity Calculator</a> to track changes and get a comprehensive PSA assessment across time.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Enhanced screening accuracy</li>
                        <li>• Reduced false positives in older men</li>
                        <li>• Improved cancer detection in younger men</li>
                        <li>• Age-appropriate risk assessment</li>
                        <li>• Optimized biopsy decisions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Accounts for natural PSA increase with age</li>
                        <li>• Race and ethnicity may influence ranges</li>
                        <li>• Combined with other PSA parameters</li>
                        <li>• Clinical context essential</li>
                        <li>• Individual risk factors matter</li>
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
                Comprehensive PSA evaluation requires multiple assessment tools. Since age-specific PSA is often used for enhanced screening, you may also want to check your symptoms with our <a href="/bph-luts-tools/ipss-questionnaire/" className="text-teal-600 hover:text-teal-800 font-medium hover:underline">IPSS Questionnaire for BPH</a>.
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
                    Calculate PSA density to complement age-specific analysis by accounting for prostate size.
                  </p>
                  <a href="/psa-calculators/psa-density-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    Calculate PSA Density →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 text-purple-600 mr-3" />
                    Free PSA Ratio Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate free PSA ratio for enhanced cancer risk assessment in age-appropriate contexts.
                  </p>
                  <a href="/psa-calculators/free-psa-ratio-calculator/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">
                    Calculate Free PSA Ratio →
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
                  <CardTitle className="text-lg">Age-Specific PSA Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to understanding age-specific PSA ranges and their clinical applications.
                  </p>
                  <a href="/blog/age-specific-psa-calculator-guide" className="text-teal-600 hover:text-teal-800 font-medium hover:underline text-sm">
                    Complete Age-Specific PSA Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PSA Screening Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Current guidelines for PSA screening including age-specific recommendations and risk factors.
                  </p>
                  <a href="/education/psa-screening-guidelines" className="text-teal-600 hover:text-teal-800 font-medium hover:underline text-sm">
                    PSA Screening Guidelines →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Personalized Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn about personalized prostate cancer screening approaches based on age and risk factors.
                  </p>
                  <a href="/education/personalized-prostate-screening" className="text-teal-600 hover:text-teal-800 font-medium hover:underline text-sm">
                    Personalized Screening →
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