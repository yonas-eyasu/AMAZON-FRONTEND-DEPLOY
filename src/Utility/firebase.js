
import  firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB6scynPyNbam_F2CO5UvLdGgXY7ZmXL68",
  authDomain: "clone-5d2fc.firebaseapp.com",
  projectId: "clone-5d2fc",
  storageBucket: "clone-5d2fc.appspot.com",
  messagingSenderId: "316353376380",
  appId: "1:316353376380:web:f994a7e57e9f8ba01b19f9"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
