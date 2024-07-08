let nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
// nav hide
let navbar = document.querySelector("nav-link");
let navCollapse = document.querySelector("navbar-collapse.collapse");
navbar.forEach(function (e) {
  e.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
