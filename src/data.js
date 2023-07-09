// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firestore, storage
import { getFirestore, collection, query, onSnapshot, orderBy, doc, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBzJRd2TzLsYKv_1SjWiNrzSDvgz7lDlM4",
    authDomain: "photo-gallery-884d1.firebaseapp.com",
    projectId: "photo-gallery-884d1",
    storageBucket: "photo-gallery-884d1.appspot.com",
    messagingSenderId: "81210284497",
    appId: "1:81210284497:web:fbcdcb0034acd7865ce8f0",
    measurementId: "G-HM65V253GP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

console.log('db', db)

export { db, storage, collection, query, onSnapshot, orderBy, doc, addDoc, ref, uploadBytesResumable, getDownloadURL, Timestamp };
