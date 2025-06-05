import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Award, Clock, Heart, CheckCircle } from "lucide-react";
import SEOHead from "@/components/seo-head";

export default function About() {
  return (
    <>
      <SEOHead 
        title="About ProstateVolumeCalc - Medical Calculator Authority"
        description="Learn about ProstateVolumeCalc.com, the leading platform for accurate prostate health calculations. Trusted by healthcare professionals worldwide for evidence-based medical tools."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About ProstateVolumeCalc
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The premier platform for evidence-based prostate health calculations, trusted by healthcare professionals worldwide for accurate, reliable medical assessment tools.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Medical Authority</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Evidence-Based</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">Healthcare Trusted</Badge>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide healthcare professionals and patients with the most accurate, scientifically validated tools for prostate health assessment. We bridge the gap between complex medical calculations and practical clinical application, ensuring every calculation meets the highest standards of medical accuracy and clinical relevance.
              </p>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Medical Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All calculations based on peer-reviewed research and validated clinical formulas. Regular updates ensure alignment with current medical guidelines.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Healthcare Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Designed with input from urologists, radiologists, and medical researchers to meet real-world clinical needs and workflow requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Evidence-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every calculator incorporates the latest clinical research and follows established medical guidelines from leading professional organizations.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What We Offer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Comprehensive Prostate Health Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Prostate Assessment Tools
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prostate Volume Calculator (Ellipsoid Formula)</li>
                    <li>• PSA Density and Velocity Calculators</li>
                    <li>• Age-Specific PSA Analysis</li>
                    <li>• Free-to-Total PSA Ratio Assessment</li>
                    <li>• IPSS Symptom Scoring System</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Clinical Decision Support
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prostate Cancer Risk Assessment</li>
                    <li>• BPH Treatment Decision Guide</li>
                    <li>• Voiding Diary Analysis</li>
                    <li>• Comprehensive Medical Charts</li>
                    <li>• Educational Resources Library</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Standards */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="text-2xl">Medical Standards & Validation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Clinical Validation</h3>
                  <p className="text-gray-700 mb-4">
                    Our calculators are based on extensively validated medical formulas and guidelines from leading medical organizations:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• American Urological Association (AUA)</li>
                    <li>• European Association of Urology (EAU)</li>
                    <li>• International Consultation on Urological Diseases (ICUD)</li>
                    <li>• Peer-reviewed medical literature</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Quality Assurance</h3>
                  <p className="text-gray-700 mb-4">
                    Rigorous quality control ensures accuracy and reliability:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Regular formula verification</li>
                    <li>• Clinical expert review</li>
                    <li>• Continuous literature monitoring</li>
                    <li>• User feedback integration</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team & Expertise */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Commitment to Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Continuous Updates</h3>
                  <p className="text-sm text-gray-600">
                    Regular updates based on latest medical research and clinical guidelines
                  </p>
                </div>
                
                <div className="text-center">
                  <Shield className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Privacy Protection</h3>
                  <p className="text-sm text-gray-600">
                    HIPAA-compliant design with no personal data storage or tracking
                  </p>
                </div>
                
                <div className="text-center">
                  <Users className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Professional Support</h3>
                  <p className="text-sm text-gray-600">
                    Dedicated support for healthcare professionals and institutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust & Recognition */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle>Trust & Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Trusted by Healthcare Professionals</h3>
                  <p className="text-gray-700 mb-3">
                    ProstateVolumeCalc is trusted by healthcare professionals worldwide, including:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Urologists and urology practices</li>
                    <li>• Radiologists and imaging centers</li>
                    <li>• Primary care physicians</li>
                    <li>• Medical residents and students</li>
                    <li>• Healthcare institutions</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Clinical Integration</h3>
                  <p className="text-gray-700 mb-3">
                    Our tools integrate seamlessly into clinical workflows:
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Point-of-care calculations</li>
                    <li>• Patient consultation support</li>
                    <li>• Clinical documentation assistance</li>
                    <li>• Medical education resources</li>
                    <li>• Research and publication support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We value feedback from healthcare professionals and are committed to continuous improvement. 
                Your insights help us enhance our tools and better serve the medical community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">For Healthcare Professionals</h3>
                  <p className="text-sm text-gray-600">
                    Feedback on clinical accuracy, feature requests, and professional partnerships
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Institutions</h3>
                  <p className="text-sm text-gray-600">
                    Integration opportunities, educational partnerships, and institutional licensing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </>
  );
}