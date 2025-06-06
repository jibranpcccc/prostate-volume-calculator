import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import Home from "@/pages/home";
import AdvancedTools from "@/pages/advanced-tools";
import Education from "@/pages/education";
import FAQPage from "@/pages/faq-page";
import Resources from "@/pages/resources";
import Blog from "@/pages/blog";
import CaseStudy from "@/pages/casestudy";
import PSACalculators from "@/pages/psa-calculators";
import MensHealthCalculators from "@/pages/mens-health-calculators";
import BPHLUTSTools from "@/pages/bph-luts-tools";
import ProstateCancerTools from "@/pages/prostate-cancer-tools";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import Disclaimer from "@/pages/disclaimer";
import Sitemap from "@/pages/sitemap";
import NotFound from "@/pages/not-found";

// Individual Calculator Pages
import PSADensityCalculator from "@/pages/individual-calculators/psa-density-calculator";
import PSAVelocityCalculator from "@/pages/individual-calculators/psa-velocity-calculator";
import PSADoublingTimeCalculator from "@/pages/individual-calculators/psa-doubling-time-calculator";
import FreePSARatioCalculator from "@/pages/individual-calculators/free-psa-ratio-calculator";
import AgeSpecificPSACalculator from "@/pages/individual-calculators/age-specific-psa-calculator";
import ErectileDysfunctionCalculator from "@/pages/individual-calculators/erectile-dysfunction-calculator";
import TestosteroneDeficiencyCalculator from "@/pages/individual-calculators/testosterone-deficiency-calculator";
import FreeTestosteroneCalculator from "@/pages/individual-calculators/free-testosterone-calculator";
import CardiovascularRiskCalculator from "@/pages/individual-calculators/cardiovascular-risk-calculator";
import BMICalculator from "@/pages/individual-calculators/bmi-calculator";
import WaistHipRatioCalculator from "@/pages/individual-calculators/waist-hip-ratio-calculator";
import PostVoidResidualCalculator from "@/pages/individual-calculators/post-void-residual-calculator";
import VoidingDiaryAnalyzer from "@/pages/individual-calculators/voiding-diary-analyzer";
import BladderCapacityCalculator from "@/pages/individual-calculators/bladder-capacity-calculator";
import ProstateCancerRiskCalculatorPage from "@/pages/individual-calculators/prostate-cancer-risk-calculator";
import IPSSQuestionnairePage from "@/pages/individual-calculators/ipss-questionnaire";

// Educational Articles
import UnderstandingBPH from "@/pages/educational-articles/understanding-bph";
import ProstateVolumeMeasurementTechniques from "@/pages/educational-articles/prostate-volume-measurement-techniques";
import PSADensityCliniclPractice from "@/pages/educational-articles/psa-density-clinical-practice";
import IPSSScoringInterpretation from "@/pages/educational-articles/ipss-scoring-interpretation";
import MedicalManagementBPH from "@/pages/educational-articles/medical-management-bph";
import SurgicalOptionsBPH from "@/pages/educational-articles/surgical-options-bph";
import AdvancedImagingProstate from "@/pages/educational-articles/advanced-imaging-prostate";
import MachineLearningUrology from "@/pages/educational-articles/machine-learning-urology";

