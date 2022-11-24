const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDh9Z0-myPEH6gocFjrAIResFDE9XH4gGc",
    authDomain: "backend-test-24a19.firebaseapp.com",
    projectId: "backend-test-24a19",
    storageBucket: "backend-test-24a19.appspot.com",
    messagingSenderId: "958001544331",
    appId: "1:958001544331:web:029d096c378b14ff10288e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
