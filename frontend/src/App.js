import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CataloguePage from './pages/CataloguePage';
import './App.css';


function App() {
  return (
    <div>
      <nav style={{ padding: 10, borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/catalogue" style={{ marginRight: 10 }}>Catalogue</Link>
        <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
