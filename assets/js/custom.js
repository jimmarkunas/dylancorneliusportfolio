(function ($) {
    "use strict";
     // WOW JS
    new WOW().init();

       
    $(document).ready(function () {
        /*---------------------------------------------------
            mainmenu
        ----------------------------------------------------*/
        $('.mainmenu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '1199',
        });

        $(".sidebar-toggle-btn").on("click", function () {
            $(".sidebar-wrap").addClass("sidebar-opened");
//            $(".body-overlay").addClass("opened");
        });
        $(".sidebar-close-btn").on("click", function () {
            $(".sidebar-wrap").removeClass("sidebar-opened");
//            $(".body-overlay").removeClass("opened");
        });
        

        

      
        /*---------------------------------------------------
            slider carousel
        ----------------------------------------------------*/
       ///testimonial
        var $full = $('.testimonial-slider');
            if($full.length > 0){
            $(document).ready(function(){
                $(".testimonial-slider").owlCarousel({
                    loop:true,
                    center:false,
                    margin:40,
                    items:3,
                    autoplay: true,
                    nav: false,
                    responsive : {
                            0 : {
                               items:1,
                            },
                            
                            768 : {
                                 items:2,
                            },
                             991 : {
                                 items:3,
                            }
                        }
                    });
                });
            }

            /*---------------------------------------------------
           project-slider
        ----------------------------------------------------*/
        var $project = $('.project-slider');
        if($project.length > 0){
            $('.project-slider').owlCarousel({
                loop: true,
                nav: false,
                autoplay: true,
                autoplayTimeout: 5000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 450,
                margin: 30,
                responsive: {
                    0: {
                        items: 1
                    },
                    660:{
                         items: 2
                     },
                    768: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }

    });


    /*---------------------------------------------------
        sticky header
    ----------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });
    
    if('.marquee_text'.length){
      $('.marquee_text').marquee({
        direction: 'left',
        duration: 50000,
        gap: 50,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
      });
    }
    /*---------------------------------------------------
        Scroll Area
    ----------------------------------------------------*/
    var $scroll = $('.scroll-area');
    if($scroll.length > 0){
        $(document).ready(function(){
            $('.scroll-area').click(function(){
                $('html').animate({
                    'scrollTop' : 0,
                },700);
                return false;
            });
            $(window).on('scroll',function(){
                var a = $(window).scrollTop();
                if(a>400){
                    $('.scroll-area').slideDown(300);
                }else{
                    $('.scroll-area').slideUp(200);
                }
            });
        });
    }
    
        /*---------------------------------------------------
        preloader
        ----------------------------------------------------*/
        $(window).on('load', function () {
            $('.preloader').fadeOut(500);
        });

      /*================================================================= 
          //ui
        ==================================================================*/
      
        var $tab = $('#tabs');
        if($tab.length > 0){
        $( function() {
            $( "#tabs" ).tabs();
          } );
        }

        let menuToggle = document.querySelector('.menuToggle');
            menuToggle.onclick = function () {
            menuToggle.classList.toggle('active');
        }
       
     /*---------------------------------------------------
        onePageNav
    ----------------------------------------------------*/
    var $nav = $('#nav_header');
        if($nav.length > 0){
           $('#nav_header').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
        }); 
         
      }
      

        /*================================================================= 
            Animating numbers
        ==================================================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

      
        
}(jQuery));

function menuclick12(){
     $(".sidebar-wrap").removeClass("sidebar-opened");
 }
