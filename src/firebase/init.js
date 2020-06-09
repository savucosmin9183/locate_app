import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAt9jyO_FFNuo8myMCp0llU4Ml3dsTzTgI",
    authDomain: "location-4c0e1.firebaseapp.com",
    databaseURL: "https://location-4c0e1.firebaseio.com",
    projectId: "location-4c0e1",
    storageBucket: "location-4c0e1.appspot.com",
    messagingSenderId: "129495347867",
    appId: "1:129495347867:web:00c2c1f9170bfbfe01cc3e",
    measurementId: "G-PHNMG4YX68"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()