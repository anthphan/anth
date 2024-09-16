document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
