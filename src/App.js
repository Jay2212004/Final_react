import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar';
import YourBookings from './YourBookings';
import Login from './Login';
import {Routes, Route, Link,BrowserRouter as Router} from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (<>
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* ... other routes */}
        <PrivateRoute
          path="/YourBookings"
          component={YourBookings}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/login" render={() => (isAuthenticated ? <Redirect to="/" /> : <Login />)} />
      </Switch>
    </Router>
     <div className="App">
     {adminPortalClicked ? (
       // Render content when AdminPortal is clicked, without the Navbar
       <AdminPortalContent />
     ) : (
       // Render content with the Navbar
       <>
         <Navbar hideNavbar={() => setAdminPortalClicked(true)} />
         <MainContent />
       </>
     )}
   </div></>
  );
}

export default App;
