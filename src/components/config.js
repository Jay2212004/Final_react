import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCDyuwqxEQq5H1tX0lpABAeTcZIkHqrQjY",
  authDomain: "pawprint-1af7d.firebaseapp.com",
  databaseURL: "https://pawprint-1af7d-default-rtdb.firebaseio.com",
  projectId: "pawprint-1af7d",
  storageBucket: "pawprint-1af7d.appspot.com",
  messagingSenderId: "776130279088",
  appId: "1:776130279088:web:f6fd45ac432668b63ded75",
  measurementId: "G-NG6EXFSFW0"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
export {auth,provider};