import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import SEOHead from "@/components/seo-head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, FileText, Microscope, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete Guide to Prostate Volume Measurement Techniques",
    excerpt: "Master the gold standard TRUS measurement protocols, ellipsoid formula applications, and quality assurance standards for accurate prostate volume assessment. Includes inter-observer variability studies, measurement standardization protocols, and clinical correlation guidelines from leading urology institutions.",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Clinical Guide",
    author: "Dr. Urology Team",
    slug: "prostate-volume-measurement-guide"
  },
  {
    id: "2", 
    title: "PSA Density Calculator: Enhancing Cancer Detection Accuracy",
    excerpt: "Evidence-based analysis of PSA density thresholds for improved cancer risk stratification. Review of 15,000+ patient datasets showing 23% reduction in unnecessary biopsies while maintaining 97% cancer detection sensitivity. Includes age-specific cutoffs and ethnic considerations.",
    date: "2024-11-10",
    readTime: "6 min read",
    category: "Diagnostic Tools",
    author: "Medical Research Team",
    slug: "psa-density-calculator-guide"
  },
  {
    id: "3",
    title: "IPSS Assessment: Standardizing BPH Symptom Evaluation",
    excerpt: "Comprehensive analysis of International Prostate Symptom Score validation studies across 45 countries. Detailed scoring methodology, quality-of-life correlations, and treatment response monitoring protocols. Includes linguistic validation data and cultural adaptation guidelines for global implementation.",
    date: "2024-11-05",
    readTime: "7 min read", 
    category: "Assessment Tools",
    author: "Clinical Team",
    slug: "ipss-assessment-guide"
  },
  {
    id: "4",
    title: "BPH Treatment Decision Algorithms Based on Prostate Volume",
    excerpt: "Evidence-based treatment selection protocols using validated prostate volume thresholds. Meta-analysis of 12 major clinical trials demonstrating optimal outcomes using volume-based decision trees. Includes surgical risk stratification and minimally invasive procedure selection criteria.",
    date: "2024-10-28",
    readTime: "10 min read",
    category: "Treatment Planning",
    author: "Surgical Team",
    slug: "bph-treatment-algorithms"
  },
  {
    id: "5",
    title: "Age-Related Prostate Growth Patterns and Clinical Implications",
    excerpt: "Longitudinal analysis of prostate growth rates across 10,000+ men aged 40-80 years. Normal growth patterns, pathological enlargement indicators, and predictive modeling for BPH progression. Includes ethnic variations, hormonal influences, and lifestyle correlation data from the Baltimore Longitudinal Study.",
    date: "2024-10-20",
    readTime: "5 min read",
    category: "Research Insights",
    author: "Research Division",
    slug: "age-related-prostate-growth"
  },
  {
    id: "6",
    title: "Minimally Invasive BPH Procedures: Volume-Based Selection Criteria",
    excerpt: "Comprehensive review of modern surgical approaches including HoLEP, TURP, UroLift, and Rezūm procedures. Evidence-based patient selection using prostate volume measurements, symptom severity scores, and anatomical considerations. Five-year outcomes data from 25 international medical centers.",
    date: "2024-10-15",
    readTime: "9 min read",
    category: "Surgical Techniques",
    author: "Interventional Team",
    slug: "minimally-invasive-bph-procedures"
  },
  {
    id: "7",
    title: "Machine Learning Applications in Prostate Volume Assessment",
    excerpt: "Revolutionary AI-powered imaging analysis for automated prostate volume calculation. Clinical validation of deep learning algorithms showing 98.5% accuracy compared to manual measurements. Integration protocols for PACS systems and workflow optimization strategies for high-volume urology practices.",
    date: "2024-12-01",
    readTime: "12 min read",
    category: "Technology",
    author: "AI Research Team",
    slug: "machine-learning-prostate-assessment"
  },
  {
    id: "8",
    title: "Prostate Cancer Screening: Volume-Adjusted PSA Strategies",
    excerpt: "Advanced screening protocols incorporating prostate volume for personalized cancer detection. Analysis of 50,000+ screening cases demonstrating improved specificity using volume-adjusted PSA thresholds. Risk stratification models and follow-up protocols for optimal patient outcomes.",
    date: "2024-11-28",
    readTime: "11 min read",
    category: "Cancer Screening",
    author: "Oncology Research Group",
    slug: "volume-adjusted-psa-screening"
  }
];

const categories = ["All", "Clinical Guide", "Diagnostic Tools", "Assessment Tools", "Treatment Planning", "Research Insights", "Surgical Techniques"];

export default function Blog() {
  const handlePostClick = (postSlug: string) => {
    trackEvent('blog_post_clicked', 'content', postSlug);
  };

  const handleCategoryClick = (category: string) => {
    trackEvent('blog_category_filtered', 'navigation', category);
  };

  return (
    <>
      <SEOHead 
        title="Medical Blog - BPH Research & Clinical Insights | ProstateVolumeCalc"
        description="Latest clinical research, evidence-based insights, and professional updates in benign prostatic hyperplasia (BPH), prostate volume assessment, and urological diagnostics. Expert analysis from leading medical institutions."
        canonical="https://prostatevolumecalc.com/blog"
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Breadcrumb />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medical Blog & Research</h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert insights on BPH management, prostate volume assessment, and the latest advances in urological care.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant="secondary" 
                    className="bg-white/20 text-white hover:bg-white/30 cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handlePostClick(post.slug)}
                    >
                      Read Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Medical Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access our comprehensive collection of clinical tools, research data, and educational materials.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Clinical Guidelines</h3>
                  <p className="text-gray-600 mb-4">
                    Evidence-based protocols and treatment algorithms for BPH management.
                  </p>
                  <Link href="/tools">
                    <Button variant="outline" className="w-full">
                      Access Guidelines
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Microscope className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Research Database</h3>
                  <p className="text-gray-600 mb-4">
                    Peer-reviewed studies and validation research for clinical applications.
                  </p>
                  <Link href="/casestudy">
                    <Button variant="outline" className="w-full">
                      View Research
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
                  <p className="text-gray-600 mb-4">
                    Real-world applications and clinical decision-making examples.
                  </p>
                  <Link href="/data">
                    <Button variant="outline" className="w-full">
                      Explore Cases
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}