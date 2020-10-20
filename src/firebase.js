import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyByempAssGPGZFRnTi8f7d18nbUNM007S0",
  authDomain: "todo-app-cp-ca61b.firebaseapp.com",
  databaseURL: "https://todo-app-cp-ca61b.firebaseio.com",
  projectId: "todo-app-cp-ca61b",
  storageBucket: "todo-app-cp-ca61b.appspot.com",
  messagingSenderId: "907098943323",
  appId: "1:907098943323:web:ece70866bb89fd055c747e",
  measurementId: "G-GDKEV1RCRN"
});


const db = firebaseApp.firestore();

export default db;

/*  code snippet for firebase

import firebase from "firebase";

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;

change const firebaseConfig = ... -> firebaseApp = firebase.initilizeApp({

})

 */