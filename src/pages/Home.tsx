import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { FeatureCard } from '../components/FeatureCard';
import { ExhibitionSlideshow } from '../components/ExhibitionSlideshow';
import { getExhibitionSettings, type ExhibitionSettings } from '../services/settingsService';

const features = [
  { 
    icon: ShoppingBag, 
    title: 'Product Availability', 
    description: 'Check available products at the exhibition',
    to: '/products'
  },
  { 
    icon: Calendar, 
    title: 'Cultural Program Schedule', 
    description: 'View upcoming performances and events',
    to: '/schedule'
  },
  { 
    icon: UtensilsCrossed, 
    title: 'Best Foods Available', 
    description: 'Explore culinary delights at the venue',
    to: '/foods'
  }
];

export const Home = () => {
  const [settings, setSettings] = useState<ExhibitionSettings | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      const exhibitionSettings = await getExhibitionSettings();
      setSettings(exhibitionSettings);
    };
    fetchSettings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50 to-navy-100">
      <div className="w-full bg-white py-4 shadow-md">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-4">
            <img 
              src="https://mayurshilpa.com/public/assets/front-end/png/ormas-logo.png" 
              alt="ORMAS Logo" 
              className="h-16"
            />
            <img 
              src="/image.png" 
              alt="Exhibition Logo" 
              className="h-16"
            />
          </div>
          <img 
            src="https://panchayat.odisha.gov.in/sites/default/files/styles/medium/public/2024-11/mohan-majhi-cm_2.png?itok=vnzD3550"
            alt="CM Naveen Patnaik"
            className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-lg md:w-32 md:h-32"
          />
        </div>
      </div>

      <motion.header 
        className="pt-12 pb-6 px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div 
          className={`${settings?.headerSize || 'text-4xl'} font-bold mb-4 leading-tight sm:leading-normal`}
          style={{ 
            color: settings?.headerColor || '#1e3a8a',
            fontSize: 'clamp(1rem, 4vw, 2.25rem)'  // Min: 16px, Max: 36px, scales with viewport
          }}
        >
          {settings ? (
            <>
              <div>{settings.welcomeText}</div>
              <div>
                {settings.title}
                {settings.subtitle && <span> {settings.subtitle}</span>} {settings.year}
              </div>
            </>
          ) : (
            'Loading...'
          )}
        </div>
      </motion.header>

      <MarqueeBanner />

      <section className="px-4 py-8">
        <motion.h2 
          className="text-2xl font-bold text-navy-800 text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Exhibition Gallery
        </motion.h2>
        <ExhibitionSlideshow />
      </section>

      <section className="px-4 py-8">
        <div className="grid gap-6 max-w-md mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </section>

      <motion.div 
        className="px-4 py-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link 
          to="/feedback"
          className="inline-block bg-navy-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-700 transition-colors"
        >
          Give Feedback
        </Link>
      </motion.div>

      <motion.footer 
        className="px-4 py-8 text-center text-navy-600 bg-navy-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="max-w-md mx-auto text-lg mb-4">
          Your Feedback will help ORMAS to continuously improve the visitor experience at ORMAS exhibitions.
        </p>
        <p className="text-sm text-navy-400">
          Developed and maintained by RISO INTELLIGENCE
        </p>
      </motion.footer>
    </div>
  );
};