"use strict";

// element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

// whishlist button
const whishlistBtn = document.querySelectorAll("[data-whishlist-btn]");

for (let i = 0; i < whishlistBtn.length; i++) {
  whishlistBtn[i].addEventListener("click", function () {
    elemToggleFunc(this);
  });
}

// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

// animation on scroll
const cards = document.querySelectorAll('.product-item').forEach(e => e.classList.add('animation'))
const sellers = document.querySelectorAll('.top-seller-item').forEach(e => e.classList.add('animation'))
const about_items = document.querySelectorAll('.about-item').forEach(e => e.classList.add('animation'))


const the_animation = document.querySelectorAll(".animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}
