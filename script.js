const toggleButton = document.getElementsByClassName("toggle-icon")[0];
const toggleButtonImg = document.getElementsByClassName("toggle-icon-img")[0];
const mainPage = document.getElementsByClassName("main-page")[0];
const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const logoIcon = document.getElementsByClassName("logo-img")[0];
const searchIcon = document.getElementsByClassName("search-icon")[0];
const hidddenMenu = document.getElementsByClassName("hidden-title")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const url = "https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b";

//functionality for the toggle menu
toggleButton.addEventListener("click", () => {
  if (!toggleMenu.classList.contains("activated")) {
    mainPage.style.display = "none";
    toggleMenu.style.display = "flex";
    logoIcon.style.display = "none";
    searchIcon.style.display = "none";
    toggleButtonImg.src = "./img/exit-icon.svg";
    hidddenMenu.style.display = "flex";
    navbar.style.position = "relative";
    toggleMenu.classList.add("activated");
  } else {
    mainPage.style.display = "";
    toggleMenu.style.display = "none";
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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = '0';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = '1';
  dots[slideIndex - 1].className += " active";
}

//adding dashes to phone number in submit form
let phone = document.querySelector(".form-num");

phone.addEventListener("keyup", function (e) {
  if (
    event.key != "Backspace" &&
    (phone.value.length === 3 || phone.value.length === 7)
  ) {
    phone.value += "-";
  }
});

//word counter for the message field
let messageField = document.querySelector(".form-message");

messageField.addEventListener("keyup", function () {
  var messageFieldWords = messageField.value;
  var numWords = 0;
  //splits the textarea into words and loops to find the num of words
  var split = messageFieldWords.split(" ");
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      numWords += 1;
    }
  }
  console.log(numWords);
  document.querySelector(".form-word-counter").innerHTML = 100 - numWords;
});

//checkmarks on fields
let formNameField = document.querySelector(".form-name");
formNameField.addEventListener("keyup", function () {
  let check = document.getElementById("name-check-mark");
  const isValid = formNameField.checkValidity();
  if (isValid) {
    check.style.display = "initial";
    formNameField.style.border = "1px solid #4b00ff";
    formNameField.style.color = "#000000";
  } else {
    check.style.display = "none";
    if (formNameField.value) {
      formNameField.style.border = "1px solid #FF1A00";
      formNameField.style.color = "#FF1A00";
    } else {
      formNameField.style.border = "1px solid #4b00ff";
      formNameField.style.color = "#000000";
    }
  }
});

//email validation
let formEmailField = document.querySelector(".form-email");
formEmailField.addEventListener("keyup", function () {
  let check = document.getElementById("email-check-mark");
  const isValid2 = formEmailField.checkValidity();
  if (isValid2) {
    check.style.display = "initial";
    formEmailField.style.border = "1px solid #4b00ff";
    formEmailField.style.color = "#000000";
  } else {
    check.style.display = "none";
    if (formEmailField.value) {
      formEmailField.style.border = "1px solid #FF1A00";
      formEmailField.style.color = "#FF1A00";
    } else {
      formEmailField.style.border = "1px solid #4b00ff";
      formEmailField.style.color = "#000000";
    }
  }
});

//phone number validation
let formNumField = document.querySelector(".form-num");
formNumField.addEventListener("keyup", function () {
  let check = document.getElementById("num-check-mark");
  const isValid3 = formNumField.checkValidity();
  if (isValid3) {
    check.style.display = "initial";
    formNumField.style.border = "1px solid #4b00ff";
    formNumField.style.color = "#000000";
  } else {
    check.style.display = "none";
    if (formNumField.value) {
      formNumField.style.border = "1px solid #FF1A00";
      formNumField.style.color = "#FF1A00";
    } else {
      formNumField.style.border = "1px solid #4b00ff";
      formNumField.style.color = "#000000";
    }
  }
});

//Dropdown population from URL
let dropdown1 = document.getElementById("cat1");
let dropdown2 = document.getElementById("cat2");


//population of dropdowns on change
dropdown1.addEventListener("change", function () {
  dropdown2.options.length = 0;
  var optionName = dropdown1.options[dropdown1.selectedIndex].text;
  getData(url, (data) => {
    for (let i = 0; i < data.length; i++) {
      if(optionName == 'All'&&
      typeof data[i].subCategories != "undefined") 
      {
        for (let j = 0; j < data[i].subCategories.length; j++) {
          option2 = document.createElement("option");
          option2.text = data[i].subCategories[j].name;
          option2.value = data[i].subCategories[j].name;
          dropdown2.add(option2);
        }
      }
      
      if (
        data[i].name == optionName &&
        typeof data[i].subCategories != "undefined"
      ) {
        for (let j = 0; j < data[i].subCategories.length; j++) {
          option2 = document.createElement("option");
          option2.text = data[i].subCategories[j].name;
          option2.value = data[i].subCategories[j].name;
          dropdown2.add(option2);
        }
      }
    }
  });
});

//returns the data from the url
function getData(url, cb) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => cb(result));
}

//on startup
getData(url, (data) => {
  for (let i = 0; i < data.length; i++) {
    option1 = document.createElement("option");
    option1.text = data[i].name;
    option1.value = data[i].name;
    dropdown1.add(option1);
    if (typeof data[i].subCategories != "undefined") {
      for (let j = 0; j < data[i].subCategories.length; j++) {
        option2 = document.createElement("option");
        option2.text = data[i].subCategories[j].name;
        option2.value = data[i].subCategories[j].name;
        dropdown2.add(option2);
      }
    }
  }
});

//Checkboxes check that at least on is selected
const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function () {
  var checkboxs = document.getElementsByClassName("form-check");
  var okay = false;
  for (var i = 0, l = checkboxs.length; i < l; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      break;
    }
  }
  if (!okay) alert("Please check at least one checkbox!");
});
