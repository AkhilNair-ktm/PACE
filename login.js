import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsY1X-dFMumMntR74GF86Otx-VEYKZzIE",
  authDomain: "pace-52f35.firebaseapp.com",
  projectId: "pace-52f35",
  storageBucket: "pace-52f35.appspot.com",
  messagingSenderId: "630887135858",
  appId: "1:630887135858:web:317de71e655d58276e60eb",
  measurementId: "G-G4QFKJZFRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// page toggling
const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signUpDiv");
const signupLink = document.getElementById("signUpLink");

signupLink.addEventListener("click", () => {
  loginDiv.classList.add("hidden");
  signupDiv.classList.remove("hidden");
});

const loginBtn = document.getElementById("loginBtn");
const loginMsg = document.getElementById("loginMessage");

loginBtn.addEventListener("click", () => {
  console.log("login clicked");
  const loginEmail = document.getElementById("email").value;
  const loginPassword = document.getElementById("pass").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      loginMsg.classList.add("text-green-600");
      loginMsg.innerHTML = "login successful";
      setTimeout(() => {
        window.location.href = "modules.html";
      }, 500);
    })
    .catch((error) => {
      const errorMessage = error.message;
      loginMsg.classList.add("text-red-400");
      loginMsg.innerHTML = "login unsuccessful";
    });
});

const registerBtn = document.getElementById("register");
const registerMsg = document.getElementById("registerMessage");

registerBtn.addEventListener("click", () => {
  const registerEmail = document.getElementById("signupEmail").value;
  const registerPassword = document.getElementById("signupPass").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      registerMsg.classList.add("text-green-600");
      registerMsg.innerHTML = "Registration successful";
      setTimeout(() => {
        window.location.href = "modules.html";
      }, 500);
    })
    .catch((error) => {
      const errorMessage = error.message;
      registerMsg.classList.add("text-red-400");
      registerMsg.innerHTML = "Registration unsuccessful";
    });
});
