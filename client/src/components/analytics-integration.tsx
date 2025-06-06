import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface AnalyticsIntegrationProps {
  pageType: 'homepage' | 'calculator' | 'educational' | 'blog';
  contentGroup: string;
  userType?: 'healthcare_professional' | 'patient' | 'student' | 'researcher';
}

export default function AnalyticsIntegration({ 
  pageType, 
  contentGroup, 
  userType = 'patient' 
}: AnalyticsIntegrationProps) {
  const [location] = useLocation();

  useEffect(() => {
    // Enhanced Google Analytics 4 tracking
    const trackPageView = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
          content_group1: contentGroup,
          content_group2: pageType,
          content_group3: userType,
          custom_map: {
            custom_parameter_1: 'medical_specialty',
            custom_parameter_2: 'calculation_type',
            custom_parameter_3: 'evidence_level'
          }
        });

        // Track medical-specific events
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          content_group1: contentGroup,
          medical_specialty: 'urology',
          calculation_type: pageType === 'calculator' ? 'prostate_volume' : 'educational',
          evidence_level: 'peer_reviewed',
          user_type: userType
        });
      }
    };

    // Core Web Vitals tracking
    const trackCoreWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'core_web_vitals', {
                metric_name: 'LCP',
                metric_value: Math.round(entry.startTime),
                metric_rating: entry.startTime < 2500 ? 'good' : entry.startTime < 4000 ? 'needs_improvement' : 'poor'
              });
            }
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'core_web_vitals', {
                metric_name: 'FID',
                metric_value: Math.round(entry.processingStart - entry.startTime),
                metric_rating: entry.processingStart - entry.startTime < 100 ? 'good' : 
                             entry.processingStart - entry.startTime < 300 ? 'needs_improvement' : 'poor'
              });
            }
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          if (typeof window !== 'undefined' && (window as any).gtag && clsValue > 0) {
            (window as any).gtag('event', 'core_web_vitals', {
              metric_name: 'CLS',
              metric_value: Math.round(clsValue * 1000) / 1000,
              metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
            });
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Medical engagement tracking
    const trackMedicalEngagement = () => {
      // Track time spent on medical content
      const startTime = Date.now();
      
      const handleUnload = () => {
        const timeSpent = Date.now() - startTime;
        if (typeof window !== 'undefined' && (window as any).gtag && timeSpent > 10000) {
          (window as any).gtag('event', 'medical_engagement', {
            engagement_time: Math.round(timeSpent / 1000),
            content_type: pageType,
            medical_specialty: 'urology',
            user_type: userType
          });
        }
      };

      window.addEventListener('beforeunload', handleUnload);
      return () => window.removeEventListener('beforeunload', handleUnload);
    };

    // Enhanced error tracking for medical applications
    const trackErrors = () => {
      const handleError = (event: ErrorEvent) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: event.error?.toString() || 'Unknown error',
            fatal: false,
            page_type: pageType,
            medical_tool: 'prostate_calculator'
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'exception', {
            description: event.reason?.toString() || 'Unhandled promise rejection',
            fatal: false,
            page_type: pageType,
            medical_tool: 'prostate_calculator'
          });
        }
      };

      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    };

    trackPageView();
    trackCoreWebVitals();
    const cleanupEngagement = trackMedicalEngagement();
    const cleanupErrors = trackErrors();

    return () => {
      cleanupEngagement();
      cleanupErrors();
    };
  }, [location, pageType, contentGroup, userType]);

  // Track calculator usage
  useEffect(() => {
    if (pageType === 'calculator') {
      const trackCalculatorInteraction = (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'BUTTON') {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'calculator_interaction', {
              interaction_type: target.tagName.toLowerCase(),
              element_id: target.id || 'unknown',
              calculator_type: 'prostate_volume',
              user_type: userType
            });
          }
        }
      };

      document.addEventListener('click', trackCalculatorInteraction);
      document.addEventListener('input', trackCalculatorInteraction);

      return () => {
        document.removeEventListener('click', trackCalculatorInteraction);
        document.removeEventListener('input', trackCalculatorInteraction);
      };
    }
  }, [pageType, userType]);

  return null;
}