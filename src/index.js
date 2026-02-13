import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './landingPage/Navbar';
import HomePage from './landingPage/home/HomePage';
import Footer from './landingPage/Footer';
import ResourcePage from './landingPage/resources/ResourcePage';
import LoginPage from './landingPage/login/LoginPage';
import SignupPage from './landingPage/signup/SignupPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path = "/" element={<HomePage/>} />
      <Route path='/resources' element={<ResourcePage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

