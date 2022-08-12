import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEijOD5QmdJRoIEjNS5tjZVFx3WVI8oQ0",
    authDomain: "janasampandsa.firebaseapp.com",
    projectId: "janasampandsa",
    storageBucket: "janasampandsa.appspot.com",
    messagingSenderId: "663645607784",
    appId: "1:663645607784:web:566e0e58e80ae2ffc568dd"
};  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };