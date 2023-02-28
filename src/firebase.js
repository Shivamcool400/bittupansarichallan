import firebase from 'firebase/compat/app';




const firebaseConfig = {
    apiKey: "AIzaSyBMn1Q2eS9t78ajHOsqybtsQGUW-EErLzU",
    authDomain: "bittupansarichallan.firebaseapp.com",
    projectId: "bittupansarichallan",
    storageBucket: "bittupansarichallan.appspot.com",
    messagingSenderId: "1024908954012",
    appId: "1:1024908954012:web:1a6284cffa59a6977da059",
    measurementId: "G-SYXZ0P8Z3M"
  };

  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;