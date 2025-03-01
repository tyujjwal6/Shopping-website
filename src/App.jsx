import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import { CartProvider, useCart } from './context/CartContext';
import './index.css';
import { motion } from 'framer-motion';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  return (
    <CartProvider>
      <Router>
        {!user ? (
          <Routes>
            <Route path='*' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login setUser={setUser} />} />
            <Route path='/signup' element={<Signup setUser={setUser} />} />
          </Routes>
        ) : (
          <>
            <Navbar setUser={setUser} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/login' element={<Navigate to='/' />} />
            </Routes>
          </>
        )}
      </Router>
    </CartProvider>
  );
}

export default App;
