import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import FAQ from "@/components/faq";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Users, Clock, Phone } from "lucide-react";

export default function FAQPage() {
  const quickAnswers = [
    {
      question: "What is a normal prostate volume?",
      answer: "Normal prostate volume is typically 20-30cc in men under 40, increasing by approximately 1.2cc per year. Volumes over 40cc are generally considered enlarged."
    },
    {
      question: "How accurate is PSA density for cancer detection?",
      answer: "PSA density >0.15 ng/mL/cc increases cancer risk. It's more accurate than PSA alone, with studies showing improved specificity for clinically significant cancer detection."
    },
    {
      question: "When should surgery be considered for BPH?",
      answer: "Surgery is typically considered for moderate to severe symptoms (IPSS >15), failed medical therapy, recurrent UTIs, bladder stones, or significant post-void residual."
    }
  ];

  const supportTopics = [
    {
      category: "Clinical Questions",
      description: "Medical professionals seeking clinical guidance",
      contact: "Available through professional medical networks"
    },
    {
      category: "Technical Support",
      description: "Calculator functionality and website issues",
      contact: "Contact form available in footer"
    },
    {
      category: "Educational Resources",
      description: "Access to continuing education materials",
      contact: "Available through education center"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Medical FAQ - Prostate Volume & BPH Questions | ProstateVolumeCalc"
        description="Frequently asked questions about prostate volume measurement, PSA density calculations, BPH assessment, and clinical decision-making for healthcare professionals."
        canonical="https://prostatevolumecalc.com/faq"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical FAQ</h1>
              <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Comprehensive answers to frequently asked questions about prostate volume assessment, BPH management, and clinical decision-making.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  50+ Questions
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Expert Answers
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Clock className="w-4 h-4 mr-2" />
                  Updated Daily
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answers Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Answers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get immediate answers to the most commonly asked clinical questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {quickAnswers.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive FAQ</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed answers organized by clinical category for easy reference.
              </p>
            </div>
            
            <FAQ />
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Support</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help with specialized medical questions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportTopics.map((topic, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{topic.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{topic.contact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}