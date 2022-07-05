const hamburger = document.querySelector(".b-header-main__hamburger"),
      navContainer = document.querySelector(".b-hamburger-main");

    hamburger.onclick = function() {
        hamburger.classList.toggle("active")
        navContainer.classList.toggle("active")
    }

$(document).ready(function() {
    $('.b-slider-video__picture').slick();
})