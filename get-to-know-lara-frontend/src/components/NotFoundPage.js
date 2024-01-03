import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Sorry, something went wrong!</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', marginRight: '20px' }}>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NotFoundPage;