

/* particles */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('particles.js loaded');
});

/* menu */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const nav_link = document.querySelectorAll('.navigation__link');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);

// hide the menu after clicking on the menu item
nav_link.forEach((nav_link) => {
  nav_link.addEventListener('click', handleClick);
});

function showNavPanel() {

  let scroll = this.scrollY;
  let nav = document.querySelector('nav');
  let logo = document.querySelector('.logo');
  let offset = 60;
  if (scroll >= offset) {
    nav.classList.add('nav-panel');
    logo.style.display = 'block';
  } else {
    logo.style.display = 'none';
    nav.classList.remove('nav-panel');
  }
}

window.addEventListener("scroll", showNavPanel);

