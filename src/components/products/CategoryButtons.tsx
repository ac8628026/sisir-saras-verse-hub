
import { motion } from 'framer-motion';
import { categories } from '../../services/productService';

interface CategoryButtonsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryButtons = ({ 
  selectedCategory, 
  onCategoryChange 
}: CategoryButtonsProps) => {
  const allCategories = ['All', ...categories];
  const firstRowCategories = allCategories.slice(0, 4);
  const secondRowCategories = allCategories.slice(4);

  return (
    <div className="grid grid-rows-2 gap-4 mb-8">
      <div className="grid grid-cols-4 gap-4">
        {firstRowCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-center transition-all ${
              selectedCategory === category
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-orange-600 hover:bg-orange-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {secondRowCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-center transition-all ${
              selectedCategory === category
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-orange-600 hover:bg-orange-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
