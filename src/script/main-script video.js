const hamburger = document.querySelector(".b-header-main__hamburger"),
      navContainer = document.querySelector(".b-hamburger"),
      videoItem = document.querySelectorAll('.b-card-video__item'),
      target = document.querySelector(".slick-current"),
      buttonNews = document.querySelector(".b-card-news__button-news"),
      buttonTips = document.querySelector(".b-card-news__button-tips"),
      news = document.querySelectorAll(".b-card-news__news");


$(document).ready(function() {
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
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.b-card-video__inner',
        appendDots: $('.b-card-video__item'),
        dotsClass: $('b-card-video__item'),
        centerMode: true,
    });
});
