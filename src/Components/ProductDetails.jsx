import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';


const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = { id, name: `Product ${id}`, price: id * 100 };

  return (
    <motion.div className='p-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className='text-2xl font-bold'>{product.name}</h1>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className='bg-green-500 text-white p-2'>Add to Cart</button>
    </motion.div>
  );
};

export default ProductDetails;