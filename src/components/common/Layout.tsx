
import React from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  backTo?: string;
  gradient?: string;
  className?: string;
}

export const Layout = ({ 
  children, 
  title, 
  subtitle, 
  showBackButton = false, 
  backTo = '/',
  gradient = 'from-navy-50 to-navy-100',
  className = ''
}: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradient} ${className}`}>
      {/* Enhanced Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <motion.img 
                src="https://mayurshilpa.com/public/assets/front-end/png/ormas-logo.png" 
                alt="ORMAS Logo" 
                className="h-14 md:h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <motion.img 
                src="/image.png" 
                alt="Exhibition Logo" 
                className="h-14 md:h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            
            {/* CM Photo */}
            <motion.img 
              src="https://panchayat.odisha.gov.in/sites/default/files/styles/medium/public/2024-11/mohan-majhi-cm_2.png?itok=vnzD3550"
              alt="CM Mohan Majhi"
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-white shadow-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="relative">
        {title && (
          <motion.div 
            className="text-center py-8 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-800 mb-2">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <div className="px-4 pb-8">
          {children}
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-navy-800 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">About ORMAS</h3>
              <p className="text-navy-200 leading-relaxed">
                ORMAS is committed to empowering rural communities through sustainable 
                livelihood programs and promoting traditional crafts and products.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/products" className="text-navy-200 hover:text-orange-400 transition-colors">Products</a></li>
                <li><a href="/schedule" className="text-navy-200 hover:text-orange-400 transition-colors">Schedule</a></li>
                <li><a href="/foods" className="text-navy-200 hover:text-orange-400 transition-colors">Foods</a></li>
                <li><a href="/feedback" className="text-navy-200 hover:text-orange-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Contact</h3>
              <div className="text-navy-200">
                <p className="mb-2">ORMAS Exhibition</p>
                <p className="mb-2">Odisha, India</p>
                <p className="text-sm">Developed by RISO INTELLIGENCE</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-navy-700 mt-8 pt-8 text-center">
            <p className="text-navy-300">
              © 2025 ORMAS. All rights reserved. | Enhancing rural livelihoods through exhibitions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
