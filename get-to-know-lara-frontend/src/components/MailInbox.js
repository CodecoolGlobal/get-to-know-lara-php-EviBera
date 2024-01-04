import React, { useState, useEffect } from 'react';

const MailInbox = () => {
    const [mails, setMails] = useState([]);

    useEffect(() => {
        const fetchMails = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/mail/inbox`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setMails(data);
            } else {
                // Handle errors
            }
        };

        fetchMails();
    }, []);

    return (
        <div>
            <h2>Inbox</h2>
            {mails.map(mail => (
                <div key={mail.id}>
                    <p>From: {mail.id_user_from}</p>
                    <p>Subject: {mail.subject}</p>
                    <p>Date: {mail.created_at}</p>
                    <p>Message: {mail.message}</p>
                    {/* Display other mail details */}
                </div>
            ))}
        </div>
    );
};

export default MailInbox;
