import { Calculator } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const handleLinkClick = (category: string, item: string) => {
    trackEvent('footer_link_clicked', category, item);
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('footer_navigation_clicked', 'navigation', section);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calculator className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold">ProstateVolumeCalc</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional-grade prostate volume calculator trusted by healthcare providers worldwide.
            </p>
            <div className="text-xs text-gray-500">
              <p>&copy; 2024 ProstateVolumeCalc.com</p>
              <p>For educational purposes only</p>
            </div>
          </div>
          
          {/* Calculator Tools */}
          <div>
            <h3 className="font-semibold mb-4">Calculator Tools</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavClick('calculator')}
                  className="hover:text-white transition-colors text-left"
                  aria-label="Use prostate volume calculator"
                >
                  Prostate Volume Calculator
                </button>
              </li>
              <li>
                <a 
                  href="/tools"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('tools', 'psa_density')}
                >
                  PSA Density Calculator
                </a>
              </li>
              <li>
                <a 
                  href="/tools"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('tools', 'ipss_assessment')}
                >
                  IPSS Assessment Tool
                </a>
              </li>
              <li>
                <a 
                  href="/tools"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('tools', 'treatment_guide')}
                >
                  BPH Treatment Guide
                </a>
              </li>
            </ul>
          </div>
          
          {/* Educational Content */}
          <div>
            <h3 className="font-semibold mb-4">Educational Content</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="/education"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('education', 'bph_education')}
                >
                  BPH Education Center
                </a>
              </li>
              <li>
                <a 
                  href="/resources"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('education', 'clinical_resources')}
                >
                  Clinical Resources
                </a>
              </li>
              <li>
                <a 
                  href="/case-studies"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('education', 'case_studies')}
                >
                  Clinical Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="/blog"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('education', 'medical_blog')}
                >
                  Medical Articles
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support & Legal */}
          <div>
            <h3 className="font-semibold mb-4">Support & Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="/faq"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('support', 'medical_faq')}
                >
                  Medical FAQ
                </a>
              </li>
              <li>
                <a 
                  href="/about"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('support', 'about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('support', 'contact')}
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a 
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('legal', 'privacy_policy')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('legal', 'terms')}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/disclaimer"
                  className="hover:text-white transition-colors"
                  onClick={() => handleLinkClick('legal', 'medical_disclaimer')}
                >
                  Medical Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ProstateVolumeCalc.com. All rights reserved. | HIPAA Compliant | SSL Secured
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Always consult with qualified healthcare professionals for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
