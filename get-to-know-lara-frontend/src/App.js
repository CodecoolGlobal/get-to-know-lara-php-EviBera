import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation Links */}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;