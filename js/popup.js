    var link = document.querySelector(".button-toggle");
    var popup = document.querySelector(".page-header__nav");
    var pop = document.querySelector(".page-header__nav-wrapper");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("nav-close");
     });

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      pop.classList.toggle("nav-close");
     });