// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj1EQjcNFlLDHNGuJoDlPJ2SDk6tYzm1c",
  authDomain: "ecommerce-d5844.firebaseapp.com",
  databaseURL: "https://ecommerce-d5844-default-rtdb.firebaseio.com",
  projectId: "ecommerce-d5844",
  storageBucket: "ecommerce-d5844.appspot.com",
  messagingSenderId: "239503731448",
  appId: "1:239503731448:web:9b21a42b595ff2c5fbe90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export default app;