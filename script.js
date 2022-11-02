const toggleButton = document.getElementsByClassName("toggle-icon")[0];
const toggleButtonImg = document.getElementsByClassName("toggle-icon-img")[0];
const mainPage = document.getElementsByClassName("main-page")[0];
const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const logoIcon = document.getElementsByClassName("logo-img")[0];
const searchIcon = document.getElementsByClassName("search-icon")[0];
const hidddenMenu = document.getElementsByClassName("hidden-title")[0];
const navbar = document.getElementsByClassName("navbar")[0];

//functionality for the toggle menu
toggleButton.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("activated")) {
    mainPage.style.display = 'none'
    toggleMenu.style.display = "flex"
    logoIcon.style.display = "none";
    searchIcon.style.display = "none";
    toggleButtonImg.src = "./img/exit-icon.svg";
    hidddenMenu.style.display = "flex";
    navbar.style.position = "relative";
    toggleMenu.classList.add("activated");
  }
  else {
    mainPage.style.display = ''
    toggleMenu.style.display = "none"
    logoIcon.style.display = "flex";
    searchIcon.style.display = "flex";
    toggleButtonImg.src = "./img/toggle-icon.svg";
    hidddenMenu.style.display = "none";
    navbar.style.position = "fixed";
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//adding dashes to phone number in submit form
let phone = document.querySelector(".form-num");

phone.addEventListener('keyup', function (e) {
  if (event.key != 'Backspace' && (phone.value.length === 3 || phone.value.length === 7)) {
    phone.value += '-';
  }
});

//word counter for the message field
let messageField = document.querySelector('.form-message');

messageField.addEventListener('keyup', function () {
  var messageFieldWords = messageField.value;
  var numWords = 0;
  //splits the textarea into words and loops to find the num of words
  var split = messageFieldWords.split(' ');
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      numWords += 1;
    }
  }
  console.log(numWords);
  document.querySelector('.form-word-counter').innerHTML = 100 - numWords;
});


//Dropdown population from URL
//create the placeholders for the two dropdown menus
let dropdown1 = document.getElementById('cat1');
dropdown1.selectedIndex = 0;

let dropdown2 = document.getElementById('cat2');

let defaultOpt2 = document.createElement('option');
defaultOpt2.text = 'Subcategory';

dropdown2.add(defaultOpt2);
dropdown2.selectedIndex = 0;

const url = 'https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b';

function getData(url, cb) {
  fetch(url)
    .then(response => response.json())
    .then(result => cb(result));
}

getData(url, (data) => {
  for (let i = 0; i < data.length; i++) {
    option1 = document.createElement('option');
    option1.text = data[i].name;
    option1.value = data[i].name;
    dropdown1.add(option1);
    console.log(data[i].subCategories)
    
  }
})


/*
fetch(url).then(function (response) {
  // The API call was successful!
  console.log(response);
  const data = JSON.parse(response.responseText);
    console.log(data);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].name;
      dropdown1.add(option);
      console.log(option)
    }
}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});*/

/*
const request = new XMLHttpRequest();
request.open('GET', url, true);

console.log(request)

request.onload = function () {

  console.log(request.status);
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    console.log(data);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].name;
      dropdown1.add(option);
      console.log(option)
    }
   } else {
    // Reached the server, but it returned an error
  }   
}
*/

