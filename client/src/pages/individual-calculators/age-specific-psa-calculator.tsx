import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import AgeSpecificPSACalculator from "@/components/age-specific-psa-calculator";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, Users } from "lucide-react";

export default function AgeSpecificPSACalculatorPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Age-Specific PSA Calculator | Age-Adjusted PSA Reference Ranges"
        description="Calculate age-specific PSA reference ranges for improved prostate cancer screening accuracy. Evidence-based age-adjusted PSA normal values and percentile analysis."
        canonical="/psa-calculators/age-specific-psa-calculator"
        keywords={[
          "age-specific PSA",
          "age-adjusted PSA",
          "PSA reference ranges",
          "prostate cancer screening",
          "PSA normal values",
          "age-related PSA"
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
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Age-Specific PSA Calculator
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Improve PSA screening accuracy with age-adjusted reference ranges. 
                Reduce false positives in younger men and improve sensitivity in older patients.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Evidence-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Population Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Age-Adjusted</span>
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
                  <strong>Clinical Significance:</strong> Age-specific PSA ranges improve screening accuracy by accounting for normal prostate growth with aging. Upper limits: 40-49 years: 2.5 ng/mL, 50-59: 3.5 ng/mL, 60-69: 4.5 ng/mL, 70-79: 6.5 ng/mL.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <AgeSpecificPSACalculator />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        Age-Specific Reference Ranges
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-700">40-49 years</h4>
                        <p className="text-sm text-gray-600">
                          Normal range: 0-2.5 ng/mL (More sensitive detection)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700">50-59 years</h4>
                        <p className="text-sm text-gray-600">
                          Normal range: 0-3.5 ng/mL (Standard screening age)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-yellow-700">60-69 years</h4>
                        <p className="text-sm text-gray-600">
                          Normal range: 0-4.5 ng/mL (Accounts for BPH)
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700">70-79 years</h4>
                        <p className="text-sm text-gray-600">
                          Normal range: 0-6.5 ng/mL (Age-related increase)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Clinical Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Improved sensitivity in younger men (40-50)</li>
                        <li>• Reduced false positives in older men (70+)</li>
                        <li>• Better cancer detection rates</li>
                        <li>• Fewer unnecessary biopsies</li>
                        <li>• Population-based risk assessment</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Oesterling et al. original validation</li>
                        <li>• AUA Guidelines on PSA Testing</li>
                        <li>• Population-based cohort studies</li>
                        <li>• Multi-ethnic validation studies</li>
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
                currentPage="Age-Specific PSA Calculator"
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