//______________________________________________________________
//[D e v i s ,   script.js]
//
//    Color        :  Blue
//
//    Name         :  Davis - Portfolio and News Template
//
//    Version      :  1.0 
//
//    Author       :  Pixel_Factory
//
//    Author URI   :  http://themeforest.net/user/Pixel_Factory
//
//    Author Email : h.nafees.anwar@gmail.com
//
//______________________________________________________________

$(window).on('load', function () {
    $('.loader').delay(200).fadeOut(500);
});

$(document).ready(function () {

    'use strict';

    //menu toggle

    $('.menu-btn a').on('click', function (e) {

        e.preventDefault();

        $(this).toggleClass('ti-menu');
        $('.menu').toggleClass('show');

    });

    //down button

    $('.down-btn a').on('click', function (e) {

        e.preventDefault();
        $('body').animate({
            scrollTop: $(window).height()
        }, 1500, 'easeInOutQuint');

    });

    //navigation slide down

    $('.navigation li a').on('click', function (e) {

        if ($(this).next().is('ul')) {

            e.preventDefault();

            $('.nav-inner').removeClass('nav-active');
            $('.nav-inner').slideUp();

            $(this).next('.nav-inner').addClass('nav-active');

            if ($(this).next('.nav-inner').hasClass('nav-active')) {
                $(this).next('a').addClass('nav-current');
                $('.nav-active').clearQueue();
                $('.nav-active').slideToggle();

            }
        }
    });

    //---------------------
    //Plugins Configuration
    //---------------------

    //OnePageNav (for local navigation)

    if ($('.local').length) {
        $('.navigation').onePageNav({
            currentClass: 'active',
            changeHash: true,
            scrollSpeed: 1500,
            scrollThreshold: 0.5,
            filter: '.local',
            easing: 'easeInOutQuint',
            begin: function () {
                $('.menu').toggleClass('show');
            }
        });
    }

    //Magnific Popup (for portfolio)

    if ($('.popup').length) {

        $('.popup').magnificPopup({
            removalDelay: 300,
            mainClass: 'mfp-fade',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?&theme=light&color=white&autoplay=1&autohide=2&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                },

                srcAction: 'iframe_src'
            }
        });
    }

    //Maginfic Popup (for single project)

    if ($('.project-gallery').length) {
        $('.project-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });
    }

    //Isotope (for portfolio filtering)

    if ($('.portfolio-container').length) {
        $(window).on('load', function () {

            var isotop = $('.portfolio-container').isotope({
                itemSelector: '.mix'
            });

            $('.portfolio-controls').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                isotop.isotope({
                    filter: filterValue
                });
            });

            $('.portfolio-controls').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.active').removeClass('active');
                    $(this).addClass('active');
                });
            });

        });
    }

    //type-it (for home)

    if ($('.type-it').length) {
        $('.type-it').typeIt({
            strings: ['Eletrônica', 'Programação', 'Design', 'Acessível'],
            breakLines: false,
            loop: true,
            speed: 150,
            lifeLike: false,
            deleteDelay: 5000,
            startDelay: 0
        });
    }

    //Masonry View (for blog page)

    if ($('.masonry').length) {
        $('.masonry').masonry({});
    }

    //bxSlider (for home slider)

    if ($('.slider').length) {
        $('.slider').bxSlider({
            auto: true,
            controls: false,
            speed: 900,
            pause: 5000
        });
    }

});
