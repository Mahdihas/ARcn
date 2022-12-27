// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbk0ME6tyME9C0tcXl0SEoqspcmJf3YPI",
  authDomain: "arcn-project.firebaseapp.com",
  projectId: "arcn-project",
  storageBucket: "arcn-project.appspot.com",
  messagingSenderId: "519445290870",
  appId: "1:519445290870:web:23457a913ef5126e12a457",
  measurementId: "G-M2KQVCJP1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;