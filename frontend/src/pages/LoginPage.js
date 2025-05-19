import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate(); // <-- Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', res.data.token);
      setMsg('Login successful!');
      // Redirect to catalogue after successful login
      navigate('/catalogue');
    } catch (err) {
      setMsg('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: 300 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <button type="submit" style={{ width: '100%' }}>Login</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
