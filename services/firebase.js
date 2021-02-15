import * as firebase from 'firebase'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAo-HAgXQYZPzbmMm7lgFnuEP-zWd39R8E",
    authDomain: "firsthere-9ff14.firebaseapp.com",
    projectId: "firsthere-9ff14",
    storageBucket: "firsthere-9ff14.appspot.com",
    messagingSenderId: "352687729502",
    appId: "1:352687729502:web:ca32b084c87bd41108bdcf",
    measurementId: "G-QWPT50P6KV"
  };
class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);
    };
};

const firebaseService = new firebase();
export default firebaseService;