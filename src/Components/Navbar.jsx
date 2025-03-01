
import { motion } from 'framer-motion';


import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ setUser }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <motion.nav className='bg-blue-500 p-4 text-white flex justify-between' initial={{ y: -50 }} animate={{ y: 0 }}>
      <Link to='/' className='text-xl font-bold'>Shop</Link>
      <div className='flex gap-4'>
        <Link to='/cart' className='text-lg'>Cart ({cart.length})</Link>
        {user ? (
          <button onClick={handleLogout} className='text-lg'>Logout</button>
        ) : (
          <Link to='/login' className='text-lg'>Login</Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
