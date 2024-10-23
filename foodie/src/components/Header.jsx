import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("authToken"));
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setLoggedIn(false);
        navigate('/login');
    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setLoggedIn(!!token);
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <h1>HUU Foodie</h1>
            </div>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {loggedIn && (
                        <>
                            <li><Link to="/myorder">My Order</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
                        </>
                    )}
                    {!loggedIn && (
                        <>
                            <li><Link to="/login" className="nav-link">Login</Link></li>
                            <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
                        </>
                    )}
                </ul>
            </nav>

            <div
                className="hamburger"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
            >
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </div>
        </header>
    );
};

export default Header;
