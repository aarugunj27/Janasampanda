import React from "react";
import Home from './pages/home.js'
import About from './pages/about.js'
import Donate from './pages/donate.js'
import Contact from './pages/contact.js'
import Gallery from './pages/gallery.js'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js';

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/donate" element={ <Donate/> } />
        <Route exact path="/gallery" element={ <Gallery/> } />
      </Routes>
    </div>
  );
}