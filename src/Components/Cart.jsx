import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';


const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <motion.div className='p-6' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className='text-2xl font-bold'>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <motion.div key={item.id} className='border p-4 mb-2 flex justify-between' whileHover={{ scale: 1.05 }}>
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white p-2'>Remove</button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
