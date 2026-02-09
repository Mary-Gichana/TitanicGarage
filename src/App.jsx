import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'; 
import Products from "./components/Products";
import Contact from './components/Contact';
import useCanonical from "./hooks/useCanonical";

import { Routes, Route } from "react-router-dom";


function App() {
  useCanonical();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App
