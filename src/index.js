import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Preview from './components/Prereview';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './components/Home';
import Yourbookings from './components/Yourbookings.jsx';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './Backup/Navbar';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Logout from './components/Logout';
import {Routes, Route,Redirect,BrowserRouter as Router} from "react-router-dom";
import { FormDataProvider } from './components/FormDataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-d31oydu0zkp1xwt0.us.auth0.com"
    clientId="3lRc3lAa51yNOby12b6hQMnZSr0RYfIW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <FormDataProvider>
  <Router>  <Navbar/>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/Home" element={<Home/>}></Route>
<Route path="/AboutUs" element={<AboutUs/>}></Route>
<Route path="/Yourbookings" element={<Yourbookings/>}></Route>
<Route path="/Booking" element={<Booking/>}></Route>
<Route path="/Profile" element={<Profile/>}></Route>
<Route path="/Logout" element={<Logout/>}></Route>
<Route path="/Prereview" element={<Preview/>}></Route>
</Routes></Router></FormDataProvider></Auth0Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
