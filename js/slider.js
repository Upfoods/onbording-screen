(function ($) {
	"use strict";

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
        nav: true,
        responsive : {
       
            0 : {
                items: 1
        
            },
      
            480 : {
                items: 2
            },
            768 : {
                items: 3
            }
            
		}
	});

})(jQuery);
