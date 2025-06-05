import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertTriangle, Scale, Users, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEOHead from "@/components/seo-head";

export default function TermsOfService() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - ProstateVolumeCalc Medical Calculator Legal Terms"
        description="Terms of service for ProstateVolumeCalc.com medical calculators. Professional terms governing use of evidence-based prostate health calculation tools."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional terms governing the use of ProstateVolumeCalc medical calculation tools and services.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Professional Use</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Medical Tools</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Healthcare Focus</Badge>
            </div>
            <p className="text-sm text-gray-500">Effective Date: January 2024</p>
          </div>

          {/* Important Notice */}
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Medical Disclaimer:</strong> These tools are for educational and clinical decision support only. They do not replace professional medical judgment, diagnosis, or treatment. Always consult qualified healthcare professionals for patient care decisions.
            </AlertDescription>
          </Alert>

          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                By accessing and using ProstateVolumeCalc ("the Service"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of the Service immediately.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Who May Use This Service</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Licensed healthcare professionals</li>
                  <li>• Medical students and residents under supervision</li>
                  <li>• Healthcare institutions and organizations</li>
                  <li>• Medical researchers and educators</li>
                  <li>• Patients seeking educational information (with healthcare provider guidance)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intended Use */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Intended Use and Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">Appropriate Uses</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Clinical decision support for healthcare professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Educational purposes in medical training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Research and academic applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Quality assurance and standardization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Patient education with professional guidance</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">Prohibited Uses</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Self-diagnosis or self-treatment</li>
                    <li>• Replacement for professional medical consultation</li>
                    <li>• Emergency or urgent medical situations</li>
                    <li>• Unauthorized commercial redistribution</li>
                    <li>• Modification or reverse engineering</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Medical Disclaimers and Limitations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Not Medical Advice</h3>
                  <p className="text-sm text-red-700">
                    The calculations and information provided are for educational and decision support purposes only. They do not constitute medical advice, diagnosis, or treatment recommendations. Always consult qualified healthcare professionals for medical decisions.
                  </p>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Clinical Judgment Required</h3>
                  <p className="text-sm text-orange-700">
                    All calculations must be interpreted within the clinical context by qualified healthcare professionals. The Service does not replace clinical experience, professional judgment, or comprehensive patient evaluation.
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">Individual Variation</h3>
                  <p className="text-sm text-yellow-700">
                    Medical calculations provide estimates based on population data. Individual patient factors, medical history, and clinical presentation must always be considered in medical decision-making.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accuracy and Reliability */}
          <Card>
            <CardHeader>
              <CardTitle>Accuracy and Reliability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Evidence-Based Calculations</h3>
                  <p className="text-sm text-gray-700">
                    Our calculations are based on peer-reviewed medical literature and established clinical guidelines. We regularly review and update formulas to maintain accuracy and clinical relevance.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">No Warranty of Accuracy</h3>
                  <p className="text-sm text-gray-700">
                    While we strive for maximum accuracy, we cannot guarantee that calculations are error-free or suitable for all clinical situations. Users are responsible for verifying results and applying appropriate clinical judgment.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                  <p className="text-sm text-gray-700">
                    We shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of these calculators, including but not limited to medical decisions, patient outcomes, or professional consequences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Healthcare Professionals</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Verify calculations independently when clinically significant</li>
                    <li>• Apply appropriate clinical judgment</li>
                    <li>• Maintain professional competency</li>
                    <li>• Follow institutional protocols and guidelines</li>
                    <li>• Ensure patient confidentiality</li>
                    <li>• Document decisions appropriately</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">All Users</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Use the Service responsibly and ethically</li>
                    <li>• Respect intellectual property rights</li>
                    <li>• Report technical issues or errors</li>
                    <li>• Maintain data security and privacy</li>
                    <li>• Comply with applicable laws and regulations</li>
                    <li>• Use current browser and security software</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-purple-500" />
                Intellectual Property Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Content</h3>
                  <p className="text-sm text-gray-700">
                    The Service, including its design, software, content, and documentation, is protected by copyright, trademark, and other intellectual property laws. All rights are reserved unless explicitly granted.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Permitted Use</h3>
                  <p className="text-sm text-gray-700">
                    You may use the Service for the intended purposes outlined in these terms. You may not copy, modify, distribute, or create derivative works without explicit permission.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Medical Literature References</h3>
                  <p className="text-sm text-gray-700">
                    Medical formulas and guidelines referenced in our calculators are based on published literature and clinical guidelines. Original research citations are provided where applicable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy and Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">No Personal Data Collection</h3>
                  <p className="text-sm text-gray-700">
                    We do not collect, store, or transmit personal health information. All calculations are performed locally in your browser. See our Privacy Policy for complete details.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">User Responsibility for Data Protection</h3>
                  <p className="text-sm text-gray-700">
                    Users are responsible for protecting patient confidentiality and complying with applicable privacy laws (HIPAA, GDPR, etc.) when using the Service in clinical settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Service Availability and Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Availability</h3>
                  <p className="text-sm text-gray-700">
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. Scheduled maintenance and updates may temporarily affect availability.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Updates and Modifications</h3>
                  <p className="text-sm text-gray-700">
                    We may update calculators, content, and features to reflect current medical knowledge and improve functionality. Significant changes will be communicated through appropriate channels.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Discontinuation</h3>
                  <p className="text-sm text-gray-700">
                    We reserve the right to discontinue or modify the Service with reasonable notice. Users should not rely solely on the Service for critical clinical operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <p className="text-sm text-red-700 font-medium">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR:
                </p>
                
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Any medical decisions, patient outcomes, or clinical consequences</li>
                  <li>• Direct, indirect, incidental, consequential, or punitive damages</li>
                  <li>• Professional liability or malpractice claims</li>
                  <li>• Loss of data, profits, or business opportunities</li>
                  <li>• Service interruptions or technical failures</li>
                  <li>• Errors or omissions in calculations or content</li>
                </ul>
                
                <p className="text-sm text-red-700">
                  Our total liability for any claims related to the Service shall not exceed the amount paid for access to the Service (which is currently zero for basic access).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Governing Law</h3>
                  <p className="text-sm text-gray-700">
                    These Terms of Service are governed by applicable laws regarding medical information systems and professional liability. Users must comply with local, state, and federal regulations applicable to their practice.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Dispute Resolution</h3>
                  <p className="text-sm text-gray-700">
                    Any disputes arising from use of the Service should first be addressed through our professional contact channels. We encourage collaborative resolution of technical or clinical concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle>Changes to These Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">
                We may update these Terms of Service to reflect changes in our services, legal requirements, or medical standards. Material changes will be prominently posted and will take effect 30 days after posting.
              </p>
              
              <p className="text-sm text-gray-700">
                Continued use of the Service after changes take effect constitutes acceptance of the revised terms. If you do not agree to revised terms, please discontinue use of the Service.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Questions and Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-700">
                If you have questions about these Terms of Service, our calculators, or their appropriate use in clinical practice, please contact us through our professional contact form. We are committed to supporting healthcare professionals in the responsible use of our tools.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700">
                  <strong>For Healthcare Professionals:</strong> We provide specialized support for clinical questions, implementation guidance, and professional training on appropriate use of our calculators.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Notice */}
          <Alert className="border-blue-200 bg-blue-50">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Professional Responsibility:</strong> These terms emphasize that healthcare professionals retain full responsibility for clinical decisions and patient care. Our tools support but never replace professional medical judgment.
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </>
  );
}