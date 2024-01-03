import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const RegistrationForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/registration`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                setSuccessMessage('Registration successful! You can now log in.'); // Set success message
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error('Registration failed:', error);
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
                <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
                <button type="submit">Register</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default RegistrationForm;
