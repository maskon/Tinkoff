$(function () {

    /* Fixed Header */

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    checScroll(scrollPos, introH);
    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checScroll(scrollPos, introH)
    });

    function checScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 30
        }, 700);
    });

    /* Nav Toggle */

     $("#burger, #nav__link").on("click", function(event) {
        event.preventDefault();

        $("#nav, #burger").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });


    /* Slider */

    $('.slider').slick({
        arrows: false
        , dots: false
        , slidesToShow: 4
        , slidesToScroll: 1
        , responsive: [
            {
               breakpoint: 767,
               settings: {
                   dots: true
                   , slidesToShow: 1
                   , slidesToScroll: 1
               }
            },
         ]
     });
});

/* Спойлер на HTML CSS и jQuery 01*/

$(document).ready(function() {
    $('.block__subtitle').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__subtitle').not($(this)).removeClass('active');
           $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

/* Спойлер на HTML CSS и jQuery 02*/
$(document).ready(function() {
    $('.solutions__subtitle').click(function(event) {
        if($('.solutions__body').hasClass('one')){
            $('.solutions__subtitle').not($(this)).removeClass('active');
           $('.solutions__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


/* Табы на JQuery */

$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');

   $('.js-tab-trigger.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2

   $('.js-tab-content.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});


/* Hover */

$(function() {
    $('.hover_body, .hover_body-2, .hover_body-3, .hover_body-4').hover(function () {
        $(this).find('.play-icon, .play-icon-2, .play-icon-3, .play-icon-4, .intro__image-text, .intro__image-text-2, .intro__image-text-3, .intro__image-text-4').fadeIn(500);
    }, function () {
        $('.play-icon, .play-icon-2, .play-icon-3, .play-icon-4, .intro__image-text, .intro__image-text-2, .intro__image-text-3, .intro__image-text-4').fadeOut(200);
    });
});

/* Modal на HTML CSS и jQuery */
$(function() {

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');


        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

});

document.addEventListener("DOMContentLoaded", function(event) {
    let tab = document.querySelector(location.hash)
    if (tab) {
        tab.classList.add('active')
    }
});

