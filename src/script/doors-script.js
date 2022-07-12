const hamburger = document.querySelector(".b-header-doors__hamburger"),
      navContainer = document.querySelector(".b-hamburger");

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
    $('.b-card-address__inner').slick({
        prevArrow: $('.b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        waitForAnimate: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
        ]
    });
    $('.b-picture--aside').slick({
        prevArrow: $('.b-button-square--white'),
        nextArrow: $('.b-button-square--green'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    prevArrow: "false",
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    prevArrow: $('.b-button-square--white'),
                }
            },
        ]
    });
})