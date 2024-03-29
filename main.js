
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

// hides the menu after clicking on the menu item
nav_link.forEach((nav_link) => {
  nav_link.addEventListener('click', handleClick);
});

// shows navbar after scroll down
const showNavbar = () => {

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

const s = document.querySelectorAll('section');
const navbar = document.querySelector('nav');
let scrollpos = window.scrollY;
const currentSectionName = document.createElement('h3');
navbar.appendChild(currentSectionName);

const getSectionHeading = (s) => {
    return s.querySelector('h2').innerHTML;
};

// displays the current section on navbar
const setSectionHeading = (section) => {
  scrollpos = window.scrollY;

  if (section !== null){
    if(section.offsetTop <= scrollpos && scrollpos <= section.offsetHeight + section.offsetTop -30) {
      currentSectionName.innerHTML = getSectionHeading(section);
    } else {
      currentSectionName.innerHTML = '';
      section = section.nextElementSibling;
      setSectionHeading(section);
    }
  }
};

window.addEventListener('scroll', ()=>{
  let section = document.querySelector('section');
  setSectionHeading(section);
});

window.addEventListener("scroll", showNavbar);

/* gallery */

const gallery = document.querySelector('#gallery');

const createGalleryHeader = (hName) => {

  let h = document.createElement('h3');
      h.innerHTML = hName;
      gallery.appendChild(h);
};

const createGallery = (path, galleryName, hName) => {

  let xhr = new XMLHttpRequest();
  xhr.open("GET", path, true);
  xhr.responseType = 'document';
  xhr.onload = () => {
    if (xhr.status === 200) {

      createGalleryHeader(hName);

      let elements = xhr.response.getElementsByTagName("a");

      for (let x of elements) {

        if (x.href.match(/\.(jpe?g|png|webp)$/)) { 

          let imgLink = document.createElement('a');
          let img = new Image();
          imgLink.appendChild(img);
          imgLink.setAttribute('data-fslightbox', galleryName);
          imgLink.setAttribute('href', x.href); //setAttribute('href', '.'+ x.href.substr(x.href.indexOf('/images')));
          img.src = x.href;
          gallery.appendChild(imgLink);
          updateFsLightbox();
        } 
      }
    } 
    else {
      alert('Request failed. Returned status of ' + xhr.status);
    }
  }
  xhr.send();
}

createGallery("./images/", "gallery", "");
createGallery("./images/parter", "gallery-parter", "Parter");
createGallery("./images/apartament", "gallery-apartament", "Apartament");
createGallery("./images/pietro", "gallery-pietro", "Piętro");
createGallery("./images/klub", "gallery-klub", "Klub");

/* particles */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('particles.js loaded');
});