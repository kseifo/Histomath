import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />   {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* About page route */}
      </Routes>
    </Router>
  </React.StrictMode>
);

