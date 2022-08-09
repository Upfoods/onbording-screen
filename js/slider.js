(function ($) {
	"use strict";

	/*--/ Testimonials owl /--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		autoplay: false,
		//autoplayTimeout: 4000,
		autoplayHoverPause: true,
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
