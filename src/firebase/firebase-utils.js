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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);  
        }
    }
    return userRef; 
}


firebase.initializeApp(config);
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;