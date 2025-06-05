import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import PSADoublingTimeCalculator from "@/components/psa-doubling-time-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Clock } from "lucide-react";

export default function PSADoublingTimeCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="PSA Doubling Time Calculator | Prostate Cancer Monitoring Tool"
        description="Calculate PSA doubling time for prostate cancer monitoring and active surveillance. Evidence-based calculator with clinical interpretation and recommendations."
        canonical="/psa-calculators/psa-doubling-time-calculator"
        keywords={[
          "PSA doubling time",
          "prostate cancer monitoring",
          "active surveillance",
          "PSA kinetics",
          "cancer progression",
          "biochemical recurrence"
        ]}
        medicalCondition="Prostate Cancer"
        targetAudience={["urologists", "oncologists", "patients"]}
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
                  <Clock className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PSA Doubling Time Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Monitor prostate cancer progression with precise PSA doubling time calculations. 
                Essential tool for active surveillance and post-treatment monitoring.
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
                  <strong>Clinical Significance:</strong> PSA doubling time &lt;6 months indicates aggressive disease requiring immediate intervention, while PSADT &gt;24 months suggests indolent cancer suitable for continued surveillance.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <PSADoublingTimeCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        Clinical Applications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Active Surveillance</h4>
                        <p className="text-sm text-gray-600">
                          PSADT &gt;3 years suggests low-risk disease suitable for continued monitoring
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Intermediate Risk</h4>
                        <p className="text-sm text-gray-600">
                          PSADT 6 months - 3 years requires careful evaluation and possible intervention
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">High Risk</h4>
                        <p className="text-sm text-gray-600">
                          PSADT &lt;6 months indicates aggressive disease requiring immediate treatment
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Johns Hopkins Active Surveillance Program data</li>
                        <li>• NCCN Guidelines for Prostate Cancer</li>
                        <li>• AUA/ASTRO/SUO Guidelines</li>
                        <li>• Multi-institutional validation studies</li>
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
                currentPage="PSA Doubling Time Calculator"
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