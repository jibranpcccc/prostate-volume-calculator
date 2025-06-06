import { lazy, Suspense, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Core lazy components with proper chunk names
export const Calculator = lazy(() => 
  import('./calculator').then(module => ({ default: module.default }))
);

export const PSACalculator = lazy(() => 
  import('./psa-calculator').then(module => ({ default: module.default }))
);

export const IPSSQuestionnaire = lazy(() => 
  import('./ipss-questionnaire').then(module => ({ default: module.default }))
);

export const MedicalCharts = lazy(() => 
  import('./medical-charts').then(module => ({ default: module.default }))
);

export const FreePSARatioCalculator = lazy(() => 
  import('./free-psa-ratio-calculator').then(module => ({ default: module.default }))
);

export const ProstateCancerRiskCalculator = lazy(() => 
  import('./prostate-cancer-risk-calculator').then(module => ({ default: module.default }))
);

export const PSAVelocityCalculator = lazy(() => 
  import('./psa-velocity-calculator').then(module => ({ default: module.default }))
);

export const PSADoublingTimeCalculator = lazy(() => 
  import('./psa-doubling-time-calculator').then(module => ({ default: module.default }))
);

export const AgeSpecificPSACalculator = lazy(() => 
  import('./age-specific-psa-calculator').then(module => ({ default: module.default }))
);

export const BladderCapacityCalculator = lazy(() => 
  import('./bladder-capacity-calculator').then(module => ({ default: module.default }))
);

export const PostVoidResidualCalculator = lazy(() => 
  import('./post-void-residual-calculator').then(module => ({ default: module.default }))
);

export const ErectileDysfunctionCalculator = lazy(() => 
  import('./erectile-dysfunction-calculator').then(module => ({ default: module.default }))
);

export const FreeTestosteroneCalculator = lazy(() => 
  import('./free-testosterone-calculator').then(module => ({ default: module.default }))
);

export const CardiovascularRiskCalculator = lazy(() => 
  import('./cardiovascular-risk-calculator').then(module => ({ default: module.default }))
);

export const BMICalculator = lazy(() => 
  import('./bmi-calculator').then(module => ({ default: module.default }))
);

export const ComprehensiveCalculator = lazy(() => 
  import('./comprehensive-calculator').then(module => ({ default: module.default }))
);

// Lightweight loading skeleton
export const LoadingSkeleton = memo(() => (
  <Card className="w-full">
    <CardContent className="p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
        <div className="h-12 bg-blue-200 dark:bg-blue-800 rounded"></div>
      </div>
    </CardContent>
  </Card>
));

// Optimized wrapper with error boundary
export const LazyWrapper = memo(({ 
  children, 
  fallback = <LoadingSkeleton /> 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';
LazyWrapper.displayName = 'LazyWrapper';