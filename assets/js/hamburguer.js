const navEl = document.querySelector(".headerNav");
const hamburguerEl = document.querySelector(".hamburguer");

if (navEl && hamburguerEl) {
  hamburguerEl.addEventListener("click", () => {
    navEl.classList.toggle("headerNav--open");
    hamburguerEl.classList.toggle("hamburguer--open");
  });

  navEl.addEventListener("click", () => {
    navEl.classList.remove("headerNav--open");
    hamburguerEl.classList.remove("hamburguer--open");
  });
} else {
  console.error("Elements not found: .headerNav or .hamburguer");
}


/*const navEl = document.getElementsByClassName(".headerNav");
const hamburguerEl = document.getElementsByClassName(".hamburguer");
const navList = navEl.classList;
const hamburguerList = hamburguerEl.classList; 


if (navEl && hamburguerEl) {
  hamburguerEl.addEventListener("click", add());

  navEl.addEventListener("click", remove());
} else {
  console.error("Elements not found: .headerNav or .hamburguer");
}

function add(){
  navList.add(("headerNav--open"));
  hamburguerList.add("hamburguer--open");
}

function remove(){
  navList.remove("headerNav--open");
  hamburguerList.remove("hamburguer--open");
}*/