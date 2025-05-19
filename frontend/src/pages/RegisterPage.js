import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      await axios.post('http://localhost:5000/api/register', { username, password });
      setMsg('Registration successful! You can now log in.');
    } catch (err) {
      setMsg('User already exists');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ maxWidth: 300 }}>
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
        <button type="submit" style={{ width: '100%' }}>Register</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
