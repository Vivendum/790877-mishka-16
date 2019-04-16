var main_nav = document.querySelector(".page-header__main-nav");
var main_nav_button = document.querySelector(".page-header__main-nav-button");

main_nav.classList.remove("page-header__main-nav--nojs");
main_nav.classList.remove("page-header__main-nav--opened");
main_nav.classList.add("page-header__main-nav--closed");

main_nav_button.addEventListener("click", function() {
  if (main_nav.classList.contains("page-header__main-nav--closed")) {
      main_nav.classList.remove("page-header__main-nav--closed");
      main_nav.classList.add("page-header__main-nav--opened");
    } else {
      main_nav.classList.remove("page-header__main-nav--opened");
      main_nav.classList.add("page-header__main-nav--closed");
    }
  });
