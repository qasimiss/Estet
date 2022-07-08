const hamburger = document.querySelector(".b-header-doors__hamburger"),
      navContainer = document.querySelector(".b-hamburger-main");

$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
})

$(document).ready(function() {
    $('.b-slider-video').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        waitForAnimate: false,
    });
})