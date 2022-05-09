// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUKO7B-PyiuvDijKo70gwguATP-jRjNGE",
  authDomain: "crwn-clothing-db-cts.firebaseapp.com",
  projectId: "crwn-clothing-db-cts",
  storageBucket: "crwn-clothing-db-cts.appspot.com",
  messagingSenderId: "56538513698",
  appId: "1:56538513698:web:ef24b16132db377ab6657b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //database

export const createUserDocumentFromAuth = async (userAuth) => {
  //to see existing document
  const userDocRef = doc(db, "users", userAuth.uid); //users collection
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); //true o false

  //if user data exists
  // return userDocRef
  //if user data doesnt exits
  // create / set doc with data from userAuth

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};
