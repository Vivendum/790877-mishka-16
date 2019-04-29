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


var basket_add = document.querySelector(".basket-add");
var open_basket_add = document.querySelector(".button-order");
var closed_basket_add = document.querySelector(".basket-add__button");
var overlay = document.querySelector(".overlay");

open_basket_add.addEventListener("click", function(evt) {
  evt.preventDefault();
  basket_add.classList.remove("modal-off");
  overlay.classList.remove("modal-off");
  basket_add.classList.add("modal");
  overlay.classList.add("modal");
  closed_basket_add.addEventListener("click", function() {
    basket_add.classList.remove("modal");
    overlay.classList.remove("modal");
    basket_add.classList.add("modal-off");
    overlay.classList.add("modal-off");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      basket_add.classList.remove("modal");
      overlay.classList.remove("modal");
      basket_add.classList.add("modal-off");
      overlay.classList.add("modal-off");
    };
  });
});
