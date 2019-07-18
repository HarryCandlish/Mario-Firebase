import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCXP_6cGTBttemMznwtpLnG66r590UBVUE",
  authDomain: "basic-application-eb394.firebaseapp.com",
  databaseURL: "https://basic-application-eb394.firebaseio.com",
  projectId: "basic-application-eb394",
  storageBucket: "",
  messagingSenderId: "385715407466",
  appId: "1:385715407466:web:bc0684d80c09cbcc"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
