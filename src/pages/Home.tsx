
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Package, Utensils, MessageSquare, Users, BarChart3, Sparkles, ArrowRight } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { FeatureCard } from '../components/FeatureCard';
import { ExhibitionSlideshow } from '../components/ExhibitionSlideshow';
import { MarqueeBanner } from '../components/MarqueeBanner';

const features = [
  {
    icon: Package,
    title: 'Product Showcase',
    description: 'Discover authentic handloom, handicrafts, and traditional products from Odisha.',
    to: '/products',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Calendar,
    title: 'Event Schedule',
    description: 'Stay updated with cultural programs, workshops, and special events.',
    to: '/schedule',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Utensils,
    title: 'Food & Cuisine',
    description: 'Experience the rich flavors of traditional Odia food and local delicacies.',
    to: '/foods',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageSquare,
    title: 'Visitor Feedback',
    description: 'Share your experience and help us improve future exhibitions.',
    to: '/feedback',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Administration',
    description: 'Administrative panel for exhibition management and operations.',
    to: '/administrator',
    color: 'from-gray-500 to-gray-600'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'View detailed analytics and insights about the exhibition.',
    to: '/data',
    color: 'from-yellow-500 to-yellow-600'
  }
];

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-colors duration-300">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 dark:from-primary-700 dark:via-red-700 dark:to-pink-700 text-white"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                backgroundSize: '200% 200%',
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              ORMAS Exhibition
              <span className="block text-2xl sm:text-4xl font-normal mt-2 opacity-90">
                Celebrating Odisha's Heritage
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              Discover the rich cultural heritage, traditional crafts, and authentic flavors of Odisha
            </p>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <p className="text-lg font-medium">Experience the Best of Odisha</p>
                <p className="text-sm opacity-80 mt-1">Traditional • Authentic • Cultural</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee Banner */}
        <MarqueeBanner />

        {/* Exhibition Slideshow */}
        <div className="py-12 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
          <ExhibitionSlideshow />
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Explore Our Exhibition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Navigate through different sections of our exhibition to discover the beauty and richness of Odisha's culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white py-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Join Us in Celebrating Odisha's Rich Heritage
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95 mb-8">
              From intricate handloom textiles to exquisite handicrafts, from traditional cuisine to cultural performances, 
              our exhibition offers a complete immersion into the vibrant world of Odisha's artistic and cultural legacy.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Exploring
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};
