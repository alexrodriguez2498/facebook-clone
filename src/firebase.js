import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs21CF6T_vfLxI0zf0hYbwqFMTCmaRQ-k",
  authDomain: "facebook-clone-7a29c.firebaseapp.com",
  databaseURL: "https://facebook-clone-7a29c.firebaseio.com",
  projectId: "facebook-clone-7a29c",
  storageBucket: "facebook-clone-7a29c.appspot.com",
  messagingSenderId: "397875301469",
  appId: "1:397875301469:web:8702f27ab51040c5b511b4",
  measurementId: "G-GBVCP26JQG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore()
const auth = fireabse.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db