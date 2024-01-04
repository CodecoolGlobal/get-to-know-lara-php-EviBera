import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token); // Store the token
                navigate('/');
            } else {
                navigate('*');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email Address" />
            <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
