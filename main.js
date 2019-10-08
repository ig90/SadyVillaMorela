
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

nav_link.forEach((nav_link) => {
  nav_link.addEventListener('click', handleClick);
});


function showNavPanel() {

  let scroll = this.scrollY;
  let nav = document.querySelector('nav');
  let logo = document.querySelector('.logo');
  if (scroll >= 100) {
    nav.classList.add('nav-panel');
    logo.style.display = 'block';
  } else {
    logo.style.display = 'none';
    nav.classList.remove('nav-panel');
  }
}

window.addEventListener("scroll", showNavPanel);




