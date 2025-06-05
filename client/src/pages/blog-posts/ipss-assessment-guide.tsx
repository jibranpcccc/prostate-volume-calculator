import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Activity, TrendingUp, CheckCircle } from "lucide-react";

export default function IPSSAssessmentGuide() {
  return (
    <>
      <EnhancedSEOHead
        title="IPSS Assessment Guide: International Prostate Symptom Score Evaluation"
        description="Comprehensive guide to IPSS questionnaire administration, scoring, and clinical interpretation for BPH and LUTS assessment in clinical practice."
        canonical="/blog/ipss-assessment-guide"
        keywords={[
          "IPSS guide",
          "prostate symptom score",
          "BPH assessment",
          "LUTS evaluation",
          "urological questionnaire",
          "clinical scoring"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "primary care physicians", "nurse practitioners"]}
        articleSection="Clinical Assessment"
        publishedTime="2024-11-05T00:00:00Z"
        modifiedTime="2024-12-05T00:00:00Z"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header />
        
        <main className="pt-20">
          <Breadcrumb />
          
          {/* Article Header */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  IPSS Assessment Guide
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Complete Clinical Guide to International Prostate Symptom Score Evaluation
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary">Clinical Assessment</Badge>
                  <Badge variant="secondary">BPH Evaluation</Badge>
                  <Badge variant="secondary">LUTS Scoring</Badge>
                  <Badge variant="secondary">Evidence-Based</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <article className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-green-600" />
                      Understanding the IPSS Questionnaire
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      The International Prostate Symptom Score (IPSS) is the gold standard questionnaire 
                      for assessing lower urinary tract symptoms (LUTS) in men with benign prostatic 
                      hyperplasia (BPH). Developed by the American Urological Association and adopted 
                      internationally, it provides standardized symptom assessment and treatment monitoring.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The IPSS consists of seven symptom questions scored 0-5 and one quality of life 
                      question scored 0-6, providing comprehensive evaluation of voiding and storage 
                      symptoms that impact patient wellbeing and guide treatment decisions.
                    </p>
                  </CardContent>
                </Card>

                {/* Questionnaire Structure */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>IPSS Questionnaire Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4">Seven Core Symptom Questions</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-blue-800 mb-2">Voiding Symptoms (Questions 1, 3, 5, 6)</h5>
                        <ul className="text-blue-700 space-y-1">
                          <li>1. Incomplete emptying frequency</li>
                          <li>3. Intermittency (stopping and starting)</li>
                          <li>5. Weak urinary stream</li>
                          <li>6. Straining to begin urination</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-800 mb-2">Storage Symptoms (Questions 2, 4, 7)</h5>
                        <ul className="text-green-700 space-y-1">
                          <li>2. Frequency (voiding within 2 hours)</li>
                          <li>4. Urgency (difficulty postponing urination)</li>
                          <li>7. Nocturia (nighttime voiding frequency)</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold mt-6 mb-3">Scoring System</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Each symptom question (1-7):</p>
                      <ul className="text-gray-700 space-y-1">
                        <li><strong>0:</strong> Not at all</li>
                        <li><strong>1:</strong> Less than 1 time in 5</li>
                        <li><strong>2:</strong> Less than half the time</li>
                        <li><strong>3:</strong> About half the time</li>
                        <li><strong>4:</strong> More than half the time</li>
                        <li><strong>5:</strong> Almost always</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Clinical Interpretation */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600" />
                      Clinical Interpretation and Scoring
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-3">Mild Symptoms</h4>
                        <p className="text-green-600 font-bold text-xl mb-2">0-7 Points</p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Minimal impact on quality of life</li>
                          <li>• Watchful waiting appropriate</li>
                          <li>• Lifestyle modifications</li>
                          <li>• Annual monitoring</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 mb-3">Moderate Symptoms</h4>
                        <p className="text-yellow-600 font-bold text-xl mb-2">8-19 Points</p>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• Noticeable symptom impact</li>
                          <li>• Consider medical therapy</li>
                          <li>• Alpha-blockers or 5-ARIs</li>
                          <li>• Regular follow-up</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-3">Severe Symptoms</h4>
                        <p className="text-red-600 font-bold text-xl mb-2">20-35 Points</p>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• Significant quality impact</li>
                          <li>• Medical therapy indicated</li>
                          <li>• Consider surgical options</li>
                          <li>• Specialist referral</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold mt-6 mb-3">Quality of Life Index</h4>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-purple-800 mb-2">Question 8: "If you were to spend the rest of your life with your urinary condition the way it is now, how would you feel about that?"</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>0:</strong> Delighted</p>
                          <p><strong>1:</strong> Pleased</p>
                          <p><strong>2:</strong> Mostly satisfied</p>
                          <p><strong>3:</strong> Mixed feelings</p>
                        </div>
                        <div>
                          <p><strong>4:</strong> Mostly dissatisfied</p>
                          <p><strong>5:</strong> Unhappy</p>
                          <p><strong>6:</strong> Terrible</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Clinical Applications */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      Clinical Applications and Best Practices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Initial Assessment</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Baseline symptom severity</li>
                          <li>• Treatment planning</li>
                          <li>• Patient counseling</li>
                          <li>• Risk stratification</li>
                          <li>• Quality of life impact</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-3">Treatment Monitoring</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Response assessment</li>
                          <li>• Medication effectiveness</li>
                          <li>• Surgical outcomes</li>
                          <li>• Disease progression</li>
                          <li>• Patient satisfaction</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold mt-6 mb-3">Administration Guidelines</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Self-administered:</strong> Patient completes independently</li>
                      <li>• <strong>Standardized instructions:</strong> Clear explanation of timeframe</li>
                      <li>• <strong>Consistent timing:</strong> Same time of day for follow-ups</li>
                      <li>• <strong>Language considerations:</strong> Validated translations available</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Clinical Evidence */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Clinical Evidence and Validation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Key Validation Studies</h4>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Barry et al. (1992)</h5>
                        <p className="text-gray-700 text-sm">
                          Original AUA Symptom Index development with excellent test-retest 
                          reliability (r=0.92) and internal consistency (Cronbach's α=0.86).
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold">Okada et al. (1991)</h5>
                        <p className="text-gray-700 text-sm">
                          International validation confirming cross-cultural applicability 
                          and establishing global standardization.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold">Roehrborn (2008)</h5>
                        <p className="text-gray-700 text-sm">
                          Large-scale analysis demonstrating IPSS as primary endpoint 
                          in BPH clinical trials with proven responsiveness to treatment.
                        </p>
                      </div>
                    </div>

                    <h4 className="font-semibold mt-6 mb-3">Psychometric Properties</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-gray-700 space-y-1">
                        <li>• <strong>Internal consistency:</strong> Cronbach's α = 0.86</li>
                        <li>• <strong>Test-retest reliability:</strong> r = 0.92</li>
                        <li>• <strong>Construct validity:</strong> Well-established</li>
                        <li>• <strong>Responsiveness:</strong> Sensitive to clinical change</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Limitations and Considerations */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Clinical Limitations and Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Important Limitations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Subjective assessment:</strong> Patient perception variability</li>
                      <li>• <strong>No urgency incontinence:</strong> Limited storage symptom assessment</li>
                      <li>• <strong>Recall bias:</strong> 4-week timeframe dependency</li>
                      <li>• <strong>Age considerations:</strong> Expectations vary with age</li>
                    </ul>

                    <h4 className="font-semibold mt-6 mb-3">Clinical Considerations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Supplement with objective measures (uroflowmetry, PVR)</li>
                      <li>• Consider bladder diaries for detailed assessment</li>
                      <li>• Account for comorbidities affecting symptoms</li>
                      <li>• Regular reassessment during treatment</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Integration with Treatment */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Integration with Treatment Algorithms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Treatment Decision Points</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-green-700">IPSS 0-7 (Mild)</h5>
                        <p className="text-gray-700 text-sm">
                          Watchful waiting, lifestyle modifications, annual monitoring
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-yellow-700">IPSS 8-19 (Moderate)</h5>
                        <p className="text-gray-700 text-sm">
                          Medical therapy consideration, alpha-blockers, 5-alpha reductase inhibitors
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-red-700">IPSS 20-35 (Severe)</h5>
                        <p className="text-gray-700 text-sm">
                          Medical therapy indicated, surgical evaluation, specialist referral
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </article>
            </div>
          </section>

          <Separator className="my-8" />

          {/* Internal Links */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="IPSS Assessment Guide"
                category="education"
                limit={6}
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}