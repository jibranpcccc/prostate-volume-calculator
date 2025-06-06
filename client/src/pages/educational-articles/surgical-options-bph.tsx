import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Zap, Scissors, Target, CheckCircle, AlertTriangle, TrendingUp, Users } from "lucide-react";

export default function SurgicalOptionsBPH() {
  return (
    <>
      <EnhancedSEOHead
        title="Surgical Options for BPH | TURP, Laser Therapy, and Minimally Invasive Procedures"
        description="Comprehensive guide to surgical treatment options for benign prostatic hyperplasia including TURP, laser procedures, TUMT, and emerging minimally invasive therapies."
        canonical="/education/surgical-options-bph"
        keywords={[
          "BPH surgery",
          "TURP procedure",
          "laser prostatectomy",
          "HoLEP",
          "PVP laser",
          "minimally invasive BPH",
          "UroLift",
          "Rezum"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "patients", "surgeons"]}
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
                  <Scissors className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Surgical Options for BPH
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive overview of surgical interventions for benign prostatic hyperplasia, 
                from traditional TURP to cutting-edge minimally invasive procedures.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Scissors className="w-4 h-4 mr-2" />
                  Surgical Techniques
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Evidence-Based
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

              {/* Surgical Indications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-blue-600" />
                    Indications for Surgical Intervention
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-700">Absolute Indications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Refractory acute urinary retention</li>
                          <li>• Recurrent urinary tract infections</li>
                          <li>• Bladder stones secondary to BPH</li>
                          <li>• Renal insufficiency due to BPH</li>
                          <li>• Large bladder diverticula</li>
                          <li>• Gross hematuria refractory to medical therapy</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-yellow-700">Relative Indications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Failed medical therapy</li>
                          <li>• Patient preference for definitive treatment</li>
                          <li>• Bothersome moderate to severe symptoms</li>
                          <li>• Significantly elevated post-void residual</li>
                          <li>• Prostate volume above 80-100g</li>
                          <li>• Medication intolerance or contraindications</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Surgical intervention should be considered when medical therapy fails to provide 
                      adequate symptom relief or when complications of BPH develop that threaten 
                      upper urinary tract function.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* TURP - Gold Standard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scissors className="h-6 w-6 text-purple-600" />
                    Transurethral Resection of Prostate (TURP)
                  </CardTitle>
                  <CardDescription>
                    Gold standard surgical treatment for prostates 30-80g
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Procedure Overview</h4>
                    <p className="text-purple-700 text-sm">
                      TURP involves electrosurgical resection of prostatic adenoma through a 
                      transurethral approach, creating a channel for improved urine flow while 
                      maintaining the prostatic capsule and external sphincter.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Excellent long-term durability (15+ years)</li>
                        <li>• Significant symptom improvement (85-90%)</li>
                        <li>• Well-established technique</li>
                        <li>• Tissue available for histology</li>
                        <li>• Cost-effective long-term</li>
                        <li>• Insurance coverage universal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Considerations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Retrograde ejaculation (75-80%)</li>
                        <li>• TURP syndrome risk (2-3%)</li>
                        <li>• Catheter requirement (2-3 days)</li>
                        <li>• Hospital stay (1-2 days)</li>
                        <li>• Bleeding risk</li>
                        <li>• Learning curve for surgeons</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Clinical Outcomes</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">15-20</div>
                        <div className="text-gray-600">Point IPSS reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">10-15</div>
                        <div className="text-gray-600">mL/sec flow improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">90%</div>
                        <div className="text-gray-600">Patient satisfaction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Laser Procedures */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Laser Prostatectomy Procedures
                  </CardTitle>
                  <CardDescription>
                    Modern alternatives with reduced bleeding risk and shorter recovery
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-green-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-700">HoLEP (Holmium Laser Enucleation)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best for:</strong> Any prostate size</li>
                          <li><strong>Technique:</strong> Complete adenoma enucleation</li>
                          <li><strong>Advantages:</strong> Size-independent efficacy</li>
                          <li><strong>Hospital stay:</strong> Outpatient to 1 day</li>
                          <li><strong>Catheter:</strong> 1-2 days</li>
                          <li><strong>Durability:</strong> Equivalent to TURP</li>
                          <li><strong>Learning curve:</strong> Steep but excellent outcomes</li>
                        </ul>
                        <div className="mt-3 p-2 bg-green-50 rounded">
                          <span className="text-green-800 text-xs font-medium">Gold Standard for Large Prostates</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-blue-700">PVP (Photoselective Vaporization)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best for:</strong> Prostates 30-100g</li>
                          <li><strong>Technique:</strong> Tissue vaporization</li>
                          <li><strong>Advantages:</strong> Minimal bleeding</li>
                          <li><strong>Hospital stay:</strong> Outpatient</li>
                          <li><strong>Catheter:</strong> 1-2 days</li>
                          <li><strong>Anticoagulation:</strong> Safer option</li>
                          <li><strong>Limitation:</strong> No tissue for histology</li>
                        </ul>
                        <div className="mt-3 p-2 bg-blue-50 rounded">
                          <span className="text-blue-800 text-xs font-medium">Excellent for High-Risk Patients</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Minimally Invasive Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-indigo-600" />
                    Minimally Invasive Procedures
                  </CardTitle>
                  <CardDescription>
                    Office-based and outpatient options for select patients
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-indigo-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-indigo-700">UroLift</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Mechanism:</strong> Prostatic urethral lift</li>
                          <li><strong>Setting:</strong> Office-based</li>
                          <li><strong>Anesthesia:</strong> Local</li>
                          <li><strong>Recovery:</strong> Same day</li>
                          <li><strong>Ejaculation:</strong> Preserved</li>
                          <li><strong>Limitation:</strong> Small-medium prostates</li>
                          <li><strong>Durability:</strong> 5+ years data</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-700">Rezum (Steam Therapy)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Mechanism:</strong> Water vapor ablation</li>
                          <li><strong>Setting:</strong> Office/outpatient</li>
                          <li><strong>Anesthesia:</strong> Local/sedation</li>
                          <li><strong>Recovery:</strong> 2-6 weeks</li>
                          <li><strong>Ejaculation:</strong> Usually preserved</li>
                          <li><strong>Benefit:</strong> Treats median lobe</li>
                          <li><strong>Catheter:</strong> 3-7 days</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-teal-700">Aquablation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-sm space-y-2">
                          <li><strong>Mechanism:</strong> Robot-assisted waterjet</li>
                          <li><strong>Setting:</strong> Operating room</li>
                          <li><strong>Anesthesia:</strong> Spinal/general</li>
                          <li><strong>Recovery:</strong> 1-2 days</li>
                          <li><strong>Ejaculation:</strong> High preservation rate</li>
                          <li><strong>Advantage:</strong> Precise tissue removal</li>
                          <li><strong>Technology:</strong> Image-guided</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              {/* Procedure Selection Algorithm */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                    Procedure Selection Algorithm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Small Prostate (under 30g)</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• First choice: UroLift (if no median lobe)</li>
                        <li>• Alternative: Rezum, TUMT</li>
                        <li>• Traditional: TURP (small resection)</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Medium Prostate (30-80g)</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Gold standard: TURP</li>
                        <li>• Laser options: PVP, HoLEP</li>
                        <li>• Minimally invasive: Rezum, Aquablation</li>
                        <li>• High-risk patients: PVP preferred</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Large Prostate (above 80g)</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Best option: HoLEP</li>
                        <li>• Alternative: Open prostatectomy</li>
                        <li>• Consider: Aquablation</li>
                        <li>• Avoid: Most minimally invasive options</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Special Considerations</h4>
                      <ul className="text-sm space-y-1 mt-2">
                        <li>• Anticoagulation: PVP, UroLift preferred</li>
                        <li>• Ejaculation preservation: UroLift, Aquablation</li>
                        <li>• Office preference: UroLift, Rezum</li>
                        <li>• Cost considerations: TURP most cost-effective</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Outcomes Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    Comparative Outcomes Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-3 py-2 text-left">Procedure</th>
                          <th className="border border-gray-300 px-3 py-2 text-center">IPSS Reduction</th>
                          <th className="border border-gray-300 px-3 py-2 text-center">Flow Improvement</th>
                          <th className="border border-gray-300 px-3 py-2 text-center">Retreatment Rate</th>
                          <th className="border border-gray-300 px-3 py-2 text-center">Ejaculatory Dysfunction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-medium">TURP</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">15-20 points</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">10-15 mL/sec</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">5-10% at 10 years</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">75-80%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 font-medium">HoLEP</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">16-22 points</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">12-18 mL/sec</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">3-5% at 10 years</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">70-85%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-medium">PVP</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">12-18 points</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">8-12 mL/sec</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">10-15% at 5 years</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">35-50%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 font-medium">UroLift</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">8-12 points</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">4-6 mL/sec</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">15-20% at 5 years</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">0-5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-3 py-2 font-medium">Rezum</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">10-15 points</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">6-9 mL/sec</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">5-10% at 4 years</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">10-15%</td>
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
                currentPage="/education/surgical-options-bph"
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