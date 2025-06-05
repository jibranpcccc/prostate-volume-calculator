import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    trackEvent('mobile_menu_toggled', 'navigation', 'menu_toggle');
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      trackEvent('navigation_clicked', 'navigation', section);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calculator className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-600">ProstateVolumeCalc</h1>
              <p className="text-xs text-gray-600">Medical Grade Calculator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('calculator')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Calculator
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('resources')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium"
            >
              Resources
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-3 pt-2 border-t border-gray-200">
            <div className="space-y-1">
              <button
                onClick={() => handleNavClick('calculator')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Calculator
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => handleNavClick('resources')}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Resources
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
