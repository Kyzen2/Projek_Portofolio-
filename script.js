document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

document.querySelector('.btn-primary').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

  