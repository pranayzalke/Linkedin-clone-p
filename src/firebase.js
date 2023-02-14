// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBUCEpJEZztXE7RGUyPD6hVyt_eP8I9UM",
  authDomain: "linkedin-clone-65b1b.firebaseapp.com",
  projectId: "linkedin-clone-65b1b",
  storageBucket: "linkedin-clone-65b1b.appspot.com",
  messagingSenderId: "758512601241",
  appId: "1:758512601241:web:b35f99eaf9dbfe43955008",
  measurementId: "G-17JN2GT5N7"
};

 


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  //get the firebase databse
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,auth }
