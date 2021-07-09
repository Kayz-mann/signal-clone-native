import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeHdLcyI7ZeHLXGVuYgRHqhwCVQ55ktRM",
    authDomain: "signal-clone-76c0c.firebaseapp.com",
    projectId: "signal-clone-76c0c",
    storageBucket: "signal-clone-76c0c.appspot.com",
    messagingSenderId: "1081624752753",
    appId: "1:1081624752753:web:bb4e21fb08f2931019a1d0",
    measurementId: "G-5BR9EQTK2D"
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