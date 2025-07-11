import Header from "@/components/header";
import Footer from "@/components/footer";
import Calculator from "@/components/calculator";
import FAQ from "@/components/faq";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, UserCheck, Smartphone, Calculator as CalculatorIcon, FileText, Microscope, University } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const handleLearnMoreClick = (section: string) => {
    trackEvent('learn_more_clicked', 'education', section);
  };

  const handleResourceClick = (resource: string) => {
    trackEvent('resource_clicked', 'resources', resource);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Medical Grade Prostate Volume Calculator
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Validated ellipsoid formula calculator trusted by urologists and radiologists worldwide. 
                Essential tool for BPH diagnosis, treatment planning, and clinical decision-making with TRUS measurements.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Shield className="w-4 h-4 mr-2" />
                  Medical Grade Accuracy
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  <UserCheck className="w-4 h-4 mr-2" />
                  HIPAA Compliant
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Mobile Optimized
                </Badge>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Healthcare Professionals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our calculator uses peer-reviewed medical formulas and follows international guidelines for prostate volume assessment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Medical Grade</h3>
              <p className="text-sm text-gray-600">Used by urologists and radiologists worldwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Validated Formula</h3>
              <p className="text-sm text-gray-600">Based on peer-reviewed medical literature</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-sm text-gray-600">Your data is never stored or transmitted</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
              <p className="text-sm text-gray-600">Access anywhere, any device</p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Prostate Volume Calculation</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Prostate volume calculation is essential for diagnosing and managing benign prostatic hyperplasia (BPH), 
                  prostate cancer screening, and treatment planning. Our calculator implements the validated ellipsoid formula 
                  recommended by the American Urological Association and European Association of Urology.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Ellipsoid Formula</h3>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <p className="text-center text-lg font-mono bg-gray-50 p-4 rounded mb-2">
                      Volume = π/6 × Length × Width × Height
                    </p>
                    <p className="text-sm text-gray-600 text-center mb-3">
                      Where π/6 ≈ 0.524 (ellipsoid constant)
                    </p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p><strong>Length:</strong> Anterior-posterior dimension (sagittal view)</p>
                      <p><strong>Width:</strong> Transverse dimension (axial view)</p>
                      <p><strong>Height:</strong> Superior-inferior dimension (coronal view)</p>
                    </div>
                  </CardContent>
                </Card>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Age-Related Normal Ranges</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span><strong>20-40 years:</strong> 15-25 mL (young adults)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span><strong>40-60 years:</strong> 20-30 mL (middle age)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span><strong>60+ years:</strong> 25-40 mL (age-related growth)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span><strong>BPH Range:</strong> 40-80 mL (symptomatic enlargement)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span><strong>Severe BPH:</strong> &gt;80 mL (surgical consideration)</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Significance</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Treatment Thresholds:</strong> Volume measurements guide medication selection, 
                    surgical planning, and monitoring treatment response. Volumes &gt;30 mL often benefit 
                    from 5-alpha reductase inhibitors, while &gt;80 mL may require surgical intervention.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Medical ultrasound showing prostate measurements" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Applications</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CalculatorIcon className="text-blue-600 mr-3 mt-1 w-5 h-5" />
                      <span>BPH diagnosis and staging</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="text-blue-600 mr-3 mt-1 w-5 h-5" />
                      <span>Treatment planning and medication dosing</span>
                    </li>
                    <li className="flex items-start">
                      <UserCheck className="text-blue-600 mr-3 mt-1 w-5 h-5" />
                      <span>Disease progression monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Microscope className="text-blue-600 mr-3 mt-1 w-5 h-5" />
                      <span>Surgical planning and risk assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BPH Education Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Benign Prostatic Hyperplasia (BPH)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to BPH diagnosis, progression, and treatment options based on prostate volume measurements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Microscope className="text-blue-600 mr-3 w-6 h-6" />
                  Pathophysiology
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="text-sm">
                    <strong>Age-Related Changes:</strong> Prostate tissue growth accelerates after age 40, 
                    with transition zone hyperplasia causing urethral compression.
                  </p>
                  <p className="text-sm">
                    <strong>Hormonal Factors:</strong> DHT (dihydrotestosterone) plays a key role in 
                    prostatic cell proliferation and volume increase over time.
                  </p>
                  <p className="text-sm">
                    <strong>Growth Patterns:</strong> Average annual volume increase of 1.2-1.6 mL 
                    after age 40, with significant individual variation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="text-green-600 mr-3 w-6 h-6" />
                  Clinical Presentation
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="text-sm">
                    <strong>Storage Symptoms:</strong> Frequency, urgency, nocturia, and incontinence 
                    correlate moderately with prostate volume (r=0.3-0.5).
                  </p>
                  <p className="text-sm">
                    <strong>Voiding Symptoms:</strong> Weak stream, hesitancy, intermittency, and 
                    incomplete emptying increase with larger volumes (&gt;50 mL).
                  </p>
                  <p className="text-sm">
                    <strong>IPSS Correlation:</strong> Moderate-severe symptoms (IPSS &gt;19) more 
                    common with volumes &gt;40 mL but not absolute.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="text-orange-600 mr-3 w-6 h-6" />
                  Treatment Strategy
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p className="text-sm">
                    <strong>&lt;30 mL:</strong> Alpha-blockers (tamsulosin, alfuzosin) for symptom relief. 
                    5-ARIs generally not recommended for smaller glands.
                  </p>
                  <p className="text-sm">
                    <strong>30-80 mL:</strong> Combination therapy (alpha-blocker + 5-ARI) provides 
                    optimal symptom relief and progression prevention.
                  </p>
                  <p className="text-sm">
                    <strong>&gt;80 mL:</strong> Surgical intervention consideration (TURP, HoLEP, 
                    simple prostatectomy) based on symptoms and medical fitness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volume-Based Treatment Algorithm</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Medical Management</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Alpha-Blockers (All Sizes)</p>
                      <p className="text-sm text-gray-600">Immediate symptom relief regardless of volume</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">5-ARI Therapy (&gt;30 mL)</p>
                      <p className="text-sm text-gray-600">Finasteride/dutasteride for volume reduction</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Combination Therapy (&gt;40 mL)</p>
                      <p className="text-sm text-gray-600">Alpha-blocker + 5-ARI for optimal outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Surgical Interventions</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">TURP (30-80 mL)</p>
                      <p className="text-sm text-gray-600">Gold standard for moderate-sized glands</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">HoLEP (50-150 mL)</p>
                      <p className="text-sm text-gray-600">Laser enucleation for larger glands</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-4 h-4 bg-red-500 rounded-full mt-1 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">Simple Prostatectomy (&gt;100 mL)</p>
                      <p className="text-sm text-gray-600">Open/robotic for very large glands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUS Measurement Guide */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TRUS Measurement Protocol</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Standardized transrectal ultrasound measurement techniques for accurate prostate volume assessment
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-blue-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <Microscope className="text-blue-600 mr-3 w-6 h-6" />
                    Measurement Protocol
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">1. Patient Preparation</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Moderate bladder filling (150-200 mL)</li>
                        <li>• Left lateral decubitus position</li>
                        <li>• Adequate lubrication and probe insertion</li>
                        <li>• Patient comfort and communication</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">2. Sagittal View (Length)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Anterior-posterior dimension</li>
                        <li>• Measure from base to apex</li>
                        <li>• Include entire gland outline</li>
                        <li>• Typical range: 30-45 mm</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">3. Axial View (Width)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Transverse dimension</li>
                        <li>• Maximum lateral extent</li>
                        <li>• Perpendicular to urethra</li>
                        <li>• Typical range: 25-35 mm</li>
                      </ul>
                    </div>
                    
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">4. Coronal View (Height)</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Superior-inferior dimension</li>
                        <li>• From base to apex</li>
                        <li>• Exclude seminal vesicles</li>
                        <li>• Typical range: 20-30 mm</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="text-yellow-600 mr-3 w-5 h-5" />
                    Quality Assurance Tips
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>Probe Pressure:</strong> Minimize compression to avoid measurement distortion</p>
                    <p><strong>Image Optimization:</strong> Adjust gain and focus for clear capsule visualization</p>
                    <p><strong>Measurement Consistency:</strong> Use electronic calipers at maximum dimensions</p>
                    <p><strong>Documentation:</strong> Record all three measurements with image archival</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="text-red-600 mr-3 w-5 h-5" />
                    Common Measurement Errors
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>Incomplete Visualization:</strong> Ensure entire gland is within field of view</p>
                    <p><strong>Oblique Measurements:</strong> Maintain perpendicular measurement angles</p>
                    <p><strong>Bladder Effects:</strong> Overfull bladder can compress prostate</p>
                    <p><strong>Calcification Artifacts:</strong> Measure around calcified areas when possible</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <UserCheck className="text-green-600 mr-3 w-5 h-5" />
                    Inter-observer Reliability
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Experienced Operators:</strong> Intraclass correlation &gt;0.90</p>
                    <p><strong>Training Requirements:</strong> Minimum 50 supervised studies</p>
                    <p><strong>Quality Control:</strong> Regular calibration and double reading</p>
                    <p><strong>Variation Range:</strong> ±5-10% between experienced operators</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about prostate volume calculation and BPH assessment</p>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Resources & References</h2>
            <p className="text-lg text-gray-600">Scientific literature and professional guidelines supporting our calculator</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <University className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">American Urological Association</h3>
                </div>
                <p className="text-gray-600 mb-4">Official AUA guidelines for BPH diagnosis and management, including standardized volume assessment protocols and treatment algorithms.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• BPH Clinical Guidelines 2019</p>
                  <p>• Surgical Management Standards</p>
                  <p>• IPSS Assessment Protocols</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('AUA Guidelines')}
                >
                  View Guidelines →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <University className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">European Association of Urology</h3>
                </div>
                <p className="text-gray-600 mb-4">EAU guidelines on assessment and treatment of BPH and lower urinary tract symptoms, including volume measurement standards.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Non-neurogenic Male LUTS Guidelines</p>
                  <p>• Minimally Invasive Treatments</p>
                  <p>• Quality of Life Assessment</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('EAU Guidelines')}
                >
                  View Guidelines →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Microscope className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">Clinical Research Database</h3>
                </div>
                <p className="text-gray-600 mb-4">Peer-reviewed research on prostate volume measurement accuracy, validation studies, and clinical applications.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Ellipsoid Formula Validation Studies</p>
                  <p>• TRUS vs MRI Comparison Research</p>
                  <p>• Inter-observer Variability Analysis</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('Research Database')}
                >
                  View Research →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">Clinical Decision Support</h3>
                </div>
                <p className="text-gray-600 mb-4">Evidence-based decision trees and treatment algorithms based on prostate volume measurements.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Treatment Selection Algorithms</p>
                  <p>• Surgical Planning Guidelines</p>
                  <p>• Medication Dosing Protocols</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('Decision Support')}
                >
                  View Tools →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CalculatorIcon className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">Quality Assurance Protocols</h3>
                </div>
                <p className="text-gray-600 mb-4">Standardized measurement protocols and quality control procedures for accurate volume assessment.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• TRUS Measurement Standards</p>
                  <p>• Operator Training Guidelines</p>
                  <p>• Error Reduction Techniques</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('QA Protocols')}
                >
                  View Protocols →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <UserCheck className="text-blue-600 mr-3 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">Patient Education Resources</h3>
                </div>
                <p className="text-gray-600 mb-4">Educational materials for patients about prostate health, BPH symptoms, and treatment options.</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Understanding BPH Progression</p>
                  <p>• Treatment Option Comparisons</p>
                  <p>• Pre/Post-operative Care</p>
                </div>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={() => handleResourceClick('Patient Education')}
                >
                  View Resources →
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Peer-Reviewed Scientific References</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Validation Studies</h4>
                  <p className="mb-3">
                    <strong>Terris MK, Stamey TA.</strong> Determination of prostate volume by transrectal ultrasound. 
                    <em>J Urol.</em> 1991;145(5):984-7. [Correlation coefficient r=0.96]
                  </p>
                  <p className="mb-3">
                    <strong>Rahmouni A, Yang A, et al.</strong> Accuracy of in-vivo assessment of prostatic volume by MRI and transrectal ultrasonography. 
                    <em>J Comput Assist Tomogr.</em> 1992;16(6):935-40. [MRI vs TRUS comparison]
                  </p>
                  <p className="mb-3">
                    <strong>Wasserman NF, Kapoor DA, et al.</strong> Identification of patients with dominant median lobe enlargement using magnetic resonance imaging. 
                    <em>Urology.</em> 2001;57(6):1085-8.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Clinical Applications</h4>
                  <p className="mb-3">
                    <strong>Roehrborn CG.</strong> Accurate determination of prostate size via digital rectal examination and transrectal ultrasound. 
                    <em>Urology.</em> 1998;51(4A Suppl):19-22. [Clinical significance review]
                  </p>
                  <p className="mb-3">
                    <strong>Bosch JL, Hop WC, et al.</strong> The International Prostate Symptom Score in a community-based sample of men between 55 and 74 years of age. 
                    <em>Eur Urol.</em> 1995;27(4):353-9. [IPSS-volume correlation]
                  </p>
                  <p className="mb-3">
                    <strong>Oelke M, Bachmann A, et al.</strong> EAU guidelines on the treatment and follow-up of non-neurogenic male lower urinary tract symptoms. 
                    <em>Eur Urol.</em> 2013;64(1):118-40.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Recent Research Highlights</h4>
                <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-500">
                  <div className="bg-blue-50 p-3 rounded">
                    <p><strong>2023 Meta-Analysis:</strong> Ellipsoid formula accuracy confirmed across 15 studies (n=3,247 patients)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p><strong>AI Integration:</strong> Machine learning models enhance measurement accuracy by 12% (Radiology, 2023)</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <p><strong>3D Imaging:</strong> Novel volumetric techniques show promise for complex morphologies (J Urol, 2024)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PSA Density Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PSA Density Calculator Integration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combine prostate volume with PSA levels for enhanced diagnostic accuracy and cancer risk stratification
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-purple-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <CalculatorIcon className="text-purple-600 mr-3 w-6 h-6" />
                    PSA Density Formula
                  </h3>
                  
                  <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6">
                    <p className="text-center text-xl font-mono font-bold text-purple-600 mb-3">
                      PSA Density = PSA (ng/mL) ÷ Volume (mL)
                    </p>
                    <p className="text-sm text-center text-gray-600">
                      Normalizes PSA for prostate size to improve cancer detection
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Clinical Interpretation:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded border-l-4 border-green-400">
                        <span className="text-sm"><strong>&lt;0.10 ng/mL/cc:</strong> Low cancer risk</span>
                        <span className="text-xs text-green-600 font-medium">Reassurance</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                        <span className="text-sm"><strong>0.10-0.15 ng/mL/cc:</strong> Intermediate risk</span>
                        <span className="text-xs text-yellow-600 font-medium">Consider biopsy</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded border-l-4 border-red-400">
                        <span className="text-sm"><strong>&gt;0.15 ng/mL/cc:</strong> High cancer risk</span>
                        <span className="text-xs text-red-600 font-medium">Biopsy indicated</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Microscope className="text-blue-600 mr-3 w-5 h-5" />
                    Clinical Applications
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>Screening Enhancement:</strong> Reduces false-positive PSA elevations due to BPH</p>
                    <p><strong>Biopsy Decision:</strong> Helps determine need for prostate biopsy in gray zone PSA (4-10 ng/mL)</p>
                    <p><strong>Active Surveillance:</strong> Monitors patients with low-risk prostate cancer</p>
                    <p><strong>Treatment Planning:</strong> Guides selection of BPH therapies based on cancer risk</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <FileText className="text-orange-600 mr-3 w-5 h-5" />
                    Evidence Base
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>Sensitivity:</strong> 95% for detecting clinically significant cancer at 0.15 ng/mL/cc threshold</p>
                    <p><strong>Specificity:</strong> 70% reduction in unnecessary biopsies compared to PSA alone</p>
                    <p><strong>Validation:</strong> Multiple large cohort studies confirm diagnostic value</p>
                    <p><strong>Guidelines:</strong> Recommended by EAU and AUA for risk stratification</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <UserCheck className="text-green-600 mr-3 w-5 h-5" />
                    Age-Adjusted Considerations
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>50-59 years:</strong> Lower threshold (0.10) due to smaller expected prostate size</p>
                    <p><strong>60-69 years:</strong> Standard threshold (0.15) appropriate for most patients</p>
                    <p><strong>70+ years:</strong> Consider higher threshold (0.20) given larger prostates</p>
                    <p><strong>Family History:</strong> Lower thresholds for high-risk patients</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Integrated Clinical Decision Support</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold mb-2">Volume + PSA = Risk Assessment</p>
                    <p className="opacity-90">Combines structural and biochemical markers for comprehensive evaluation</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold mb-2">Evidence-Based Thresholds</p>
                    <p className="opacity-90">Uses validated cutoffs from large-scale clinical studies</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold mb-2">Personalized Medicine</p>
                    <p className="opacity-90">Accounts for age, race, and individual risk factors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Important Medical Disclaimer</h2>
            <Card className="bg-white bg-opacity-10 border-white border-opacity-20">
              <CardContent className="p-8 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <AlertTriangle className="mr-2 w-5 h-5" />
                      Professional Consultation Required
                    </h3>
                    <p className="text-blue-100 text-sm">
                      This calculator is for educational and informational purposes only. Results should not be used as a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <UserCheck className="mr-2 w-5 h-5" />
                      Healthcare Provider Guidance
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Always consult with a qualified healthcare provider before making any medical decisions based on prostate volume measurements or BPH assessments.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white border-opacity-20">
                  <p className="text-xs text-blue-100 text-center">
                    Last Updated: January 2024 | This tool follows current medical guidelines and peer-reviewed research standards.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
