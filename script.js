// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId); 
      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth', 
              block: 'start' 
          });
      }
  });
});
// Form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form inputs
  const name = document.getElementById('contact-name').value.trim();
  const phone = document.getElementById('contact-phone').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  // Validate inputs
  if (!name || !phone || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }


  alert('Form submitted successfully!');
  this.reset(); // Reset the form
});
// Animate skill bars on scroll
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.progress-bar');

  if (isElementInViewport(skillsSection)) {
      skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.transition = 'width 2s ease-in-out'; 
          bar.style.width = width; 
      });
  }
});

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerHeight || document.documentElement.clientWidth)
  );
}
// Add hover and click effects to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)';
      item.style.boxShadow = '0 10px 25px rgba(0, 128, 255, 0.5)';
  });

  item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  });

  item.addEventListener('click', () => {
      alert(`You clicked on: ${item.querySelector('.name').textContent}`);
  });
});
// Update the year in the footer dynamically
document.querySelector('.description strong').textContent += new Date().getFullYear();
// Back to Top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});
// Toggle mobile menu
const navbar = document.querySelector('.navbar');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰'; // Hamburger icon
document.body.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
navbar.classList.add('active');
});

// Close menu functionality
const closeMenu = document.querySelector('.close-menu');
closeMenu.addEventListener('click', () => {
navbar.classList.remove('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
link.addEventListener('click', () => {
  navbar.classList.remove('active');
});
});
// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = () => img.removeAttribute('data-src');
  });
});