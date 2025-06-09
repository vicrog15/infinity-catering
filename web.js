document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle functionality
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');
  const navLinks = document.querySelectorAll('.nav-link');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
    
    // Update aria-expanded attribute
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
  });
  
  // Section switching
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section
      const targetId = this.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);
      
      // Hide all sections
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Show target section
      targetSection.classList.add('active');
      
      // Close menu on mobile
      if (window.innerWidth <= 768) {
        menuToggle.classList.remove('active');
        sidebar.classList.remove('active');
        content.classList.remove('shifted');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      
      // Smooth scroll to section
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Show home section by default
  document.getElementById('home').classList.add('active');
});



