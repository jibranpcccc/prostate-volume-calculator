import { useEffect } from "react";

export default function AccessibilityEnhancer() {
  useEffect(() => {
    // Add focus management for keyboard navigation
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Skip to main content on Tab key from header
      if (e.key === 'Tab' && !e.shiftKey) {
        const activeElement = document.activeElement as HTMLElement;
        const header = document.querySelector('header');
        if (header && header.contains(activeElement)) {
          const mainContent = document.querySelector('main');
          if (mainContent) {
            const focusableElement = mainContent.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
            if (focusableElement) {
              e.preventDefault();
              focusableElement.focus();
            }
          }
        }
      }
    };

    // Announce page changes for screen readers
    const announcePageChange = () => {
      const title = document.title;
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Page changed to ${title}`;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    };

    // Add ARIA labels to form inputs without labels
    const enhanceFormAccessibility = () => {
      const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
      inputs.forEach((input) => {
        const placeholder = input.getAttribute('placeholder');
        const name = input.getAttribute('name');
        if (placeholder) {
          input.setAttribute('aria-label', placeholder);
        } else if (name) {
          input.setAttribute('aria-label', name.replace(/([A-Z])/g, ' $1').trim());
        }
      });
    };

    // Add landmark roles where missing
    const addLandmarkRoles = () => {
      const header = document.querySelector('header:not([role])');
      if (header) header.setAttribute('role', 'banner');
      
      const nav = document.querySelector('nav:not([role])');
      if (nav) nav.setAttribute('role', 'navigation');
      
      const main = document.querySelector('main:not([role])');
      if (main) main.setAttribute('role', 'main');
      
      const footer = document.querySelector('footer:not([role])');
      if (footer) footer.setAttribute('role', 'contentinfo');
    };

    // Enhance button accessibility
    const enhanceButtonAccessibility = () => {
      const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])');
      buttons.forEach((button) => {
        const textContent = button.textContent?.trim();
        const icon = button.querySelector('svg');
        
        if (!textContent && icon) {
          // Icon-only button needs aria-label
          const buttonParent = button.closest('[data-tooltip]') as HTMLElement;
          const tooltip = buttonParent?.dataset.tooltip;
          if (tooltip) {
            button.setAttribute('aria-label', tooltip);
          }
        }
        
        // Add role if not present
        if (!button.getAttribute('role')) {
          button.setAttribute('role', 'button');
        }
      });
    };

    // Add color contrast checking (development only)
    const checkColorContrast = () => {
      if (process.env.NODE_ENV === 'development') {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
          const styles = window.getComputedStyle(element);
          const color = styles.color;
          const backgroundColor = styles.backgroundColor;
          
          // Basic contrast check (simplified)
          if (color && backgroundColor && color !== backgroundColor) {
            const colorLuminance = getLuminance(color);
            const bgLuminance = getLuminance(backgroundColor);
            const contrast = (Math.max(colorLuminance, bgLuminance) + 0.05) / 
                           (Math.min(colorLuminance, bgLuminance) + 0.05);
            
            if (contrast < 4.5) {
              console.warn(`Low contrast detected on element:`, element, `Contrast ratio: ${contrast.toFixed(2)}`);
            }
          }
        });
      }
    };

    // Helper function for luminance calculation
    const getLuminance = (color: string): number => {
      // Simplified luminance calculation
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      
      const r = parseInt(rgb[0]) / 255;
      const g = parseInt(rgb[1]) / 255;
      const b = parseInt(rgb[2]) / 255;
      
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    // Run accessibility enhancements
    const runEnhancements = () => {
      enhanceFormAccessibility();
      addLandmarkRoles();
      enhanceButtonAccessibility();
      checkColorContrast();
    };

    // Initial run
    runEnhancements();
    announcePageChange();

    // Add event listeners
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Re-run on DOM changes
    const observer = new MutationObserver(() => {
      runEnhancements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });

    return () => {
      document.removeEventListener('keydown', handleKeyboardNavigation);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        onFocus={(e) => {
          e.target.classList.remove('sr-only');
        }}
        onBlur={(e) => {
          e.target.classList.add('sr-only');
        }}
      >
        Skip to main content
      </a>
      
      {/* Screen reader only styles */}
      <style>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </>
  );
}