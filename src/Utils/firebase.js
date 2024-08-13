// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIiu4OKfJ5Lv-fj1jhvZe7BbSGUA91N5M",
  authDomain: "netflix-gpt-c7f7b.firebaseapp.com",
  projectId: "netflix-gpt-c7f7b",
  storageBucket: "netflix-gpt-c7f7b.appspot.com",
  messagingSenderId: "962172794269",
  appId: "1:962172794269:web:171cfbe987b1529d28eb74",
  measurementId: "G-X0F70KMT0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();