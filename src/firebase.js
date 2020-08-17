import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9rYtHEZlJov--VxWF754K_AXQ5j8stZg",
    authDomain: "twitter-react-clone-vkj.firebaseapp.com",
    databaseURL: "https://twitter-react-clone-vkj.firebaseio.com",
    projectId: "twitter-react-clone-vkj",
    storageBucket: "twitter-react-clone-vkj.appspot.com",
    messagingSenderId: "867463210848",
    appId: "1:867463210848:web:f64c9d8dd5b992f4e92005",
    measurementId: "G-JCQVVH91CZ"
  };

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const db = FirebaseApp.firestore();

export default db;