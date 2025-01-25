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
