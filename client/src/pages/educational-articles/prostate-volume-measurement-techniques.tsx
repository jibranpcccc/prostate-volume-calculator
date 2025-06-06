import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import EnhancedSEOHead from "@/components/enhanced-seo-head";
import InternalLinks from "@/components/internal-links";
import MedicalReferences from "@/components/medical-references";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Camera, Ruler, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function ProstateVolumeMeasurementTechniques() {
  return (
    <>
      <EnhancedSEOHead
        title="Prostate Volume Measurement Techniques | TRUS, MRI, and CT Methods"
        description="Comprehensive guide to prostate volume measurement techniques including TRUS ellipsoid formula, MRI planimetry, and CT assessment. Evidence-based comparison of accuracy and clinical applications."
        canonical="/education/prostate-volume-measurement-techniques"
        keywords={[
          "prostate volume measurement",
          "TRUS prostate volume",
          "MRI prostate volume",
          "ellipsoid formula",
          "planimetry method",
          "prostate imaging"
        ]}
        medicalCondition="Benign Prostatic Hyperplasia"
        targetAudience={["urologists", "radiologists", "sonographers"]}
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
                  <Ruler className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prostate Volume Measurement Techniques
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive analysis of imaging methods for accurate prostate volume assessment, 
                from TRUS ellipsoid formula to advanced MRI planimetry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Camera className="w-4 h-4 mr-2" />
                  Imaging Techniques
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Clinical Accuracy
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

              {/* Introduction */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    Introduction to Prostate Volume Measurement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Accurate prostate volume measurement is fundamental to urological practice, 
                    influencing treatment decisions for benign prostatic hyperplasia (BPH), 
                    prostate cancer screening, and surgical planning. Multiple imaging modalities 
                    offer different approaches with varying accuracy and clinical utility.
                  </p>
                  
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Volume accuracy directly impacts PSA density calculations, treatment selection, 
                      and surgical outcomes. Understanding measurement limitations is crucial for 
                      optimal clinical decision-making.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* TRUS Measurement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-green-600" />
                    Transrectal Ultrasound (TRUS) Ellipsoid Formula
                  </CardTitle>
                  <CardDescription>
                    Most widely used clinical method for prostate volume assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Formula and Methodology</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-mono text-blue-800 text-center text-lg mb-3">
                        Volume = 0.523 × Length × Width × Height
                      </p>
                      <p className="text-sm text-blue-700 text-center">
                        (Ellipsoid formula with π/6 approximation)
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Real-time assessment during clinical examination</li>
                        <li>• Widely available and cost-effective</li>
                        <li>• Established correlation with surgical specimens</li>
                        <li>• Standardized measurement protocol</li>
                        <li>• Integration with biopsy procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Limitations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Operator-dependent variability</li>
                        <li>• Assumes regular ellipsoid shape</li>
                        <li>• 15-20% measurement uncertainty</li>
                        <li>• Difficulty with irregular prostates</li>
                        <li>• Limited soft tissue contrast</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Clinical Accuracy</h4>
                    <p className="text-gray-700 mb-3">
                      TRUS ellipsoid formula demonstrates 85-90% correlation with actual prostate weight, 
                      with systematic underestimation of 10-15% in prostates greater than 80g. Measurement precision 
                      improves with standardized imaging protocols and experienced operators.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* MRI Measurement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-purple-600" />
                    Magnetic Resonance Imaging (MRI) Planimetry
                  </CardTitle>
                  <CardDescription>
                    Gold standard for accurate prostate volume assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Methodology</h3>
                    <p className="text-gray-700 mb-4">
                      MRI planimetry involves manual or semi-automated tracing of prostate contours 
                      on sequential axial T2-weighted images, with volume calculation by summation 
                      of slice areas multiplied by slice thickness.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-mono text-purple-800 text-center text-lg">
                        Volume = Σ(Area × Slice Thickness)
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Highest accuracy (>95% correlation)</li>
                        <li>• Excellent soft tissue contrast</li>
                        <li>• Accounts for irregular shapes</li>
                        <li>• Multiplanar assessment capability</li>
                        <li>• Concurrent anatomical evaluation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Limitations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Higher cost and limited availability</li>
                        <li>• Time-intensive analysis</li>
                        <li>• Requires specialized expertise</li>
                        <li>• Motion artifact susceptibility</li>
                        <li>• Not routine for all patients</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CT Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Camera className="h-6 w-6 text-orange-600" />
                    Computed Tomography (CT) Assessment
                  </CardTitle>
                  <CardDescription>
                    Alternative imaging modality with specific clinical applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Clinical Applications</h3>
                    <p className="text-gray-700 mb-4">
                      CT-based prostate volume measurement is primarily utilized when MRI is 
                      contraindicated or unavailable, particularly in emergency settings or 
                      for patients with metallic implants.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Rapid acquisition time</li>
                        <li>• Widely available modality</li>
                        <li>• No contraindications for implants</li>
                        <li>• Concurrent abdominal assessment</li>
                        <li>• Cost-effective alternative</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Limitations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Limited soft tissue contrast</li>
                        <li>• Radiation exposure</li>
                        <li>• Inferior accuracy to MRI</li>
                        <li>• Contrast enhancement required</li>
                        <li>• Variable measurement precision</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Accuracy Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    Comparative Accuracy Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-left">Method</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Accuracy</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Variability</th>
                          <th className="border border-gray-300 px-4 py-3 text-center">Clinical Use</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-medium">MRI Planimetry</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-green-600">95-98%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">±5%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Research/Complex Cases</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">TRUS Ellipsoid</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-blue-600">85-90%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">±15%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Routine Clinical</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-medium">CT Assessment</td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-orange-600">75-85%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">±20%</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">Alternative Method</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Clinical Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    Clinical Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Routine Clinical Practice</h4>
                      <p className="text-gray-700 text-sm">
                        TRUS ellipsoid formula remains the standard for routine prostate volume assessment, 
                        providing adequate accuracy for clinical decision-making in most scenarios.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Research and Complex Cases</h4>
                      <p className="text-gray-700 text-sm">
                        MRI planimetry should be considered for research applications, pre-surgical 
                        planning, or when high precision volume measurement is critical.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Alternative Scenarios</h4>
                      <p className="text-gray-700 text-sm">
                        CT assessment may be utilized when other modalities are unavailable or 
                        contraindicated, with awareness of reduced accuracy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Related Tools */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <InternalLinks 
                currentPage="/education/prostate-volume-measurement-techniques"
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