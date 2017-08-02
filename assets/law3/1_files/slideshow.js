/**
 * @file
 * @preserve A JavaScript file that and adds functionality for slideshows.
 *
 * @copyright Copyright (c) 2017 Palantir.net
 */

(function ($) {

  Drupal.behaviors.slideshow = { 
  	attach: function (context, settings) {


			$('.slideshow').slick(
				{
					slidesToScroll: 1,
					centerMode: true,
					slidesToShow: 1,
					// variableWidth: true,
					infinite: false,
					appendArrows: $('.arrow_container'),
					centerPadding: '0px',
    			adaptiveHeight: true,
    			dots: false,
    			nextArrow: '<span class="slick-arrow slick-next" tabindex="5"></span>',
    			prevArrow: '<span class="slick-arrow slick-prev" tabindex="4"></span>',


				});
    }
  };

})(jQuery, Drupal);
