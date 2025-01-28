import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";

import {
  getAuth,
  signOut,
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
const logOut = document.getElementById("Logout");
logOut.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("logged out");
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log("error", error);
    });
});

const sidebarToggler = document.getElementById("sidebarToggler");
const sideBar = document.querySelector(".sidebar");

// Toggle the sidebar and icons
sidebarToggler.addEventListener("click", () => {
  sideBar.classList.toggle("hidden"); // Show/hide the sidebar
  sideBar.classList.add("w-64"); // Ensure sidebar has a width

  // Toggle the icons
  if (sidebarToggler.classList.contains("ri-menu-2-line")) {
    sidebarToggler.classList.remove("ri-menu-2-line");
    sidebarToggler.classList.add("ri-close-line");
  } else {
    sidebarToggler.classList.remove("ri-close-line");
    sidebarToggler.classList.add("ri-menu-2-line");
  }
});

const moduleLinks = [
  "mod1-link",
  "mod2-link",
  "mod3-link",
  "mod4-link",
  "mod5-link",
  "mod6-link",
  "mod7-link",
];
const bodySections = [
  "mod1",
  "mod2",
  "mod3",
  "mod4",
  "mod5",
  "mod6",
  "mod7",
  "mod8",
  "profileBody",
  "settingsBody",
  "opening-pg",
];

// page management

const profile = document.getElementById("Profile");
const settings = document.getElementById("Settings");

const hideAllSections = () => {
  bodySections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.classList.add("hidden");
  });
};

const showSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) section.classList.remove("hidden");
};

moduleLinks.forEach((linkId, index) => {
  const link = document.getElementById(linkId);
  if (link) {
    link.addEventListener("click", () => {
      hideAllSections();
      showSection(`mod${index + 1}`);
    });
  }
});

profile.addEventListener("click", () => {
  hideAllSections();
  showSection("profileBody");
});

settings.addEventListener("click", () => {
  hideAllSections();
  showSection("settingsBody");
});

// logOut.addEventListener("click", () => {
//   hideAllSections();
//   showSection("logoutBody");
// });

// ------------

const sidebar = document.querySelector(".sidebar");
const sidebarTitle = document.querySelectorAll(".sidebarTitle");

// Add hover event listeners to toggle title visibility
sidebar.addEventListener("mouseover", () => {
  sidebarTitle.forEach((title) => {
    title.classList.remove("hidden");
  });
});

sidebar.addEventListener("mouseout", () => {
  sidebarTitle.forEach((title) => {
    title.classList.add("hidden");
  });
});
