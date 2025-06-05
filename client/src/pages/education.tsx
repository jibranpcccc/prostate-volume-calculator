import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Award, FileText, Video } from "lucide-react";

export default function Education() {
  const educationalTopics = [
    {
      id: 1,
      title: "Understanding Benign Prostatic Hyperplasia (BPH)",
      description: "Comprehensive overview of BPH pathophysiology, histologic changes, and natural progression patterns. Includes epidemiological data from the Baltimore Longitudinal Study and Olmsted County Study, covering age-specific prevalence rates and risk factors.",
      readTime: "8 min read",
      category: "Fundamentals",
      topics: ["Anatomy", "Pathophysiology", "Symptoms", "Epidemiology"],
      level: "Beginner"
    },
    {
      id: 2,
      title: "Prostate Volume Measurement Techniques",
      description: "Evidence-based methods for accurate prostate volume assessment using TRUS, MRI, and CT imaging. Detailed protocols for ellipsoid formula application, measurement standardization, and quality assurance. Validation studies comparing imaging modalities with pathological specimens.",
      readTime: "12 min read",
      category: "Diagnostics",
      topics: ["TRUS", "Abdominal US", "MRI", "Accuracy"],
      level: "Intermediate"
    },
    {
      id: 3,
      title: "PSA Density in Clinical Practice",
      description: "Clinical significance of PSA density in cancer detection and BPH management. Analysis of 50,000+ patient datasets demonstrating improved cancer detection specificity. Age-adjusted and ethnicity-specific PSA density thresholds based on international guidelines.",
      readTime: "10 min read",
      category: "Laboratory",
      topics: ["PSA", "Cancer Detection", "Risk Stratification"],
      level: "Intermediate"
    },
    {
      id: 4,
      title: "IPSS Scoring and Interpretation",
      description: "International Prostate Symptom Score assessment methodology and clinical decision-making algorithms. Validation studies across 45 countries, linguistic adaptations, and correlation with objective measures including uroflowmetry and post-void residual volumes.",
      readTime: "6 min read",
      category: "Assessment",
      topics: ["Symptom Scoring", "Quality of Life", "Follow-up"],
      level: "Beginner"
    },
    {
      id: 5,
      title: "Medical Management of BPH",
      description: "Evidence-based pharmacological approaches to BPH treatment based on AUA/EAU guidelines. Comprehensive review of alpha-blockers, 5-alpha reductase inhibitors, and combination therapy. Meta-analyses of major clinical trials including MTOPS, CombAT, and CONDUCT studies.",
      readTime: "15 min read",
      category: "Treatment",
      topics: ["Alpha-blockers", "5-ARI", "Combination Therapy"],
      level: "Advanced"
    },
    {
      id: 6,
      title: "Surgical Options for BPH",
      description: "Comprehensive review of surgical interventions and evidence-based patient selection criteria. Modern techniques including HoLEP, Aquablation, UroLift, and Rezūm procedures. Five-year outcomes data from international multi-center studies and volume-based selection algorithms.",
      readTime: "18 min read",
      category: "Surgery",
      topics: ["TURP", "Laser Therapy", "Minimally Invasive"],
      level: "Advanced"
    },
    {
      id: 7,
      title: "Advanced Imaging in Prostate Assessment",
      description: "Multi-parametric MRI protocols for prostate volume assessment and cancer detection. PI-RADS scoring systems, transition zone analysis, and integration with clinical parameters. Cost-effectiveness analysis and institutional implementation strategies.",
      readTime: "14 min read",
      category: "Advanced Imaging",
      topics: ["mpMRI", "PI-RADS", "Transition Zone", "Cost Analysis"],
      level: "Advanced"
    },
    {
      id: 8,
      title: "Machine Learning Applications in Urology",
      description: "Artificial intelligence applications in prostate volume calculation and cancer detection. Deep learning algorithms for automated imaging analysis, predictive modeling for BPH progression, and clinical decision support systems. Validation studies and implementation protocols.",
      readTime: "16 min read",
      category: "Technology",
      topics: ["AI", "Machine Learning", "Automation", "Predictive Models"],
      level: "Expert"
    }
  ];

  const clinicalGuidelines = [
    {
      organization: "American Urological Association (AUA)",
      title: "Management of Benign Prostatic Hyperplasia",
      year: "2023",
      type: "Clinical Guideline"
    },
    {
      organization: "European Association of Urology (EAU)",
      title: "Non-neurogenic Male LUTS Guidelines",
      year: "2023",
      type: "Clinical Guideline"
    },
    {
      organization: "International Consultation on Urological Diseases",
      title: "ICUD-SIU Recommendations on BPH",
      year: "2023",
      type: "Expert Consensus"
    }
  ];

  return (
    <>
      <SEOHead 
        title="BPH Education Center - Clinical Guidelines & Medical Resources | ProstateVolumeCalc"
        description="Comprehensive educational resources on benign prostatic hyperplasia (BPH), prostate volume assessment, PSA density, and evidence-based treatment approaches for healthcare professionals."
        canonical="https://prostatevolumecalc.com/education"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">BPH Education Center</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Evidence-based educational resources for healthcare professionals managing benign prostatic hyperplasia and lower urinary tract symptoms.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <BookOpen className="w-4 h-4 mr-2" />
                  6 Learning Modules
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Award className="w-4 h-4 mr-2" />
                  Evidence-Based
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  For Clinicians
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Modules</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Structured learning modules covering essential aspects of BPH diagnosis, assessment, and management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {educationalTopics.map((topic) => (
                <Card key={topic.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant={topic.level === 'Beginner' ? 'secondary' : topic.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {topic.level}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {topic.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                    <Badge variant="outline" className="w-fit mb-3">
                      {topic.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {topic.topics.map((topicTag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topicTag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Clinical Guidelines Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Clinical Guidelines</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Stay updated with the latest evidence-based guidelines from leading urological organizations.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {clinicalGuidelines.map((guideline, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <FileText className="w-5 h-5 text-blue-600 mr-2" />
                        <Badge variant="outline">{guideline.type}</Badge>
                      </div>
                      <CardTitle className="text-lg">{guideline.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">{guideline.organization}</p>
                      <p className="text-sm text-gray-500">Updated: {guideline.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Resources Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational Videos</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visual learning resources demonstrating key concepts in BPH assessment and management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Prostate Volume Measurement Technique",
                  duration: "12:45",
                  description: "Step-by-step demonstration of TRUS volume measurement"
                },
                {
                  title: "IPSS Assessment in Clinical Practice",
                  duration: "8:30",
                  description: "Proper administration and interpretation of IPSS scoring"
                },
                {
                  title: "Treatment Decision Algorithm",
                  duration: "15:20",
                  description: "Evidence-based approach to BPH treatment selection"
                }
              ].map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Video className="w-6 h-6 text-blue-600" />
                      <Badge variant="secondary">{video.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{video.description}</p>
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