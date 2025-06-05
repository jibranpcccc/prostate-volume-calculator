import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import PostVoidResidualCalculator from "@/components/post-void-residual-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Droplets } from "lucide-react";

export default function PostVoidResidualCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Post-Void Residual Calculator | Bladder Emptying Assessment Tool"
        description="Calculate post-void residual volume significance for bladder function assessment. Evidence-based tool for urological evaluation and treatment planning."
        canonical="/tools/post-void-residual-calculator"
        keywords={[
          "post void residual",
          "PVR calculator",
          "bladder function",
          "urinary retention",
          "bladder emptying",
          "urological assessment"
        ]}
        medicalCondition="Bladder Dysfunction"
        targetAudience={["urologists", "primary care physicians", "patients"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-20">
          <Breadcrumb />
          
          {/* Hero Section */}
          <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Droplets className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Post-Void Residual Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Assess bladder emptying efficiency with post-void residual volume analysis. 
                Evidence-based tool for urological evaluation and treatment planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Clinical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Diagnostic Tool</span>
                </div>
              </div>
            </div>
          </section>

          {/* Clinical Alert */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Alert className="mb-8 border-purple-300 bg-purple-50">
                <AlertTriangle className="h-5 w-5 text-purple-600" />
                <AlertDescription className="text-purple-800">
                  <strong>Clinical Significance:</strong> Post-void residual &gt;200 mL indicates significant bladder dysfunction requiring further evaluation and possible intervention. PVR &gt;300 mL suggests urinary retention.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <PostVoidResidualCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Droplets className="h-5 w-5 text-blue-600" />
                        Clinical Significance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Normal (&lt;50 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Adequate bladder emptying, no intervention needed
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Mild (50-100 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Borderline significance, monitor and reassess
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700">Moderate (100-200 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Clinically significant, consider underlying causes
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">Severe (&gt;200 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Significant dysfunction, requires intervention
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Common Causes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Benign prostatic hyperplasia (BPH)</li>
                        <li>• Neurogenic bladder dysfunction</li>
                        <li>• Bladder outlet obstruction</li>
                        <li>• Detrusor underactivity</li>
                        <li>• Medications (anticholinergics, opioids)</li>
                        <li>• Urethral stricture</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Repeat measurement for confirmation</li>
                        <li>• Comprehensive urological evaluation</li>
                        <li>• Urodynamic studies if indicated</li>
                        <li>• Imaging studies (renal ultrasound)</li>
                        <li>• Review medications and medical history</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="Post-Void Residual Calculator"
                category="calculators"
                limit={6}
              />
            </div>
          </section>

          {/* Medical References */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <MedicalReferences />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}