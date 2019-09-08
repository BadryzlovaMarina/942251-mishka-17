var modalOpen = document.querySelectorAll(".js-modal-open");
var modal = document.querySelector(".modal-cart");
var modalBg = document.querySelector(".modal-bg");

for (var i = 0; i < modalOpen.length; i++) {
  modalOpen[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-cart--opened");
    modalBg.classList.add("modal-bg--opened");
  });
}

modalBg.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-cart--opened");
  modalBg.classList.remove("modal-bg--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-cart--opened")) {
      modal.classList.remove("modal-cart--opened");
      modalBg.classList.remove("modal-bg--opened");
    }
  }
});
