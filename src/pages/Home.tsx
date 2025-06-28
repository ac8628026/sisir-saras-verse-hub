
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, Sparkles } from 'lucide-react';
import { Layout } from '../components/common/Layout';
import { OrmasExhibition } from '../components/exhibitions/OrmasExhibition';

interface Exhibition {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType;
}

const exhibitions: Exhibition[] = [
  {
    id: 'ormas',
    name: 'ORMAS Exhibition',
    description: 'Celebrating Odisha\'s Heritage',
    component: OrmasExhibition,
  },
  // Add more exhibitions here as they become available
];

export const Home = () => {
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition>(exhibitions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SelectedExhibitionComponent = selectedExhibition.component;

  return (
    <div className="min-h-screen">
      {/* Exhibition Selector Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-4 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold">Exhibition Portal</h1>
                <p className="text-xs sm:text-sm opacity-90">Select an exhibition to explore</p>
              </div>
            </div>
            
            {/* Exhibition Dropdown */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 sm:px-6 sm:py-3 flex items-center justify-between gap-3 hover:bg-white/20 transition-all duration-300 min-w-[200px] sm:min-w-[300px]"
              >
                <div className="text-left">
                  <div className="font-medium text-sm sm:text-base">{selectedExhibition.name}</div>
                  <div className="text-xs opacity-80 hidden sm:block">{selectedExhibition.description}</div>
                </div>
                <ChevronDown 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
                >
                  {exhibitions.map((exhibition) => (
                    <button
                      key={exhibition.id}
                      onClick={() => {
                        setSelectedExhibition(exhibition);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 sm:px-6 sm:py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${
                        selectedExhibition.id === exhibition.id 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="font-medium text-sm sm:text-base">{exhibition.name}</div>
                      <div className="text-xs opacity-70 mt-1">{exhibition.description}</div>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Selected Exhibition Content */}
      <motion.div
        key={selectedExhibition.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <SelectedExhibitionComponent />
      </motion.div>

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </div>
  );
};
