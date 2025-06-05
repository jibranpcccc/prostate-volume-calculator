import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import BladderCapacityCalculator from "@/components/bladder-capacity-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, CircleDot } from "lucide-react";

export default function BladderCapacityCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Bladder Capacity Calculator | Functional Bladder Assessment Tool"
        description="Calculate estimated and functional bladder capacity for urological assessment. Evidence-based tool for bladder function evaluation and treatment planning."
        canonical="/tools/bladder-capacity-calculator"
        keywords={[
          "bladder capacity",
          "functional capacity",
          "bladder volume",
          "urological assessment",
          "bladder function",
          "LUTS evaluation"
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
                  <CircleDot className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bladder Capacity Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Calculate estimated and functional bladder capacity for comprehensive urological assessment. 
                Evidence-based tool for bladder function evaluation and treatment planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Age-Adjusted</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Clinical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Function Assessment</span>
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
                  <strong>Clinical Significance:</strong> Functional bladder capacity &lt;250 mL indicates reduced capacity requiring evaluation for underlying causes and potential treatment interventions.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <BladderCapacityCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CircleDot className="h-5 w-5 text-blue-600" />
                        Capacity Classifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Normal (300-500 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Adequate functional capacity for normal daily activities
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Reduced (200-299 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Mildly reduced capacity, may cause frequency symptoms
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">Severely Reduced (&lt;200 mL)</h4>
                        <p className="text-sm text-gray-600">
                          Significantly impaired capacity requiring intervention
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
                        <li>• Urodynamic study planning</li>
                        <li>• Bladder training program design</li>
                        <li>• Surgical planning for reconstruction</li>
                        <li>• Treatment response monitoring</li>
                        <li>• Catheterization schedule optimization</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Age-Related Changes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Children: Age-adjusted formula (age + 2) × 30 mL</li>
                        <li>• Young adults: 400-600 mL expected capacity</li>
                        <li>• Elderly: Gradual decrease with aging</li>
                        <li>• Gender differences: Men typically 10-15% higher</li>
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
                currentPage="Bladder Capacity Calculator"
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