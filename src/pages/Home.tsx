
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Package, Utensils, MessageSquare, Users, BarChart3 } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-lg font-medium">Experience the Best of Odisha</p>
                <p className="text-sm opacity-80 mt-1">Traditional • Authentic • Cultural</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Marquee Banner */}
        <MarqueeBanner />

        {/* Exhibition Slideshow */}
        <div className="py-12">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Explore Our Exhibition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through different sections of our exhibition to discover the beauty and richness of Odisha's culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Join Us in Celebrating Odisha's Rich Heritage
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              From intricate handloom textiles to exquisite handicrafts, from traditional cuisine to cultural performances, 
              our exhibition offers a complete immersion into the vibrant world of Odisha's artistic and cultural legacy.
            </p>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};
