import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgS1Zt8dWu84giOLUHfFzc2loE9aM_2aE",
    authDomain: "signal-clone-native-970f9.firebaseapp.com",
    projectId: "signal-clone-native-970f9",
    storageBucket: "signal-clone-native-970f9.appspot.com",
    messagingSenderId: "1091682518126",
    appId: "1:1091682518126:web:e1aab95cc0d95a6b39527f",
    measurementId: "G-QKNHS4W8SY"
  };


  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app()
  }

  const db = app.firestore()
  const auth = firebase.auth()

  export { db, auth };