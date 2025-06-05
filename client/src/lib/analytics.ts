// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track calculator usage for medical analytics
export const trackCalculatorUsage = (
  calculatorType: string,
  inputValues: Record<string, any>,
  calculationTime: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'calculator_used', {
    event_category: 'medical_tools',
    event_label: calculatorType,
    value: Math.round(calculationTime),
    custom_parameters: {
      calculator_type: calculatorType,
      medical_category: 'urology'
    }
  });
};

// Track medical professional interactions
export const trackMedicalInteraction = (
  interactionType: string,
  toolName: string,
  userCategory: 'healthcare_professional' | 'student' | 'researcher' | 'other' = 'other'
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'medical_interaction', {
    event_category: 'healthcare_engagement',
    event_label: `${toolName}_${interactionType}`,
    custom_parameters: {
      user_type: userCategory,
      tool_name: toolName
    }
  });
};