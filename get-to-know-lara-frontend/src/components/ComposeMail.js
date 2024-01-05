import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailCompose = () => {
    const [mailData, setMailData] = useState({
        id_user_to: '',
        subject: '',
        message: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMailData({ ...mailData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/mail/send`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(mailData),
            });
            if (response.ok) {
                navigate('/mail/inbox');
            } else {
                // Handle errors
            }
        } catch (error) {
            console.error('Error sending mail:', error);
        }
    };

    return (
        <div className="content">
            <form onSubmit={handleSubmit}>
                <input type="text" name="id_user_to" value={mailData.id_user_to} onChange={handleChange} placeholder="To (User ID)" />
                <input type="text" name="subject" value={mailData.subject} onChange={handleChange} placeholder="Subject" />
                <textarea name="message" value={mailData.message} onChange={handleChange} placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default MailCompose;