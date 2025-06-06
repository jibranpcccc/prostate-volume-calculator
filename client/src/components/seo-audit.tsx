import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";

interface SEOIssue {
  type: 'error' | 'warning' | 'success';
  category: string;
  message: string;
  element?: string;
}

export default function SEOAudit() {
  const [location] = useLocation();
  const [issues, setIssues] = useState<SEOIssue[]>([]);

  useEffect(() => {
    const auditPage = () => {
      const foundIssues: SEOIssue[] = [];

      // Check title tag
      const titleElement = document.querySelector('title');
      if (!titleElement || !titleElement.textContent) {
        foundIssues.push({
          type: 'error',
          category: 'Title Tag',
          message: 'Missing title tag',
          element: 'title'
        });
      } else {
        const titleLength = titleElement.textContent.length;
        if (titleLength < 30) {
          foundIssues.push({
            type: 'warning',
            category: 'Title Tag',
            message: `Title too short (${titleLength} chars). Recommended: 50-60 characters.`,
            element: 'title'
          });
        } else if (titleLength > 60) {
          foundIssues.push({
            type: 'warning',
            category: 'Title Tag',
            message: `Title too long (${titleLength} chars). Recommended: 50-60 characters.`,
            element: 'title'
          });
        } else {
          foundIssues.push({
            type: 'success',
            category: 'Title Tag',
            message: `Title length optimal (${titleLength} chars)`,
            element: 'title'
          });
        }
      }

      // Check meta description
      const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription || !metaDescription.content) {
        foundIssues.push({
          type: 'error',
          category: 'Meta Description',
          message: 'Missing meta description',
          element: 'meta[name="description"]'
        });
      } else {
        const descLength = metaDescription.content.length;
        if (descLength < 120) {
          foundIssues.push({
            type: 'warning',
            category: 'Meta Description',
            message: `Description too short (${descLength} chars). Recommended: 140-160 characters.`,
            element: 'meta[name="description"]'
          });
        } else if (descLength > 160) {
          foundIssues.push({
            type: 'warning',
            category: 'Meta Description',
            message: `Description too long (${descLength} chars). Recommended: 140-160 characters.`,
            element: 'meta[name="description"]'
          });
        } else {
          foundIssues.push({
            type: 'success',
            category: 'Meta Description',
            message: `Description length optimal (${descLength} chars)`,
            element: 'meta[name="description"]'
          });
        }
      }

      // Check H1 tag
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length === 0) {
        foundIssues.push({
          type: 'error',
          category: 'Heading Structure',
          message: 'Missing H1 tag',
          element: 'h1'
        });
      } else if (h1Elements.length > 1) {
        foundIssues.push({
          type: 'warning',
          category: 'Heading Structure',
          message: `Multiple H1 tags found (${h1Elements.length}). Should have only one H1 per page.`,
          element: 'h1'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Heading Structure',
          message: 'Single H1 tag found',
          element: 'h1'
        });
      }

      // Check heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let previousLevel = 0;
      let hierarchyValid = true;
      
      headings.forEach((heading) => {
        const currentLevel = parseInt(heading.tagName.substring(1));
        if (currentLevel > previousLevel + 1 && previousLevel !== 0) {
          hierarchyValid = false;
        }
        previousLevel = currentLevel;
      });

      if (!hierarchyValid) {
        foundIssues.push({
          type: 'warning',
          category: 'Heading Structure',
          message: 'Heading hierarchy has gaps (e.g., H1 directly to H3)',
          element: 'headings'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Heading Structure',
          message: 'Proper heading hierarchy maintained',
          element: 'headings'
        });
      }

      // Check canonical tag
      const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink || !canonicalLink.href) {
        foundIssues.push({
          type: 'error',
          category: 'Canonical Tag',
          message: 'Missing canonical URL',
          element: 'link[rel="canonical"]'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Canonical Tag',
          message: 'Canonical URL present',
          element: 'link[rel="canonical"]'
        });
      }

      // Check Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      
      if (!ogTitle || !ogDescription || !ogImage) {
        foundIssues.push({
          type: 'warning',
          category: 'Open Graph',
          message: 'Missing Open Graph tags for social media',
          element: 'meta[property^="og:"]'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Open Graph',
          message: 'Open Graph tags present',
          element: 'meta[property^="og:"]'
        });
      }

      // Check images for alt text
      const images = document.querySelectorAll('img');
      let imagesWithoutAlt = 0;
      images.forEach((img) => {
        if (!img.alt || img.alt.trim() === '') {
          imagesWithoutAlt++;
        }
      });

      if (imagesWithoutAlt > 0) {
        foundIssues.push({
          type: 'warning',
          category: 'Image Optimization',
          message: `${imagesWithoutAlt} images missing alt text`,
          element: 'img'
        });
      } else if (images.length > 0) {
        foundIssues.push({
          type: 'success',
          category: 'Image Optimization',
          message: 'All images have alt text',
          element: 'img'
        });
      }

      // Check structured data
      const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
      if (structuredDataScripts.length === 0) {
        foundIssues.push({
          type: 'error',
          category: 'Structured Data',
          message: 'No structured data found',
          element: 'script[type="application/ld+json"]'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Structured Data',
          message: `${structuredDataScripts.length} structured data blocks found`,
          element: 'script[type="application/ld+json"]'
        });
      }

      // Check internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
      let brokenInternalLinks = 0;
      
      internalLinks.forEach((link) => {
        const href = (link as HTMLAnchorElement).href;
        if (!href || href === location) {
          brokenInternalLinks++;
        }
      });

      if (brokenInternalLinks > 0) {
        foundIssues.push({
          type: 'warning',
          category: 'Internal Linking',
          message: `${brokenInternalLinks} potentially broken internal links`,
          element: 'a'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Internal Linking',
          message: 'Internal links structure appears healthy',
          element: 'a'
        });
      }

      // Check mobile responsiveness
      const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
      if (!viewport || !viewport.content.includes('width=device-width')) {
        foundIssues.push({
          type: 'error',
          category: 'Mobile Responsiveness',
          message: 'Missing or incorrect viewport meta tag',
          element: 'meta[name="viewport"]'
        });
      } else {
        foundIssues.push({
          type: 'success',
          category: 'Mobile Responsiveness',
          message: 'Viewport meta tag correctly configured',
          element: 'meta[name="viewport"]'
        });
      }

      setIssues(foundIssues);
    };

    // Run audit after a short delay to allow DOM to be fully rendered
    const timer = setTimeout(auditPage, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const getIssueIcon = (type: 'error' | 'warning' | 'success') => {
    switch (type) {
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
  };

  const getIssueColor = (type: 'error' | 'warning' | 'success') => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'success':
        return 'bg-green-50 border-green-200';
    }
  };

  const errorCount = issues.filter(issue => issue.type === 'error').length;
  const warningCount = issues.filter(issue => issue.type === 'warning').length;
  const successCount = issues.filter(issue => issue.type === 'success').length;

  // Only show in development environment
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <Card className="mt-8 bg-gray-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          SEO Audit Results
          <div className="flex gap-2 ml-auto">
            <Badge variant="destructive">{errorCount} Errors</Badge>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">{warningCount} Warnings</Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">{successCount} Passed</Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {issues.map((issue, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border ${getIssueColor(issue.type)}`}
            >
              <div className="flex items-start gap-3">
                {getIssueIcon(issue.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{issue.category}</span>
                    {issue.element && (
                      <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">
                        {issue.element}
                      </code>
                    )}
                  </div>
                  <p className="text-sm text-gray-700">{issue.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}