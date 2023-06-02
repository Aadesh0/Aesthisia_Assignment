
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0Mm0XbLlg7ZML5g3FLz1QmeS6P8Ya8lA",
  authDomain: "react-login-authenticati-a2043.firebaseapp.com",
  projectId: "react-login-authenticati-a2043",
  storageBucket: "react-login-authenticati-a2043.appspot.com",
  messagingSenderId: "950944051567",
  appId: "1:950944051567:web:289b1c0be7e9bf0033789a",
  measurementId: "G-BMG7HX7MVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;