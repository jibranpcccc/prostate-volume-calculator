import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import ProstateCancerRiskCalculator from "@/components/prostate-cancer-risk-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Shield } from "lucide-react";

export default function ProstateCancerRiskCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Prostate Cancer Risk Calculator | PCPT Risk Assessment Tool"
        description="Calculate prostate cancer probability using the validated PCPT calculator. Evidence-based tool for risk stratification and biopsy decision-making."
        canonical="/tools/prostate-cancer-risk-calculator"
        keywords={[
          "prostate cancer risk",
          "PCPT calculator",
          "cancer probability",
          "biopsy decision",
          "risk assessment",
          "prostate screening"
        ]}
        medicalCondition="Prostate Cancer Risk"
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
                  <Shield className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prostate Cancer Risk Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Calculate individual prostate cancer probability using the validated PCPT algorithm. 
                Evidence-based tool for personalized risk assessment and biopsy decision-making.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>PCPT Algorithm</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Evidence-Based</span>
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
                  <strong>Clinical Significance:</strong> Cancer risk calculation helps personalize biopsy recommendations. High-risk patients (&gt;25% risk) warrant strong biopsy consideration, while low-risk patients may benefit from surveillance.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <ProstateCancerRiskCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-blue-600" />
                        Risk Stratification
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Low Risk (&lt;15%)</h4>
                        <p className="text-sm text-gray-600">
                          Consider surveillance with repeat PSA and clinical monitoring
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Intermediate Risk (15-25%)</h4>
                        <p className="text-sm text-gray-600">
                          Individualized decision-making considering patient preferences
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">High Risk (&gt;25%)</h4>
                        <p className="text-sm text-gray-600">
                          Strong consideration for prostate biopsy evaluation
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>PCPT Calculator Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Incorporates age, race, family history</li>
                        <li>• Includes DRE findings and PSA levels</li>
                        <li>• Validated in large clinical trial population</li>
                        <li>• Accounts for prior negative biopsy</li>
                        <li>• Provides high-grade cancer probability</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Prostate Cancer Prevention Trial data</li>
                        <li>• Thompson et al. validation studies</li>
                        <li>• AUA Guidelines on PSA Testing</li>
                        <li>• NCCN Prostate Cancer Early Detection</li>
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
                currentPage="Prostate Cancer Risk Calculator"
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