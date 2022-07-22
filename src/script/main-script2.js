$(document).ready(function() {
    $('.b-technology__inner').slick({
        prevArrow: $('.b-technology__wrap .b-button--square-white'),
        nextArrow: $('.b-technology__wrap .b-button--square-green'),
        dots: false,
        autoplay: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: true,
        mobileFirst: true,
        responsive: [
            {
            breakpoint: 768,
            settings: "unslick"
            }
        ]
    });
})