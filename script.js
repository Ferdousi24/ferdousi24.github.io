const menuBtn = document.getElementById("menuBtn");
const dropdown = document.getElementById("dropdown");

// toggle menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

// close when clicking outside
document.addEventListener("click", () => {
  dropdown.classList.remove("show");
});

// smooth scroll already works if you have:
document.documentElement.style.scrollBehavior = "smooth";