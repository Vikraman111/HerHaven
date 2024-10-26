// firebaseConfig.js

// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjxmfbLu5-sgwaDn0JDf3hfQ5O-MEsGFs",
  authDomain: "womensafetyapp-7dde2.firebaseapp.com",
  databaseURL: "https://womensafetyapp-7dde2-default-rtdb.firebaseio.com/",
  projectId: "womensafetyapp-7dde2",
  storageBucket: "womensafetyapp-7dde2.appspot.com",
  messagingSenderId: "247210878394",
  appId: "1:247210878394:web:0dfdd7a9f70ce6bfd72983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore database instance
export { db };
