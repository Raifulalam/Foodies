import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LandingPage from './page/LandingPage/LandingPage';
import LoginComponent from './page/LoginPage/LoginPage';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './page/MenuPage/MenuPage';
import SignUp from './page/SignUp/Signup';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
