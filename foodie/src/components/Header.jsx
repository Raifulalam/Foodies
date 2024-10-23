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
        navigate('/');
    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setLoggedIn(!!token);
    }, []);

    const handleLogin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
        navigate('/signup')
    }


    return (
        <header className="header">
            <div className="logo">
                <h2>
                    HUU Foodie
                </h2>
            </div>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id='nav-element'>
                <dvv className="nav-item">
                    <ul className='nav-item'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        {loggedIn && (
                            <div className='login-logout-Btn'>

                                <li><Link to="/myorder">My Order</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <button onClick={handleLogout} className='logoutBtn'>Logout</button>
                            </div>
                        )}
                        {!loggedIn && (
                            <div className='login-logout-Btn' >
                                <button className='loginBtn' onClick={handleLogin}>Login</button>
                                <button className='logoutBtn' onClick={handleSignup}>

                                    Sign Up
                                </button>
                            </div>
                        )}
                    </ul>
                </dvv>



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
