
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Package, Utensils, MessageSquare, Users, BarChart3, Sparkles, ArrowRight, MapPin, Clock, Info } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

interface ExhibitionConfig {
  title: string;
  subtitle: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  features: Array<{
    icon: any;
    title: string;
    description: string;
    to: string;
    color: string;
  }>;
  showMarquee?: boolean;
  showSlideshow?: boolean;
  heroImageUrl?: string;
}

interface GeneralExhibitionProps {
  config: ExhibitionConfig;
}

const defaultFeatures = [
  {
    icon: Package,
    title: 'Product Showcase',
    description: 'Discover authentic products and traditional items.',
    to: '/products',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Calendar,
    title: 'Event Schedule',
    description: 'Stay updated with programs, workshops, and special events.',
    to: '/schedule',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Utensils,
    title: 'Food & Cuisine',
    description: 'Experience traditional food and local delicacies.',
    to: '/foods',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: MessageSquare,
    title: 'Visitor Feedback',
    description: 'Share your experience and help us improve.',
    to: '/feedback',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Users,
    title: 'Administration',
    description: 'Administrative panel for exhibition management.',
    to: '/administrator',
    color: 'from-gray-500 to-gray-600'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'View detailed analytics and insights.',
    to: '/data',
    color: 'from-yellow-500 to-yellow-600'
  }
];

export const GeneralExhibition = ({ config }: GeneralExhibitionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = config.features || defaultFeatures;

  return (
    <div className={`min-h-screen ${config.backgroundColor} transition-colors duration-300 overflow-x-hidden`}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor})`
        }}
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

        <div className="relative w-full px-4 py-16 sm:py-24 md:py-32 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 text-yellow-300" />
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
            {config.title}
            <span className="block text-xl sm:text-3xl md:text-5xl font-normal mt-3 opacity-90">
              {config.subtitle}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed opacity-95 px-4">
            {config.description}
          </p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <MapPin className="w-5 h-5" />
                <span>Exhibition Center</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Clock className="w-5 h-5" />
                <span>Open Daily</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <Info className="w-5 h-5" />
                <span>Free Entry</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Welcome Section */}
      <div className="py-16 sm:py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Welcome to Our Exhibition
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover a world of innovation, culture, and creativity. Our exhibition brings together the finest 
              collections, interactive experiences, and educational opportunities all under one roof.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Quality Products</h3>
                <p className="text-gray-600 dark:text-gray-300">Carefully curated collection of premium items</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Regular Events</h3>
                <p className="text-gray-600 dark:text-gray-300">Engaging programs and workshops for all ages</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Community Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">Building connections through shared experiences</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor})`
            }}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 px-2">
            Explore Our Sections
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Navigate through different areas of our exhibition to discover everything we have to offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
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
        className="text-white py-16 sm:py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${config.secondaryColor}, ${config.primaryColor})`
        }}
      >
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
        </div>
        
        <div className="w-full px-4 text-center relative max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-6 sm:mb-8"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </motion.div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-2">
            Start Your Journey Today
          </h3>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-95 mb-8 sm:mb-10 px-4">
            Whether you're here to explore, learn, shop, or simply enjoy the atmosphere, 
            our exhibition offers something special for everyone. Begin your adventure now.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-800 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
          >
            Begin Exploring
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
