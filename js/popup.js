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

var linkLogin = document.querySelector(".contacts-button");
var linkMap = document.querySelector(".map-link");
var popupLogin = document.querySelector(".popup-login");
var popupMap = document.querySelector(".popup-map");
var closeLogin = popupLogin.querySelector(".popup-close");
var closeMap = popupMap.querySelector(".popup-close");
var form = popupLogin.querySelector("form");
var login = popupLogin.querySelector("[name=login]");
var password = popupLogin.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
  });

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-show");
  });

 
linkLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.add("popup-show");
  
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});
  
closeLogin.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove("popup-show");
  popupLogin.classList.remove("popup-error");
});
  
form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popupLogin.classList.remove("popup-error");
    popupLogin.offsetWidth = popupLogin.offsetWidth;
    popupLogin.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupLogin.classList.contains("popup-show") || popupMap.classList.contains("popup-show")) {
      popupLogin.classList.remove("popup-show");
      popupMap.classList.remove("popup-show");
      popupLogin.classList.remove("popup-error");
    }
  }
});
