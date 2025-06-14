
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MarqueeBanner } from '../MarqueeBanner';
import { ExhibitionSlideshow } from '../ExhibitionSlideshow';

interface LayoutProps {
  children: ReactNode;
  showMarquee?: boolean;
  showSlideshow?: boolean;
  title?: string;
  subtitle?: string;
  backgroundGradient?: string;
}

export const Layout = ({ 
  children, 
  showMarquee = false, 
  showSlideshow = false,
  title,
  subtitle,
  backgroundGradient = 'from-orange-50 to-orange-100'
}: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${backgroundGradient}`}>
      {showMarquee && <MarqueeBanner />}
      
      <div className="container mx-auto px-4 py-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-navy-800 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {showSlideshow && <ExhibitionSlideshow />}
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};
