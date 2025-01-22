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

const module1 = document.getElementById("mod1-link");
const module2 = document.getElementById("mod2-link");
const module3 = document.getElementById("mod3-link");
const module4 = document.getElementById("mod4-link");
const module5 = document.getElementById("mod5-link");
const module6 = document.getElementById("mod6-link");
const module7 = document.getElementById("mod7-link");

const mainBody1 = document.getElementById("mod1");
const mainBody2 = document.getElementById("mod2");
const mainBody3 = document.getElementById("mod3");
const mainBody4 = document.getElementById("mod4");
const mainBody5 = document.getElementById("mod5");
const mainBody6 = document.getElementById("mod6");
const mainBody7 = document.getElementById("mod7");
const mainBody8 = document.getElementById("mod8");

module1.addEventListener("click", () => {
  mainBody1.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody7.classList.add("hidden");
});

module2.addEventListener("click", () => {
  mainBody2.classList.toggle("hidden");
  mainBody1.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody7.classList.add("hidden");
});
module3.addEventListener("click", () => {
  mainBody3.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody1.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody7.classList.add("hidden");
});
module4.addEventListener("click", () => {
  mainBody4.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody1.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody7.classList.add("hidden");
});
module5.addEventListener("click", () => {
  mainBody5.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody1.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody7.classList.add("hidden");
});
module6.addEventListener("click", () => {
  mainBody6.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody1.classList.add("hidden");
  mainBody7.classList.add("hidden");
});
module7.addEventListener("click", () => {
  mainBody7.classList.toggle("hidden");
  mainBody2.classList.add("hidden");
  mainBody3.classList.add("hidden");
  mainBody4.classList.add("hidden");
  mainBody5.classList.add("hidden");
  mainBody6.classList.add("hidden");
  mainBody1.classList.add("hidden");
});

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
