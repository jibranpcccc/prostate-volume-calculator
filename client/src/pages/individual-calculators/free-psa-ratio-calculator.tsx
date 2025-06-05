import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import FreePSARatioCalculator from "@/components/free-psa-ratio-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Target } from "lucide-react";

export default function FreePSARatioCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Free PSA Ratio Calculator | Prostate Cancer Risk Assessment"
        description="Calculate free-to-total PSA ratio for improved prostate cancer detection. Evidence-based tool to reduce unnecessary biopsies and improve diagnostic accuracy."
        canonical="/psa-calculators/free-psa-ratio-calculator"
        keywords={[
          "free PSA ratio",
          "prostate cancer screening",
          "PSA fractions",
          "biopsy decision",
          "cancer probability",
          "diagnostic accuracy"
        ]}
        medicalCondition="Prostate Cancer Screening"
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
                  <Target className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free PSA Ratio Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Improve prostate cancer detection accuracy with free-to-total PSA ratio analysis. 
                Reduce unnecessary biopsies while maintaining diagnostic sensitivity.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Clinical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Risk Stratification</span>
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
                  <strong>Clinical Significance:</strong> Free PSA ratio &lt;15% indicates higher cancer probability and warrants biopsy consideration, while ratio &gt;25% suggests lower cancer risk.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <FreePSARatioCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        Clinical Interpretation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-700">High Risk (&lt;15%)</h4>
                        <p className="text-sm text-gray-600">
                          Strong consideration for prostate biopsy. Cancer probability 25-30%
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Intermediate Risk (15-25%)</h4>
                        <p className="text-sm text-gray-600">
                          Individual risk assessment needed. Consider additional factors
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700">Lower Risk (&gt;25%)</h4>
                        <p className="text-sm text-gray-600">
                          Reduced cancer probability. May defer biopsy with close monitoring
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Improve specificity of PSA screening</li>
                        <li>• Reduce unnecessary prostate biopsies</li>
                        <li>• Enhance cancer detection accuracy</li>
                        <li>• Guide shared decision-making</li>
                        <li>• Risk stratification in gray zone PSA (4-10 ng/mL)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AUA/ASTRO/SUO Guidelines</li>
                        <li>• EAU Guidelines on Prostate Cancer</li>
                        <li>• Catalona et al. validation studies</li>
                        <li>• NCCN Clinical Practice Guidelines</li>
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
                currentPage="Free PSA Ratio Calculator"
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