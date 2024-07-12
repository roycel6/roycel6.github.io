//splash screen animation
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let body = document.querySelector("#page-container");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    // page content intial state
    body.classList.add("initial");
    //initial logo animation
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 100);
    });

    setTimeout(() => {
      //remove the logo
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 900);

    //intro screen transition to website
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 1300);

    setTimeout(() => {
      // page content animation after splash screen
      body.classList.remove("initial");
    }, 1500);
  });
});

// menu animation
function show() {
  document.querySelector("#menu").classList.toggle("active");
}

// image slides
var slideshow1 = document.querySelector("#slideshow1");
slideshow1.currentSlideIndex = 1;
showImg(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.querySelector("#slideshow2");
slideshow2.currentSlideIndex = 1;
showImg(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.querySelector("#slideshow3");
slideshow3.currentSlideIndex = 1;
showImg(slideshow3.currentSlideIndex, slideshow3);

var slideshow4 = document.querySelector("#slideshow4");
slideshow4.currentSlideIndex = 1;
showImg(slideshow4.currentSlideIndex, slideshow4);

//buttons at bottom
function btm_slide(e, slideshow) {
  showImg((slideshow.currentSlideIndex = e), slideshow);
}

//arrow buttons
function side_slide(e, slideshow) {
  showImg((slideshow.currentSlideIndex += e), slideshow);
}

function showImg(e, slideshow) {
  var i;
  const img = slideshow.querySelectorAll("img");
  const sliders = slideshow.querySelectorAll(".btm-sliders span");
  if (e > img.length) {
    slideshow.currentSlideIndex = 1;
  }
  if (e < 1) {
    slideshow.currentSlideIndex = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.background = "#bbb";
  }
  img[slideshow.currentSlideIndex - 1].style.display = "block";
  sliders[slideshow.currentSlideIndex - 1].style.background = "#717171";
}
