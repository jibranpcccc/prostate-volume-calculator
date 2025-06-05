import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import PSAVelocityCalculator from "@/components/psa-velocity-calculator";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TrendingUp, Clock, AlertTriangle, BookOpen } from "lucide-react";

export default function PSAVelocityCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="PSA Velocity Calculator - Prostate Cancer Monitoring | ProstateVolumeCalc"
        description="Calculate PSA velocity to monitor prostate cancer progression and treatment response. Track PSA changes over time with clinical thresholds for risk assessment."
        canonical="https://prostatevolumecalc.com/psa-calculators/psa-velocity-calculator"
        keywords={["PSA velocity calculator", "PSA kinetics", "prostate cancer monitoring", "PSA rise", "cancer progression"]}
        medicalCondition="Prostate Cancer Monitoring"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <TrendingUp className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">PSA Velocity Calculator</h1>
              <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Monitor PSA kinetics and cancer progression with validated velocity calculations. 
                Essential tool for active surveillance and treatment response monitoring.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Clock className="w-4 h-4 mr-2" />
                  Longitudinal Tracking
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Clinical Validated
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Context */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="mb-8 border-purple-300 bg-purple-50">
              <AlertTriangle className="h-5 w-5 text-purple-600" />
              <AlertDescription className="text-purple-800">
                <strong>Clinical Significance:</strong> PSA velocity &gt;0.75 ng/mL/year may indicate 
                cancer progression and warrant further evaluation, especially during active surveillance.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                      PSA Velocity Calculation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PSAVelocityCalculator />
                  </CardContent>
                </Card>
              </div>

              {/* Clinical Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Velocity Thresholds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Risk Stratification:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>&lt;0.35 ng/mL/year:</strong> Low concern</li>
                          <li>• <strong>0.35-0.75 ng/mL/year:</strong> Monitor closely</li>
                          <li>• <strong>{'>'} 0.75 ng/mL/year:</strong> Consider intervention</li>
                          <li>• <strong>{'>'} 2.0 ng/mL/year:</strong> High suspicion for cancer</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Clinical Applications:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Active surveillance monitoring</li>
                          <li>• Treatment response assessment</li>
                          <li>• Cancer recurrence detection</li>
                          <li>• Risk stratification tool</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Calculation Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold mb-1">Minimum Data:</h5>
                        <p>At least 3 PSA values over 18+ months</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Optimal Interval:</h5>
                        <p>PSA measurements every 3-6 months</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Laboratory Consistency:</h5>
                        <p>Same assay method for accurate trends</p>
                      </div>
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
              currentPage="/psa-calculators/psa-velocity-calculator"
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