import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import PSAVelocityCalculator from "@/components/psa-velocity-calculator";
import PSADoublingTimeCalculator from "@/components/psa-doubling-time-calculator";
import FreePSARatioCalculator from "@/components/free-psa-ratio-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, Target, Calculator, BookOpen, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function PSACalculators() {
  return (
    <>
      <SEOHead 
        title="PSA Calculators Suite - Velocity, Doubling Time & Free PSA Ratio | ProstateVolumeCalc"
        description="Comprehensive PSA calculation tools including PSA velocity, doubling time, and free PSA ratio calculators. Professional-grade tools for prostate cancer screening and monitoring."
        canonical="https://prostatevolumecalc.com/psa-calculators"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Advanced PSA Calculators</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Professional-grade PSA analysis tools for enhanced prostate cancer detection, monitoring, and risk assessment. 
                Trusted by urologists and oncologists worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Calculator className="w-4 h-4 mr-2" />
                  3 Advanced Calculators
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Award className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Clinical Grade
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive PSA Analysis Suite</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced PSA calculations that provide deeper insights beyond total PSA values for improved clinical decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">PSA Velocity Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate the rate of PSA change over time. Values &gt;0.75 ng/mL/year may indicate increased cancer risk.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Improved cancer detection</div>
                    <div>• Early identification of aggressive disease</div>
                    <div>• Useful in borderline PSA ranges</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">PSA Doubling Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate time for PSA to double. PSADT &lt;12 months may indicate aggressive disease requiring urgent evaluation.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Post-treatment monitoring</div>
                    <div>• Biochemical recurrence assessment</div>
                    <div>• Prognosis estimation</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-green-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Free PSA Ratio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Calculate percentage of free PSA to differentiate BPH from cancer. Ratios &lt;15% suggest higher cancer risk.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>• Improved PSA specificity</div>
                    <div>• Reduces unnecessary biopsies</div>
                    <div>• Optimal for PSA 4-10 ng/mL</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/tools">
                <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  <BookOpen className="mr-2 w-5 h-5" />
                  View All Clinical Tools
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Calculator Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="velocity" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="velocity" className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  PSA Velocity
                </TabsTrigger>
                <TabsTrigger value="doubling" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Doubling Time
                </TabsTrigger>
                <TabsTrigger value="ratio" className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Free PSA Ratio
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="velocity" className="mt-8">
                <PSAVelocityCalculator />
              </TabsContent>
              
              <TabsContent value="doubling" className="mt-8">
                <PSADoublingTimeCalculator />
              </TabsContent>
              
              <TabsContent value="ratio" className="mt-8">
                <FreePSARatioCalculator />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Clinical Guidelines Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Guidelines & Evidence</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our PSA calculators are based on established clinical guidelines and peer-reviewed research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>PSA Velocity Evidence</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Research Findings</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Carter et al. (2006): PSA velocity &gt;0.75 ng/mL/year associated with cancer-specific mortality</li>
                    <li>• D'Amico et al. (2004): Pre-treatment PSA velocity predicts prostate cancer death</li>
                    <li>• Vickers et al. (2009): PSA velocity improves cancer detection in men with PSA 4-10 ng/mL</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Clinical Applications</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Active surveillance monitoring</li>
                    <li>• Biopsy decision-making</li>
                    <li>• Risk stratification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Free PSA Ratio Evidence</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Clinical Validation</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Catalona et al. (1998): 15% cutoff reduces biopsies by 20% while detecting 95% of cancers</li>
                    <li>• Partin et al. (1996): Free PSA enhances discrimination between BPH and cancer</li>
                    <li>• AUA Guidelines: Recommend free PSA for men with PSA 4-10 ng/mL</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Performance Metrics</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sensitivity: 95% at 15% cutoff</li>
                    <li>• Specificity: 20% improvement over PSA alone</li>
                    <li>• Cost-effective screening enhancement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}