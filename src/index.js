import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landingPage/Navbar';
import HomePage from './landingPage/home/HomePage';
import Footer from './landingPage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <h1>Testing</h1> */}
    <Navbar/>
    <HomePage/>
    <Footer/>

    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

