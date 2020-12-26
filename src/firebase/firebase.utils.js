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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
        } catch (e) {
            console.error(e);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;