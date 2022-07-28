import React from "react";
import Home from './pages/home.js'
import About from './pages/about.js'
import Donate from './pages/donate.js'
import Contact from './pages/contact.js'
import Gallery from './pages/gallery.js'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Work from './pages/work.js';
import AnnouncementBar from "./components/AnnouncementBar.js";
import PageNotFound from "./pages/404.js";

export default function App() {
  return (
    <div className="App">
      <AnnouncementBar/>
      <NavBar/>
      <Routes>
        <Route exact path="*" element={ <PageNotFound/> } />
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/donate" element={ <Donate/> } />
        <Route exact path="/gallery" element={ <Gallery/> } />
        <Route exact path="/work" element={ <Work/> } />
      </Routes>
      <Footer />
    </div>
  );
}