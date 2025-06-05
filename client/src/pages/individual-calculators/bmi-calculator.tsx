import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import BMICalculator from "@/components/bmi-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Scale } from "lucide-react";

export default function BMICalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="BMI Calculator | Body Mass Index Health Assessment Tool"
        description="Calculate BMI and assess health risks with comprehensive body mass index analysis. Evidence-based tool for weight management and health screening."
        canonical="/mens-health-calculators/bmi-calculator"
        keywords={[
          "BMI calculator",
          "body mass index",
          "weight assessment",
          "obesity screening",
          "health risk calculator",
          "weight management"
        ]}
        medicalCondition="Weight Management"
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
                  <Scale className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                BMI Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Calculate body mass index and assess health risks with comprehensive analysis. 
                Evidence-based tool for weight management and health screening.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>WHO Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Health Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Risk Analysis</span>
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
                  <strong>Clinical Significance:</strong> BMI &gt;30 kg/m² indicates obesity with increased risk for diabetes, cardiovascular disease, and other health complications requiring intervention.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <BMICalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Scale className="h-5 w-5 text-blue-600" />
                        BMI Categories
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-700">Underweight (&lt;18.5)</h4>
                        <p className="text-sm text-gray-600">
                          May indicate malnutrition or underlying medical conditions
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700">Normal (18.5-24.9)</h4>
                        <p className="text-sm text-gray-600">
                          Optimal weight range associated with lowest health risks
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Overweight (25-29.9)</h4>
                        <p className="text-sm text-gray-600">
                          Increased risk for cardiovascular disease and diabetes
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">Obese (&gt;30)</h4>
                        <p className="text-sm text-gray-600">
                          Significantly increased health risks requiring intervention
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Health Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Regular physical activity (150 minutes/week)</li>
                        <li>• Balanced nutrition with caloric awareness</li>
                        <li>• Regular health screenings and monitoring</li>
                        <li>• Professional guidance for weight management</li>
                        <li>• Lifestyle modification programs</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Clinical Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Population health screening</li>
                        <li>• Cardiovascular risk assessment</li>
                        <li>• Diabetes prevention programs</li>
                        <li>• Surgical candidacy evaluation</li>
                        <li>• Insurance and occupational health</li>
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
                currentPage="BMI Calculator"
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