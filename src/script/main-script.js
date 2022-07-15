const hamburger = document.querySelector(".b-header-main__hamburger"),
      navContainer = document.querySelector(".b-hamburger"),
      videoItem = document.querySelectorAll('.b-card-video__item'),
      target = document.querySelector(".slick-current"),
      buttonNews = document.querySelector(".b-card-news__button-news"),
      buttonTips = document.querySelector(".b-card-news__button-tips"),
      news = document.querySelectorAll(".b-card-news__news");

$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
});

$(buttonNews).on('click', function() {
    buttonTips.classList.remove("active")
    news[1].classList.remove("active")
    buttonNews.classList.add("active")
    news[0].classList.add("active")
});

$(buttonTips).on('click', function() {
    buttonNews.classList.remove("active")
    news[0].classList.remove("active")
    buttonTips.classList.add("active")
    news[1].classList.add("active")
});

$("*").on("touchend", function(e) { $(this).focus(); });

$(document).ready(function() {
    $('.b-card-address__inner').slick({
        prevArrow: $('.b-card-address .b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-card-address .b-link-and-switcher__link-right-arrow'),
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

    $(".b-intro__inner").slick({
        arrows: true,
        easing: "ease-in-out",
        slidesToShows: 1,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.b-picture--aside').slick({
        prevArrow: $('.b-card-advertising .b-button-square--white'),
        nextArrow: $('.b-card-advertising .b-button-square--green'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        autoplay: true,
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

    $('.b-card-video__inner').slick({
        prevArrow: $('.b-card-video .b-button-square--white'),
        nextArrow: $('.b-card-video .b-button-square--green'),
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        easing: "ease-in-out",
        speed: 1000,
        centerMode: true,
        asNavFor: '.b-card-video__slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    prevArrow: $('.b-card-video .b-button-square--white'),
                    nextArrow: $('.b-card-video .b-button-square--green'),
                }
            },
            {
                breakpoint: 1463,
                settings: {
                    prevArrow: $('.b-card-video .b-button-square--green'),
                    nextArrow: $('.b-card-video .b-button-square--white'),
                }
            },
        ]
    });

    $('.b-card-video__slider').slick({
        arrows: false,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        draggable: true,
        waitForAnimate: false,
        asNavFor: '.b-card-video__inner',
        appendDots: $('.b-card-video__item'),
        dotsClass: $('b-card-video__item'),
    });

    $('.b-card-news__news .b-card-news__wrapper').slick({
        prevArrow: $('.b-card-news .b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-card-news .b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        waitForAnimate: false,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        asNavFor: '.b-card-news__news .b-card-news__wrapper',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });
});