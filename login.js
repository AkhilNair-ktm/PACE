const signUpLink = document.getElementById("signUpLink");
const loginDiv = document.getElementById("loginDiv");
const signUpDiv = document.getElementById("signUpDiv");

signUpLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior

  // Hide the login div
  loginDiv.classList.add("hidden");

  // Show the sign-up div
  signUpDiv.classList.remove("hidden");
});
