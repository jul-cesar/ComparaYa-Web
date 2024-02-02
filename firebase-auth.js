// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjgxZOgtQq3PwwHuwIE7MEu05KUIgW4zQ",
  authDomain: "comparaya-7a7d1.firebaseapp.com",
  projectId: "comparaya-7a7d1",
  storageBucket: "comparaya-7a7d1.appspot.com",
  messagingSenderId: "448566394016",
  appId: "1:448566394016:web:cbdc38a5c9d7fdd2bb5dc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
