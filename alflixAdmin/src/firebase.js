import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FKEY,
  authDomain: "alflixvideoz-29d65.firebaseapp.com",
  projectId: "alflixvideoz-29d65",
  storageBucket: process.env.SBCKT,
  messagingSenderId: "746347983871",
  appId: "1:746347983871:web:035571a318b7977538edca",
  measurementId: "G-8G9C93V4LY"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;