$(function () {


    /* =========================================
        HERO SLIDER
     ========================================= */
    $('.hero-slider').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        loop: true,
        margin: 0,
        responsive: {
            991: {
                nav: true,
                dots: false
            }
        }
    });


    /* =========================================
        COUNTDOWN
     ========================================= */
    $('#countdown').countDown({
        with_separators: false
    });



    /* =========================================
        CRICLE PROGRESS
     ========================================= */
    $('#circle').circleProgress({
        fill: "#ac887e"
    });



    /* =========================================
        HUMBERGUR MENU ACTIVATE
     ========================================= */
      $('.navbar-toggler').on('click dblclick', function () {
          $(this).toggleClass('active');
      });

      $('.nav-link').on('click', function () {
         $('.navbar-collapse').removeClass('show');
         $('.navbar-toggler').removeClass('active');
      });



      /* =========================================
          NAVBAR SCROLL SPY
       ========================================= */
       $('body').scrollspy({
           target: '.navbar-collapse',
           offset: 80
       });



      /* =========================================
          SCTOLL TOP BUTTON
       ========================================= */
       $(window).on('scroll', function () {
          if ($(window).scrollTop() > 1500) {
              $('.scroll-top').addClass('visible');
          } else {
              $('.scroll-top').removeClass('visible');
          }
       });


       /* =========================================
           SMOOTH SCROLL
        ========================================= */
        var scroll = new SmoothScroll('a.nav-link[href*="#"], .scroll-top');
});
