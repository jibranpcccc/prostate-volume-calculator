import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import SchemaMarkup from "@/components/schema-markup";
import PSACalculator from "@/components/psa-calculator";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, TrendingUp, AlertTriangle, BookOpen } from "lucide-react";

export default function PSADensityCalculator() {
  return (
    <>
      <SEOHead 
        title="PSA Density (PSAd) Calculator | Calculate Your Prostate Specific Antigen Density"
        description="Free and accurate PSA Density (PSAd) calculator. Input your PSA and prostate volume to assess your risk. Learn how to interpret your PSAd score."
        canonical="https://prostatevolumecalc.com/psa-calculators/psa-density-calculator/"
        keywords={["PSA density calculator", "calculate PSAd", "prostate specific antigen density", "normal PSAd range", "what is PSA density"]}
        medicalCondition="Prostate Cancer Screening"
      />
      <SchemaMarkup
        pageType="calculator"
        title="PSA Density (PSAd) Calculator | Calculate Your Prostate Specific Antigen Density"
        description="Free and accurate PSA Density (PSAd) calculator. Input your PSA and prostate volume to assess your risk. Learn how to interpret your PSAd score."
        calculatorType="PSA Density Calculator"
        medicalCondition="Prostate Cancer Screening"
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
                  <Calculator className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free PSA Density (PSAd) Calculator</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                PSA density is calculated by dividing your total PSA level by your prostate volume, providing a more accurate assessment of prostate cancer risk than PSA alone. This is one of several important tools in our <a href="/psa-calculators/" className="text-blue-200 hover:text-white underline font-medium">PSA calculators</a> that help provide a more complete picture of prostate health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Cancer Detection
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Evidence-Based
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
                      <Calculator className="w-5 h-5 text-blue-600" />
                      PSA Density Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PSACalculator />
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
                        <h4 className="font-semibold text-green-800 mb-2">PSA Density Risk Levels:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">PSA Density (ng/mL²)</th>
                                <th className="text-left py-2">Risk Level</th>
                                <th className="text-left py-2">Cancer Probability</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">&lt;0.10</td>
                                <td className="py-2 text-green-600 font-medium">Lower Risk</td>
                                <td className="py-2">~8%</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">0.10-0.15</td>
                                <td className="py-2 text-yellow-600 font-medium">Intermediate Risk</td>
                                <td className="py-2">~15%</td>
                              </tr>
                              <tr>
                                <td className="py-2">&gt;0.15</td>
                                <td className="py-2 text-red-600 font-medium">Higher Risk</td>
                                <td className="py-2">&gt;25%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/psa-density-clinical-practice/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">read our complete guide to PSAd in clinical practice</a>.
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

        {/* Why is PSA Density Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is PSA Density Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  PSA density helps differentiate between prostate cancer and benign prostatic hyperplasia (BPH) by accounting for prostate size. 
                  It is particularly useful because a high PSA level can also be caused by <a href="/education/understanding-bph" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">benign prostatic hyperplasia (BPH)</a>, 
                  where the prostate enlarges but is not cancerous.
                </p>
                <p className="text-gray-700 mb-6">
                  When the prostate is enlarged due to BPH, PSA levels naturally increase because there is more prostate tissue producing PSA. 
                  PSA density normalizes this by dividing the PSA level by the prostate volume, providing a more accurate assessment of cancer risk.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Reduces unnecessary biopsies by 20-30%</li>
                        <li>• Maintains 95%+ cancer detection sensitivity</li>
                        <li>• Improves specificity in BPH patients</li>
                        <li>• Cost-effective screening enhancement</li>
                        <li>• Better risk stratification</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">When PSA Density is Most Useful</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• PSA levels between 4-10 ng/mL</li>
                        <li>• Large prostate glands (&gt;40 cc)</li>
                        <li>• Borderline biopsy decisions</li>
                        <li>• Active surveillance monitoring</li>
                        <li>• Repeat biopsy considerations</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators (Sideways Linking) */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Related Calculators</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive prostate health assessment requires multiple tools. Explore these related calculators for a complete picture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    PSA Velocity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    If you have multiple PSA readings over time, you should also use the PSA Velocity Calculator to track the rate of change.
                  </p>
                  <a href="/psa-calculators/psa-velocity-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    PSA Velocity Calculator →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-6 h-6 text-green-600 mr-3" />
                    BPH Symptom Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Since PSA density is often used to assess BPH risk, you may also want to check your symptoms with our IPSS Questionnaire for BPH.
                  </p>
                  <a href="/bph-luts-tools/ipss-questionnaire/" className="text-green-600 hover:text-green-800 font-medium hover:underline">
                    IPSS Questionnaire for BPH →
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
                  <CardTitle className="text-lg">Clinical Practice Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to implementing PSA density in clinical practice with interpretation guidelines.
                  </p>
                  <a href="/education/psa-density-clinical-practice" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    PSA Density Clinical Practice →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Calculator Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Step-by-step guide to using and interpreting PSA density calculations for optimal results.
                  </p>
                  <a href="/blog/psa-density-calculator-guide/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    A Comprehensive Guide to Understanding Your PSA Density Score →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Understanding BPH</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn about benign prostatic hyperplasia and how it affects PSA levels and density calculations.
                  </p>
                  <a href="/education/understanding-bph" className="text-blue-600 hover:text-blue-800 font-medium hover:underline text-sm">
                    Understanding BPH →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks 
              currentPage="/psa-calculators/psa-density-calculator"
              category="calculators"
              limit={4}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}