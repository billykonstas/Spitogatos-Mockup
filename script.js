const toggleButton = document.getElementsByClassName("toggle-icon")[0];
const toggleButtonImg = document.getElementsByClassName("toggle-icon-img")[0];
const mainPage = document.getElementsByClassName("main-page")[0];
const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const logoIcon = document.getElementsByClassName("logo-img")[0];
const searchIcon = document.getElementsByClassName("search-icon")[0];
const hidddenMenu = document.getElementsByClassName("hidden-title")[0]

//functionality for the toggle menu
toggleButton.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("activated")) {
    mainPage.style.display = 'none'
    toggleMenu.style.display = "flex"
    logoIcon.style.display = "none";
    searchIcon.style.display = "none";
    toggleButtonImg.src = "./img/exit-icon.svg";
    hidddenMenu.style.display = "flex"
    toggleMenu.classList.add("activated");
  } 
  else {
    mainPage.style.display = ''
    toggleMenu.style.display = "none"
    logoIcon.style.display = "flex";
    searchIcon.style.display = "flex";
    toggleButtonImg.src = "./img/toggle-icon.svg";
    hidddenMenu.style.display = "none"
    toggleMenu.classList.remove("activated");
  }
});


//functionality for the carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
