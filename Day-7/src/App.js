import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniDrawer from './components/sidebar';
import HomePage from './components/home';
import SignUp from './components/SignUp';
import ContactPage from './components/contact';
import Login from './components/login';
import Products from './components/flash';
import AboutPage from './components/about';
import Cart from './components/cart';
import Appoint from './components/Appointment';
import Detail from './components/detail';


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/flash" element ={<Products/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/appoint" element ={<Appoint/>}/>
          <Route path="/detail" element ={<Detail/>}/>
          

          
          
          
        </Routes>
        <MiniDrawer />
      </Router>
    </>
  );
}

export default App;
