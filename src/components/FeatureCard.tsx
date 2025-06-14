
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
  index: number;
  color?: string;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  to, 
  index,
  color = 'from-orange-500 to-orange-600'
}: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="group"
  >
    <Link to={to} className="block h-full">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100">
        {/* Gradient line at top */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}></div>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon with gradient background */}
        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-navy-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-navy-600 mb-6 leading-relaxed">
            {description}
          </p>
          
          {/* Call to action */}
          <div className="flex items-center text-orange-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
            <span>Explore Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <Icon className="w-full h-full text-orange-600" />
        </div>
      </div>
    </Link>
  </motion.div>
);
