$('.logos .owl-carousel').owlCarousel({
    stagePadding: 120,
    loop:true,
    margin:38,
    nav:false,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    items:4,

     responsive:{

        0:{
            items:1,
            margin:15,
            stagePadding:50,
            
        },
         767:{
             items:3
        },
       1024:{
            items:4
        }
    }
})
//tabbing-button

 $('#tabs-nav li:first-child').addClass('active');
$('.center').hide();
$('.center:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.center').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

// tebbing-button

// logo slider
const copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".section-eight").appendChild(copy);
// end

document.addEventListener(
                "DOMContentLoaded", () => {
                    new Mmenu( "#menu", {
                       "offCanvas": {
                          "position": "left"
                       },
                       "theme": "light"
                    });
                }
            );

 jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
    $animatables.each(function(i) {
       var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };
  
  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});