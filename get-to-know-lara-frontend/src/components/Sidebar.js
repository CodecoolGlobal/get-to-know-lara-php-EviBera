import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/mail/inbox">Inbox</Link>
            <Link to="/mail/compose">Send new mail</Link>
            {/* Add other links as needed */}
        </div>
    );
};

export default Sidebar;