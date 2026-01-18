// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhQ_5lX5C3J1H1msLjrkhcfMlt6eLQ-bE",
    authDomain: "fixmate-d741e.firebaseapp.com",
    projectId: "fixmate-d741e",
    storageBucket: "fixmate-d741e.firebasestorage.app",
    messagingSenderId: "31723365117",
    appId: "1:31723365117:web:fb9dc2edb5fdb2a01a1494",
    measurementId: "G-MPMSDNMTT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);