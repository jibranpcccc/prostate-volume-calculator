import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import TestosteroneDeficiencyCalculator from "@/components/testosterone-deficiency-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Activity } from "lucide-react";

export default function TestosteroneDeficiencyCalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Testosterone Deficiency Calculator | ADAM Questionnaire Tool"
        description="Screen for testosterone deficiency using the validated ADAM questionnaire. Evidence-based tool for hypogonadism assessment and hormone therapy evaluation."
        canonical="/mens-health-calculators/testosterone-deficiency-calculator"
        keywords={[
          "testosterone deficiency",
          "ADAM questionnaire",
          "hypogonadism screening",
          "low testosterone",
          "hormone therapy",
          "male health assessment"
        ]}
        medicalCondition="Testosterone Deficiency"
        targetAudience={["endocrinologists", "urologists", "primary care physicians", "patients"]}
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
                Testosterone Deficiency Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Screen for testosterone deficiency using the validated ADAM questionnaire. 
                Evidence-based assessment tool for hypogonadism evaluation and treatment decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>ADAM Questionnaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Clinical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Screening Tool</span>
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
                  <strong>Clinical Significance:</strong> ADAM questionnaire is a screening tool. Positive results warrant serum testosterone measurement for definitive diagnosis of hypogonadism.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <TestosteroneDeficiencyCalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-blue-600" />
                        ADAM Questionnaire
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700">High Sensitivity</h4>
                        <p className="text-sm text-gray-600">
                          88% sensitivity for detecting biochemical hypogonadism
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">Screening Tool</h4>
                        <p className="text-sm text-gray-600">
                          Identifies men who should undergo hormone testing
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700">Clinical Validation</h4>
                        <p className="text-sm text-gray-600">
                          Validated against serum testosterone measurements
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Serum total testosterone measurement (morning)</li>
                        <li>• Repeat testing if borderline results</li>
                        <li>• Free or bioavailable testosterone if indicated</li>
                        <li>• LH and FSH levels for classification</li>
                        <li>• Comprehensive metabolic evaluation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AUA Guidelines on Testosterone Therapy</li>
                        <li>• Endocrine Society Clinical Practice Guidelines</li>
                        <li>• Morley et al. original validation study</li>
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
                currentPage="Testosterone Deficiency Calculator"
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