// Blog Posts
import ProstateVolumeMeasurementGuide from "@/pages/blog-posts/prostate-volume-measurement-guide";
import PSADensityCalculatorGuide from "@/pages/blog-posts/psa-density-calculator-guide";
import IPSSAssessmentGuide from "@/pages/blog-posts/ipss-assessment-guide";
import BPHTreatmentAlgorithms from "@/pages/blog-posts/bph-treatment-algorithms";
import AgeRelatedProstateGrowth from "@/pages/blog-posts/age-related-prostate-growth";
import MinimallyInvasiveBPHProcedures from "@/pages/blog-posts/minimally-invasive-bph-procedures";
import MachineLearningProstateAssessment from "@/pages/blog-posts/machine-learning-prostate-assessment";
import VolumeAdjustedPSAScreening from "@/pages/blog-posts/volume-adjusted-psa-screening";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      {/* Homepage Routes */}
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/calculator" component={Home} />
      <Route path="/prostate-volume-calculator" component={Home} />
      
      {/* Clinical Tools Routes */}
      <Route path="/tools" component={AdvancedTools} />
      <Route path="/advanced-tools" component={AdvancedTools} />
      <Route path="/clinical-tools" component={AdvancedTools} />
      <Route path="/psa-density-calculator" component={AdvancedTools} />
      <Route path="/ipss-assessment" component={AdvancedTools} />
      <Route path="/ipss-questionnaire" component={AdvancedTools} />
      <Route path="/treatment-decision-guide" component={AdvancedTools} />
      <Route path="/treatment-guide" component={AdvancedTools} />
      <Route path="/bph-assessment-tools" component={AdvancedTools} />
      <Route path="/comprehensive-calculator" component={AdvancedTools} />
      
      {/* PSA Calculator Suite */}
      <Route path="/psa-calculators/" component={PSACalculators} />
      <Route path="/psa-calculators/psa-density-calculator/" component={PSADensityCalculator} />
      <Route path="/psa-calculators/psa-velocity-calculator/" component={PSAVelocityCalculator} />
      <Route path="/psa-calculators/psa-doubling-time-calculator/" component={PSADoublingTimeCalculator} />
      <Route path="/psa-calculators/free-psa-ratio-calculator/" component={FreePSARatioCalculator} />
      <Route path="/psa-calculators/age-specific-psa-calculator/" component={AgeSpecificPSACalculator} />
      
      {/* BPH & LUTS Tools Suite */}
      <Route path="/bph-luts-tools/" component={BPHLUTSTools} />
      <Route path="/bph-luts-tools/ipss-questionnaire/" component={IPSSQuestionnairePage} />
      <Route path="/bph-luts-tools/post-void-residual-calculator/" component={PostVoidResidualCalculator} />
      <Route path="/bph-luts-tools/bladder-capacity-calculator/" component={BladderCapacityCalculator} />
      <Route path="/bph-luts-tools/voiding-diary-analyzer/" component={VoidingDiaryAnalyzer} />
      
      {/* Prostate Cancer Tools Suite */}
      <Route path="/prostate-cancer-tools/" component={ProstateCancerTools} />
      <Route path="/prostate-cancer-tools/risk-calculator/" component={ProstateCancerRiskCalculatorPage} />
      <Route path="/prostate-cancer-tools/treatment-decision-guide/" component={AdvancedTools} />
      
      {/* Men's Health Calculators */}
      <Route path="/mens-health-calculators/" component={MensHealthCalculators} />
      <Route path="/mens-health-calculators/erectile-dysfunction-calculator/" component={ErectileDysfunctionCalculator} />
      <Route path="/mens-health-calculators/testosterone-deficiency-calculator/" component={TestosteroneDeficiencyCalculator} />
      <Route path="/mens-health-calculators/free-testosterone-calculator/" component={FreeTestosteroneCalculator} />
      <Route path="/mens-health-calculators/cardiovascular-risk-calculator/" component={CardiovascularRiskCalculator} />
      <Route path="/mens-health-calculators/bmi-calculator/" component={BMICalculator} />
      <Route path="/mens-health-calculators/waist-hip-ratio-calculator/" component={WaistHipRatioCalculator} />
      
      {/* Legacy tool routes - 301 redirects to canonical URLs */}
      <Route path="/tools/ipss-questionnaire">
        {() => {
          window.location.replace('/bph-luts-tools/ipss-questionnaire/');
          return null;
        }}
      </Route>
      <Route path="/tools/prostate-cancer-risk-calculator">
        {() => {
          window.location.replace('/prostate-cancer-tools/risk-calculator/');
          return null;
        }}
      </Route>
      <Route path="/tools/post-void-residual-calculator">
        {() => {
          window.location.replace('/bph-luts-tools/post-void-residual-calculator/');
          return null;
        }}
      </Route>
      <Route path="/tools/bladder-capacity-calculator">
        {() => {
          window.location.replace('/bph-luts-tools/bladder-capacity-calculator/');
          return null;
        }}
      </Route>
      <Route path="/tools/voiding-diary-analyzer">
        {() => {
          window.location.replace('/bph-luts-tools/voiding-diary-analyzer/');
          return null;
        }}
      </Route>
      <Route path="/tools/comprehensive-prostate-assessment" component={AdvancedTools} />
      <Route path="/tools/treatment-decision-guide" component={AdvancedTools} />
      
      {/* Educational Articles */}
      <Route path="/education/understanding-bph" component={UnderstandingBPH} />
      <Route path="/education/prostate-volume-measurement-techniques" component={ProstateVolumeMeasurementTechniques} />
      <Route path="/education/psa-density-clinical-practice" component={PSADensityCliniclPractice} />
      <Route path="/education/ipss-scoring-interpretation" component={IPSSScoringInterpretation} />
      <Route path="/education/medical-management-bph" component={MedicalManagementBPH} />
      <Route path="/education/surgical-options-bph" component={SurgicalOptionsBPH} />
      <Route path="/education/advanced-imaging-prostate" component={AdvancedImagingProstate} />
      <Route path="/education/machine-learning-urology" component={MachineLearningUrology} />
      
      {/* Blog Posts */}
      <Route path="/blog/prostate-volume-measurement-guide" component={ProstateVolumeMeasurementGuide} />
      <Route path="/blog/psa-density-calculator-guide" component={PSADensityCalculatorGuide} />
      <Route path="/blog/ipss-assessment-guide" component={IPSSAssessmentGuide} />
      <Route path="/blog/bph-treatment-algorithms" component={BPHTreatmentAlgorithms} />
      <Route path="/blog/age-related-prostate-growth" component={AgeRelatedProstateGrowth} />
      <Route path="/blog/minimally-invasive-bph-procedures" component={MinimallyInvasiveBPHProcedures} />
      <Route path="/blog/machine-learning-prostate-assessment" component={MachineLearningProstateAssessment} />
      <Route path="/blog/volume-adjusted-psa-screening" component={VolumeAdjustedPSAScreening} />
      
      {/* Case Studies */}
      <Route path="/case-studies/large-prostate-bph-management" component={CaseStudy} />
      <Route path="/case-studies/psa-density-guided-biopsy" component={CaseStudy} />
      <Route path="/case-studies/surgical-planning-moderate-bph" component={CaseStudy} />
      <Route path="/case-studies/young-patient-enlarged-prostate" component={CaseStudy} />
      
      {/* 301 Redirects to Canonical URLs */}
      <Route path="/psa-velocity-calculator">
        {() => {
          window.location.replace('/psa-calculators/psa-velocity-calculator/');
          return null;
        }}
      </Route>
      <Route path="/psa-doubling-time-calculator">
        {() => {
          window.location.replace('/psa-calculators/psa-doubling-time-calculator/');
          return null;
        }}
      </Route>
      <Route path="/free-psa-ratio-calculator">
        {() => {
          window.location.replace('/psa-calculators/free-psa-ratio-calculator/');
          return null;
        }}
      </Route>
      <Route path="/age-specific-psa-calculator">
        {() => {
          window.location.replace('/psa-calculators/age-specific-psa-calculator/');
          return null;
        }}
      </Route>
      <Route path="/prostate-cancer-risk-calculator">
        {() => {
          window.location.replace('/prostate-cancer-tools/risk-calculator/');
          return null;
        }}
      </Route>
      <Route path="/erectile-dysfunction-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/erectile-dysfunction-calculator/');
          return null;
        }}
      </Route>
      <Route path="/testosterone-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/testosterone-deficiency-calculator/');
          return null;
        }}
      </Route>
      <Route path="/testosterone-deficiency-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/testosterone-deficiency-calculator/');
          return null;
        }}
      </Route>
      <Route path="/free-testosterone-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/free-testosterone-calculator/');
          return null;
        }}
      </Route>
      <Route path="/cardiovascular-risk-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/cardiovascular-risk-calculator/');
          return null;
        }}
      </Route>
      <Route path="/bmi-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/bmi-calculator/');
          return null;
        }}
      </Route>
      <Route path="/waist-hip-ratio-calculator">
        {() => {
          window.location.replace('/mens-health-calculators/waist-hip-ratio-calculator/');
          return null;
        }}
      </Route>
      <Route path="/post-void-residual-calculator">
        {() => {
          window.location.replace('/bph-luts-tools/post-void-residual-calculator/');
          return null;
        }}
      </Route>
      <Route path="/bladder-capacity-calculator">
        {() => {
          window.location.replace('/bph-luts-tools/bladder-capacity-calculator/');
          return null;
        }}
      </Route>
      <Route path="/voiding-diary-analyzer">
        {() => {
          window.location.replace('/bph-luts-tools/voiding-diary-analyzer/');
          return null;
        }}
      </Route>
      <Route path="/pvr-significance-calculator">
        {() => {
          window.location.replace('/bph-luts-tools/post-void-residual-calculator/');
          return null;
        }}
      </Route>
      <Route path="/psa-velocity" component={PSACalculators} />
      <Route path="/psa-doubling-time" component={PSACalculators} />
      <Route path="/free-psa-ratio" component={PSACalculators} />
      
      {/* Educational Content Routes */}
      <Route path="/education" component={Education} />
      <Route path="/bph-education" component={Education} />
      <Route path="/medical-education" component={Education} />
      <Route path="/clinical-education" component={Education} />
      
      {/* FAQ and Support Routes */}
      <Route path="/faq" component={FAQPage} />
      <Route path="/medical-faq" component={FAQPage} />
      <Route path="/frequently-asked-questions" component={FAQPage} />
      
      {/* Clinical Resources Routes */}
      <Route path="/resources" component={Resources} />
      <Route path="/clinical-resources" component={Resources} />
      <Route path="/medical-resources" component={Resources} />
      <Route path="/guidelines" component={Resources} />
      <Route path="/clinical-guidelines" component={Resources} />
      
      {/* Blog and Content Routes */}
      <Route path="/blog" component={Blog} />
      <Route path="/articles" component={Blog} />
      <Route path="/medical-blog" component={Blog} />
      <Route path="/clinical-articles" component={Blog} />
      
      {/* Case Studies Routes */}
      <Route path="/case-studies" component={CaseStudy} />
      <Route path="/casestudy" component={CaseStudy} />
      <Route path="/clinical-cases" component={CaseStudy} />
      <Route path="/case-study" component={CaseStudy} />
      
      {/* SEO-friendly redirects to canonical URLs */}
      <Route path="/prostate-volume-measurement">
        {() => {
          window.location.replace('/');
          return null;
        }}
      </Route>
      <Route path="/bph-volume-calculator">
        {() => {
          window.location.replace('/');
          return null;
        }}
      </Route>
      <Route path="/transrectal-ultrasound-volume">
        {() => {
          window.location.replace('/');
          return null;
        }}
      </Route>
      <Route path="/psa-density">
        {() => {
          window.location.replace('/psa-calculators/psa-density-calculator/');
          return null;
        }}
      </Route>
      <Route path="/prostate-specific-antigen-density">
        {() => {
          window.location.replace('/psa-calculators/psa-density-calculator/');
          return null;
        }}
      </Route>
      <Route path="/ipss-questionnaire">
        {() => {
          window.location.replace('/bph-luts-tools/ipss-questionnaire/');
          return null;
        }}
      </Route>
      <Route path="/international-prostate-symptom-score">
        {() => {
          window.location.replace('/bph-luts-tools/ipss-questionnaire/');
          return null;
        }}
      </Route>
      <Route path="/bph-treatment-options">
        {() => {
          window.location.replace('/tools/');
          return null;
        }}
      </Route>
      <Route path="/benign-prostatic-hyperplasia">
        {() => {
          window.location.replace('/education/understanding-bph/');
          return null;
        }}
      </Route>
      <Route path="/lower-urinary-tract-symptoms">
        {() => {
          window.location.replace('/education/understanding-bph/');
          return null;
        }}
      </Route>
      
      {/* Core Website Pages */}
      <Route path="/about" component={About} />
      <Route path="/about-us" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/contact-us" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/medical-disclaimer" component={Disclaimer} />

      {/* 404 Not Found */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
