import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAwmqE42UM9-7-VKU-TNGCe9sQxEZWyklM",
    authDomain: "tatewbs.firebaseapp.com",
    projectId: "tatewbs",
    storageBucket: "tatewbs.appspot.com",
    messagingSenderId: "89182981504",
    appId: "1:89182981504:web:9881187613861d8b220565"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };
