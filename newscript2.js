// Smooth interactions
document.querySelectorAll('.link-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('More details coming soon!');
  });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.value-item, .card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});

// Gallery button
document.querySelector('.gallery-btn').addEventListener('click', () => {
  alert('Gallery coming soon!');
});
