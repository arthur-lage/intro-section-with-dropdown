const navLinks = document.querySelectorAll(".nav-link.has-dropdown");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.toggle("active");
  });
});