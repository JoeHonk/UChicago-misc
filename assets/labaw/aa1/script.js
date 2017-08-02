/**
 * @file
 * Custom scripts for theme.
 */
(function ($) {
  // code here
  

	
	$(document).ready(function(){
		
		$( ".search-toggle" ).click(function() {
			$(this).parent().addClass("visible");
			$(this).hide();
			$( "#edit-keys--2" ).focus();			
		});
		$( ".search-toggle-fixed" ).click(function() {
			$(".search-form").addClass("visible");
			$(".search-toggle").hide();
			$( "#edit-keys--2" ).focus();	
			$(".navbar-fixed-top").toggleClass("show-search");		
		});
		$( ".search-alt-submit" ).click(function() {
			$('form#search-form--2').submit();
		});
		$( ".search-close" ).click(function() {
			$(this).parent().toggleClass("visible");
			$(".search-toggle").show();
		});
		
		
		
		$( ".navbar-toggle" ).click(function() {
			$(this).toggleClass("triggered");
		});
		
		
		

/*
		$('.pane-bundle-quick-reference').affix({
			offset: {
				top: function () {
				      return (this.top = (200 + $('.top-content').outerHeight(true)))
				    },
				bottom: function () {
				      return (this.bottom = (0 + $('#footer').outerHeight(true)))
				    }
				  
			}
		});
*/

		
		

		
		
		
		if ( $("body").hasClass("front")) { 
									
			$(".pane-events-list-panel-pane-homepage").append('<div class="light-gradient"></div>');
			$(".pane-articles-panel-pane-homepage").append('<div class="light-gradient"></div>');
			

			$( ".benefits-trigger" ).click(function() {
				$( ".benefits-popup-content" ).fadeIn(200);
			});
			
			$( ".directory-trigger" ).click(function() {
				$( ".directory-popup-content" ).fadeIn(200);
			});
			
			$( ".button-close-popup" ).click(function() {
				$(this).parent().fadeOut(200);
			});


			// TEXT CAROUSEL BUTTONS
			////////////////////////////////////////////////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////////////////////////////////////////////////


			// On load and slide change grab current slide: ul.slides flex-active-slide
			// if first slide (child) put the last slide on the left and the 2nd slide on the right
			// else if last slide put first on right and prev on the left
			// else put prev slide title on left next slide title on right

			var slide_titles = function(){

				var $current_slide = $('ul.slides li.flex-active-slide');

				if ($current_slide.is(':first-child')){
					//console.log('first slide');
					var left_title = $('ul.slides li:last-child h3.carousel-headline-h3').text();
					var right_title = $current_slide.next().find('h3.carousel-headline-h3').text();
				}
				else if ($current_slide.is(':last-child')){
					//console.log('last slide');
					var left_title = $current_slide.prev().find('h3.carousel-headline-h3').text();
					var right_title = $('ul.slides li:first-child h3.carousel-headline-h3').text();
				}
				else {
					//console.log('just another slide');
					var left_title = $current_slide.prev().find('h3.carousel-headline-h3').text();
					var right_title = $current_slide.next().find('h3.carousel-headline-h3').text();
				}

				label_buttons(left_title, right_title);

			}

			var label_buttons = function(left_title, right_title){
				if($('.button-label').length!=0)
				$('.button-label').fadeOut(function(){ 
					$('.button-label').remove(); 
					$('a.flex-prev').prepend('<div class="button-label button-label-left"><div class="table-alignment">'+left_title+'</div></div>');
					$('a.flex-next').append('<div class="button-label button-label-right"><div class="table-alignment">'+right_title+'</div></div>');
				});	
				else{
					$('a.flex-prev').prepend('<div class="button-label button-label-left"><div class="table-alignment">'+left_title+'</div></div>');
					$('a.flex-next').append('<div class="button-label button-label-right"><div class="table-alignment">'+right_title+'</div></div>');
				}			
			}

			// trigger on load
			slide_titles();

			// trigger after flexslide animation
			$('.flexslider').on('after', function(){
				slide_titles();
			});


			////////////////////////////////////////////////////////////////////////////////////////////////////
			////////////////////////////////////////////////////////////////////////////////////////////////////
			
		}		
		
		
	
		if ( $("body").hasClass("page-node-131")) { 
									
			$(".pane-events-list-panel-pane-upcoming").append('<div class="light-gradient"></div>');
		}
		
		if ( $("body").hasClass("page-node-4244")) { 									
			$('h2').text(function(i, oldText) {
				return oldText === 'Member' ? 'Members' : oldText;
    		});
		}
		
			
	});
 
 
 
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	
	    if (scroll >= 60) {
	        $("#header").addClass("fixed-header");
	    }
	    if (scroll <= 60) {
	        $("#header").removeClass("fixed-header");
	    }
	});
 
   
  
})(jQuery);
