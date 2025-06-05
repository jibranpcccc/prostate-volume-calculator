import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Calculator, Users, Shield, TrendingUp } from "lucide-react";
import SEOHead from "@/components/seo-head";
import ErectileDysfunctionCalculator from "@/components/erectile-dysfunction-calculator";
import TestosteroneDeficiencyCalculator from "@/components/testosterone-deficiency-calculator";
import FreeTestosteroneCalculator from "@/components/free-testosterone-calculator";
import BMICalculator from "@/components/bmi-calculator";

export default function MensHealthCalculators() {
  const [activeTab, setActiveTab] = useState("overview");

  const calculators = [
    {
      id: "ed-assessment",
      title: "Erectile Dysfunction Assessment",
      description: "IIEF-5 questionnaire for comprehensive ED evaluation",
      icon: Heart,
      category: "Sexual Health",
      difficulty: "Intermediate",
      timeEstimate: "5-7 minutes"
    },
    {
      id: "testosterone-screening",
      title: "Testosterone Deficiency Screening",
      description: "ADAM questionnaire for hypogonadism assessment",
      icon: Activity,
      category: "Hormonal Health",
      difficulty: "Beginner",
      timeEstimate: "3-5 minutes"
    },
    {
      id: "free-testosterone",
      title: "Free Testosterone Calculator",
      description: "Calculate bioactive testosterone using Vermeulen equation",
      icon: Calculator,
      category: "Laboratory Analysis",
      difficulty: "Advanced",
      timeEstimate: "2-3 minutes"
    },
    {
      id: "bmi-assessment",
      title: "BMI & Health Risk Calculator",
      description: "Body mass index with cardiovascular risk assessment",
      icon: TrendingUp,
      category: "General Health",
      difficulty: "Beginner",
      timeEstimate: "1-2 minutes"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Men's Health Calculators - Comprehensive Assessment Tools"
        description="Professional men's health calculators including erectile dysfunction assessment, testosterone screening, free testosterone calculation, and BMI analysis. Evidence-based tools for healthcare providers."
        pageType="tools"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Men's Health Assessment Calculators
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive suite of evidence-based calculators for men's health assessment, including sexual health, hormonal evaluation, and general wellness metrics
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Evidence-Based</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Clinically Validated</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Professional Grade</Badge>
            </div>
          </div>

          {/* Statistics */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">4+</p>
                  <p className="text-blue-100">Assessment Tools</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-blue-100">Evidence-Based</p>
                </div>
                <div className="text-center">
                  <Calculator className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Clinical</p>
                  <p className="text-blue-100">Grade Accuracy</p>
                </div>
                <div className="text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-2xl font-bold">Professional</p>
                  <p className="text-blue-100">Healthcare Use</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ed-assessment">ED Assessment</TabsTrigger>
              <TabsTrigger value="testosterone-screening">Testosterone</TabsTrigger>
              <TabsTrigger value="free-testosterone">Free T Calculator</TabsTrigger>
              <TabsTrigger value="bmi-assessment">BMI Analysis</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {calculators.map((calc) => {
                  const IconComponent = calc.icon;
                  return (
                    <Card key={calc.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-lg">
                              <IconComponent className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{calc.title}</CardTitle>
                              <div className="flex gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {calc.category}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {calc.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="mt-3">
                          {calc.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Est. time: {calc.timeEstimate}
                          </span>
                          <Button 
                            onClick={() => setActiveTab(calc.id)}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            Open Calculator
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Clinical Guidelines */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle>Clinical Guidelines & Best Practices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-3">Sexual Health Assessment</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Use validated questionnaires (IIEF-5) for ED screening</li>
                        <li>• Consider cardiovascular risk factors</li>
                        <li>• Assess psychological and relationship factors</li>
                        <li>• Screen for underlying medical conditions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Hormonal Health Evaluation</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Morning testosterone levels (8-10 AM optimal)</li>
                        <li>• Repeat abnormal results for confirmation</li>
                        <li>• Calculate free testosterone when SHBG abnormal</li>
                        <li>• Consider age-adjusted reference ranges</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">General Health Metrics</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• BMI screening for cardiovascular risk</li>
                        <li>• Waist circumference for metabolic assessment</li>
                        <li>• Regular monitoring for health trends</li>
                        <li>• Lifestyle counseling for optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Professional Standards</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Follow AUA and EAU clinical guidelines</li>
                        <li>• Document assessments in medical records</li>
                        <li>• Maintain patient confidentiality</li>
                        <li>• Provide appropriate referrals when indicated</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Individual Calculator Tabs */}
            <TabsContent value="ed-assessment">
              <ErectileDysfunctionCalculator />
            </TabsContent>

            <TabsContent value="testosterone-screening">
              <TestosteroneDeficiencyCalculator />
            </TabsContent>

            <TabsContent value="free-testosterone">
              <FreeTestosteroneCalculator />
            </TabsContent>

            <TabsContent value="bmi-assessment">
              <BMICalculator />
            </TabsContent>
          </Tabs>

          {/* Professional Resources */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Professional Resources & References</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Clinical Guidelines</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• American Urological Association (AUA) Guidelines</li>
                    <li>• European Association of Urology (EAU) Guidelines</li>
                    <li>• International Society for Sexual Medicine (ISSM)</li>
                    <li>• Endocrine Society Clinical Practice Guidelines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Validation Studies</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• IIEF-5: Rosen et al. (1999) - Urology</li>
                    <li>• ADAM Questionnaire: Morley et al. (2000)</li>
                    <li>• Vermeulen Equation: Vermeulen et al. (1999)</li>
                    <li>• BMI Classification: WHO Guidelines (2000)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}