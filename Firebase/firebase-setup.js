import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// To import a Firebase service, use this pattern: import {} from 'firebase/<service>'
//Your web app's Firebase configuration.
// Copy this object from Firebase console
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";

// const firebaseConfig = {
//     apiKey: "AIzaSyDcGvGiN8JSqkkv0m-Oi3k9cdMb9ENBgTI",
//     authDomain: "cs5520-974d7.firebaseapp.com",
//     projectId: "cs5520-974d7",
//     storageBucket: "cs5520-974d7.appspot.com",
//     messagingSenderId: "63810980360",
//     appId: "1:63810980360:web:135266f0226631f6705fbd"

// }

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const myApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(myApp);
