import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyANLqIxVaY3dRUarORCedZR9hYmvNJw6d4",
    authDomain: "janasampanda.firebaseapp.com",
    projectId: "janasampanda",
    storageBucket: "janasampanda.appspot.com",
    messagingSenderId: "428827828363",
    appId: "1:428827828363:web:a554054fd770868917348e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };