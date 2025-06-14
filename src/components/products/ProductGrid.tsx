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
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="mt-3 flex justify-between items-center">
              <span className="text-gray-700">{product.price}</span>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
