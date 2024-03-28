import React from 'react';
import axios from 'axios';

const Test = () => {
  const email = 'test@gmail.com';
  const password = '123456';

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3333/auth/login', {
        email: email,
        password: password
      });

      console.log('Login successful:', response.data);
    } catch (error) {  console.error('Login failed:', error.response.data);
     
    }
  };



  return (
    <div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Test;
