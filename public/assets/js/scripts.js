// TRANSPARENT NAVBAR TRANSITON

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.header');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.header').css('background-color', 'rgba(255,255,255,0.7)');
          $('.nav-links a').css('color', 'black');
          $('.logo').css('background-color', '#226078');
          $('.logo').css('color', 'white');
       } else {
          $('.header').css('background-color', 'transparent');
          $('.nav-links a').css('color', 'white');
          $('.logo').css('background-color', 'white');
          $('.logo').css('color', '#27282F');
       }
   });
         
   // BACKGROUND SLIDESHOW TRANSITION
    var i = 0; 
    var images = ['lexus.jpg','mazie.jpg', 'computer.jpg', 'xfitgrips.jpg'];
    var image = $('.home-wrapper');
                  //Initial Background image setup
    image.css('background-image', 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/assets/images/xfitgrips.jpg"');
                  //Change image at regular intervals
      setInterval(function(){  
             image.fadeOut(1000, function () {
             image.css('background-image', 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/assets/images/' + images [i++] +'")');
             image.fadeIn(1000);
           });
           if(i == images.length)
            i = 0;
          }, 5000);

  // TYPEWRITER HOME PAGE EFFECT // PLUGIN
  $('.typeit').typeIt({
       strings: ["a CrossFit fanatic.", "an automotive enthusiast.", "a lover of Pugs.", "a Full Stack Web Developer."],
       speed: 80,
       deleteSpeed: 100,
       breakLines: false,
       autoStart: true
  });

  // MAKE DIVS APPEAR AS YOU SCROLL

  $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });

  // WHEN A USER CLICKS A WORK SAMPLE
  $('.cycslope-preview').click(function() { 
    $('.cycslope-preview').toggleClass('cycslope-preview-highlight');
  });

  $('.travelist-preview').click(function() { 
    $('.travelist-preview').toggleClass('travelist-preview-highlight');
  });


});