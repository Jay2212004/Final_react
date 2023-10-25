import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import './SignUp.css';
import Home_Admin from './Home_Admin';
import {Link} from 'react-router-dom'
const allowedEmails = ['uchagaonkar54jay@student.sfit.ac.in']; // Add allowed email addresses

const SignIn = () => {
  const [user, setUser] = useState(null);
  
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const email = result.user.email;
        if (allowedEmails.includes(email)) {
          localStorage.setItem('email', email);
          setUser(result.user);
        } else {
          // Handle unauthorized access
          alert('You do not have access to the admin panel.');
        }
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
      });
  };

  useEffect(() => {
    const emailFromLocalStorage = localStorage.getItem('email');
    if (emailFromLocalStorage) {
      setUser({ email: emailFromLocalStorage });
    }
  }, []);

  return (
    <div className="form-container">
    <h1>Welcome To Admin Panel</h1>
    {user ? <Home_Admin /> : <button onClick={handleSignIn}>Sign In With Google</button>}
    <div style={{ marginTop: '10px' }}>
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  </div>
  
  );
};

export default SignIn;
