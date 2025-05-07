let lastScrollTop = 0;
const header = document.querySelector(".primaryHeader");
const full = document.querySelector("#full-width");
let scrollTop = window.scrollY || document.documentElement.scroll;

window.addEventListener("scroll", function () {
  if (scrollTop < lastScrollTop) {
    header.classList.add("hide-header");
  } else {
    header.classList.remove("hide-header");
  }
  lastScrollTop = scrollTop;
});
