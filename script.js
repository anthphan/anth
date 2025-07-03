document.getElementById('menu-toggle').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
    document.getElementById('menu-toggle').classList.remove('active');
  });
});