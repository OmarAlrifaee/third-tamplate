const menuIcon = document.querySelector(".landing .icon i");
const navBar = document.querySelector(".landing nav ul");
const numbers = document.querySelectorAll(".stats .box h2");
const statsSection = document.querySelector(".stats");
const skillsSection = document.querySelector(".skills");
const progressSpan = document.querySelectorAll(".skills .skills-box div span");
const progressNumberSpan = document.querySelectorAll(
  ".skills .skills-box h3 span:first-child"
);
let started = false;
let spanProgressStarted = false;

// make the width of the skills progress span = data-width of the span
window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop) {
    // make the width of the progress span
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    if (!spanProgressStarted) {
      // make the width number = the data set of the progrees
      progressNumberSpan.forEach((span) => {
        let counter = setInterval(() => {
          span.textContent++;
          if (span.textContent === span.dataset.width) {
            clearInterval(counter);
          }
        }, 600 / span.dataset.width);
      });
    }
    spanProgressStarted = true;
  }
});

// add the class on the nav bar on menu icon click
menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("after-click");
});

// start the function only if you scroll to the section
window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop) {
    // here the function will run every scroll so i have to run the function ones only
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(ele) {
  let goal = ele.dataset.goal;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === goal) {
      clearInterval(counter);
    }
  }, 2000 / goal); // here i divided the duration on the element goal to get the goal on the same time
}
