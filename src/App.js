import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Contact from './components/pages/Contact';


function App() {
  return (
    <Router>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/company">Company</Link></li>
      <li><Link to="/newproject">NewProject</Link></li>
        
      </ul>
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact  path="/company" element={<Company />} />
        <Route exact  path="/contact" element={<Contact />} />
        <Route exact  path="/newproject" element={<NewProject />} />
      </Routes>
      <p>footer</p>
    </Router>
  );
}

export default App;
