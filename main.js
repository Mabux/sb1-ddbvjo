// Intersection Observer for section animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Initialize stars if this is the skills section
      if (entry.target.id === 'skills') {
        initializeStars();
      }
    }
  });
}, {
  threshold: 0.1
});

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Initialize star ratings
function initializeStars() {
  document.querySelectorAll('.stars').forEach(container => {
    const rating = parseFloat(container.dataset.rating);
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Clear existing stars
    container.innerHTML = '';
    
    // Add full stars
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      if (i < fullStars) {
        star.classList.add('full');
      } else if (i === fullStars && hasHalfStar) {
        star.classList.add('half');
      }
      container.appendChild(star);
    }
  });
}

// Add hover effect to experience and education items
document.querySelectorAll('.experience-item, .education-item').forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    item.style.background = `radial-gradient(circle at ${x}px ${y}px, #f5f5f5, white)`;
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.background = 'white';
  });
});