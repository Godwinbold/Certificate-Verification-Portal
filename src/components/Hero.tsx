import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Star, Users, Globe } from 'lucide-react';
import { useState } from 'react';

const Hero: React.FC = () => {
  const [showVerificationCard, setShowVerificationCard] = useState(false);
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <Plane className="w-8 h-8 mr-3 text-yellow-400" />
              <span className="text-xl font-semibold">GHI Assets Pro</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted
              <span className="text-yellow-400 block">Airline Partner</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Professional airline services that connect you to the world. 
              We handle bookings, customer service, and partnerships so you can focus on flying.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4"
                onClick={() => setShowVerificationCard(!showVerificationCard)}
              >
                Click here to verify this certificate
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4">
                Learn More
              </Button>
            </div>
            
            {/* Verification Card */}
            {showVerificationCard && (
              <Card className="mb-8">
                <CardContent className="p-4">
                  <p className="text-gray-700">
                    For certificate verification, kindly contact the HR GHI Assets on: 
                    <a href="mailto:hr@ghiassets.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      hr@ghiassets.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            )}
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">500,000+</span>
                </div>
                <p className="text-blue-200">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-blue-200">Countries</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-blue-200">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Airplane Visual */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-4 bg-white/5 rounded-3xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-center h-full">
                  <Plane className="w-32 h-32 text-yellow-400 transform rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;