import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Yourbookings from './components/Yourbookings.jsx';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './Backup/Navbar';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Logout from './components/Logout';
import {Routes, Route, Link,BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>
  <Route path="/Home" element={<Home/>}></Route>
  <Route path="/AboutUs" element={<AboutUs/>}></Route>
  <Route path="/Yourbookings" element={<Yourbookings/>}></Route>
  <Route path="/Booking" element={<Booking/>}></Route>
  <Route path="/Profile" element={<Profile/>}></Route>
  <Route path="/Logout" element={<Logout/>}></Route>
</Routes> */}
    </div>
  );
}

export default App;
