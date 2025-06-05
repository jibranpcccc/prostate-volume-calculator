import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AlertCircle, Home, Calculator, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page Not Found | ProstateVolumeCalc"
        description="The page you are looking for could not be found. Return to our medical grade prostate volume calculator and clinical assessment tools."
        canonical="https://prostatevolumecalc.com/404"
      />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="h-12 w-12 text-red-500" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to our medical calculators and assessment tools.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Calculator className="h-8 w-8 text-blue-600 mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Prostate Volume Calculator</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Calculate prostate volume using validated ellipsoid formula
                  </p>
                  <Link href="/">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Calculator className="mr-2 w-4 h-4" />
                      Use Calculator
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Home className="h-8 w-8 text-indigo-600 mb-3 mx-auto" />
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced Clinical Tools</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Access PSA density, IPSS assessment, and treatment guides
                  </p>
                  <Link href="/tools">
                    <Button variant="outline" className="w-full">
                      <ArrowRight className="mr-2 w-4 h-4" />
                      Explore Tools
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Home className="mr-2 w-5 h-5" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
