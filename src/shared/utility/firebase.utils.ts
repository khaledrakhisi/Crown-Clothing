import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config: object = {
  apiKey: "AIzaSyBHQ-5SQX5Y4yrn81EN3TVLS-JOItYNNEU",
  authDomain: "crwn-clothing-db-cdb13.firebaseapp.com",
  projectId: "crwn-clothing-db-cdb13",
  storageBucket: "crwn-clothing-db-cdb13.appspot.com",
  messagingSenderId: "933629571735",
  appId: "1:933629571735:web:ee0a5da8f46e8e61b2afd2",
  measurementId: "G-F4R1W6NDW0",
};

// export interface profileDoc { 
//   userAuth: firebase.User | null, 
//   additionalData : any,
// }

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData: object) => {
  if (!userAuth) return;

  // console.log(userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { email } = userAuth;

    try {
      await userRef.set({
        email,        
        createAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        console.log("Error occurred when creating new user and storing, ", message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
