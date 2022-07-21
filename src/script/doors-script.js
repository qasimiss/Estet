const hamburger = document.querySelector(".b-header-doors__hamburger"),
      navContainer = document.querySelector(".b-hamburger");

$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
})

$("*").on("touchend", function(e) { $(this).focus(); });

$(document).ready(function() {
    $('.b-slider-video').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: false,
    });
    $('.b-card-address__inner').slick({
        prevArrow: $('.b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 465,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 686,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1310,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.b-picture--aside').slick({
        prevArrow: $('.b-card-advertising .b-button--square-white'),
        nextArrow: $('.b-card-advertising .b-button--square-green'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    prevArrow: $('.b-card-advertising .b-button--square-white'),
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    prevArrow: $('.b-card-advertising .b-button--square-white'),
                }
            },
        ]
    });
    $('.b-card-modern__wrapper').slick({
        prevArrow: $('.b-card-modern .b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-card-modern .b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1342,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
        ]
    });
})