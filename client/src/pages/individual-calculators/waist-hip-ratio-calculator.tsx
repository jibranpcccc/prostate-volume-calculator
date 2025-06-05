import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import WaistHipRatioCalculator from "@/components/waist-hip-ratio-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Target } from "lucide-react";

export default function WaistHipRatioCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Waist-Hip Ratio Calculator | Abdominal Obesity Assessment Tool"
        description="Calculate waist-hip ratio for cardiovascular risk assessment. Evidence-based tool for abdominal obesity screening and metabolic health evaluation."
        canonical="/mens-health-calculators/waist-hip-ratio-calculator"
        keywords={[
          "waist hip ratio",
          "abdominal obesity",
          "WHR calculator",
          "cardiovascular risk",
          "metabolic syndrome",
          "central obesity"
        ]}
        medicalCondition="Abdominal Obesity"
        targetAudience={["healthcare providers", "patients", "fitness professionals"]}
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
                Waist-Hip Ratio Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Assess abdominal obesity and cardiovascular risk with waist-hip ratio analysis. 
                Evidence-based tool for metabolic health screening and risk stratification.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>WHO Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Risk Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Health Screening</span>
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
                  <strong>Clinical Significance:</strong> Waist-hip ratio &gt;0.90 in men indicates abdominal obesity with increased risk for cardiovascular disease, diabetes, and metabolic syndrome.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <WaistHipRatioCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        Risk Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Low Risk</h4>
                        <p className="text-sm text-gray-600">
                          Men: &lt;0.90 | Women: &lt;0.85 - Optimal distribution
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Moderate Risk</h4>
                        <p className="text-sm text-gray-600">
                          Men: 0.90-0.99 | Women: 0.85-0.89 - Increased risk
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">High Risk</h4>
                        <p className="text-sm text-gray-600">
                          Men: &gt;1.0 | Women: &gt;0.90 - Significantly increased risk
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Associated Health Risks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Cardiovascular disease (2-3x increased risk)</li>
                        <li>• Type 2 diabetes mellitus</li>
                        <li>• Metabolic syndrome</li>
                        <li>• Hypertension</li>
                        <li>• Dyslipidemia</li>
                        <li>• Sleep apnea</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Superior to BMI for cardiovascular risk</li>
                        <li>• Metabolic syndrome screening</li>
                        <li>• Weight loss program evaluation</li>
                        <li>• Population health surveillance</li>
                        <li>• Pre-operative risk assessment</li>
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
                currentPage="Waist-Hip Ratio Calculator"
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