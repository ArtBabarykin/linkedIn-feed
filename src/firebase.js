import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgqMO9q3BZwKL7RNh5vKZrUVbOvPvvOr4",
  authDomain: "linkedin-clone-eec88.firebaseapp.com",
  projectId: "linkedin-clone-eec88",
  storageBucket: "linkedin-clone-eec88.appspot.com",
  messagingSenderId: "908850031591",
  appId: "1:908850031591:web:505fcd9514e8977a7deb42",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
