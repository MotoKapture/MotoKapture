// MotoKapture — main.js

// Mobile menu toggle
const toggle = document.getElementById('mobile-toggle');
const menu = document.getElementById('mobile-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.style.display !== 'none';
    menu.style.display = isOpen ? 'none' : 'block';
    toggle.textContent = isOpen ? '☰' : '✕';
  });
}

// Close mobile menu on link click
if (menu) {
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.style.display = 'none';
      if (toggle) toggle.textContent = '☰';
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
