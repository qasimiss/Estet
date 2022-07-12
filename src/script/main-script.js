const hamburger = document.querySelector(".b-header-main__hamburger"),
      navContainer = document.querySelector(".b-hamburger"),
      videoItem = document.querySelectorAll('.b-card-video__item'),
      target = document.querySelector(".slick-current")


$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
})

.on('click', function() {
    const target = event.target
    target.classList.add('slick-current')
})
//     video__item.classList.remove("slick-active")
//     video__item.classList.add("slick-current")
// })

$(document).ready(function() {
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

    $('.b-card-video__inner').slick({
        prevArrow: $('.b-button-square--white'),
        nextArrow: $('.b-button-square--green'),
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        easing: "ease-in-out",
        speed: 1000,
        centerMode: true,
        asNavFor: '.b-card-video__slider',
    });

    $('.b-card-video__slider').slick({
        slidesToShow: 1,
        arrows: false,
        easing: "ease-in-out",
        speed: 1000,
        swipe: false,
        draggable: true,
        waitForAnimate: false,
        asNavFor: '.b-card-video__inner'
    });
})