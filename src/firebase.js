// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_uj4LjK7W2d_P6dLHYESc3d8Jx6-XfoA",
  authDomain: "task-tracker-app-b91c2.firebaseapp.com",
  projectId: "task-tracker-app-b91c2",
  storageBucket: "task-tracker-app-b91c2.appspot.com",
  messagingSenderId: "948326927736",
  appId: "1:948326927736:web:dceb611a836b230c2b8c8d",
  measurementId: "G-BDG37SY43Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;