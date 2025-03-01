import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username }));
        setUser({ username });
        navigate('/');
      }
    };
  
    return (
      <motion.div className='p-6 flex flex-col items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border p-2'
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-2'
            required
          />
          <button type='submit' className='bg-blue-500 text-white p-2'>Login</button>
        </form>
        <p className='mt-4'>Don't have an account? <button onClick={() => navigate('/signup')} className='text-blue-500'>Sign Up</button></p>
      </motion.div>
    );
  };
  
  export default Login;
  