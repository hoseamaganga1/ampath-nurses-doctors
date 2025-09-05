import React, { useState } from 'react';
import { login } from './axiosauth';
import { setToken } from './axiosutils';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('a@b.com');
  const [password, setPassword] = useState('1');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, password);
      setToken(token);
      onLogin();
    } catch {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginPage;