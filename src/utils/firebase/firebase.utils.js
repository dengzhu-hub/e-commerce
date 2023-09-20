// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/**
 *  Your web app's Firebase configuration
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, authDomain: string}}
 */
const firebaseConfig = {
  apiKey: "AIzaSyB4W9dqjQnuA8lrgOit0kFTn9VxOb6f9YA",
  authDomain: "clothing-app-study.firebaseapp.com",
  projectId: "clothing-app-study",
  storageBucket: "clothing-app-study.appspot.com",
  messagingSenderId: "910303724015",
  appId: "1:910303724015:web:e38de8de79cbd8c633f61a",
};

/**
 * Initialize Firebase
 * @type {FirebaseApp}
 */
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
facebookAuthProvider.setCustomParameters({
  prompt: "select_account",
});
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePop = () => signInWithPopup(auth, googleProvider);
export const signWithFaacePop = () =>
  signInWithPopup(auth, facebookAuthProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "user", userAuth.uid);
  // console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  // if data not exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
/**email and password to login in
 * @param {string} email, password
 * @returns {Promise}
 */
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
/**sign out method
 * @param {undefined} none
 * @return {undefined}
 * @private {boolean} false
 */
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener =  (callback) => {
  onAuthStateChanged(auth, callback);
};
/**
 * {
 * next: callback,
 * error: error callback,
 * complete: complete callback}
 * 
 */
