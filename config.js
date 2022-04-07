import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKSaXFAEJVU6y6O0Q8vj6FNPR34Rdd6E8",
    authDomain: "team-voting-705ef.firebaseapp.com",
    projectId: "team-voting-705ef",
    storageBucket: "team-voting-705ef.appspot.com",
    messagingSenderId: "766027629892",
    appId: "1:766027629892:web:daec743f5c80ab9ebd4311"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();