var linkLogin=document.querySelector(".contacts-button"),linkMap=document.querySelector(".map-link"),popupLogin=document.querySelector(".popup-login"),popupMap=document.querySelector(".popup-map"),closeLogin=popupLogin.querySelector(".popup-close"),closeMap=popupMap.querySelector(".popup-close"),form=popupLogin.querySelector("form"),login=popupLogin.querySelector("[name=login]"),password=popupLogin.querySelector("[name=password]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(o){isStorageSupport=!1}linkMap.addEventListener("click",function(o){o.preventDefault(),popupMap.classList.add("popup-show")}),closeMap.addEventListener("click",function(o){o.preventDefault(),popupMap.classList.remove("popup-show")}),linkLogin.addEventListener("click",function(o){o.preventDefault(),popupLogin.classList.add("popup-show"),storage?(login.value=storage,password.focus()):login.focus()}),closeLogin.addEventListener("click",function(o){o.preventDefault(),popupLogin.classList.remove("popup-show"),popupLogin.classList.remove("popup-error")}),form.addEventListener("submit",function(o){login.value&&password.value?isStorageSupport&&localStorage.setItem("login",login.value):(o.preventDefault(),popupLogin.classList.remove("popup-error"),popupLogin.offsetWidth=popupLogin.offsetWidth,popupLogin.classList.add("popup-error"))}),window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),(popupLogin.classList.contains("popup-show")||popupMap.classList.contains("popup-show"))&&(popupLogin.classList.remove("popup-show"),popupMap.classList.remove("popup-show"),popupLogin.classList.remove("popup-error")))});