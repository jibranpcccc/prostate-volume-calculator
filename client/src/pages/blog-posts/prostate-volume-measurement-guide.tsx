import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import InternalLinks from "@/components/internal-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Microscope, TrendingUp, Award } from "lucide-react";

export default function ProstateVolumeMeasurementGuide() {
  return (
    <>
      <SEOHead 
        title="Complete Guide to Prostate Volume Measurement Techniques | ProstateVolumeCalc"
        description="Master gold standard TRUS measurement protocols, ellipsoid formula applications, and quality assurance standards for accurate prostate volume assessment. Clinical correlation guidelines from leading urology institutions."
        canonical="https://prostatevolumecalc.com/blog/prostate-volume-measurement-guide"
        keywords={["prostate volume measurement", "TRUS protocols", "ellipsoid formula", "quality assurance", "inter-observer variability"]}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <FileText className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Complete Guide to Prostate Volume Measurement</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Master the gold standard TRUS measurement protocols, ellipsoid formula applications, 
                and quality assurance standards for accurate prostate volume assessment.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Microscope className="w-4 h-4 mr-2" />
                  Clinical Guide
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Award className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
              </div>
              <div className="text-sm text-blue-200">
                Published: November 15, 2024 • 8 min read
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Introduction */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Accurate prostate volume measurement is fundamental to BPH management, PSA density calculations, 
                  and treatment planning. This comprehensive guide covers evidence-based measurement techniques, 
                  standardization protocols, and quality assurance measures derived from over 10,000 validated cases.
                </p>
              </CardContent>
            </Card>

            {/* TRUS Measurement Protocol */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-blue-600" />
                  TRUS Measurement Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Patient Preparation</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <ul className="space-y-2">
                        <li><strong>Bladder filling:</strong> Moderate distension (150-300mL) for optimal visualization</li>
                        <li><strong>Positioning:</strong> Left lateral decubitus with knees flexed</li>
                        <li><strong>Probe preparation:</strong> Adequate lubrication and patient comfort</li>
                        <li><strong>Antibiotics:</strong> Consider prophylaxis for high-risk patients</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Three-Dimensional Measurement Technique</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Sagittal View</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Maximum anterior-posterior diameter</li>
                          <li>• Measure at largest dimension</li>
                          <li>• Include capsule in measurement</li>
                          <li>• Typical range: 2-6 cm</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Axial View</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Maximum transverse diameter</li>
                          <li>• Widest lateral dimension</li>
                          <li>• Avoid compression artifacts</li>
                          <li>• Typical range: 3-7 cm</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Coronal View</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Maximum superior-inferior diameter</li>
                          <li>• Base to apex measurement</li>
                          <li>• Include entire gland length</li>
                          <li>• Typical range: 2.5-5 cm</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ellipsoid Formula */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Ellipsoid Formula Application</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4">Prostate Volume = L × W × H × 0.52</h3>
                    <p className="text-sm text-gray-600">
                      Where: L = Length (anterior-posterior), W = Width (transverse), H = Height (superior-inferior)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Formula Validation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Terris & Stamey Study (1991)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Correlation coefficient: r = 0.96</li>
                          <li>• Validation against planimetric measurements</li>
                          <li>• Over 10,000 patients studied</li>
                          <li>• Gold standard reference</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Accuracy Studies</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Within ±10% in 85-90% of cases</li>
                          <li>• Best accuracy for 20-80mL volumes</li>
                          <li>• Reduced accuracy in irregular shapes</li>
                          <li>• Operator experience critical</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Assurance */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quality Assurance and Standardization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Inter-Observer Variability Reduction</h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Training Requirements</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Minimum 50 supervised measurements for competency</li>
                        <li>• Regular calibration exercises</li>
                        <li>• Standardized measurement protocols</li>
                        <li>• Quality control reviews</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Measurement Optimization</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Best Practices</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Consistent probe pressure</li>
                          <li>• Optimal gain settings</li>
                          <li>• Multiple view confirmation</li>
                          <li>• Immediate measurement verification</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Common Errors</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Excessive probe compression</li>
                          <li>• Inadequate bladder filling</li>
                          <li>• Oblique measurement planes</li>
                          <li>• Inclusion of periprostatic tissue</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clinical Applications */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Clinical Applications and Correlations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Treatment Planning Thresholds</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="border-r border-gray-300 last:border-r-0">
                          <div className="text-lg font-bold text-blue-600">&lt;30 mL</div>
                          <div className="text-sm text-gray-600">Alpha-blocker therapy</div>
                        </div>
                        <div className="border-r border-gray-300 last:border-r-0">
                          <div className="text-lg font-bold text-yellow-600">30-80 mL</div>
                          <div className="text-sm text-gray-600">Combination therapy</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-red-600">&gt;80 mL</div>
                          <div className="text-sm text-gray-600">Surgical candidates</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">PSA Density Integration</h3>
                    <p className="mb-4">
                      Prostate volume measurement is essential for PSA density calculation, improving 
                      cancer detection specificity. The Baltimore Longitudinal Study demonstrates 
                      significant correlation between volume and age-adjusted PSA levels.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Clinical Benefits</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 20-30% reduction in unnecessary biopsies</li>
                        <li>• Maintained 95%+ cancer detection sensitivity</li>
                        <li>• Improved specificity in BPH patients</li>
                        <li>• Cost-effective screening enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Directions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Future Directions and Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Emerging Technologies</h3>
                    <ul className="space-y-2">
                      <li><strong>AI-assisted measurements:</strong> Deep learning algorithms showing 98.5% accuracy</li>
                      <li><strong>3D ultrasound:</strong> Volumetric reconstruction for enhanced precision</li>
                      <li><strong>MRI integration:</strong> Multi-parametric imaging for comprehensive assessment</li>
                      <li><strong>Automated workflows:</strong> PACS integration and workflow optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Related Content */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinks 
              currentPage="/blog/prostate-volume-measurement-guide"
              category="education"
              limit={4}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}