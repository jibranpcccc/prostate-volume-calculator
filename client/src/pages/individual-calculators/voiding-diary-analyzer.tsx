import { Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import VoidingDiaryAnalyzer from "@/components/voiding-diary-analyzer";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Calculator, TrendingUp, FileText } from "lucide-react";

export default function VoidingDiaryAnalyzerPage() {
  return (
    <>
      <EnhancedSEOHead
        title="Voiding Diary Analyzer | Bladder Function Assessment Tool"
        description="Analyze voiding patterns and bladder function with comprehensive diary assessment. Evidence-based tool for LUTS evaluation and treatment planning."
        canonical="/tools/voiding-diary-analyzer"
        keywords={[
          "voiding diary",
          "bladder diary",
          "LUTS assessment",
          "urinary frequency",
          "nocturia analysis",
          "bladder function"
        ]}
        medicalCondition="Lower Urinary Tract Symptoms"
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
                  <FileText className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Voiding Diary Analyzer
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive analysis of voiding patterns and bladder function. 
                Evidence-based tool for LUTS evaluation and personalized treatment planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  <span>Pattern Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Clinical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>LUTS Assessment</span>
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
                  <strong>Clinical Significance:</strong> Voiding frequency &gt;8 times/day or nocturia &gt;2 times/night indicates clinically significant LUTS requiring evaluation and possible intervention.
                </AlertDescription>
              </Alert>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator */}
                <div>
                  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                    <VoidingDiaryAnalyzer />
                  </Suspense>
                </div>

                {/* Clinical Information */}
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Key Parameters
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-700">Daytime Frequency</h4>
                        <p className="text-sm text-gray-600">
                          Normal: 4-7 voids/day | Increased: &gt;8 voids/day
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700">Nocturia</h4>
                        <p className="text-sm text-gray-600">
                          Normal: 0-1 void/night | Clinically significant: &gt;2 voids/night
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700">Functional Capacity</h4>
                        <p className="text-sm text-gray-600">
                          Normal: 300-500 mL | Reduced: &lt;250 mL
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
                        <li>• LUTS severity assessment</li>
                        <li>• Treatment response monitoring</li>
                        <li>• Bladder training program guidance</li>
                        <li>• Medication timing optimization</li>
                        <li>• Surgical candidacy evaluation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Evidence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• ICS Standardization Guidelines</li>
                        <li>• AUA/SUFU Guideline on Nocturia</li>
                        <li>• EAU Guidelines on LUTS/BPH</li>
                        <li>• IUGA/ICS Joint Report on Terminology</li>
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
                currentPage="Voiding Diary Analyzer"
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