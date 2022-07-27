const hamburger = document.querySelector(".b-header__hamburger"),
      navContainer = document.querySelector(".b-hamburger"),
      videoItem = document.querySelectorAll('.b-card-video__item'),
      target = document.querySelector(".slick-current"),
      buttonNews = document.querySelector(".b-card-news__button-news"),
      buttonTips = document.querySelector(".b-card-news__button-tips"),
      news = document.querySelectorAll(".b-card-news__news"),
      hamburgerDoors = document.querySelector(".b-header-doors__hamburger"),
      navContainerDoors = document.querySelector(".b-hamburger");

$("*").on("touchend", function(e) { $(this).focus(); });

$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
    if ($(this).hasClass('active')) {
        $('body').css({"overflow": "hidden"});
    } else {
        $('body').css({"overflow": "visible"});
    }
});


$(hamburgerDoors).on('click', function() {
    hamburgerDoors.classList.toggle("active")
    navContainerDoors.classList.toggle("active")
    if ($(this).hasClass('active')) {
        $('body').css({"overflow": "hidden"});
    } else {
        $('body').css({"overflow": "visible"});
    }
})

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

function changeTemplate(){
    if($(window).width()<768){
      $('.b-technology .b-container.b-container--technology.b-container--no-padd-table.b-container--no-padd-desktop .b-technology__inner .b-technology__container').prependTo('.b-technology .b-container.b-container--technology.b-container--no-padd-table.b-container--no-padd-desktop');
    }else{
      $('.b-technology .b-container.b-container--technology.b-container--no-padd-table.b-container--no-padd-desktop .b-technology__container').prependTo('.b-technology__inner');
    }
}

$(document).ready(changeTemplate);
$(window).resize(changeTemplate);

$(document).ready(function() {
    $(".b-intro__inner").slick({
        arrows: true,
        easing: "ease-in-out",
        slidesToShows: 1,
        speed: 2500,
        autoplay: true,
        autoplaySpeed: 5000,
        swipe: true,
        pauseOnHover: false,
    });

    $('.b-card-advertising .b-card-advertising__inner').slick({
        prevArrow: $('.b-card-advertising .b-button--square-white'),
        nextArrow: $('.b-card-advertising .b-button--square-green'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        autoplay: false,
        waitForAnimate: true,
        mobileFirst: true,
    });

    $('.b-card-video__slider').slick({
        arrows: false,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        draggable: true,
        waitForAnimate: true,
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
        swipe: true,
        focusOnSelect: true,
        waitForAnimate: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.b-card-news__news .b-card-news__wrapper',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 935,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
        ]
    });

    $('.b-card-address__inner').slick({
        prevArrow: $('.b-card-address .b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-card-address .b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        swipeToSlide: false,
        waitForAnimate: true,
        variableWidth: true,
        focusOnSelect: true,
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

    $('.b-slider-video .b-container.b-container--no-padd-mobile.b-container--no-padd-table').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        easing: "ease-in-out",
        speed: 1000,
        swipe: true,
        waitForAnimate: true,
    });

    $('.b-card-modern__wrapper').slick({
        prevArrow: $('.b-card-modern .b-link-and-switcher__link-left-arrow'),
        nextArrow: $('.b-card-modern .b-link-and-switcher__link-right-arrow'),
        arrows: true,
        easing: "ease-in-out",
        swipe: true,
        waitForAnimate: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        adaptiveHeight: true,
        focusOnSelect: true,
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
});

function checkWidth() {
    if ($(window).width() < 768 ) {
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
        });
    }
    else {
        $('.b-technology__inner').slick('unslick');
    }
}

    $(document).ready(checkWidth);
    $(window).resize(checkWidth);

$(document).ready(function () {
    $('.b-card-video__inner').slick({
        prevArrow: $('.b-card-video .b-button--square-white'),
        nextArrow: $('.b-card-video .b-button--square-green'),
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        easing: 'ease-in-out',
        speed: 1000,
        asNavFor: '.b-card-video__slider',
        focusOnSelect: true,
        mobileFirst: true,
    });
});

function checkWidthVideo() {
    if ($(window).width() < 768 ) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            prevArrow: $('.b-card-video .b-button--square-white'),
            nextArrow: $('.b-card-video .b-button--square-green'),
            vertical: true,
            verticalSwiping: true,
            waitForAnimate: true,
            slidesToShow: 7,
            easing: 'ease-in-out',
            speed: 1000,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
            mobileFirst: true,
        });
    }
    if ($(window).width() > 767 && $(window).width() <= 967) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            nextArrow: $('.b-card-video .b-button--square-white'),
            prevArrow: $('.b-card-video .b-button--square-green'),
            slidesToShow: 3,
            rows: 2,
            easing: 'ease-in-out',
            waitForAnimate: true,
            speed: 1000,
            centerMode: false,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
            mobileFirst: true,
        });
    }
    if ($(window).width() > 967 && $(window).width() <= 1167) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            nextArrow: $('.b-card-video .b-button--square-white'),
            prevArrow: $('.b-card-video .b-button--square-green'),
            slidesToShow: 4,
            rows: 2,
            easing: 'ease-in-out',
            waitForAnimate: true,
            speed: 1000,
            centerMode: false,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
            mobileFirst: true,
        });
    }
    if ($(window).width() > 1167 && $(window).width() <= 1367) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            nextArrow: $('.b-card-video .b-button--square-white'),
            prevArrow: $('.b-card-video .b-button--square-green'),
            slidesToShow: 5,
            rows: 2,
            easing: 'ease-in-out',
            waitForAnimate: true,
            speed: 1000,
            centerMode: false,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
            mobileFirst: true,
        });
    }
    if ($(window).width() > 1367 && $(window).width() <= 1463) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            nextArrow: $('.b-card-video .b-button--square-white'),
            prevArrow: $('.b-card-video .b-button--square-green'),
            slidesToShow: 5,
            rows: 2,
            easing: 'ease-in-out',
            waitForAnimate: true,
            speed: 1000,
            centerMode: false,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
            mobileFirst: true,
        });
    }
    if ($(window).width() > 1463) {
        $('.b-card-video .b-card-video__inner').slick('unslick');
        $('.b-card-video .b-card-video__inner').slick({
            prevArrow: $('.b-card-video .b-button--square-white'),
            nextArrow: $('.b-card-video .b-button--square-green'),
            vertical: true,
            verticalSwiping: true,
            waitForAnimate: true,
            slidesToShow: 5,
            easing: 'ease-in-out',
            speed: 1000,
            centerMode: false,
            asNavFor: '.b-card-video__slider',
            focusOnSelect: true,
        });
    }
}

    $(document).ready(checkWidthVideo);
    $(window).resize(checkWidthVideo);