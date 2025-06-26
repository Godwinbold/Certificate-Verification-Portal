import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Headphones, Calendar, CreditCard, Shield, MapPin, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your airline needs with multilingual support."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Flight Booking & Management",
      description: "Seamless booking experience with real-time availability and instant confirmations."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: "Payment Processing",
      description: "Secure payment gateway supporting multiple currencies and payment methods."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Travel Insurance",
      description: "Comprehensive travel protection plans to keep you covered on every journey."
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Route Planning",
      description: "Optimized flight routes and connections to get you to your destination efficiently."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-time Updates",
      description: "Instant notifications about flight changes, delays, and gate information."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive airline services designed to streamline 
            your travel experience and grow your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;