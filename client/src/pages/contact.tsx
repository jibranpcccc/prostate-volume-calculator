import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Shield, Users, MessageSquare } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEOHead from "@/components/seo-head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEOHead 
        title="Contact ProstateVolumeCalc - Professional Medical Support"
        description="Contact ProstateVolumeCalc for professional support, clinical partnerships, and medical calculator assistance. Dedicated support for healthcare professionals worldwide."
        pageType="homepage"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Our Medical Team
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional support for healthcare providers, clinical partnerships, and medical calculator assistance. We're here to support your clinical practice.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Professional Support</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Clinical Partnerships</Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">24/7 Available</Badge>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Healthcare Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clinical support, feature requests, and professional partnerships for healthcare providers.
                </p>
                <Badge className="bg-blue-100 text-blue-800">Priority Support</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Institutional Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Educational institutions, hospitals, and healthcare organizations seeking partnerships.
                </p>
                <Badge className="bg-green-100 text-green-800">Enterprise Solutions</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Calculator functionality, technical questions, and integration assistance.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Expert Assistance</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Professional Contact Form</CardTitle>
              <p className="text-gray-600">
                Please provide detailed information about your inquiry for the most appropriate response.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Dr. John Smith"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Professional Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="doctor@hospital.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      placeholder="City Medical Center"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Professional Role</Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urologist">Urologist</SelectItem>
                        <SelectItem value="radiologist">Radiologist</SelectItem>
                        <SelectItem value="primary-care">Primary Care Physician</SelectItem>
                        <SelectItem value="resident">Medical Resident</SelectItem>
                        <SelectItem value="nurse">Nurse Practitioner</SelectItem>
                        <SelectItem value="researcher">Medical Researcher</SelectItem>
                        <SelectItem value="administrator">Healthcare Administrator</SelectItem>
                        <SelectItem value="educator">Medical Educator</SelectItem>
                        <SelectItem value="student">Medical Student</SelectItem>
                        <SelectItem value="other">Other Healthcare Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical-support">Clinical Support</SelectItem>
                      <SelectItem value="feature-request">Feature Request</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="technical-issue">Technical Issue</SelectItem>
                      <SelectItem value="educational">Educational Use</SelectItem>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                      <SelectItem value="integration">System Integration</SelectItem>
                      <SelectItem value="feedback">General Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Detailed Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide detailed information about your inquiry, including any specific clinical scenarios, technical requirements, or partnership proposals."
                    rows={6}
                    required
                  />
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Privacy Notice:</strong> All communications are handled with strict confidentiality. We do not store patient data and maintain HIPAA-compliant communication practices.
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Professional Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Response Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Healthcare Professionals</span>
                    <Badge className="bg-green-100 text-green-800">4-8 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Technical Support</span>
                    <Badge className="bg-blue-100 text-blue-800">12-24 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Partnership Inquiries</span>
                    <Badge className="bg-purple-100 text-purple-800">1-3 business days</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">General Inquiries</span>
                    <Badge className="bg-gray-100 text-gray-800">2-5 business days</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  Professional Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold">Clinical Consultation</h3>
                  <p className="text-sm text-gray-600">Expert guidance on calculator implementation and clinical interpretation</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Educational Partnerships</h3>
                  <p className="text-sm text-gray-600">Curriculum integration and medical education resources</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Research Collaboration</h3>
                  <p className="text-sm text-gray-600">Support for clinical studies and validation research</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Custom Integration</h3>
                  <p className="text-sm text-gray-600">EMR integration and institutional deployment assistance</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Frequently Asked Questions */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">How do I integrate calculators into my EMR?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    We provide technical documentation and support for EMR integration. Contact us with your specific system requirements for customized assistance.
                  </p>
                  
                  <h3 className="font-semibold mb-2">Are the calculations clinically validated?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Yes, all calculations are based on peer-reviewed research and follow established clinical guidelines from major urological associations.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Can I use these tools for research?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Absolutely. We encourage research use and can provide documentation for citations. We also offer collaboration opportunities for validation studies.
                  </p>
                  
                  <h3 className="font-semibold mb-2">Is training available for staff?</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    We offer training sessions for healthcare teams, including clinical interpretation guidance and workflow integration best practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Notice */}
          <Alert className="border-red-200 bg-red-50">
            <Shield className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Important Notice:</strong> This contact form is for professional inquiries only. For medical emergencies or urgent patient care questions, please contact your local emergency services or healthcare provider immediately.
            </AlertDescription>
          </Alert>

        </div>
      </div>
    </>
  );
}