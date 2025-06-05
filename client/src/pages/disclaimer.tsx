import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, FileText, Heart, Stethoscope, Scale } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEOHead from "@/components/seo-head";

export default function Disclaimer() {
  return (
    <>
      <SEOHead 
        title="Medical Disclaimer - ProstateVolumeCalc Legal Notice"
        description="Important medical disclaimer for ProstateVolumeCalc.com. Educational tools not intended for medical diagnosis or treatment. Professional medical consultation required."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto" />
            <h1 className="text-4xl font-bold text-gray-900">Medical Disclaimer</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important legal notice regarding the medical information and calculators provided on ProstateVolumeCalc.com
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-red-100 text-red-800 px-4 py-2">Legal Notice</Badge>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Medical Disclaimer</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">Educational Only</Badge>
            </div>
          </div>

          {/* Critical Warning */}
          <Alert className="border-red-300 bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <AlertDescription className="text-red-800 text-lg font-semibold">
              <strong>CRITICAL NOTICE:</strong> The information and calculators provided on this website are for educational and informational purposes only. They are NOT intended for medical diagnosis, treatment, or as a substitute for professional medical advice.
            </AlertDescription>
          </Alert>

          {/* Not Medical Advice */}
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Stethoscope className="h-5 w-5" />
                Not Medical Advice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 font-medium">
                The calculations, interpretations, and information provided on ProstateVolumeCalc.com do not constitute medical advice, diagnosis, or treatment recommendations.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-3">This website does NOT:</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Provide medical diagnoses or treatment recommendations</li>
                  <li>• Replace the need for professional medical consultation</li>
                  <li>• Offer personalized medical advice for individual patients</li>
                  <li>• Substitute for clinical examination or laboratory testing</li>
                  <li>• Provide emergency medical guidance or urgent care advice</li>
                  <li>• Create a doctor-patient relationship with users</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Professional Medical Consultation Required */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Professional Medical Consultation Required
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Always Consult Healthcare Professionals For:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Medical symptoms or health concerns</li>
                    <li>• Diagnosis of medical conditions</li>
                    <li>• Treatment planning and recommendations</li>
                    <li>• Medication decisions and management</li>
                    <li>• Interpretation of medical test results</li>
                    <li>• Surgical or procedural decisions</li>
                    <li>• Emergency or urgent medical situations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Qualified Healthcare Providers Include:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Licensed physicians (MDs, DOs)</li>
                    <li>• Urologists and specialists</li>
                    <li>• Nurse practitioners and physician assistants</li>
                    <li>• Other licensed healthcare professionals</li>
                    <li>• Your primary care provider</li>
                    <li>• Specialists appropriate to your condition</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Educational Purpose Only */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Educational and Informational Purpose
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                ProstateVolumeCalc.com is designed as an educational resource and clinical decision support tool for:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Healthcare Professionals</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Clinical decision support and calculation assistance</li>
                    <li>• Educational reference for medical training</li>
                    <li>• Standardization of calculation methods</li>
                    <li>• Quality assurance and verification</li>
                    <li>• Research and academic applications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Educational Users</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Medical students and trainees</li>
                    <li>• Healthcare education programs</li>
                    <li>• Patient education (with professional guidance)</li>
                    <li>• General health awareness and literacy</li>
                    <li>• Academic research and study</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Individual Variation Warning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                Individual Medical Variation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 mb-2">Important Considerations:</h3>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Medical calculations provide population-based estimates that may not apply to individual patients</li>
                  <li>• Patient medical history, comorbidities, and individual factors significantly affect clinical decisions</li>
                  <li>• Normal ranges and reference values vary among laboratories and populations</li>
                  <li>• Clinical correlation is always required for meaningful interpretation</li>
                  <li>• Calculator results should never be used in isolation for medical decisions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Situations */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                Emergency Medical Situations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <p className="text-red-700 font-semibold">
                  This website is NOT intended for use in emergency or urgent medical situations.
                </p>
                
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">For Medical Emergencies:</h3>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Call 911 (US) or your local emergency number immediately</li>
                    <li>• Go to the nearest emergency department</li>
                    <li>• Contact your healthcare provider's emergency line</li>
                    <li>• Do not delay seeking immediate medical attention</li>
                  </ul>
                </div>
                
                <p className="text-red-600 text-sm">
                  Never use information from this website to delay or avoid seeking emergency medical care.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy and Reliability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Accuracy and Reliability Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Calculation Accuracy</h3>
                  <p className="text-sm text-gray-700">
                    While our calculators are based on peer-reviewed medical literature and established formulas, we cannot guarantee absolute accuracy or suitability for all clinical situations. Users should independently verify calculations when clinically significant.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">No Warranty</h3>
                  <p className="text-sm text-gray-700">
                    The information and calculators are provided "as is" without warranty of any kind. We do not warrant that the information is accurate, complete, reliable, current, or error-free.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Regular Updates</h3>
                  <p className="text-sm text-gray-700">
                    We strive to keep information current with medical literature and guidelines, but medical knowledge constantly evolves. Users should refer to the most current clinical guidelines and research.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liability Limitation */}
          <Card className="border-l-4 border-l-gray-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-gray-500" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 font-medium mb-3">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• We disclaim all liability for medical decisions, patient outcomes, or clinical consequences</li>
                  <li>• We are not responsible for any direct, indirect, incidental, or consequential damages</li>
                  <li>• We do not assume liability for professional malpractice or medical errors</li>
                  <li>• Users assume full responsibility for clinical interpretation and application</li>
                  <li>• Healthcare professionals retain full professional liability for patient care decisions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Professional Standards */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Standards and Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Medical Professional Responsibility</h3>
                  <p className="text-sm text-gray-700">
                    Healthcare professionals using these tools must:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 mt-2">
                    <li>• Apply appropriate clinical judgment and expertise</li>
                    <li>• Follow institutional protocols and clinical guidelines</li>
                    <li>• Maintain professional competency and continuing education</li>
                    <li>• Verify calculations when clinically significant</li>
                    <li>• Document decisions according to professional standards</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Evidence-Based Practice</h3>
                  <p className="text-sm text-gray-700">
                    Our calculators are based on established medical literature, but clinical practice should always incorporate the most current evidence, patient preferences, and clinical expertise.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>Legal and Regulatory Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Healthcare Regulations</h3>
                  <p className="text-sm text-gray-700">
                    Users must comply with all applicable healthcare regulations, including but not limited to HIPAA, state licensing requirements, and institutional policies when using these tools in clinical practice.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">International Users</h3>
                  <p className="text-sm text-gray-700">
                    Users outside the United States must comply with their local medical regulations, licensing requirements, and clinical guidelines. Medical practices and standards may vary by country and jurisdiction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact and Updates */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Disclaimer Updates and Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Disclaimer Updates</h3>
                  <p className="text-sm text-gray-700">
                    This disclaimer may be updated to reflect changes in legal requirements, medical standards, or service offerings. Continued use of the website constitutes acceptance of any updates.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Questions or Concerns</h3>
                  <p className="text-sm text-gray-700">
                    If you have questions about this disclaimer, the appropriate use of our calculators, or medical content accuracy, please contact us through our professional contact channels.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Warning */}
          <Alert className="border-red-300 bg-red-100">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <AlertDescription className="text-red-800 font-semibold">
              <strong>FINAL REMINDER:</strong> By using this website, you acknowledge that you understand this disclaimer and agree that the information provided is for educational purposes only. You assume full responsibility for any use of this information and agree to consult qualified healthcare professionals for all medical decisions.
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </>
  );
}