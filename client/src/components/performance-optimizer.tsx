import { useEffect, lazy, Suspense } from 'react';
import { LoadingSkeleton } from './lazy-components';

// Dynamic imports with proper chunk names
const loadComponent = (componentName: string) => {
  const componentMap = {
    calculator: () => import('./calculator'),
    psaCalculator: () => import('./psa-calculator'),
    ipssQuestionnaire: () => import('./ipss-questionnaire'),
    medicalCharts: () => import('./medical-charts'),
    freePsaRatio: () => import('./free-psa-ratio-calculator'),
    prostateCancerRisk: () => import('./prostate-cancer-risk-calculator'),
    psaVelocity: () => import('./psa-velocity-calculator'),
    psaDoublingTime: () => import('./psa-doubling-time-calculator'),
    ageSpecificPsa: () => import('./age-specific-psa-calculator'),
    bladderCapacity: () => import('./bladder-capacity-calculator'),
    postVoidResidual: () => import('./post-void-residual-calculator'),
    erectileDysfunction: () => import('./erectile-dysfunction-calculator'),
    freeTestosterone: () => import('./free-testosterone-calculator'),
    cardiovascularRisk: () => import('./cardiovascular-risk-calculator'),
    bmiCalculator: () => import('./bmi-calculator'),
    comprehensive: () => import('./comprehensive-calculator')
  };

  return componentMap[componentName as keyof typeof componentMap];
};

// Performance optimization hooks
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload core fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      fontLink.href = '/fonts/inter-var.woff2';
      document.head.appendChild(fontLink);

      // Prefetch likely next pages
      const prefetchLinks = ['/calculator', '/psa-calculator', '/educational'];
      prefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Optimize JavaScript execution
    const optimizeJavaScript = () => {
      // Remove unused event listeners
      const removeUnusedListeners = () => {
        // Clean up any orphaned event listeners
        document.removeEventListener('scroll', () => {});
        document.removeEventListener('resize', () => {});
      };

      // Debounce scroll and resize events
      let scrollTimeout: NodeJS.Timeout;
      let resizeTimeout: NodeJS.Timeout;

      const optimizedScrollHandler = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Actual scroll logic here
        }, 16); // 60fps
      };

      const optimizedResizeHandler = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          // Actual resize logic here
        }, 250);
      };

      document.addEventListener('scroll', optimizedScrollHandler, { passive: true });
      window.addEventListener('resize', optimizedResizeHandler, { passive: true });

      return () => {
        removeUnusedListeners();
        clearTimeout(scrollTimeout);
        clearTimeout(resizeTimeout);
      };
    };

    // Initialize performance monitoring
    const initPerformanceMonitoring = () => {
      if ('PerformanceObserver' in window) {
        // Monitor Long Tasks
        try {
          const longTaskObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.duration > 50) {
                console.warn(`Long task detected: ${entry.duration}ms`);
              }
            });
          });
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          console.debug('Long task monitoring not available');
        }

        // Monitor Layout Shifts
        try {
          const clsObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry: any) => {
              if (entry.value > 0.1) {
                console.warn(`Layout shift detected: ${entry.value}`);
              }
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.debug('Layout shift monitoring not available');
        }
      }
    };

    preloadResources();
    const cleanupJS = optimizeJavaScript();
    initPerformanceMonitoring();

    return cleanupJS;
  }, []);
};

// Lazy component wrapper with error boundary
export const LazyComponent = ({ 
  componentName, 
  fallback = <LoadingSkeleton /> 
}: { 
  componentName: string;
  fallback?: React.ReactNode;
}) => {
  const Component = lazy(loadComponent(componentName));
  
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

// DOM optimization utilities
export const optimizeDOM = () => {
  // Remove unused CSS classes
  const removeUnusedCSS = () => {
    const stylesheets = Array.from(document.styleSheets);
    stylesheets.forEach(stylesheet => {
      try {
        const rules = Array.from(stylesheet.cssRules || []);
        rules.forEach((rule, index) => {
          if (rule.type === CSSRule.STYLE_RULE) {
            const styleRule = rule as CSSStyleRule;
            const selector = styleRule.selectorText;
            
            // Check if selector is used in DOM
            if (!document.querySelector(selector)) {
              stylesheet.deleteRule(index);
            }
          }
        });
      } catch (e) {
        // Skip cross-origin stylesheets
      }
    });
  };

  // Optimize images
  const optimizeImages = () => {
    const images = document.querySelectorAll('img[src*="unsplash.com"]');
    images.forEach(img => {
      const image = img as HTMLImageElement;
      const rect = image.getBoundingClientRect();
      
      if (rect.width > 0 && rect.height > 0) {
        const url = new URL(image.src);
        url.searchParams.set('w', Math.ceil(rect.width).toString());
        url.searchParams.set('h', Math.ceil(rect.height).toString());
        url.searchParams.set('fm', 'webp');
        url.searchParams.set('q', '75');
        
        if (image.src !== url.toString()) {
          image.src = url.toString();
        }
      }
    });
  };

  // Reduce DOM depth
  const reduceDOMDepth = () => {
    const deepElements = document.querySelectorAll('*');
    deepElements.forEach(element => {
      let depth = 0;
      let parent = element.parentElement;
      
      while (parent) {
        depth++;
        parent = parent.parentElement;
      }
      
      if (depth > 15) {
        console.warn(`Deep DOM element detected at depth ${depth}:`, element);
      }
    });
  };

  return {
    removeUnusedCSS,
    optimizeImages,
    reduceDOMDepth
  };
};

// Bundle size optimization
export const optimizeBundleSize = () => {
  // Tree-shake unused imports
  const treeShakeImports = () => {
    // This would be handled by the bundler, but we can provide hints
    const unusedModules = [
      'lodash', // Use native methods instead
      'moment', // Use date-fns instead
      'jquery' // Use native DOM methods
    ];
    
    unusedModules.forEach(module => {
      console.warn(`Consider removing unused module: ${module}`);
    });
  };

  // Lazy load non-critical modules
  const lazyLoadModules = async () => {
    // Load analytics only when needed
    if (typeof window !== 'undefined' && !window.gtag && import.meta.env.VITE_GA_MEASUREMENT_ID) {
      try {
        // Dynamically load Google Analytics
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        const gtag = function(...args: any[]) {
          window.dataLayer.push(arguments);
        };
        gtag('js', new Date());
        gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID);
        window.gtag = gtag;
      } catch (e) {
        console.debug('Analytics loading failed');
      }
    }
  };

  return {
    treeShakeImports,
    lazyLoadModules
  };
};