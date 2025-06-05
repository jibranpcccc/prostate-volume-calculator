import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import PSACalculator from "@/components/psa-calculator";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator, TrendingUp, AlertTriangle, BookOpen } from "lucide-react";

export default function PSADensityCalculator() {
  return (
    <>
      <SEOHead 
        title="PSA Density Calculator - Cancer Risk Assessment | ProstateVolumeCalc"
        description="Calculate PSA density for enhanced prostate cancer detection. Evidence-based tool using validated thresholds for improved cancer risk stratification and reduced unnecessary biopsies."
        canonical="https://prostatevolumecalc.com/psa-calculators/psa-density-calculator"
        keywords={["PSA density calculator", "prostate cancer screening", "PSA density threshold", "cancer risk assessment", "prostate biopsy decision"]}
        medicalCondition="Prostate Cancer Screening"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Calculator className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">PSA Density Calculator</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Enhanced prostate cancer detection through PSA density calculation. 
                Improve diagnostic accuracy and reduce unnecessary biopsies with evidence-based thresholds.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Cancer Detection
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Context */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="mb-8 border-blue-300 bg-blue-50">
              <AlertTriangle className="h-5 w-5 text-blue-600" />
              <AlertDescription className="text-blue-800">
                <strong>Clinical Application:</strong> PSA density normalizes PSA levels for prostate size, 
                improving cancer detection specificity. Threshold of 0.15 ng/mL/cc is widely used for biopsy decisions.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-blue-600" />
                      PSA Density Calculation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PSACalculator />
                  </CardContent>
                </Card>
              </div>

              {/* Clinical Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Significance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">PSA Density Thresholds:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>&lt;0.10 ng/mL/cc:</strong> Low cancer risk (8% probability)</li>
                          <li>• <strong>0.10-0.15 ng/mL/cc:</strong> Intermediate risk (15% probability)</li>
                          <li>• <strong>&gt;0.15 ng/mL/cc:</strong> High risk (25%+ probability)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Clinical Benefits:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Reduces unnecessary biopsies by 20-30%</li>
                          <li>• Maintains 95%+ cancer detection sensitivity</li>
                          <li>• Improves specificity in BPH patients</li>
                          <li>• Cost-effective screening enhancement</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Evidence Base</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p>
                        <strong>Benson et al. (1992):</strong> Original PSA density concept validation 
                        in distinguishing BPH from prostate cancer.
                      </p>
                      <p>
                        <strong>Prostate Cancer Prevention Trial:</strong> Large-scale validation 
                        showing exponential cancer risk increase above 0.15 threshold.
                      </p>
                      <p>
                        <strong>Recent Meta-analyses:</strong> Consistent evidence across 15,000+ 
                        patients demonstrating improved diagnostic accuracy.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks 
              currentPage="/psa-calculators/psa-density-calculator"
              category="calculators"
              limit={4}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}