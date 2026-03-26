const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");
const links = document.querySelectorAll(".dropdown a");

// Toggle menu
menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// Close on link click
links.forEach(link => {
  link.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".topbar")) {
    dropdown.classList.remove("show");
  }
});