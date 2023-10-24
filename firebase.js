import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-_9eG1eW-lFL98bHg18l5TLbwcuDxQSE",
    authDomain: "clone-6f5b9.firebaseapp.com",
    projectId: "clone-6f5b9",
    storageBucket: "clone-6f5b9.appspot.com",
    messagingSenderId: "506397630000",
    appId: "1:506397630000:web:1fb24164c2e0d0072757f5",
    measurementId: "G-49MVV2JCKH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export { auth, db };

  //npm i firebase-tools
  //npm i firebase