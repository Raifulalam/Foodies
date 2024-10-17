import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS for styling

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send login request to server
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset form after submission if needed
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log in</h2>
                <p>Welcome back! Please enter your details.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember me for 14 days</label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Sign in</button>
                        <a href="#" className="forgot-password">Forgot password?</a>
                    </div>
                </form>
            </div>
            <div className="sidebar">
                <h2>Craving Something?</h2>
                <p>Let's get you started!</p>
                <button className="get-started-button">Get Started</button>
            </div>
        </div>
    );
}

export default LoginComponent;
