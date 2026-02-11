// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      mainNav.classList.remove('active');
    });
  });
});

// Add to cart functionality
document.querySelectorAll('.add-to-cart-btn, .quick-add').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    
    fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Update cart count
      const cartCount = document.querySelector('.cart-count');
      if (cartCount) {
        cartCount.textContent = data.item_count;
      }
      
      // Show success message
      alert('Product added to cart!');
    })
    .catch(error => console.error('Error:', error));
  });
});

// Price range slider for collections
function initPriceSlider() {
  const slider = document.querySelector('.price-slider');
  if (!slider) return;
  
  // Implementation for price range filtering
}

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

console.log('Theme loaded successfully');
