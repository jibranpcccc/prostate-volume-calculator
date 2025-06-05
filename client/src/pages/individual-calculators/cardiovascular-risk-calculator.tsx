import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import CardiovascularRiskCalculator from "@/components/cardiovascular-risk-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Heart } from "lucide-react";

export default function CardiovascularRiskCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Cardiovascular Risk Calculator | 10-Year CVD Risk Assessment"
        description="Calculate 10-year cardiovascular disease risk using validated algorithms. Evidence-based tool for heart disease risk stratification and prevention."
        canonical="/mens-health-calculators/cardiovascular-risk-calculator"
        keywords={[
          "cardiovascular risk calculator",
          "heart disease risk",
          "CVD risk assessment",
          "Framingham score",
          "ASCVD calculator",
          "cardiac risk factors"
        ]}
        medicalCondition="Cardiovascular Disease Risk"
        targetAudience={["cardiologists", "primary care physicians", "patients"]}
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
                  <Heart className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cardiovascular Risk Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Assess 10-year cardiovascular disease risk using validated algorithms. 
                Evidence-based tool for risk stratification and prevention planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Risk Stratification</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Prevention Focus</span>
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
                  <strong>Clinical Significance:</strong> High cardiovascular risk (&gt;20% 10-year risk) warrants aggressive intervention with lifestyle modifications and pharmacological therapy per ACC/AHA guidelines.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <CardiovascularRiskCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-blue-600" />
                        Risk Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Low Risk (&lt;7.5%)</h4>
                        <p className="text-sm text-gray-600">
                          Lifestyle counseling and reassessment in 4-6 years
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Borderline Risk (7.5-19.9%)</h4>
                        <p className="text-sm text-gray-600">
                          Consider statin therapy based on risk enhancers
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">High Risk (&gt;20%)</h4>
                        <p className="text-sm text-gray-600">
                          Initiate high-intensity statin and lifestyle intervention
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Prevention Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Blood pressure control (&lt;130/80 mmHg)</li>
                        <li>• LDL cholesterol management (&lt;100 mg/dL)</li>
                        <li>• Diabetes control (HbA1c &lt;7%)</li>
                        <li>• Smoking cessation counseling</li>
                        <li>• Regular physical activity (150 min/week)</li>
                        <li>• Heart-healthy diet (Mediterranean pattern)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• ACC/AHA Cardiovascular Risk Guidelines</li>
                        <li>• Framingham Heart Study data</li>
                        <li>• Pooled Cohort Equations validation</li>
                        <li>• ESC/EAS Prevention Guidelines</li>
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
                currentPage="Cardiovascular Risk Calculator"
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