const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('open');
hamburger.classList.toggle('active');
});

links.forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('open');
hamburger.classList.remove('active');
});
});