import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';


const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  { id: 4, name: 'Product 4', price: 250 },
  { id: 5, name: 'Product 5', price: 300 },
  { id: 6, name: 'Product 6', price: 350 },
];

const Home = () => {
  const { addToCart } = useCart();

  return (
    <motion.div className='p-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <div className='grid grid-cols-2 gap-4'>
        {products.map((product) => (
          <motion.div key={product.id} className='border p-4' whileHover={{ scale: 1.05 }}>
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className='text-blue-500'>View</Link>
            <button onClick={() => addToCart(product)} className='bg-green-500 text-white p-2 ml-2'>Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;