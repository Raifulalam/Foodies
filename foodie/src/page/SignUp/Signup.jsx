import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS for styling

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

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
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="login-container">
            <div className="sidebar">
                <h2>Already have an account?</h2>
                <p>Let's get you started!</p>
                <button className="get-started-button" onClick={handleLogin}>Log in</button>
            </div>
            <div className="login-form">
                <h2>Sign Up</h2>
                <p>Please enter your details.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
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

                    <div className="form-group">
                        <button type="submit" className="submit-button">Register</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default LoginComponent;
