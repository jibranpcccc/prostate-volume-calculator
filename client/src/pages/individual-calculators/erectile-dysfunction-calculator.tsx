import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import ErectileDysfunctionCalculator from "@/components/erectile-dysfunction-calculator";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, ClipboardList, AlertTriangle, BookOpen } from "lucide-react";

export default function ErectileDysfunctionCalculatorPage() {
  return (
    <>
      <SEOHead 
        title="Erectile Dysfunction Calculator (IIEF-5/SHIM) | ProstateVolumeCalc"
        description="IIEF-5 erectile dysfunction severity assessment using the Sexual Health Inventory for Men (SHIM). Validated questionnaire for ED diagnosis and treatment planning."
        canonical="https://prostatevolumecalc.com/mens-health-calculators/erectile-dysfunction-calculator"
        keywords={["erectile dysfunction calculator", "IIEF-5", "SHIM questionnaire", "ED assessment", "sexual health inventory"]}
        medicalCondition="Erectile Dysfunction"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-pink-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Heart className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Erectile Dysfunction Calculator</h1>
              <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
                IIEF-5 Sexual Health Inventory for Men (SHIM) assessment. 
                Validated questionnaire for ED severity evaluation and treatment planning.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  IIEF-5 Standard
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Clinically Validated
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Context */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Alert className="mb-8 border-red-300 bg-red-50">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertDescription className="text-red-800">
                <strong>Clinical Tool:</strong> The IIEF-5 is the gold standard abbreviated questionnaire 
                for ED assessment, validated across multiple populations and clinical settings.
              </AlertDescription>
            </Alert>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calculator */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-600" />
                      IIEF-5 Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ErectileDysfunctionCalculator />
                  </CardContent>
                </Card>
              </div>

              {/* Scoring Guide */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>IIEF-5 Score Interpretation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">ED Severity:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span><strong>22-25:</strong> No ED</span>
                            <Badge variant="outline" className="text-green-600">Normal</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span><strong>17-21:</strong> Mild ED</span>
                            <Badge variant="outline" className="text-yellow-600">Mild</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span><strong>12-16:</strong> Mild-Moderate</span>
                            <Badge variant="outline" className="text-orange-600">Moderate</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span><strong>8-11:</strong> Moderate ED</span>
                            <Badge variant="outline" className="text-red-600">Moderate</Badge>
                          </li>
                          <li className="flex justify-between">
                            <span><strong>5-7:</strong> Severe ED</span>
                            <Badge variant="outline" className="text-red-700">Severe</Badge>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Treatment Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold mb-1">First-line Therapy:</h5>
                        <p>PDE5 inhibitors for most patients</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Lifestyle Factors:</h5>
                        <p>Exercise, diet, smoking cessation</p>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">Underlying Causes:</h5>
                        <p>Cardiovascular, diabetes, hormonal</p>
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
              currentPage="/mens-health-calculators/erectile-dysfunction-calculator"
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