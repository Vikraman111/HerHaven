// Import Firebase authentication functions
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Initialize Firebase Auth
const auth = getAuth();

document.getElementById("registerBtn").addEventListener("click", async () => {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Successfully registered
    const user = userCredential.user;
    document.getElementById(
      "registerStatus"
    ).innerText = `Registration successful! Welcome, ${user.email}.`;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById(
      "registerStatus"
    ).innerText = `Error: ${errorMessage}`;
    console.error(`Error: ${errorCode} - ${errorMessage}`);
  }
});

// Reference to the DOM elements
const registerBtn = document.getElementById("registerBtn");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerStatus = document.getElementById("registerStatus");

// Handle the Register Button Click
registerBtn.addEventListener("click", () => {
  const email = registerEmail.value;
  const password = registerPassword.value;

  // Firebase Registration Process
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registered successfully
      registerStatus.style.color = "green";
      registerStatus.innerText = "Registration successful!";

      // You can redirect the user to the login page after successful registration
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    })
    .catch((error) => {
      // Handle registration errors
      registerStatus.innerText = error.message;
    });
});
