import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Clock, Zap, Eye } from "lucide-react";

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  domContentLoaded?: number;
  loadComplete?: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      // Basic timing metrics
      const basicMetrics: PerformanceMetrics = {
        ttfb: navigation.responseStart - navigation.requestStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        loadComplete: navigation.loadEventEnd - navigation.navigationStart,
      };

      // Web Vitals using PerformanceObserver
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            basicMetrics.lcp = lastEntry.startTime;
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.debug('LCP measurement not available');
        }

        // First Contentful Paint (FCP)
        try {
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint') as any;
            if (fcpEntry) {
              basicMetrics.fcp = fcpEntry.startTime;
              setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
            }
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.debug('FCP measurement not available');
        }

        // Cumulative Layout Shift (CLS)
        try {
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            basicMetrics.cls = clsValue;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.debug('CLS measurement not available');
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            basicMetrics.fid = lastEntry.processingStart - lastEntry.startTime;
            setMetrics(prev => ({ ...prev, fid: lastEntry.processingStart - lastEntry.startTime }));
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.debug('FID measurement not available');
        }
      }

      setMetrics(basicMetrics);
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Show monitor only in development or when explicitly enabled
    setIsVisible(process.env.NODE_ENV === 'development' || localStorage.getItem('show-performance') === 'true');

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getScoreColor = (value: number, thresholds: { good: number; needs_improvement: number }) => {
    if (value <= thresholds.good) return 'bg-green-100 text-green-800';
    if (value <= thresholds.needs_improvement) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getScoreLabel = (value: number, thresholds: { good: number; needs_improvement: number }) => {
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needs_improvement) return 'Needs Improvement';
    return 'Poor';
  };

  const formatTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  };

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-lg z-50 bg-white border-2">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <Activity className="w-4 h-4" />
          Performance Monitor
          <button
            onClick={() => setIsVisible(false)}
            className="ml-auto text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3 text-xs">
          {/* Core Web Vitals */}
          {metrics.lcp && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Eye className="w-3 h-3" />
                <span>LCP</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatTime(metrics.lcp)}</span>
                <Badge className={getScoreColor(metrics.lcp, { good: 2500, needs_improvement: 4000 })}>
                  {getScoreLabel(metrics.lcp, { good: 2500, needs_improvement: 4000 })}
                </Badge>
              </div>
            </div>
          )}

          {metrics.fcp && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3" />
                <span>FCP</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatTime(metrics.fcp)}</span>
                <Badge className={getScoreColor(metrics.fcp, { good: 1800, needs_improvement: 3000 })}>
                  {getScoreLabel(metrics.fcp, { good: 1800, needs_improvement: 3000 })}
                </Badge>
              </div>
            </div>
          )}

          {metrics.cls !== undefined && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3" />
                <span>CLS</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{metrics.cls.toFixed(3)}</span>
                <Badge className={getScoreColor(metrics.cls, { good: 0.1, needs_improvement: 0.25 })}>
                  {getScoreLabel(metrics.cls, { good: 0.1, needs_improvement: 0.25 })}
                </Badge>
              </div>
            </div>
          )}

          {metrics.fid && (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>FID</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{formatTime(metrics.fid)}</span>
                <Badge className={getScoreColor(metrics.fid, { good: 100, needs_improvement: 300 })}>
                  {getScoreLabel(metrics.fid, { good: 100, needs_improvement: 300 })}
                </Badge>
              </div>
            </div>
          )}

          {/* Additional Metrics */}
          <div className="border-t pt-2 space-y-2">
            {metrics.ttfb && (
              <div className="flex justify-between">
                <span>TTFB</span>
                <span>{formatTime(metrics.ttfb)}</span>
              </div>
            )}
            {metrics.domContentLoaded && (
              <div className="flex justify-between">
                <span>DOM Ready</span>
                <span>{formatTime(metrics.domContentLoaded)}</span>
              </div>
            )}
            {metrics.loadComplete && (
              <div className="flex justify-between">
                <span>Load Complete</span>
                <span>{formatTime(metrics.loadComplete)}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}