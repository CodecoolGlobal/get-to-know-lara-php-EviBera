import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome!</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', marginRight: '20px' }}>
                        <Link to="/registration">Register</Link>
                    </li>
                    <li style={{ display: 'inline' }}>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
