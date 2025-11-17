// script.js
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Jika link adalah anchor lokal
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
