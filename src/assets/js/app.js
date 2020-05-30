//= ../../../node_modules/bootstrap/js/dist/util.js
//= ../../../node_modules/bootstrap/js/dist/modal.js
//= ../../../node_modules/slick-carousel/slick/slick.min.js

$(document).ready(function(){
    $('#slider').slick({
        arrows: false,
        dots: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
    }
    );

    $('#next').on("click", function () {
        $('#slider').slick('slickNext');
    });
    $('#prev').on("click", function () {
        $('#slider').slick('slickPrev');
    });

    $('.nav__icon').on("click", function (e) {
        $('#nav-items').toggleClass('nav__items--visible');
       e.stopPropagation()
    });

    $(document).mouseup(function (e) {
            var nav = $("#nav-items");
            if (!nav.is(e.target)
                && nav.has(e.target).length === 0
                && !$('.nav__icon').is(e.target))
                nav.removeClass('nav__items--visible');

        }
    );
   var activePath = $(location).prop('pathname');

   $('.nav__items').children().each(function () {
        if (this.pathname===activePath) {
            this.classList.add('active')
        }
   })


});

