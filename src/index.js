import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home';
import Yourbookings from './components/Yourbookings.jsx';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './Backup/Navbar';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Logout from './components/Logout';
import {Routes, Route, Link,BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  <Navbar/>
  <Routes>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/AboutUs" element={<AboutUs/>}></Route>
<Route path="/Yourbookings" element={<Yourbookings/>}></Route>
<Route path="/Booking" element={<Booking/>}></Route>
<Route path="/Profile" element={<Profile/>}></Route>
<Route path="/Logout" element={<Logout/>}></Route>
</Routes></BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
