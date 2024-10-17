import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './page/LandingPage/LandingPage';
import LoginComponent from './page/LoginPage/LoginPage';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './page/MenuPage/MenuPage';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginComponent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
