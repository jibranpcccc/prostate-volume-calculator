import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle, TrendingUp, Users, FileText, Target } from "lucide-react";

export default function IPSSScoringInterpretation() {
  return (
    <>
      <EnhancedSEOHead
        title="IPSS Scoring and Interpretation Guide | International Prostate Symptom Score"
        description="Comprehensive guide to International Prostate Symptom Score (IPSS) administration, scoring methodology, and clinical interpretation for BPH assessment and treatment planning."
        canonical="/education/ipss-scoring-interpretation"
        keywords={[
          "IPSS scoring",
          "International Prostate Symptom Score",
          "BPH assessment",
          "LUTS evaluation",
          "prostate symptoms",
          "quality of life score"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "primary care physicians", "nurse practitioners"]}
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
                IPSS Scoring and Interpretation
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Master the International Prostate Symptom Score for accurate BPH assessment, 
                treatment planning, and patient outcome monitoring.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Target className="w-4 h-4 mr-2" />
                  Clinical Assessment
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
                    <FileText className="h-6 w-6 text-blue-600" />
                    IPSS: Gold Standard for BPH Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The International Prostate Symptom Score (IPSS) represents the globally 
                    accepted standard for quantifying lower urinary tract symptoms (LUTS) 
                    severity and impact on quality of life. Developed by the American 
                    Urological Association and validated internationally, IPSS provides 
                    objective measurement for clinical decision-making and treatment monitoring.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Clinical Validation</h4>
                    <p className="text-blue-700 text-sm">
                      IPSS demonstrates excellent test-retest reliability (r=0.92) and strong 
                      correlation with objective flow measurements, establishing its utility 
                      for both clinical practice and research applications.
                    </p>
                  </div>
                  
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Proper IPSS administration requires standardized instructions and scoring 
                      methodology to ensure reliable and comparable results across different 
                      clinical settings and time points.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Questionnaire Structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-green-600" />
                    IPSS Questionnaire Structure
                  </CardTitle>
                  <CardDescription>
                    Seven symptom questions plus quality of life assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">Symptom Questions (1-7)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Q1:</strong> Incomplete emptying sensation</li>
                          <li><strong>Q2:</strong> Urinary frequency (under 2 hours)</li>
                          <li><strong>Q3:</strong> Intermittent stream interruption</li>
                          <li><strong>Q4:</strong> Urgency difficulty postponing</li>
                          <li><strong>Q5:</strong> Weak urinary stream</li>
                          <li><strong>Q6:</strong> Straining to begin urination</li>
                          <li><strong>Q7:</strong> Nocturia frequency</li>
                        </ul>
                        <div className="mt-4 p-3 bg-blue-50 rounded">
                          <p className="text-blue-800 font-semibold text-sm">Scoring: 0-5 points each</p>
                          <p className="text-blue-700 text-xs">Total possible: 0-35 points</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-700">Quality of Life (Q8)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm font-medium">
                            "If you were to spend the rest of your life with your urinary 
                            condition the way it is now, how would you feel about that?"
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li><strong>0:</strong> Delighted</li>
                            <li><strong>1:</strong> Pleased</li>
                            <li><strong>2:</strong> Mostly satisfied</li>
                            <li><strong>3:</strong> Mixed feelings</li>
                            <li><strong>4:</strong> Mostly dissatisfied</li>
                            <li><strong>5:</strong> Unhappy</li>
                            <li><strong>6:</strong> Terrible</li>
                          </ul>
                          <div className="mt-4 p-3 bg-purple-50 rounded">
                            <p className="text-purple-800 font-semibold text-sm">Independent scoring</p>
                            <p className="text-purple-700 text-xs">Not included in total IPSS</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Scoring Methodology */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                    Scoring Methodology and Interpretation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Mild Symptoms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-green-600">0-7</div>
                          <div className="text-sm text-gray-600">IPSS Points</div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Minimal impact on daily life</li>
                          <li>• Watchful waiting appropriate</li>
                          <li>• Lifestyle modifications</li>
                          <li>• Annual reassessment</li>
                          <li>• Patient education focus</li>
                        </ul>
                        <div className="mt-3 p-2 bg-green-50 rounded text-center">
                          <span className="text-green-800 text-xs font-medium">Conservative Management</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-yellow-700">Moderate Symptoms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-yellow-600">8-19</div>
                          <div className="text-sm text-gray-600">IPSS Points</div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Noticeable symptom bother</li>
                          <li>• Medical therapy consideration</li>
                          <li>• Alpha-blockers or 5-ARIs</li>
                          <li>• Regular monitoring</li>
                          <li>• QoL assessment important</li>
                        </ul>
                        <div className="mt-3 p-2 bg-yellow-50 rounded text-center">
                          <span className="text-yellow-800 text-xs font-medium">Medical Therapy</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-700">Severe Symptoms</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-red-600">20-35</div>
                          <div className="text-sm text-gray-600">IPSS Points</div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Significant life impact</li>
                          <li>• Surgical intervention consideration</li>
                          <li>• TURP, laser therapy options</li>
                          <li>• Comprehensive evaluation</li>
                          <li>• Complication assessment</li>
                        </ul>
                        <div className="mt-3 p-2 bg-red-50 rounded text-center">
                          <span className="text-red-800 text-xs font-medium">Surgical Consideration</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Quality of Life Score Integration</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-2">QoL Score 0-2 (Satisfied)</p>
                        <ul className="space-y-1">
                          <li>• Consider watchful waiting</li>
                          <li>• Patient counseling on expectations</li>
                          <li>• Regular follow-up monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">QoL Score 3-6 (Bothered)</p>
                        <ul className="space-y-1">
                          <li>• Active treatment consideration</li>
                          <li>• Shared decision-making</li>
                          <li>• Treatment benefit discussion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    Clinical Applications and Treatment Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Initial Assessment</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Baseline symptom severity documentation</li>
                        <li>• Treatment necessity evaluation</li>
                        <li>• Patient education and expectation setting</li>
                        <li>• Objective measurement establishment</li>
                        <li>• Quality of life impact assessment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Follow-up Monitoring</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Treatment response evaluation</li>
                        <li>• Medication effectiveness assessment</li>
                        <li>• Surgical outcome measurement</li>
                        <li>• Disease progression monitoring</li>
                        <li>• Patient satisfaction tracking</li>
                      </ul>
                    </div>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      A 3-point change in IPSS represents clinically meaningful improvement, 
                      while a 5-point change indicates substantial clinical benefit from treatment interventions.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Administration Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Proper Administration Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Patient Preparation</h4>
                      <p className="text-gray-700 text-sm">
                        Ensure patient understanding of the 1-month recall period and provide 
                        clear instructions about symptom frequency assessment. Consider recent 
                        acute conditions that might affect responses.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Standardized Environment</h4>
                      <p className="text-gray-700 text-sm">
                        Administer in private setting with adequate time for thoughtful responses. 
                        Avoid rushing and ensure patient comfort with the questionnaire format.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Scoring Accuracy</h4>
                      <p className="text-gray-700 text-sm">
                        Verify all responses are completed and appropriately scored. Calculate 
                        total IPSS and document quality of life score separately for comprehensive assessment.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Documentation Standards</h4>
                      <p className="text-gray-700 text-sm">
                        Record date, total score, individual domain scores, and quality of life 
                        assessment. Include any relevant clinical context affecting responses.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Decision Matrix */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-blue-600" />
                    Treatment Decision Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left">IPSS Score</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">QoL Score</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Recommended Approach</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Follow-up Interval</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-medium">0-7 (Mild)</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">0-2</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Watchful waiting</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">12 months</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">0-7 (Mild)</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">3-6</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Consider treatment</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">6 months</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-medium">8-19 (Moderate)</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Any</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Medical therapy</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">3-6 months</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">20-35 (Severe)</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Any</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Surgical evaluation</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">1-3 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Related Tools */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="/education/ipss-scoring-interpretation"
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