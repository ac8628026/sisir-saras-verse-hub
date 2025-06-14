
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    category: string;
  }[];
  viewMode: 'grid' | 'list';
}

export const ProductGrid = ({ products, viewMode }: ProductGridProps) => {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-dark-700 flex"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img className="w-32 h-32 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white dark:bg-dark-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-dark-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{product.description}</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">{product.price}</span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
