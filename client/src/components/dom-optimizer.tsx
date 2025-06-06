import { useEffect, useCallback } from 'react';

// DOM optimization utilities to reduce excessive DOM size
export const useDOMOptimization = () => {
  const optimizeDOM = useCallback(() => {
    // Remove unnecessary wrapper divs
    const removeRedundantWrappers = () => {
      const wrappers = document.querySelectorAll('div');
      wrappers.forEach(wrapper => {
        if (wrapper.children.length === 1 && 
            wrapper.children[0].tagName === 'DIV' &&
            !wrapper.className &&
            !wrapper.id) {
          const child = wrapper.children[0] as HTMLElement;
          wrapper.parentNode?.replaceChild(child, wrapper);
        }
      });
    };

    // Consolidate similar adjacent elements
    const consolidateElements = () => {
      const containers = document.querySelectorAll('.space-y-1, .space-y-2, .space-y-3');
      containers.forEach(container => {
        const children = Array.from(container.children);
        const groups: HTMLElement[][] = [];
        let currentGroup: HTMLElement[] = [];
        
        children.forEach(child => {
          if (child.tagName === 'DIV' && child.className === children[0]?.className) {
            currentGroup.push(child as HTMLElement);
          } else {
            if (currentGroup.length > 1) {
              groups.push(currentGroup);
            }
            currentGroup = [child as HTMLElement];
          }
        });
        
        if (currentGroup.length > 1) {
          groups.push(currentGroup);
        }
        
        groups.forEach(group => {
          if (group.length > 2) {
            const consolidatedContent = group.map(el => el.innerHTML).join('');
            const newElement = document.createElement('div');
            newElement.className = group[0].className;
            newElement.innerHTML = consolidatedContent;
            
            group[0].parentNode?.insertBefore(newElement, group[0]);
            group.forEach(el => el.remove());
          }
        });
      });
    };

    // Flatten deeply nested structures
    const flattenDeepNesting = () => {
      const deepElements = document.querySelectorAll('*');
      deepElements.forEach(element => {
        let depth = 0;
        let parent = element.parentElement;
        
        while (parent) {
          depth++;
          parent = parent.parentElement;
        }
        
        if (depth > 12) {
          // Try to reduce nesting by combining classes
          const immediateParent = element.parentElement;
          if (immediateParent && 
              immediateParent.children.length === 1 &&
              !immediateParent.onclick &&
              !immediateParent.onmouseover) {
            
            const combinedClasses = `${immediateParent.className} ${element.className}`.trim();
            element.className = combinedClasses;
            immediateParent.parentNode?.replaceChild(element, immediateParent);
          }
        }
      });
    };

    removeRedundantWrappers();
    consolidateElements();
    flattenDeepNesting();
  }, []);

  useEffect(() => {
    // Initial optimization
    const timer = setTimeout(optimizeDOM, 1000);
    
    // Observe DOM changes and re-optimize
    const observer = new MutationObserver((mutations) => {
      let shouldOptimize = false;
      
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length > 5) {
          shouldOptimize = true;
        }
      });
      
      if (shouldOptimize) {
        setTimeout(optimizeDOM, 100);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [optimizeDOM]);

  return { optimizeDOM };
};

// Component to monitor and display DOM metrics
export const DOMMetrics = () => {
  useEffect(() => {
    const logDOMMetrics = () => {
      const elements = document.querySelectorAll('*');
      const elementCount = elements.length;
      
      let maxDepth = 0;
      let maxChildren = 0;
      let deepestElement = null;
      let elementWithMostChildren = null;
      
      elements.forEach(element => {
        let depth = 0;
        let parent = element.parentElement;
        
        while (parent) {
          depth++;
          parent = parent.parentElement;
        }
        
        if (depth > maxDepth) {
          maxDepth = depth;
          deepestElement = element;
        }
        
        if (element.children.length > maxChildren) {
          maxChildren = element.children.length;
          elementWithMostChildren = element;
        }
      });
      
      console.group('DOM Performance Metrics');
      console.log(`Total Elements: ${elementCount}`);
      console.log(`Max Depth: ${maxDepth}`);
      console.log(`Max Children: ${maxChildren}`);
      
      if (elementCount > 1000) {
        console.warn('DOM size exceeds recommended limit (1000+ elements)');
      }
      
      if (maxDepth > 15) {
        console.warn('DOM depth exceeds recommended limit (15+ levels)', deepestElement);
      }
      
      if (maxChildren > 60) {
        console.warn('Element has too many children (60+)', elementWithMostChildren);
      }
      
      console.groupEnd();
    };
    
    // Log metrics after initial render
    setTimeout(logDOMMetrics, 2000);
    
    // Set up periodic monitoring
    const interval = setInterval(logDOMMetrics, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return null;
};

export default useDOMOptimization;