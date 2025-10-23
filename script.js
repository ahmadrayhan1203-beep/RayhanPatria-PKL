// Simple fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = {threshold: 0.15};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);

faders.forEach(f => observer.observe(f));
