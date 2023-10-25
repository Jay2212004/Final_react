import React, { useState } from 'react';
import { auth } from './config';
import './SignUp.css'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       await auth.createUserWithEmailAndPassword(email, password);
//       // User registration successful
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

  return (<div>Hello</div>
//     <div className="form-container">
//   <h2>Sign Up</h2>
//   <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//   <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//   <button onClick={handleSignUp}>Sign Up</button>
// </div>

  );
};

export default SignUp;
