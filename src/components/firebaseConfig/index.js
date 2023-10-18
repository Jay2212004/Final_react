import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
export default function StartFirebase(){
    const firebaseConfig={
        apiKey:""
        authDomain:
        databaseURL:"https://pawprint-1af7d-default-rtdb.firebaseio.com/"
        projectId:
        storageBucket:
        messagingSenderId:
        appId:
    };
    const app= initializeApp(firebaseConfig);
    return getDatabase(app);
}