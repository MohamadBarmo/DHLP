(function (window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

  // change language according to data-language of dropdown item
  $(".dropdown-country .dropdown-item-country").on("click", function () {
    var $this = $(this);
    $this.siblings(".selected").removeClass("selected");
    $this.addClass("selected");
    var selectedLang = $this.text();
    var selectedFlag = $this.find(".flag-icon-country").attr("class");
    $("#dropdown-flag-country .selected-country").text(selectedLang);
    $("#dropdown-flag-country .flag-icon-country")
      .removeClass()
      .addClass(selectedFlag);
    /*  var currentLanguage = $this.data("language");
      i18next.changeLanguage(currentLanguage, function(err, t) {
          $(".main-menu, .horizontal-menu-wrapper").localize();
      });*/
  });

  $(".dropdown-city .dropdown-item-city").on("click", function () {
    var $this = $(this);
    $this.siblings(".selected").removeClass("selected");
    $this.addClass("selected");
    var selectedLang = $this.text();
    var selectedFlag = $this.find(".flag-icon-city").attr("class");
    $("#dropdown-flag-city .selected-city").text(selectedLang);
    $("#dropdown-flag-city .flag-icon-city")
      .removeClass()
      .addClass(selectedFlag);
    /*  var currentLanguage = $this.data("language");
      i18next.changeLanguage(currentLanguage, function(err, t) {
          $(".main-menu, .horizontal-menu-wrapper").localize();
      });*/
  });



  /* ----------------------------------------------------------------------------*/







})(window);



/* ----------------------------------------------------------------------------*/

var slideIndex = 1;
showSlides(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


