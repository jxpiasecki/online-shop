import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB0TJbzM-jo8zxDmfvwNen1-XHZQe7OEhc",
    authDomain: "online-shop-db-25d1d.firebaseapp.com",
    projectId: "online-shop-db-25d1d",
    storageBucket: "online-shop-db-25d1d.appspot.com",
    messagingSenderId: "482594500130",
    appId: "1:482594500130:web:6ae2d4a08d0a57e58ae47b",
    measurementId: "G-BFDXDX6FGZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;