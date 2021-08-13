import firebase from "firebase/app";
import firestore from "firebase/firestore";
// import firebase from "firebase";


const firebaseConfig = {
// var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwmqE42UM9-7-VKU-TNGCe9sQxEZWyklM",
    authDomain: "tatewbs.firebaseapp.com",
    projectId: "tatewbs",
    storageBucket: "tatewbs.appspot.com",
    messagingSenderId: "89182981504",
    appId: "1:89182981504:web:9881187613861d8b220565"
};
    // });

firebase.initializeApp(firebaseConfig);
// var db = firebaseApp.firestore();

// export { db };
export default firebase;
