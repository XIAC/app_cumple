import firebase  from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyDTUMiAKKoDWOu1Q1R5vThH7wX9mECKKcc",
    authDomain: "appcumple-f88ba.firebaseapp.com",
    databaseURL: "https://appcumple-f88ba.firebaseio.com",
    projectId: "appcumple-f88ba",
    storageBucket: "appcumple-f88ba.appspot.com",
    messagingSenderId: "600243611925",
    appId: "1:600243611925:web:327a5342c491f9c3c7e11c"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);