import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, TrendingUp, AlertTriangle } from "lucide-react";

export default function UnderstandingBPH() {
  return (
    <>
      <SEOHead 
        title="Understanding Benign Prostatic Hyperplasia (BPH) - Complete Guide | ProstateVolumeCalc"
        description="Comprehensive guide to benign prostatic hyperplasia including pathophysiology, symptoms, epidemiology, and natural progression patterns. Evidence-based medical education for healthcare professionals."
        canonical="https://prostatevolumecalc.com/education/understanding-bph"
        keywords={["benign prostatic hyperplasia", "BPH pathophysiology", "prostate enlargement", "LUTS symptoms", "BPH epidemiology"]}
        medicalCondition="Benign Prostatic Hyperplasia"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-teal-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <BookOpen className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Understanding Benign Prostatic Hyperplasia</h1>
              <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
                Comprehensive overview of BPH pathophysiology, histologic changes, and natural progression patterns 
                based on the Baltimore Longitudinal Study and Olmsted County Study data.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Clinical Focus
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-green-600" />
                    Clinical Definition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    Benign prostatic hyperplasia (BPH) is a non-malignant enlargement of the prostate gland 
                    characterized by increased cellular proliferation in the transition zone. This common 
                    condition affects over 50% of men by age 60 and up to 90% by age 85, making it one of 
                    the most prevalent urological conditions in aging males.
                  </p>
                </CardContent>
              </Card>

              {/* Pathophysiology */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Pathophysiology and Molecular Mechanisms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Hormonal Influences</h3>
                      <p className="mb-4">
                        BPH development is primarily driven by dihydrotestosterone (DHT), the potent metabolite 
                        of testosterone produced by 5α-reductase enzyme. DHT binds to androgen receptors in 
                        prostate cells, promoting cellular proliferation and gland enlargement.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>5α-reductase Type II:</strong> Predominant enzyme in prostate tissue</li>
                        <li><strong>Androgen receptor activation:</strong> Triggers gene transcription</li>
                        <li><strong>Growth factors:</strong> IGF-1, FGF, and EGF involvement</li>
                        <li><strong>Estrogen role:</strong> May sensitize prostate to androgens</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Histologic Changes</h3>
                      <p className="mb-4">
                        BPH primarily affects the transition zone surrounding the urethra, leading to both 
                        stromal and epithelial hyperplasia. The Baltimore Longitudinal Study demonstrates 
                        age-related increases in both components.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Stromal Hyperplasia</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Smooth muscle proliferation</li>
                            <li>• Increased collagen deposition</li>
                            <li>• α1-adrenergic receptor upregulation</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Epithelial Hyperplasia</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Glandular proliferation</li>
                            <li>• Ductal branching increase</li>
                            <li>• Secretory activity enhancement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Epidemiology */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Epidemiology and Risk Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Age-Related Prevalence</h3>
                      <p className="mb-4">
                        Data from the Olmsted County Study and Baltimore Longitudinal Study provide 
                        definitive age-specific prevalence rates:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600">25%</div>
                            <div className="text-sm text-gray-600">Age 40-49</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">50%</div>
                            <div className="text-sm text-gray-600">Age 50-59</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">75%</div>
                            <div className="text-sm text-gray-600">Age 60-69</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-blue-600">90%</div>
                            <div className="text-sm text-gray-600">Age 80+</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Ethnic and Geographic Variations</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>African Americans:</strong> Higher prevalence and earlier onset</li>
                        <li><strong>Asian populations:</strong> Lower rates, later onset</li>
                        <li><strong>Mediterranean diet:</strong> Potential protective effect</li>
                        <li><strong>Obesity correlation:</strong> Increased risk with BMI &gt;30</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Presentation */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Clinical Presentation and Natural History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Lower Urinary Tract Symptoms (LUTS)</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-red-800 mb-2">Obstructive Symptoms</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Hesitancy and delayed initiation</li>
                            <li>• Weak or interrupted stream</li>
                            <li>• Straining to void</li>
                            <li>• Incomplete bladder emptying</li>
                            <li>• Post-void dribbling</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-2">Irritative Symptoms</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Urinary frequency</li>
                            <li>• Urgency and urge incontinence</li>
                            <li>• Nocturia (>2 episodes/night)</li>
                            <li>• Dysuria</li>
                            <li>• Bladder pain or discomfort</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Disease Progression</h3>
                      <p className="mb-4">
                        The MTOPS trial demonstrated that BPH is a progressive condition with measurable 
                        clinical endpoints:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li><strong>Symptom progression:</strong> IPSS increase >4 points</li>
                        <li><strong>Acute urinary retention:</strong> 1-2% annual incidence</li>
                        <li><strong>Need for surgery:</strong> 2-3% annual rate</li>
                        <li><strong>Renal insufficiency:</strong> Rare but serious complication</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diagnostic Approach */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Evidence-Based Diagnostic Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">AUA/EAU Recommended Assessment</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Medical history and IPSS questionnaire</li>
                        <li>• Digital rectal examination</li>
                        <li>• Urinalysis and serum creatinine</li>
                        <li>• PSA measurement (if life expectancy >10 years)</li>
                        <li>• Post-void residual measurement</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Optional Studies</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Uroflowmetry for objective assessment</li>
                        <li>• Transrectal ultrasound for volume measurement</li>
                        <li>• Pressure-flow studies for complex cases</li>
                        <li>• Cystoscopy before surgical intervention</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks 
              currentPage="/education/understanding-bph"
              category="education"
              limit={4}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}