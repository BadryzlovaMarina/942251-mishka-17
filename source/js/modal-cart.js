var link = document.querySelector(".popular-product__order");
var links = document.querySelectorAll(".catalog__basket");
var modalBG = document.querySelector(".modal-bg");
var popup = document.querySelector(".modal-cart");
var close = popup.querySelector(".modal-cart__button");

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-cart--opened");
  });
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-cart--opened");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-cart--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
    if (popup.classList.contains("modal-cart--opened")) {
      popup.classList.remove("modal-cart--opened");
    }
  }
});
