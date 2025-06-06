import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import PostVoidResidualCalculator from "@/components/post-void-residual-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Activity, Calculator, AlertTriangle, BookOpen, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function PostVoidResidualCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="Post-Void Residual (PVR) Calculator | Bladder Emptying Assessment"
        description="Free Post-Void Residual calculator to assess bladder emptying efficiency. Calculate PVR volume significance and interpret residual urine measurements."
        canonical="https://prostatevolumecalc.com/bph-luts-tools/post-void-residual-calculator/"
        keywords={["post-void residual calculator", "PVR calculator", "bladder emptying", "residual urine", "bladder dysfunction"]}
        medicalCondition="Bladder Dysfunction"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Activity className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Free Post-Void Residual (PVR) Calculator</h1>
              <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
                Post-void residual measurement assesses bladder emptying efficiency and helps identify urinary retention. This is one of the essential tools in our <a href="/bph-luts-tools/" className="text-emerald-200 hover:text-white underline font-medium">BPH & LUTS assessment tools</a> that help provide comprehensive evaluation of bladder function.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Activity className="w-4 h-4 mr-2" />
                  Bladder Function
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Calculator className="w-4 h-4 mr-2" />
                  Clinical Assessment
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
                      <Activity className="w-5 h-5 text-emerald-600" />
                      Post-Void Residual Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PostVoidResidualCalculator />
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
                        <h4 className="font-semibold text-emerald-800 mb-2">PVR Volume Significance:</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">PVR Volume</th>
                                <th className="text-left py-2">Significance</th>
                                <th className="text-left py-2">Clinical Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">&lt; 50 mL</td>
                                <td className="py-2 text-green-600 font-medium">Normal</td>
                                <td className="py-2">No action needed</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">50-100 mL</td>
                                <td className="py-2 text-yellow-600 font-medium">Borderline</td>
                                <td className="py-2">Monitor trends</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">100-200 mL</td>
                                <td className="py-2 text-orange-600 font-medium">Abnormal</td>
                                <td className="py-2">Evaluate cause</td>
                              </tr>
                              <tr>
                                <td className="py-2">&gt; 200 mL</td>
                                <td className="py-2 text-red-600 font-medium">Significant</td>
                                <td className="py-2">Urgent evaluation</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm">
                          Interpreting your score requires context. For a deeper dive into the data, <a href="/education/post-void-residual-interpretation" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline">read our complete guide to PVR interpretation</a>.
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

        {/* Why is Post-Void Residual Important */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is Post-Void Residual Important?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Post-void residual (PVR) measurement provides crucial information about bladder emptying efficiency and can identify urinary retention. 
                  It is particularly useful because <a href="/education/understanding-bph" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline">a high PVR can be caused by benign prostatic hyperplasia (BPH)</a>, 
                  detrusor muscle dysfunction, or neurological conditions affecting bladder function.
                </p>
                <p className="text-gray-700 mb-6">
                  Since PVR assessment is often used to evaluate BPH progression, <a href="/" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline">prostate size is a key factor; measure it with our Prostate Volume Calculator</a>. 
                  Larger prostate volumes can cause bladder outlet obstruction leading to incomplete emptying.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Bladder emptying assessment</li>
                        <li>• Urinary retention detection</li>
                        <li>• BPH progression monitoring</li>
                        <li>• Treatment response evaluation</li>
                        <li>• Surgical planning decisions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Key Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Measured by ultrasound or catheterization</li>
                        <li>• Normal variation exists between individuals</li>
                        <li>• Age and prostate size influence normal values</li>
                        <li>• Multiple measurements may be needed</li>
                        <li>• Clinical context essential</li>
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
                Comprehensive bladder function evaluation requires multiple assessment tools. If you have significant PVR, you should also check your symptoms with our <a href="/bph-luts-tools/ipss-questionnaire/" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline">IPSS Questionnaire for BPH</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
                    Bladder Capacity Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Evaluate your functional bladder capacity to complement PVR assessment with volume analysis.
                  </p>
                  <a href="/bph-luts-tools/bladder-capacity-calculator/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                    Calculate Bladder Capacity →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-6 h-6 text-purple-600 mr-3" />
                    Voiding Pattern Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Track your voiding patterns with a detailed diary to complement PVR measurements.
                  </p>
                  <a href="/bph-luts-tools/voiding-diary-analyzer/" className="text-purple-600 hover:text-purple-800 font-medium hover:underline">
                    Analyze Voiding Diary →
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
                  <CardTitle className="text-lg">PVR Assessment Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Comprehensive guide to post-void residual measurement techniques and clinical interpretation.
                  </p>
                  <a href="/blog/post-void-residual-calculator-guide" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline text-sm">
                    Complete PVR Assessment Guide →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Bladder Function Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Advanced concepts in bladder function assessment including PVR, capacity, and compliance.
                  </p>
                  <a href="/education/bladder-function-evaluation" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline text-sm">
                    Bladder Function Evaluation →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Urinary Retention Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    Learn about urinary retention causes, diagnosis, and management strategies based on PVR findings.
                  </p>
                  <a href="/education/urinary-retention-management" className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline text-sm">
                    Urinary Retention Management →
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