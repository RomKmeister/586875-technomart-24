var linkCart = document.querySelector(".product-buy");
var popupCart = document.querySelector(".popup-cart");
var closeCart = popupCart.querySelector(".popup-close");

linkCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.add("popup-show");
});
  
closeCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupCart.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (popupCart.classList.contains("popup-show")) {
      popupCart.classList.remove("popup-show");
      popupCart.classList.remove("popup-error");
    }
  }
});