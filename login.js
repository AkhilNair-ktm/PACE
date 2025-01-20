const signUpLink = document.getElementById("signUpLink");
const loginDiv = document.getElementById("loginDiv");
const signInBtn = document.getElementById("signIn");
const signUpDiv = document.getElementById("signUpDiv");
const emailDiv = document.getElementById("email");
const passwordDiv = document.getElementById("pass");
const loginMessage = document.getElementById("loginMessage");
const learnMore = document.getElementById("learnMore");
console.log(document.getElementById("signUpLink"));

const userEmail = "pace@gmail.com";
const password = "0000";
const gitRepoURL = "https://shaun099.github.io/Space_Apps/second.html";
let isLoggedIn = false;

signUpLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior

  // Hide the login div
  loginDiv.classList.add("hidden");

  // Show the sign-up div
  signUpDiv.classList.remove("hidden");
});

signInBtn.addEventListener("click", () => {
  const inputGmail = emailDiv.value;
  const inputPass = passwordDiv.value;

  if (inputGmail === userEmail && inputPass === password) {
    // If credentials match, show success message
    loginMessage.style.color = "green";
    loginMessage.textContent = "Login successful. Welcome!";
    isLoggedIn = true;
    console.log(isLoggedIn);
    setTimeout(() => {
      window.location.href = "index.html";
  }, 500);
} else {
    // If credentials don't match, show error message
    loginMessage.style.color = "red";
    loginMessage.textContent = "Invalid username or password. Please try again.";
}
});

if (learnMore) {
  learnMore.addEventListener("click", (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      window.location.href = gitRepoURL;
    } else {
      alert("You must log in to access this page.");
      window.location.href = "Login.html";
    }
  });
} else {
  console.error("Element with ID 'learnMore' not found.");
}
