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
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavClick('calculator')}
                  className="hover:text-white transition-colors text-left"
                >
                  Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('faq')}
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resources')}
                  className="hover:text-white transition-colors text-left"
                >
                  Resources
                </button>
              </li>
            </ul>
          </div>
          
          {/* Medical Information */}
          <div>
            <h3 className="font-semibold mb-4">Medical Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleLinkClick('medical_info', 'bph_information')}
                  className="hover:text-white transition-colors text-left"
                >
                  BPH Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('medical_info', 'treatment_options')}
                  className="hover:text-white transition-colors text-left"
                >
                  Treatment Options
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('medical_info', 'clinical_guidelines')}
                  className="hover:text-white transition-colors text-left"
                >
                  Clinical Guidelines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('medical_info', 'research_papers')}
                  className="hover:text-white transition-colors text-left"
                >
                  Research Papers
                </button>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal & Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleLinkClick('legal', 'privacy_policy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('legal', 'terms_of_service')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('legal', 'medical_disclaimer')}
                  className="hover:text-white transition-colors text-left"
                >
                  Medical Disclaimer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('legal', 'contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
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
