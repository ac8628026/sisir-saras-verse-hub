
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, UtensilsCrossed, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/common/Layout';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { FeatureCard } from '../components/FeatureCard';
import { ExhibitionSlideshow } from '../components/ExhibitionSlideshow';
import { getExhibitionSettings, type ExhibitionSettings } from '../services/settingsService';

const features = [
  { 
    icon: ShoppingBag, 
    title: 'Product Showcase', 
    description: 'Discover authentic handcrafted products from skilled artisans',
    to: '/products',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    icon: Calendar, 
    title: 'Cultural Events', 
    description: 'Experience rich cultural performances and traditional arts',
    to: '/schedule',
    color: 'from-purple-500 to-purple-600'
  },
  { 
    icon: UtensilsCrossed, 
    title: 'Culinary Journey', 
    description: 'Savor authentic Odia cuisine and traditional delicacies',
    to: '/foods',
    color: 'from-orange-500 to-orange-600'
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
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {settings?.year || '2025'} Exhibition Now Live
            </div>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-navy-800 via-blue-600 to-orange-600 bg-clip-text text-transparent leading-tight"
              style={{ 
                fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                lineHeight: '1.1'
              }}
            >
              {settings ? (
                <>
                  {settings.welcomeText}<br />
                  <span className="text-3xl md:text-5xl lg:text-6xl">
                    {settings.title}
                    {settings.subtitle && <> {settings.subtitle}</>} {settings.year}
                  </span>
                </>
              ) : (
                'Loading...'
              )}
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the rich heritage of Odisha through authentic crafts, 
              vibrant culture, and traditional flavors
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeBanner />

      {/* Exhibition Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Exhibition Gallery
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Immerse yourself in the visual journey of our exhibition showcasing 
              the finest craftsmanship and cultural heritage
            </p>
          </motion.div>
          <ExhibitionSlideshow />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Explore the Exhibition
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Navigate through our comprehensive exhibition experience
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                <Link to={feature.to} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`}></div>
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-navy-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center text-orange-600 font-medium group-hover:gap-3 gap-2 transition-all">
                      Explore Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share Your Experience
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Your feedback helps us create better experiences for all visitors
            </p>
            <Link 
              to="/feedback"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Give Feedback
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};
