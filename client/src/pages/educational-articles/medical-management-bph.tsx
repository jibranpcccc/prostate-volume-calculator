import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Pill, Heart, AlertTriangle, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function MedicalManagementBPH() {
  return (
    <>
      <EnhancedSEOHead
        title="Medical Management of BPH | Alpha-Blockers, 5-ARIs, and Combination Therapy"
        description="Comprehensive guide to medical management of benign prostatic hyperplasia including alpha-blockers, 5-alpha reductase inhibitors, combination therapy, and emerging treatments."
        canonical="/education/medical-management-bph"
        keywords={[
          "BPH medical management",
          "alpha-blockers BPH",
          "5-alpha reductase inhibitors",
          "tamsulosin",
          "finasteride",
          "combination therapy BPH"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "primary care physicians", "pharmacists"]}
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
                  <Pill className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Medical Management of BPH
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Evidence-based pharmacological approaches to benign prostatic hyperplasia, 
                from first-line therapies to combination treatments and emerging options.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Pill className="w-4 h-4 mr-2" />
                  Pharmacotherapy
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

              {/* Alpha-Blockers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Pill className="h-6 w-6 text-blue-600" />
                    Alpha-Adrenergic Receptor Antagonists
                  </CardTitle>
                  <CardDescription>
                    First-line therapy for symptomatic BPH with rapid onset of action
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Mechanism of Action</h4>
                    <p className="text-blue-700 text-sm">
                      Alpha-blockers relax smooth muscle in the prostate and bladder neck by 
                      blocking alpha-1 adrenergic receptors, reducing dynamic obstruction and 
                      improving urinary flow without affecting prostate size.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Selective Alpha-1A Blockers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold">Tamsulosin (Flomax)</h5>
                            <ul className="text-sm space-y-1 mt-2">
                              <li>• Dosage: 0.4mg daily after breakfast</li>
                              <li>• Minimal cardiovascular effects</li>
                              <li>• Ejaculatory dysfunction: 8-18%</li>
                              <li>• Preferred in elderly patients</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold">Silodosin (Rapaflo)</h5>
                            <ul className="text-sm space-y-1 mt-2">
                              <li>• Dosage: 8mg daily with meals</li>
                              <li>• Highest alpha-1A selectivity</li>
                              <li>• Retrograde ejaculation: 22-28%</li>
                              <li>• Renal dose adjustment required</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-700">Non-Selective Alpha Blockers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold">Doxazosin (Cardura)</h5>
                            <ul className="text-sm space-y-1 mt-2">
                              <li>• Starting: 1mg daily, titrate to 2-8mg</li>
                              <li>• Cardiovascular benefits</li>
                              <li>• Orthostatic hypotension risk</li>
                              <li>• Gradual dose escalation needed</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold">Terazosin (Hytrin)</h5>
                            <ul className="text-sm space-y-1 mt-2">
                              <li>• Starting: 1mg daily, titrate to 2-10mg</li>
                              <li>• Dual hypertension benefit</li>
                              <li>• First-dose phenomenon</li>
                              <li>• Bedtime administration preferred</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Alpha-blockers provide rapid symptom improvement (2-6 weeks) with 30-40% 
                      reduction in IPSS scores and 2-3 mL/sec improvement in peak flow rates.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* 5-Alpha Reductase Inhibitors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                    5-Alpha Reductase Inhibitors (5-ARIs)
                  </CardTitle>
                  <CardDescription>
                    Disease-modifying therapy for large prostates with progressive symptoms
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Mechanism of Action</h4>
                    <p className="text-purple-700 text-sm">
                      5-ARIs block conversion of testosterone to dihydrotestosterone (DHT), 
                      reducing prostate size by 20-30% over 6-12 months and decreasing 
                      risk of acute urinary retention and need for surgery.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-700">Finasteride (Proscar)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Dosage:</strong> 5mg daily</li>
                          <li><strong>Type II 5-AR inhibitor</strong></li>
                          <li><strong>PSA reduction:</strong> 50% after 6 months</li>
                          <li><strong>Sexual side effects:</strong> 3-5%</li>
                          <li><strong>Generic available:</strong> Cost-effective</li>
                          <li><strong>Efficacy:</strong> Prostates above 40g</li>
                        </ul>
                        <div className="mt-4 p-3 bg-purple-50 rounded">
                          <p className="text-purple-800 font-semibold text-sm">PCPT Study Results</p>
                          <p className="text-purple-700 text-xs">25% reduction in prostate cancer risk</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-indigo-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-indigo-700">Dutasteride (Avodart)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Dosage:</strong> 0.5mg daily</li>
                          <li><strong>Dual 5-AR inhibitor (Type I & II)</strong></li>
                          <li><strong>PSA reduction:</strong> 40-50% after 6 months</li>
                          <li><strong>Sexual side effects:</strong> 4-7%</li>
                          <li><strong>Half-life:</strong> 5 weeks (longer washout)</li>
                          <li><strong>Superior DHT suppression:</strong> 90% vs 70%</li>
                        </ul>
                        <div className="mt-4 p-3 bg-indigo-50 rounded">
                          <p className="text-indigo-800 font-semibold text-sm">REDUCE Trial</p>
                          <p className="text-indigo-700 text-xs">23% reduction in prostate cancer risk</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      5-ARIs require 6-12 months for maximum benefit and may cause temporary 
                      worsening of sexual function. Monitor PSA levels and adjust for 50% reduction 
                      when assessing cancer risk.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Combination Therapy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-red-600" />
                    Combination Therapy
                  </CardTitle>
                  <CardDescription>
                    Alpha-blocker plus 5-ARI for enhanced efficacy in large prostates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-700">CombAT Study Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong>Population:</strong> Prostates above 30g</li>
                          <li>• <strong>Combination:</strong> Dutasteride + Tamsulosin</li>
                          <li>• <strong>IPSS improvement:</strong> 6.2 points vs 4.9 (monotherapy)</li>
                          <li>• <strong>AUR reduction:</strong> 68% vs 57% (dutasteride alone)</li>
                          <li>• <strong>Surgery reduction:</strong> 71% vs 65% (dutasteride alone)</li>
                          <li>• <strong>Follow-up:</strong> 4 years</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">Clinical Indications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Prostate volume above 30-40g</li>
                          <li>• PSA above 1.5-2.0 ng/mL</li>
                          <li>• Moderate to severe symptoms (IPSS above 8)</li>
                          <li>• Risk factors for progression</li>
                          <li>• Patient preference for comprehensive therapy</li>
                          <li>• Previous alpha-blocker partial response</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Jalyn (Dutasteride + Tamsulosin)</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium mb-2">Advantages:</p>
                        <ul className="space-y-1">
                          <li>• Fixed-dose combination</li>
                          <li>• Improved compliance</li>
                          <li>• Synergistic efficacy</li>
                          <li>• Single daily dosing</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-2">Considerations:</p>
                        <ul className="space-y-1">
                          <li>• Higher cost than generics</li>
                          <li>• Combined side effect profile</li>
                          <li>• Cannot adjust individual components</li>
                          <li>• Insurance coverage variable</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emerging Therapies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    Emerging and Alternative Therapies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">Phosphodiesterase-5 Inhibitors</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Tadalafil (Cialis):</strong> 5mg daily</li>
                          <li>• Dual benefit: BPH + ED</li>
                          <li>• Moderate IPSS improvement</li>
                          <li>• Well-tolerated profile</li>
                          <li>• Cardiovascular contraindications</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-orange-700">Antimuscarinic Agents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Storage symptoms:</strong> Frequency, urgency</li>
                          <li>• Combination with alpha-blockers</li>
                          <li>• PVR monitoring required</li>
                          <li>• Cognitive effects in elderly</li>
                          <li>• Dry mouth, constipation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-purple-700">Beta-3 Agonists</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Mirabegron:</strong> 25-50mg daily</li>
                          <li>• Overactive bladder symptoms</li>
                          <li>• Lower retention risk</li>
                          <li>• Blood pressure elevation</li>
                          <li>• Combination therapy potential</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Algorithm */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    Evidence-Based Treatment Algorithm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Step 1: Initial Assessment</h4>
                      <p className="text-gray-700 text-sm mb-2">
                        IPSS score, prostate volume, PSA level, post-void residual, quality of life assessment
                      </p>
                      <ul className="text-sm space-y-1">
                        <li>• Mild symptoms (IPSS 0-7): Watchful waiting</li>
                        <li>• Moderate symptoms (IPSS 8-19): Consider medical therapy</li>
                        <li>• Severe symptoms (IPSS 20-35): Medical therapy recommended</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Step 2: First-Line Therapy Selection</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Small prostate (under 30g): Alpha-blocker monotherapy</li>
                        <li>• Large prostate (above 30g): Consider 5-ARI or combination</li>
                        <li>• Hypertensive patients: Non-selective alpha-blocker</li>
                        <li>• Concurrent ED: Consider PDE-5 inhibitor</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Step 3: Response Assessment</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Alpha-blockers: Evaluate at 2-6 weeks</li>
                        <li>• 5-ARIs: Evaluate at 6-12 months</li>
                        <li>• Target: 3-point IPSS improvement (minimal)</li>
                        <li>• Target: 5-point IPSS improvement (substantial)</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Step 4: Treatment Optimization</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Partial response: Add second agent</li>
                        <li>• Side effects: Switch within class</li>
                        <li>• No response: Reassess diagnosis</li>
                        <li>• Progressive symptoms: Consider surgery</li>
                      </ul>
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
                currentPage="/education/medical-management-bph"
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