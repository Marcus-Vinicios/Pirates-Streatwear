import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjWu9_AJbGVDuPhXlXGq_n0MDHmt8MzxY",
    authDomain: "pirates-streatwear.firebaseapp.com",
    projectId: "pirates-streatwear",
    storageBucket: "pirates-streatwear.appspot.com",
    messagingSenderId: "551869706847",
    appId: "1:551869706847:web:0283d4ebff5e0eedd461ea",
    measurementId: "G-95W10WDJR7"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();