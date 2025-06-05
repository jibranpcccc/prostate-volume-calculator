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
import NotFound from "@/pages/not-found";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/calculator" component={Home} />
      <Route path="/prostate-volume-calculator" component={Home} />
      <Route path="/tools" component={AdvancedTools} />
      <Route path="/advanced-tools" component={AdvancedTools} />
      <Route path="/psa-density-calculator" component={AdvancedTools} />
      <Route path="/ipss-assessment" component={AdvancedTools} />
      <Route path="/treatment-decision-guide" component={AdvancedTools} />
      <Route path="/bph-assessment-tools" component={AdvancedTools} />
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
