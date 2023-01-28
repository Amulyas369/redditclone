// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//  import firebase  from "firebase";
 import "firebase/firestore";
 import 'firebase/compat/firestore';
  import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXWT6enYgx0i5Pm8rsdRFVB4SPyvxyhZc",
  authDomain: "reddit-clone-feefd.firebaseapp.com",
  projectId: "reddit-clone-feefd",
  storageBucket: "reddit-clone-feefd.appspot.com",
  messagingSenderId: "169709353144",
  appId: "1:169709353144:web:19c668c36322daa3565c4d",
  measurementId: "G-TX0KYBYFF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebaseApp=firebase.initializeApp(firebaseConfig)
const auth=getAuth();
 //const db = getFirestore(app);
//const db = getDatabase(app);
const db=initializeFirestore(app,{
  experimentalForceLongPolling:true,
})
export{app,auth,db}
//  export default db;