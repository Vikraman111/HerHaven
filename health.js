import { db } from "./firebaseConfig.js";

import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const form = document.getElementById("health-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const condition = document.getElementById("condition").value;

  const healthDetails = {
    age: Number(age),
    height: Number(height),
    weight: Number(weight),
    condition: condition,
  };

  try {
    const docRef = await addDoc(collection(db, "healthDetails"), healthDetails);
    console.log("Document written with ID: ", docRef.id);

    form.reset();
    alert("Health details submitted successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error submitting details, please try again.");
  }
});
