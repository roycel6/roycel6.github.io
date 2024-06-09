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
