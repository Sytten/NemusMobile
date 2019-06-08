import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyBPTZI7EQFWgoMiRo6EP6jqkstXMK-6j2E",
    authDomain: "nemus-243119.firebaseapp.com",
    databaseURL: "https://nemus-243119.firebaseio.com",
    projectId: "nemus-243119",
    storageBucket: "nemus-243119.appspot.com",
    messagingSenderId: "610529020430",
    appId: "1:610529020430:web:cf528cedf1b30888"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
