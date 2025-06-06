import { useEffect } from 'react';

// CSS optimization utilities to reduce unused CSS and fix render-blocking resources
export const useCSSOptimization = () => {
  useEffect(() => {
    // Remove unused CSS rules
    const removeUnusedCSS = () => {
      const stylesheets = Array.from(document.styleSheets);
      const usedSelectors = new Set<string>();
      
      // First pass: collect all used selectors
      const collectUsedSelectors = () => {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
          // Add class-based selectors
          if (element.className) {
            const classes = element.className.split(' ');
            classes.forEach(cls => {
              if (cls.trim()) {
                usedSelectors.add(`.${cls.trim()}`);
              }
            });
          }
          
          // Add ID-based selectors
          if (element.id) {
            usedSelectors.add(`#${element.id}`);
          }
          
          // Add tag-based selectors
          usedSelectors.add(element.tagName.toLowerCase());
        });
        
        // Add pseudo-class selectors that are commonly used
        const commonPseudos = [':hover', ':focus', ':active', ':visited', ':disabled'];
        const baseSelectors = Array.from(usedSelectors);
        baseSelectors.forEach(selector => {
          commonPseudos.forEach(pseudo => {
            usedSelectors.add(selector + pseudo);
          });
        });
      };
      
      collectUsedSelectors();
      
      // Second pass: remove unused rules
      stylesheets.forEach(stylesheet => {
        try {
          if (stylesheet.href && !stylesheet.href.includes(window.location.origin)) {
            return; // Skip external stylesheets
          }
          
          const rules = Array.from(stylesheet.cssRules || []);
          const rulesToRemove: number[] = [];
          
          rules.forEach((rule, index) => {
            if (rule.type === CSSRule.STYLE_RULE) {
              const styleRule = rule as CSSStyleRule;
              const selector = styleRule.selectorText;
              
              // Check if selector is used
              const isUsed = Array.from(usedSelectors).some(usedSelector => {
                return selector.includes(usedSelector) || 
                       usedSelector.includes(selector) ||
                       selector.match(new RegExp(usedSelector.replace(/\./g, '\\.')));
              });
              
              if (!isUsed && !selector.includes('@') && !selector.includes('keyframes')) {
                rulesToRemove.push(index);
              }
            }
          });
          
          // Remove unused rules (in reverse order to maintain indices)
          rulesToRemove.reverse().forEach(index => {
            try {
              stylesheet.deleteRule(index);
            } catch (e) {
              // Ignore errors for protected rules
            }
          });
          
        } catch (e) {
          // Skip stylesheets that can't be accessed (CORS)
        }
      });
    };
    
    // Defer non-critical CSS
    const deferNonCriticalCSS = () => {
      const criticalSelectors = [
        'body', 'html', 'header', 'nav', 'main', 'footer',
        '.hero-section', '.calculator-card', '.btn-primary',
        '.loading-skeleton', '.error-message'
      ];
      
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(stylesheet => {
        try {
          const rules = Array.from(stylesheet.cssRules || []);
          const criticalRules: string[] = [];
          const nonCriticalRules: string[] = [];
          
          rules.forEach(rule => {
            if (rule.type === CSSRule.STYLE_RULE) {
              const styleRule = rule as CSSStyleRule;
              const selector = styleRule.selectorText;
              
              const isCritical = criticalSelectors.some(criticalSelector => 
                selector.includes(criticalSelector)
              );
              
              if (isCritical) {
                criticalRules.push(rule.cssText);
              } else {
                nonCriticalRules.push(rule.cssText);
              }
            }
          });
          
          // If we have non-critical rules, defer them
          if (nonCriticalRules.length > 0) {
            const deferredStyle = document.createElement('style');
            deferredStyle.textContent = nonCriticalRules.join('\n');
            
            // Add deferred styles after page load
            if (document.readyState === 'complete') {
              document.head.appendChild(deferredStyle);
            } else {
              window.addEventListener('load', () => {
                document.head.appendChild(deferredStyle);
              });
            }
          }
          
        } catch (e) {
          // Skip protected stylesheets
        }
      });
    };
    
    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontLinks = document.querySelectorAll('link[href*="font"]');
      fontLinks.forEach(link => {
        const linkElement = link as HTMLLinkElement;
        if (!linkElement.rel.includes('preload')) {
          linkElement.rel = 'preload';
          linkElement.as = 'font';
          linkElement.crossOrigin = 'anonymous';
        }
      });
      
      // Add font-display: swap to existing font-face rules
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(stylesheet => {
        try {
          const rules = Array.from(stylesheet.cssRules || []);
          rules.forEach(rule => {
            if (rule.type === CSSRule.FONT_FACE_RULE) {
              const fontFaceRule = rule as CSSFontFaceRule;
              if (!fontFaceRule.style.fontDisplay) {
                fontFaceRule.style.fontDisplay = 'swap';
              }
            }
          });
        } catch (e) {
          // Skip protected stylesheets
        }
      });
    };
    
    // Execute optimizations
    const runOptimizations = () => {
      removeUnusedCSS();
      deferNonCriticalCSS();
      optimizeFontLoading();
    };
    
    // Run after initial load
    if (document.readyState === 'complete') {
      setTimeout(runOptimizations, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(runOptimizations, 1000);
      });
    }
    
    // Monitor for new CSS additions
    const observer = new MutationObserver(mutations => {
      let hasNewStyles = false;
      
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'STYLE' || element.tagName === 'LINK') {
              hasNewStyles = true;
            }
          }
        });
      });
      
      if (hasNewStyles) {
        setTimeout(runOptimizations, 500);
      }
    });
    
    observer.observe(document.head, {
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, []);
};

// Component to monitor CSS performance
export const CSSMetrics = () => {
  useEffect(() => {
    const analyzeCSSPerformance = () => {
      const stylesheets = Array.from(document.styleSheets);
      let totalRules = 0;
      let unusedRules = 0;
      
      const usedSelectors = new Set<string>();
      const elements = document.querySelectorAll('*');
      
      elements.forEach(element => {
        if (element.className) {
          element.className.split(' ').forEach(cls => {
            if (cls.trim()) usedSelectors.add(`.${cls.trim()}`);
          });
        }
        if (element.id) usedSelectors.add(`#${element.id}`);
        usedSelectors.add(element.tagName.toLowerCase());
      });
      
      stylesheets.forEach(stylesheet => {
        try {
          const rules = Array.from(stylesheet.cssRules || []);
          totalRules += rules.length;
          
          rules.forEach(rule => {
            if (rule.type === CSSRule.STYLE_RULE) {
              const styleRule = rule as CSSStyleRule;
              const selector = styleRule.selectorText;
              
              const isUsed = Array.from(usedSelectors).some(usedSelector => 
                selector.includes(usedSelector)
              );
              
              if (!isUsed) unusedRules++;
            }
          });
        } catch (e) {
          // Skip protected stylesheets
        }
      });
      
      const unusedPercentage = Math.round((unusedRules / totalRules) * 100);
      
      console.group('CSS Performance Metrics');
      console.log(`Total CSS Rules: ${totalRules}`);
      console.log(`Unused Rules: ${unusedRules} (${unusedPercentage}%)`);
      
      if (unusedPercentage > 20) {
        console.warn('High percentage of unused CSS detected');
      }
      
      console.groupEnd();
    };
    
    setTimeout(analyzeCSSPerformance, 3000);
  }, []);
  
  return null;
};

export default useCSSOptimization;