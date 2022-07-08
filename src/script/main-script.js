const hamburger = document.querySelector(".b-header-main__hamburger"),
      navContainer = document.querySelector(".b-hamburger");

$(hamburger).on('click', function() {
    hamburger.classList.toggle("active")
    navContainer.classList.toggle("active")
})

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
    
$(document).ready(function(){
    $(".b-intro__inner").slick({
        arrows: true,
        easing: "ease-in-out",
        slidesToShows: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
    });
});
    // $('.b-card-advertising__inner').slick({
    //     prevArrow: $('.b-button-white--left'),
    //     nextArrow: $('.b-button-green--right'),
    //     arrows: true,
    //     easing: "ease-in-out",
    //     speed: 1000,
    //     swipe: false,
    // });
})