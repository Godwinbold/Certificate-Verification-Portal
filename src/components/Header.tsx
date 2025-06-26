import React from 'react';
import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex items-center space-x-2">
            <Plane className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">GHI Assets Limited</span>
          </div>
          
          {/* Title - Desktop - Only show when menu is conceptually open */}
          {isMenuOpen && (
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-900">CERTIFICATE VERIFICATION</h1>
            </div>
          )}
          

          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="mb-4">
              <h1 className="text-lg font-bold text-gray-900 text-center">CERTIFICATE VERIFICATION</h1>
            </div>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;