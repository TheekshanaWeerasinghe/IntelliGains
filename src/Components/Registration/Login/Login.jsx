import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://testserver.divinelk.com:5000/api/users/login', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Login Done !")
      console.log('Login successful:', data);
      navigate('/'); 
    } else {
      const errorData = await response.json(); 
      setErrorMessage(errorData.message || 'Failed to login');
    }
  };

  return (
    <div>
      <div>
        <a href="/Register" className="back-button">Back</a>
        <div className='loginn'>
          <h1>Login</h1>
        </div>
        
        <form className='form' onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className='btn'>Login</button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
