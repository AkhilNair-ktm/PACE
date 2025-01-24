const signUpLink = document.getElementById("signUpLink");
const loginDiv = document.getElementById("loginDiv");
const signInBtn = document.getElementById("signIn");
const signUpDiv = document.getElementById("signUpDiv");
const emailDiv = document.getElementById("email");
const passwordDiv = document.getElementById("pass");
const loginMessage = document.getElementById("loginMessage");

const userEmail = "pace@gmail.com";
const password = "0000";
const gitRepoURL = "modules.html";

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
    setTimeout(() => {
      window.location.href = gitRepoURL;
    }, 500);
  } else {
    // If credentials don't match, show error message
    loginMessage.style.color = "red";
    loginMessage.textContent =
      "Invalid username or password. Please try again.";
  }
});
