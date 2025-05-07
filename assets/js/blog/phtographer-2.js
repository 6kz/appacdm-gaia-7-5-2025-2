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
