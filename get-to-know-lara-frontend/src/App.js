import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import MailInbox from './components/MailInbox';
import ComposeMail from './components/ComposeMail';
import Sidebar from './components/Sidebar';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {

  const isLoggedIn = localStorage.getItem('token') !== null; // Check if the user is logged in

  return (
    <Router>
      <div>
        {isLoggedIn && <Sidebar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/mail/inbox' element={<MailInbox />}/>
          <Route path='/mail/compose' element={<ComposeMail />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;