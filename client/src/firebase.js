import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8_1OwxwRGZdKft4-rrEsgaSN1eDklc7I",
    authDomain: "ecommerce-47b6f.firebaseapp.com",
    databaseURL: "https://ecommerce-47b6f.firebaseio.com",
    projectId: "ecommerce-47b6f",
    storageBucket: "ecommerce-47b6f.appspot.com",
    messagingSenderId: "358206069871",
    appId: "1:358206069871:web:6a2e33a0298df41ef5019a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();