// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRAOQDldMgtgdldm0smil8M3UlKvz3k38",
  authDomain: "netflix-clone-6e6b8.firebaseapp.com",
  projectId: "netflix-clone-6e6b8",
  storageBucket: "netflix-clone-6e6b8.appspot.com",
  messagingSenderId: "994136391011",
  appId: "1:994136391011:web:4008482ef2151acbf72756",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
export const auth = getAuth(app);
