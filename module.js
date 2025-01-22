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
