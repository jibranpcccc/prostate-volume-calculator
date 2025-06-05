import Header from "@/components/header";
import Footer from "@/components/footer";
import PSACalculator from "@/components/psa-calculator";
import TreatmentGuide from "@/components/treatment-guide";
import IPSSQuestionnaire from "@/components/ipss-questionnaire";
import MedicalCharts from "@/components/medical-charts";
import ComprehensiveCalculator from "@/components/comprehensive-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calculator, 
  TrendingUp, 
  ClipboardList, 
  Stethoscope, 
  FileText,
  Brain,
  Target,
  Activity,
  BarChart3
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function AdvancedTools() {
  const handleTabChange = (tab: string) => {
    trackEvent('advanced_tool_tab_changed', 'navigation', tab);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Advanced Clinical Assessment Tools
            </h1>
            <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Comprehensive suite of validated medical calculators and assessment tools for 
              enhanced BPH diagnosis, risk stratification, and treatment planning.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                <Brain className="w-4 h-4 mr-2" />
                Evidence-Based Algorithms
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                <Target className="w-4 h-4 mr-2" />
                Clinical Decision Support
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                <Activity className="w-4 h-4 mr-2" />
                Integrated Assessment
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Assessment Suite</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated tools designed to support comprehensive urological assessment and clinical decision-making
            </p>
          </div>

          <Alert className="mb-8 border-blue-200 bg-blue-50">
            <Stethoscope className="w-4 h-4" />
            <AlertDescription className="text-blue-800">
              These tools are designed for healthcare professionals and should be used in conjunction with 
              clinical judgment and established medical guidelines. Always consult current literature and 
              professional guidelines for treatment decisions.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="psa-density" onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto">
              <TabsTrigger value="psa-density" className="flex items-center gap-2 p-4">
                <TrendingUp className="w-4 h-4" />
                <span>PSA Density</span>
              </TabsTrigger>
              <TabsTrigger value="ipss-assessment" className="flex items-center gap-2 p-4">
                <ClipboardList className="w-4 h-4" />
                <span>IPSS Assessment</span>
              </TabsTrigger>
              <TabsTrigger value="treatment-guide" className="flex items-center gap-2 p-4">
                <FileText className="w-4 h-4" />
                <span>Treatment Guide</span>
              </TabsTrigger>
              <TabsTrigger value="medical-charts" className="flex items-center gap-2 p-4">
                <BarChart3 className="w-4 h-4" />
                <span>Medical Charts</span>
              </TabsTrigger>
              <TabsTrigger value="risk-calculator" className="flex items-center gap-2 p-4">
                <Calculator className="w-4 h-4" />
                <span>Risk Calculator</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="psa-density" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                    PSA Density Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PSACalculator />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ipss-assessment" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ClipboardList className="w-6 h-6 text-blue-600" />
                    International Prostate Symptom Score (IPSS)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <IPSSQuestionnaire />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="treatment-guide" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-green-600" />
                    Evidence-Based Treatment Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TreatmentGuide />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medical-charts" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-indigo-600" />
                    Clinical Data Visualization & Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MedicalCharts />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk-calculator" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-orange-600" />
                    Comprehensive Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ComprehensiveCalculator />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrated Clinical Workflow</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our tools work together to provide comprehensive patient assessment and treatment planning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Baseline Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Start with prostate volume calculation using TRUS measurements. Establish baseline size for risk stratification.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Ellipsoid formula calculation</p>
                  <p>• Volume-based risk classification</p>
                  <p>• Age-adjusted normal ranges</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Risk Stratification</h3>
                <p className="text-gray-600 mb-6">
                  Calculate PSA density and assess symptom severity using validated IPSS questionnaire.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• PSA density calculation</p>
                  <p>• Cancer risk assessment</p>
                  <p>• Symptom severity scoring</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Treatment Planning</h3>
                <p className="text-gray-600 mb-6">
                  Receive evidence-based treatment recommendations tailored to patient-specific factors.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• Personalized recommendations</p>
                  <p>• Surgical planning guidance</p>
                  <p>• Follow-up protocols</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Clinical Evidence Base</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Validation Studies</h4>
                <p className="mb-3">
                  All calculators and assessment tools are based on peer-reviewed research and validated in large clinical cohorts.
                  Our algorithms incorporate the latest evidence from urology and radiology literature.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Guidelines Compliance</h4>
                <p className="mb-3">
                  Tools align with current AUA, EAU, and NICE guidelines for BPH management, ensuring consistency 
                  with established clinical practice standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}