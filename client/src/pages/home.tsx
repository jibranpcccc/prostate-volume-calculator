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
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Scientific References</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="mb-3">
                    <strong>Terris MK, Stamey TA.</strong> Determination of prostate volume by transrectal ultrasound. J Urol. 1991;145(5):984-7.
                  </p>
                  <p className="mb-3">
                    <strong>Rahmouni A, Yang A, et al.</strong> Accuracy of in-vivo assessment of prostatic volume by MRI and transrectal ultrasonography. J Comput Assist Tomogr. 1992;16(6):935-40.
                  </p>
                </div>
                <div>
                  <p className="mb-3">
                    <strong>Roehrborn CG.</strong> Accurate determination of prostate size via digital rectal examination and transrectal ultrasound. Urology. 1998;51(4A Suppl):19-22.
                  </p>
                  <p className="mb-3">
                    <strong>Bosch JL, Hop WC, et al.</strong> The International Prostate Symptom Score in a community-based sample of men between 55 and 74 years of age. Eur Urol. 1995;27(4):353-9.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
