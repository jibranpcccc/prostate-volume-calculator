import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import FreeTestosteroneCalculator from "@/components/free-testosterone-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Activity } from "lucide-react";

export default function FreeTestosteroneCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Free Testosterone Calculator | Bioavailable Testosterone Calculator"
        description="Calculate free and bioavailable testosterone using the Vermeulen equation. Evidence-based tool for accurate testosterone assessment in men."
        canonical="/mens-health-calculators/free-testosterone-calculator"
        keywords={[
          "free testosterone calculator",
          "bioavailable testosterone",
          "Vermeulen equation",
          "testosterone binding",
          "SHBG calculator",
          "hormone assessment"
        ]}
        medicalCondition="Testosterone Assessment"
        targetAudience={["endocrinologists", "urologists", "primary care physicians"]}
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
                  <Activity className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free Testosterone Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Calculate free and bioavailable testosterone using the validated Vermeulen equation. 
                Accurate assessment of biologically active testosterone fractions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Vermeulen Equation</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Clinical Validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Accurate Assessment</span>
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
                  <strong>Clinical Significance:</strong> Free testosterone represents the biologically active fraction and provides more accurate assessment than total testosterone alone, especially in men with altered SHBG levels.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <FreeTestosteroneCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-blue-600" />
                        Clinical Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Primary Assessment</h4>
                        <p className="text-sm text-gray-600">
                          More accurate than total testosterone for diagnosis
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700">SHBG Variations</h4>
                        <p className="text-sm text-gray-600">
                          Essential when SHBG levels are abnormal (obesity, aging, medications)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700">Treatment Monitoring</h4>
                        <p className="text-sm text-gray-600">
                          Track response to testosterone replacement therapy
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Reference Ranges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• <strong>Free Testosterone:</strong> 9-30 ng/dL (young men)</li>
                        <li>• <strong>Free Testosterone:</strong> 7-25 ng/dL (older men)</li>
                        <li>• <strong>Bioavailable:</strong> 170-590 ng/dL (young men)</li>
                        <li>• <strong>Bioavailable:</strong> 130-490 ng/dL (older men)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Vermeulen et al. validation studies</li>
                        <li>• AUA Guidelines on Testosterone Therapy</li>
                        <li>• Endocrine Society Clinical Practice Guidelines</li>
                        <li>• International Society for Sexual Medicine</li>
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
                currentPage="Free Testosterone Calculator"
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