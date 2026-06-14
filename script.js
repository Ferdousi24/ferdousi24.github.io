// ── Dropdown menu (.menu-btn / .dropdown) ──
const menuBtn  = document.querySelector('.menu-btn');
const dropdown = document.querySelector('.dropdown');

if (menuBtn && dropdown) {
  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', function() {
    dropdown.classList.remove('show');
  });
}

// ── Slide-in menu (#menu) ──
const toggleBtn = document.querySelector('a[href="#menu"]');
const closeBtn  = document.querySelector('#menu .close');
const menu      = document.getElementById('menu');

if (toggleBtn && menu) {
  toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('is-menu-visible');
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.remove('is-menu-visible');
  });
}

// Close when clicking outside
document.addEventListener('click', function(e) {
  if (menu && !menu.contains(e.target) && e.target !== toggleBtn) {
    document.body.classList.remove('is-menu-visible');
  }
});