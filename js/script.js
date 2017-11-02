$( document ).ready(function() {
      $(".parallaxImg").delay(1000).fadeIn();
      $(".parallaxImg").fadeIn("slow");
      $(".parallaxImg").fadeIn(5000);

      /* Every time the window is scrolled ... */
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


    $(document).on("scroll", function() {

    	if($(document).scrollTop()>100) {
    		document.querySelector(".navbar").setAttribute("style", "background-color: #000; padding: 30px 0px; opacity: 1;");


    		$(".logoContainer img").addClass('logoContainerScrolled');
    	}
      else {
    		document.querySelector(".navbar").setAttribute("style", "background-color:#000; padding: 30px 0px; transition: .5s;");

        $(".logoContainer img").removeClass('logoContainerScrolled');
    	}

    });


    function scroll2Product () {
      $('html,body').animate({
            scrollTop: $("#top4Button").offset().top},
            'slow');
    }

    $(".toTop").click(scroll2Product);


});
