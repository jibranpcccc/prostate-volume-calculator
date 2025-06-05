import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Database, Globe, CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEOHead from "@/components/seo-head";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - ProstateVolumeCalc Medical Calculator Security"
        description="Privacy policy for ProstateVolumeCalc.com medical calculators. HIPAA-compliant design with no personal data storage, ensuring complete patient confidentiality."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ProstateVolumeCalc is committed to protecting your privacy and maintaining the highest standards of medical data security.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">HIPAA Compliant</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">No Data Storage</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Maximum Security</Badge>
            </div>
            <p className="text-sm text-gray-500">Last Updated: January 2024</p>
          </div>

          {/* Privacy Overview */}
          <Alert className="border-green-200 bg-green-50">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Privacy First Design:</strong> ProstateVolumeCalc operates with a privacy-first approach. We do not collect, store, or transmit any personal health information. All calculations are performed locally in your browser.
            </AlertDescription>
          </Alert>

          {/* Core Privacy Principles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-500" />
                Core Privacy Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">No Personal Data Collection</h3>
                      <p className="text-sm text-gray-600">We do not collect any personal health information, patient identifiers, or medical data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Local Processing Only</h3>
                      <p className="text-sm text-gray-600">All calculations are performed in your browser without data transmission to our servers.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">HIPAA Compliance</h3>
                      <p className="text-sm text-gray-600">Our design follows HIPAA guidelines for medical information protection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Transparent Practices</h3>
                      <p className="text-sm text-gray-600">Clear, understandable privacy practices with no hidden data collection.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Do NOT Collect */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-500" />
                Information We Do NOT Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                ProstateVolumeCalc is designed with privacy as the foundation. We explicitly do not collect:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Personal Health Information</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Patient names or identifiers</li>
                    <li>• Medical record numbers</li>
                    <li>• Date of birth or age</li>
                    <li>• Calculated results or measurements</li>
                    <li>• Clinical findings or diagnoses</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-2">Personal Identifiers</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Email addresses</li>
                    <li>• Phone numbers</li>
                    <li>• Physical addresses</li>
                    <li>• IP addresses (beyond basic analytics)</li>
                    <li>• Device identifiers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Limited Technical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                We collect minimal technical information necessary for website operation and improvement:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Analytics Information (Anonymized)</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• General website usage patterns (page views, session duration)</li>
                    <li>• Browser type and version (for compatibility)</li>
                    <li>• Geographic region (country/state level only)</li>
                    <li>• Referral sources (how users find our site)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    This information is aggregated and cannot be linked to individual users or patients.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Technical Performance Data</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Page load times and performance metrics</li>
                    <li>• Error reports (without personal data)</li>
                    <li>• Feature usage statistics (which calculators are used)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-2">
                    Used solely for improving website performance and user experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Protect Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Security Measures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Technical Security</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• SSL encryption for all connections</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security audits and updates</li>
                    <li>• No data storage or databases</li>
                    <li>• Client-side processing only</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Operational Security</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Limited access to technical systems</li>
                    <li>• Regular staff training on privacy practices</li>
                    <li>• Incident response procedures</li>
                    <li>• Compliance monitoring</li>
                    <li>• Vendor security requirements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-orange-500" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies Only</h3>
                  <p className="text-sm text-gray-700">
                    We use only essential cookies necessary for website functionality. These include:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 mt-2">
                    <li>• Session management cookies</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Load balancing and performance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">No Tracking Cookies</h3>
                  <p className="text-sm text-gray-700">
                    We do not use tracking cookies, advertising cookies, or third-party analytics that can identify individual users.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Cookie Control</h3>
                  <p className="text-sm text-gray-700">
                    You can control cookies through your browser settings. Disabling essential cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Content Delivery Network (CDN)</h3>
                  <p className="text-sm text-gray-700">
                    We use secure CDN services to deliver website content efficiently. These services may temporarily process IP addresses for delivery optimization but do not store personal information.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Analytics Services</h3>
                  <p className="text-sm text-gray-700">
                    If analytics are enabled, we use privacy-focused analytics services configured to anonymize user data and respect privacy preferences.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">No Social Media Tracking</h3>
                  <p className="text-sm text-gray-700">
                    We do not include social media tracking pixels or third-party advertising networks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 mb-4">
                Since we do not collect personal information, traditional data rights (access, deletion, portability) are not applicable. However, you have the right to:
              </p>
              
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use our calculators without providing any personal information</li>
                <li>• Clear your browser data to remove any locally stored preferences</li>
                <li>• Disable cookies through your browser settings</li>
                <li>• Contact us with questions about our privacy practices</li>
                <li>• Request information about our data handling practices</li>
              </ul>
            </CardContent>
          </Card>

          {/* Healthcare Provider Guidance */}
          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle>For Healthcare Providers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">HIPAA Compliance</h3>
                  <p className="text-sm text-gray-700">
                    Our no-data-collection design means that using our calculators does not create a business associate relationship under HIPAA. Healthcare providers can use our tools without additional HIPAA agreements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Best Practices</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Do not enter patient names or identifiers in calculator fields</li>
                    <li>• Clear browser data when using shared computers</li>
                    <li>• Follow your institution's IT security policies</li>
                    <li>• Document calculations in patient records according to your protocols</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact and Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Policy Changes</h3>
                  <p className="text-sm text-gray-700">
                    We may update this privacy policy to reflect changes in our practices or legal requirements. Material changes will be prominently posted on our website.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Questions or Concerns</h3>
                  <p className="text-sm text-gray-700">
                    If you have questions about our privacy practices or this policy, please contact us through our professional contact form. We are committed to addressing privacy concerns promptly and transparently.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Notice */}
          <Alert className="border-blue-200 bg-blue-50">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Legal Compliance:</strong> This privacy policy is designed to comply with HIPAA, GDPR, CCPA, and other applicable privacy regulations. Our privacy-first design ensures the highest level of protection for all users.
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </>
  );
}