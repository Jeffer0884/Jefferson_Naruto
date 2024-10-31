// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZacVm7vvnchadq-L8e8SVijKtwKnSNso",
  authDomain: "naruto-1b9c7.firebaseapp.com",
  projectId: "naruto-1b9c7",
  storageBucket: "naruto-1b9c7.appspot.com",
  messagingSenderId: "895265281650",
  appId: "1:895265281650:web:c92fdf579da444f6ea14eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
