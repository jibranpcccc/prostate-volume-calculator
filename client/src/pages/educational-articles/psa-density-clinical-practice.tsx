import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Calculator, TrendingUp, Users, AlertTriangle, CheckCircle, Target } from "lucide-react";

export default function PSADensityClinicaPractice() {
  return (
    <>
      <EnhancedSEOHead
        title="PSA Density in Clinical Practice | Prostate Cancer Screening Guidelines"
        description="Evidence-based PSA density application in clinical practice. Optimal thresholds, biopsy decision-making, and integration with modern prostate cancer screening protocols."
        canonical="/education/psa-density-clinical-practice"
        keywords={[
          "PSA density clinical practice",
          "PSA density threshold",
          "prostate biopsy decision",
          "cancer screening guidelines",
          "PSA density interpretation",
          "prostate cancer detection"
        ]}
        medicalCondition="Prostate Cancer Screening"
        targetAudience={["urologists", "primary care physicians", "oncologists"]}
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
                  <Calculator className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PSA Density in Clinical Practice
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Evidence-based application of PSA density for enhanced prostate cancer detection, 
                reduced unnecessary biopsies, and optimized screening protocols.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Target className="w-4 h-4 mr-2" />
                  Clinical Guidelines
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Patient Care
                </Badge>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    PSA Density: Enhanced Screening Parameter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    PSA density (PSAD) represents a significant advancement in prostate cancer screening, 
                    combining serum PSA levels with prostate volume to improve diagnostic accuracy. 
                    This parameter addresses the fundamental limitation of PSA screening by accounting 
                    for benign prostatic enlargement that contributes to elevated PSA levels.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Clinical Advantage</h4>
                    <p className="text-blue-700 text-sm">
                      PSA density improves cancer detection specificity by 15-25% compared to PSA alone, 
                      while maintaining equivalent sensitivity for clinically significant disease.
                    </p>
                  </div>
                  
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Optimal PSA density implementation requires standardized prostate volume measurement 
                      and evidence-based threshold application for different clinical scenarios.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Clinical Thresholds */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-green-600" />
                    Evidence-Based Clinical Thresholds
                  </CardTitle>
                  <CardDescription>
                    Validated PSA density cutoffs for different clinical applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Primary Screening</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-green-600">≥0.15</div>
                          <div className="text-sm text-gray-600">ng/mL/cm³</div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Sensitivity: 85-90%</li>
                          <li>• Specificity: 70-75%</li>
                          <li>• Optimal for initial screening</li>
                          <li>• Reduces unnecessary biopsies by 20%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-700">Repeat Biopsy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-orange-600">≥0.20</div>
                          <div className="text-sm text-gray-600">ng/mL/cm³</div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Higher specificity needed</li>
                          <li>• Reduces repeat procedures</li>
                          <li>• Maintains cancer detection</li>
                          <li>• Cost-effective approach</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-blue-700">Age-Adjusted Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2">Age Group</th>
                              <th className="text-center py-2">Standard Threshold</th>
                              <th className="text-center py-2">Conservative Threshold</th>
                              <th className="text-left py-2">Clinical Context</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2">50-59 years</td>
                              <td className="text-center py-2">≥0.12</td>
                              <td className="text-center py-2">≥0.15</td>
                              <td className="py-2">Higher sensitivity preferred</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2">60-69 years</td>
                              <td className="text-center py-2">≥0.15</td>
                              <td className="text-center py-2">≥0.18</td>
                              <td className="py-2">Balanced approach</td>
                            </tr>
                            <tr>
                              <td className="py-2">70+ years</td>
                              <td className="text-center py-2">≥0.20</td>
                              <td className="text-center py-2">≥0.25</td>
                              <td className="py-2">Higher specificity favored</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              {/* Clinical Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    Clinical Applications and Decision-Making
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-700">Initial Screening</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• PSA 4-10 ng/mL gray zone</li>
                          <li>• Negative DRE findings</li>
                          <li>• Family history consideration</li>
                          <li>• Patient preference integration</li>
                          <li>• Risk-benefit assessment</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-indigo-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-indigo-700">Active Surveillance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• Monitoring disease progression</li>
                          <li>• Trigger for intervention</li>
                          <li>• Combined with mpMRI</li>
                          <li>• Long-term follow-up</li>
                          <li>• Quality of life preservation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-teal-700">Treatment Planning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• Surgical approach selection</li>
                          <li>• Radiation therapy planning</li>
                          <li>• Focal therapy candidacy</li>
                          <li>• Prognosis assessment</li>
                          <li>• Recurrence monitoring</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Implementation Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Clinical Implementation Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Volume Measurement Standardization</h4>
                      <p className="text-gray-700 text-sm">
                        Utilize TRUS ellipsoid formula with standardized measurement protocol. 
                        Ensure operator training and quality assurance for consistent results.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">PSA Laboratory Considerations</h4>
                      <p className="text-gray-700 text-sm">
                        Use standardized PSA assays with known calibration. Avoid calculation 
                        during acute prostatitis or within 6 weeks of prostate manipulation.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Clinical Context Integration</h4>
                      <p className="text-gray-700 text-sm">
                        Combine PSA density with DRE findings, family history, and patient 
                        preferences. Consider multiparametric approach with additional biomarkers.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Patient Communication</h4>
                      <p className="text-gray-700 text-sm">
                        Provide clear explanation of PSA density concept and its role in 
                        personalized screening decisions. Discuss benefits and limitations openly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evidence Base */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Supporting Evidence and Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Research Findings</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Catalona et al.: 25% reduction in unnecessary biopsies</li>
                        <li>• European Randomized Study: Improved specificity to 75%</li>
                        <li>• PCPT Risk Calculator: Enhanced risk stratification</li>
                        <li>• Long-term follow-up: Maintained cancer detection rates</li>
                        <li>• Cost-effectiveness analysis: $2,400 savings per patient</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Clinical Outcomes</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Reduced patient anxiety from fewer procedures</li>
                        <li>• Decreased infection risk and complications</li>
                        <li>• Improved resource utilization</li>
                        <li>• Enhanced patient satisfaction scores</li>
                        <li>• Maintained quality cancer detection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Future Directions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    Future Directions and Emerging Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">MRI Integration</h4>
                      <p className="text-purple-700 text-sm">
                        Combining PSA density with multiparametric MRI findings for enhanced 
                        precision in prostate cancer detection and risk stratification.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Novel Biomarkers</h4>
                      <p className="text-blue-700 text-sm">
                        Integration with PHI, 4Kscore, and SelectMDx for comprehensive 
                        risk assessment panels in personalized screening approaches.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Artificial Intelligence</h4>
                      <p className="text-green-700 text-sm">
                        Machine learning models incorporating PSA density with clinical 
                        variables for optimized decision support systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Related Tools */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="/education/psa-density-clinical-practice"
                category="education"
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