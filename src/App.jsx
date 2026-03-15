import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import Culture from './components/pages/Culture';
import Guide from './components/pages/Guide';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;