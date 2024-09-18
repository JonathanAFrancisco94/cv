window.onload = function () {
  setTimeout(function () {
    if (!alert("Thank you for your interest. Enjoy!")) {
      togglePlay();
    }
  }, 5000);
};

var isPlay = false;

//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//javascript of responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javacript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//Javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}


let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actives";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    pause.innerHTML = "🔊";
  } else {
    if (!isPlay) {
      audio.pause();
      pause.innerHTML = "🔇";
      pause.style.color = " #848484";
    }
  }
}

function playOnly() {
  setTimeout(() => {
    isPlay = false;
  }, 3500);
  isPlay = true;
  audio.play();
  pause.innerHTML = "🔊";
}


function showEmail() {
  alert('JonathanAFrancisco94@gmail.com');
};


function showNumber() {
  alert('+63-9086333997');
};
