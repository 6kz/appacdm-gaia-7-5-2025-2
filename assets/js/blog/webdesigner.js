'use strict'

const burger = document.querySelector('.usr-burger');
const menu = document.querySelector('.usr-menu');
const overlay = document.querySelector('.overlay');

burger.onclick = function () {
  if (burger.classList.contains('usr-burger--open')) {
    burger.classList.toggle('usr-burger--close');
  } else {
    burger.classList.add('usr-burger--open');
  }

  menu.classList.toggle('usr-hidden');
  overlay.classList.toggle('usr-show');
};

overlay.onclick = function () {
  burger.classList.add('usr-burger--close');
  menu.classList.add('usr-hidden');
  overlay.classList.remove('usr-show');
};

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    burger.classList.add('usr-burger--close');
    menu.classList.add('usr-hidden');
    overlay.classList.remove('usr-show');
  }
}

// scrollspy

const sections = document.querySelectorAll('section[id]');
const menu_links = document.querySelectorAll('nav a.bar-item');

const makeActive = (link) => menu_links[link].classList.add('black');
const removeActive = (link) => menu_links[link].classList.remove('black');
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

const sectionMargin = 100;

let currentActive = 0;

window.addEventListener('scroll', () => {
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

  if (current !== currentActive) {
    removeAllActive();
    currentActive = current;
    makeActive(current);
  }
});

// Modal Image Gallery
const gallery = document.querySelector('.usr-gallery');
const images = document.querySelectorAll('.usr-gallery .image');
const overlayGallery = document.querySelector('.usr-gallery__overlay');

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    images[i].classList.toggle('image--show');
    overlayGallery.classList.toggle('usr-gallery__overlay--hidden');

    overlayGallery.onclick = function () {
      overlayGallery.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('image--show');
    };
  };

  images[i].onkeyup = function (e) {
    if (e.keyCode === 27) {
      overlayGallery.classList.add('usr-gallery__overlay--hidden');
      images[i].classList.remove('image--show');
    } else if (e.keyCode === 13) {
      overlayGallery.classList.remove('usr-gallery__overlay--hidden');
      images[i].classList.add('image--show');
    }
  };

  images[i].onblur = function () {
    overlayGallery.classList.add('usr-gallery__overlay--hidden');
    images[i].classList.remove('image--show');
  };
}
