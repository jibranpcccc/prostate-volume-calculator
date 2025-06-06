import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import PSADoublingTimeCalculator from "@/components/psa-doubling-time-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Timer, Calculator, AlertTriangle, BookOpen, Activity } from "lucide-react";
import { Link } from "wouter";

export default function PSADoublingTimeCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="PSA Doubling Time (PSADT) Calculator | Monitor PSA Growth Rate"
        description="Free PSA Doubling Time calculator to track exponential PSA growth. Calculate PSADT with multiple PSA readings and assess prostate cancer progression risk."
        canonical="https://prostatevolumecalc.com/psa-calculators/psa-doubling-time-calculator/"
        keywords={["PSA doubling time calculator", "PSADT", "PSA growth rate", "prostate cancer monitoring", "PSA kinetics"]}
        medicalCondition="Prostate Cancer Monitoring"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Timer className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free PSA Doubling Time (PSADT) Calculator</h1>
              <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
                PSA doubling time measures how long it takes for PSA levels to double, providing crucial insights for prostate cancer progression monitoring. This is one of several important tools in our <a href="/psa-calculators/" className="text-orange-200 hover:text-white underline font-medium">PSA calculators</a> that help provide a more complete picture of prostate health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Timer className="w-4 h-4 mr-2" />
                  Growth Rate Analysis
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
                      <Timer className="w-5 h-5 text-orange-600" />
                      PSA Doubling Time Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PSADoublingTimeCalculator />
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
                        <h4 className="font-semibold text-orange-800 mb-2">PSA Doubling Time Risk Levels:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">PSADT</th>
                                <th className="text-left py-2">Risk Level</th>
                                <th className="text-left py-2">Clinical Significance</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">&gt; 36 months</td>
                                <td className="py-2 text-green-600 font-medium">Low</td>
                                <td className="py-2">Slow progression</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">12-36 months</td>
                                <td className="py-2 text-yellow-600 font-medium">Moderate</td>
                                <td className="py-2">Monitor closely</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">6-12 months</td>
                                <td className="py-2 text-orange-600 font-medium">High</td>
                                <td className="py-2">Consider treatment</td>
                              </tr>
                              <tr>
                                <td className="py-2">&lt; 6 months</td>
                                <td className="py-2 text-red-600 font-medium">Very High</td>
                                <td className="py-2">Rapid progression</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/psa-doubling-time-clinical-significance" className="text-orange-600 hover:text-orange-800 font-medium hover:underline">read our complete guide to PSA doubling time interpretation</a>.
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

        {/* Why is PSA Doubling Time Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is PSA Doubling Time Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  PSA doubling time (PSADT) provides a dynamic measure of prostate cancer progression by calculating the exponential growth rate of PSA levels. 
                  It is particularly useful because <a href="/education/understanding-bph" className="text-orange-600 hover:text-orange-800 font-medium hover:underline">a high PSA level can also be caused by benign prostatic hyperplasia (BPH)</a>, 
                  but the doubling time helps assess the aggressiveness of potential cancer progression.
                </p>
                <p className="text-gray-700 mb-6">
                  If you have multiple PSA readings over time, you should also use the <a href="/psa-calculators/psa-velocity-calculator/" className="text-orange-600 hover:text-orange-800 font-medium hover:underline">PSA Velocity Calculator</a> to get a complementary linear perspective on PSA kinetics.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Cancer progression monitoring</li>
                        <li>• Treatment efficacy assessment</li>
                        <li>• Prognosis evaluation</li>
                        <li>• Active surveillance decisions</li>
                        <li>• Recurrence detection</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Requires sequential PSA measurements</li>
                        <li>• Minimum 3-4 readings recommended</li>
                        <li>• Exponential growth model</li>
                        <li>• Clinical context essential</li>
                        <li>• Combined with other parameters</li>
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
                Comprehensive PSA evaluation requires multiple assessment tools. Since PSA doubling time is often used to assess cancer progression, you may also want to check your symptoms with our <a href="/bph-luts-tools/ipss-questionnaire/" className="text-orange-600 hover:text-orange-800 font-medium hover:underline">IPSS Questionnaire for BPH</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="w-6 h-6 text-green-600 mr-3" />
                    PSA Velocity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate PSA velocity to complement doubling time analysis with linear growth modeling.
                  </p>
                  <a href="/psa-calculators/psa-velocity-calculator/" className="text-green-600 hover:text-green-800 font-medium hover:underline">
                    Calculate PSA Velocity →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 text-blue-600 mr-3" />
                    PSA Density Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate PSA density to account for prostate size in cancer risk assessment.
                  </p>
                  <a href="/psa-calculators/psa-density-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
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
                  <CardTitle className="text-lg">PSA Doubling Time Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to understanding PSA doubling time calculations and clinical applications.
                  </p>
                  <a href="/blog/psa-doubling-time-calculator-guide" className="text-orange-600 hover:text-orange-800 font-medium hover:underline text-sm">
                    Complete PSA Doubling Time Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">PSA Kinetics in Cancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Advanced concepts in PSA kinetics for cancer monitoring and treatment decisions.
                  </p>
                  <a href="/education/psa-kinetics-cancer-monitoring" className="text-orange-600 hover:text-orange-800 font-medium hover:underline text-sm">
                    PSA Kinetics in Cancer →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Active Surveillance Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn how PSA doubling time fits into active surveillance protocols for prostate cancer.
                  </p>
                  <a href="/education/active-surveillance-protocols" className="text-orange-600 hover:text-orange-800 font-medium hover:underline text-sm">
                    Active Surveillance Guidelines →
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