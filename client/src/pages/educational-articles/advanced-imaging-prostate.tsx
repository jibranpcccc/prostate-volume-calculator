import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Zap, Target, CheckCircle, AlertTriangle, TrendingUp, Users } from "lucide-react";

export default function AdvancedImagingProstate() {
  return (
    <>
      <EnhancedSEOHead
        title="Advanced Prostate Imaging | mpMRI, PSMA PET, and Fusion Biopsy"
        description="Comprehensive guide to advanced prostate imaging including multiparametric MRI, PSMA PET/CT, MRI-ultrasound fusion biopsy, and artificial intelligence applications."
        canonical="/education/advanced-imaging-prostate"
        keywords={[
          "prostate MRI",
          "mpMRI prostate",
          "PSMA PET scan",
          "fusion biopsy",
          "PI-RADS scoring",
          "prostate imaging",
          "advanced diagnostics"
        ]}
        medicalCondition="Prostate Cancer"
        targetAudience={["urologists", "radiologists", "oncologists"]}
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
                  <Camera className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Prostate Imaging
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Revolutionary imaging technologies transforming prostate cancer detection, 
                staging, and treatment planning through precision diagnostics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Camera className="w-4 h-4 mr-2" />
                  Advanced Imaging
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Precision Medicine
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Patient Outcomes
                </Badge>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

              {/* Multiparametric MRI */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-blue-600" />
                    Multiparametric MRI (mpMRI)
                  </CardTitle>
                  <CardDescription>
                    Gold standard for prostate cancer detection and localization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Technical Components</h4>
                    <p className="text-blue-700 text-sm">
                      mpMRI combines T2-weighted imaging, diffusion-weighted imaging (DWI), 
                      and dynamic contrast-enhanced (DCE) sequences to provide comprehensive 
                      assessment of prostate anatomy and pathology.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">T2-Weighted Imaging</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Anatomical detail</li>
                          <li>• Zonal anatomy definition</li>
                          <li>• Extracapsular extension</li>
                          <li>• Seminal vesicle invasion</li>
                          <li>• Neurovascular bundle relation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Diffusion-Weighted (DWI)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Cellular density assessment</li>
                          <li>• ADC mapping</li>
                          <li>• Cancer detection sensitivity</li>
                          <li>• Aggressiveness correlation</li>
                          <li>• Most important sequence</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-700">Dynamic Contrast (DCE)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-1">
                          <li>• Perfusion assessment</li>
                          <li>• Early enhancement patterns</li>
                          <li>• Washout characteristics</li>
                          <li>• Peripheral zone focus</li>
                          <li>• Supporting role</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* PI-RADS Scoring */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-green-600" />
                    PI-RADS v2.1 Scoring System
                  </CardTitle>
                  <CardDescription>
                    Standardized reporting and risk stratification framework
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-5 gap-3">
                    <Card className="border-green-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-green-700">PI-RADS 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-2">
                          <div className="text-lg font-bold text-green-600">Very Low</div>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li>• Cancer unlikely</li>
                          <li>• Surveillance appropriate</li>
                          <li>• Risk: under 5%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-blue-700">PI-RADS 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-2">
                          <div className="text-lg font-bold text-blue-600">Low</div>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li>• Cancer unlikely</li>
                          <li>• Consider surveillance</li>
                          <li>• Risk: 5-15%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-yellow-700">PI-RADS 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-2">
                          <div className="text-lg font-bold text-yellow-600">Intermediate</div>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li>• Equivocal findings</li>
                          <li>• Consider biopsy</li>
                          <li>• Risk: 15-45%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-orange-700">PI-RADS 4</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-2">
                          <div className="text-lg font-bold text-orange-600">High</div>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li>• Cancer likely</li>
                          <li>• Biopsy recommended</li>
                          <li>• Risk: 45-75%</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-red-700">PI-RADS 5</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-2">
                          <div className="text-lg font-bold text-red-600">Very High</div>
                        </div>
                        <ul className="text-xs space-y-1">
                          <li>• Cancer very likely</li>
                          <li>• Biopsy strongly recommended</li>
                          <li>• Risk: above 75%</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      PI-RADS 3-5 lesions warrant targeted biopsy consideration, with PI-RADS 4-5 
                      having strong correlation with clinically significant prostate cancer (Grade Group 2 or higher).
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* PSMA PET Imaging */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-purple-600" />
                    PSMA PET/CT Imaging
                  </CardTitle>
                  <CardDescription>
                    Revolutionary molecular imaging for prostate cancer staging and recurrence
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">PSMA Targeting Mechanism</h4>
                    <p className="text-purple-700 text-sm">
                      Prostate-Specific Membrane Antigen (PSMA) is highly expressed in prostate 
                      cancer cells. Radiolabeled PSMA ligands (68Ga-PSMA-11, 18F-DCFPyL) provide 
                      exceptional sensitivity for detecting prostate cancer deposits.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Clinical Applications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Primary staging (high-risk disease)</li>
                          <li>• Biochemical recurrence detection</li>
                          <li>• Treatment response monitoring</li>
                          <li>• Surgical planning guidance</li>
                          <li>• Radiation therapy target definition</li>
                          <li>• Theranostic patient selection</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">Performance Characteristics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Detection rate: 75-95% (PSA above 0.5)</li>
                          <li>• Sensitivity: 85-95% per patient</li>
                          <li>• Specificity: 90-98%</li>
                          <li>• Low PSA detection: Improving sensitivity</li>
                          <li>• False positives: Inflammatory conditions</li>
                          <li>• Superior to conventional imaging</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">PSMA PET Reporting (E-PSMA)</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-2">Lesion Classification:</p>
                        <ul className="space-y-1">
                          <li>• PSMA-RADS 1-5 scoring</li>
                          <li>• Molecular tumor volume</li>
                          <li>• SUV max quantification</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Anatomical Regions:</p>
                        <ul className="space-y-1">
                          <li>• Primary/prostate bed</li>
                          <li>• Lymph nodes (regional/distant)</li>
                          <li>• Skeletal metastases</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Clinical Impact:</p>
                        <ul className="space-y-1">
                          <li>• Treatment change: 50-70%</li>
                          <li>• Oligometastatic identification</li>
                          <li>• Salvage therapy guidance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* MRI-Ultrasound Fusion Biopsy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-orange-600" />
                    MRI-Ultrasound Fusion Biopsy
                  </CardTitle>
                  <CardDescription>
                    Precision-guided tissue sampling combining MRI and real-time ultrasound
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-700">Technical Approach</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Pre-procedure mpMRI review</li>
                          <li>• Real-time MRI-US registration</li>
                          <li>• Targeted lesion sampling</li>
                          <li>• Systematic template biopsy</li>
                          <li>• Tracking and documentation</li>
                          <li>• Quality assurance protocols</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-teal-700">Clinical Advantages</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Higher cancer detection rates</li>
                          <li>• Improved significant cancer yield</li>
                          <li>• Reduced insignificant cancer detection</li>
                          <li>• Better risk stratification</li>
                          <li>• Fewer cores required</li>
                          <li>• Enhanced surveillance confidence</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">PRECISION Trial Results</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">38%</div>
                        <div className="text-orange-700">vs 26% significant cancer detection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">13%</div>
                        <div className="text-orange-700">vs 22% insignificant cancer</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">28%</div>
                        <div className="text-orange-700">avoided biopsies (PI-RADS 1-2)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Artificial Intelligence */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-indigo-600" />
                    Artificial Intelligence in Prostate Imaging
                  </CardTitle>
                  <CardDescription>
                    Machine learning applications enhancing diagnostic accuracy and efficiency
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-indigo-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-indigo-700">Detection Algorithms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• Automated lesion detection</li>
                          <li>• PI-RADS scoring assistance</li>
                          <li>• False positive reduction</li>
                          <li>• Reader variability minimization</li>
                          <li>• Workflow efficiency</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-pink-700">Quantitative Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• Radiomic feature extraction</li>
                          <li>• Texture analysis</li>
                          <li>• ADC value quantification</li>
                          <li>• Perfusion parameters</li>
                          <li>• Biomarker development</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-cyan-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-cyan-700">Future Applications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li>• Treatment response prediction</li>
                          <li>• Genomic correlation</li>
                          <li>• Personalized screening</li>
                          <li>• Outcome prediction models</li>
                          <li>• Integrated decision support</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Implementation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Clinical Implementation Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">mpMRI Quality Standards</h4>
                      <p className="text-gray-700 text-sm">
                        Ensure 3.0T field strength, endorectal coil consideration, standardized protocols, 
                        experienced radiologist interpretation, and structured PI-RADS reporting.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Multidisciplinary Integration</h4>
                      <p className="text-gray-700 text-sm">
                        Establish tumor board review, urologist-radiologist collaboration, 
                        standardized reporting templates, and quality assurance programs.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Patient Selection Criteria</h4>
                      <p className="text-gray-700 text-sm">
                        Consider mpMRI for biopsy-naive patients, repeat biopsy candidates, 
                        active surveillance participants, and staging high-risk disease.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Cost-Effectiveness Considerations</h4>
                      <p className="text-gray-700 text-sm">
                        Balance imaging costs with reduced unnecessary biopsies, improved cancer detection, 
                        better patient outcomes, and long-term healthcare savings.
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
                currentPage="/education/advanced-imaging-prostate"
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