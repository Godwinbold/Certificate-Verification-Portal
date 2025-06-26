import React from 'react';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold">GHI Assets Limited</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in airline representation services. 
              Connecting the world through professional aviation solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Flight Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Route Planning</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+234 (70) 56739055</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>info@ghiassets.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  45, Oduduwa Way<br />
                  Ikeja GRA
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GHI Assets Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;