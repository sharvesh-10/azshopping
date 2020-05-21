import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyJ-9GFF3Rcp7svSan1XP-3wwlJnmiHrI",
    authDomain: "azshopping-db.firebaseapp.com",
    databaseURL: "https://azshopping-db.firebaseio.com",
    projectId: "azshopping-db",
    storageBucket: "azshopping-db.appspot.com",
    messagingSenderId: "775894049871",
    appId: "1:775894049871:web:b6024cdf8f6807bfb9363a",
    measurementId: "G-R0Y1W20BRB"
};

firebase.initializeApp(config);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;