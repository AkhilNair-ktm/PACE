import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
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

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const learnBtn = document.getElementById("learnBtn");
let userEmail = "";
let firstLetter = "";
const loginIcon = document.getElementById("loginIcon");
const loginItem = document.getElementById("loginItem");
const iconItem = document.getElementById("iconItem");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is logged in
    console.log("User is logged in");
    userEmail = user.email;
    console.log(userEmail);
    firstLetter = userEmail.charAt(0).toUpperCase();
    console.log(firstLetter);
    loginIcon.textContent = firstLetter;
    loginItem.classList.add("hidden");
    iconItem.classList.remove("hidden");
    //.textContent = firstLetter;
    learnBtn.href = "modules.html";
  } else {
    // No user is logged in
    console.log("No user is logged in");

    loginItem.classList.remove("hidden");
    iconItem.classList.add("hidden");
    // Redirect to login page
    learnBtn.href = "Login.html";
  }
});
console.log(userEmail);

const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// scroll section active

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navlinks = document.querySelectorAll(".nav-link");

  let current = "home";
  sections.forEach((sections) => {
    const sectionTop = sections.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = sections.getAttribute("id");
    }
  });
  navlinks.forEach((item) => {
    item.classList.remove("active");
    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};
window.addEventListener("scroll", activeLink);

// scroll reveal animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 100,
  reset: true,
});
sr.reveal(".home_data,.about_top,.contact_card");
sr.reveal(".home_image", { delay: 700, scale: 0.8 });

sr.reveal(".about_item1_content,.about_item2_img", {
  origin: "right",
});

sr.reveal(".about_item2_content,.about_item1_img", {
  origin: "left",
});
