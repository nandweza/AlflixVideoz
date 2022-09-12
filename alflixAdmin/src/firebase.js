import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZEsmROI8mcAVIcpQMHT2UNh1po1GslRo",
  authDomain: "alflixvz.firebaseapp.com",
  projectId: "alflixvz",
  storageBucket: "alflixvz.appspot.com",
  messagingSenderId: "233797989557",
  appId: "1:233797989557:web:98a665b717d48c231cfafc",
  measurementId: "G-4H9TEMY59S"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;