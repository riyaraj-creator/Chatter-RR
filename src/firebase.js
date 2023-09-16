import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCXsF03nh7UacsZ1pUSc7RA5rtr75Vu4PE",
    authDomain: "chatter-e163b.firebaseapp.com",
    projectId: "chatter-e163b",
    storageBucket: "chatter-e163b.appspot.com",
    messagingSenderId: "986238999601",
    appId: "1:986238999601:web:324aaa108b2d132f5e8910"
  }).auth()