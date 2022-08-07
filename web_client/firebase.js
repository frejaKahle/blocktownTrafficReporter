import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, setDoc, updateDoc, deleteDoc, where } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getKey } from "./getkey.js";


const firebaseApp = initializeApp({
    apiKey: getKey(),
    authDomain: "blocktown-51d59.firebaseapp.com",
    projectId: "blocktown-51d59",
    storageBucket: "blocktown-51d59.appspot.com",
    messagingSenderId: "298020222830",
    appId: "1:298020222830:web:0507c0edeb1886b958737f"
}, "BTRWebUI");

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const docExists = async(docRef) => {
    return (await fsdbOps.getDoc(docRef)).exists();
};
const docData = async(docRef) => {
    return (await fsdbOps.getDoc(docRef)).data();
};


const roadblocksRef = collection(db, "roadblocks");
const usersRef = collection(db, "users");
const fsdbOps = {
    getDoc: getDoc,
    setDoc: setDoc,
    addDoc: addDoc,
    getDocs: getDocs,
    updateDoc: updateDoc,
    deleteDoc: deleteDoc,
    docExists: docExists,
    docData: docData,
    query: query,
    doc: doc,
    collection: collection,
    where: where
}
export { auth, roadblocksRef, usersRef, fsdbOps };