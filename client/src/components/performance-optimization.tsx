import { Suspense, lazy, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Lazy loading components for better performance
export const LazyCalculator = lazy(() => import('./calculator'));
export const LazyPSACalculator = lazy(() => import('./psa-calculator'));
export const LazyIPSSQuestionnaire = lazy(() => import('./ipss-questionnaire'));
export const LazyTreatmentGuide = lazy(() => import('./treatment-guide'));
export const LazyMedicalCharts = lazy(() => import('./medical-charts'));

// Loading skeleton component
export const CalculatorSkeleton = memo(() => (
  <Card className="animate-pulse">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-12 bg-blue-200 rounded"></div>
      </div>
    </CardContent>
  </Card>
));

// Optimized component wrapper with error boundary
export const OptimizedCalculatorWrapper = memo(({ children, fallback }: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback || <CalculatorSkeleton />}>
    {children}
  </Suspense>
));

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const trackCalculationTime = (calculatorType: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Track performance metrics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculation_performance', {
        event_category: 'performance',
        event_label: calculatorType,
        value: Math.round(duration)
      });
    }
  };

  const trackUserInteraction = (action: string, element: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_interaction', {
        event_category: 'engagement',
        event_label: `${action}_${element}`,
        value: 1
      });
    }
  };

  return { trackCalculationTime, trackUserInteraction };
};

// Image optimization component
export const OptimizedImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = "" 
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    loading="lazy"
    decoding="async"
    style={{ 
      aspectRatio: width && height ? `${width}/${height}` : undefined 
    }}
  />
));

CalculatorSkeleton.displayName = 'CalculatorSkeleton';
OptimizedCalculatorWrapper.displayName = 'OptimizedCalculatorWrapper';
OptimizedImage.displayName = 'OptimizedImage';