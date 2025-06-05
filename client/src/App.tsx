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
import NotFound from "@/pages/not-found";

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
      
      {/* SEO-friendly specific tool routes */}
      <Route path="/prostate-volume-measurement" component={Home} />
      <Route path="/bph-volume-calculator" component={Home} />
      <Route path="/transrectal-ultrasound-volume" component={Home} />
      <Route path="/psa-density" component={AdvancedTools} />
      <Route path="/prostate-specific-antigen-density" component={AdvancedTools} />
      <Route path="/international-prostate-symptom-score" component={AdvancedTools} />
      <Route path="/bph-treatment-options" component={AdvancedTools} />
      <Route path="/benign-prostatic-hyperplasia" component={Education} />
      <Route path="/lower-urinary-tract-symptoms" component={Education} />
      
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
