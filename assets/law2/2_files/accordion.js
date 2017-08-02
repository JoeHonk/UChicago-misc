/**
 * @file
 * A JavaScript file for the accordion nav.
 *
 * @copyright Copyright 2016 Palantir.net
 */

 // JavaScript should be made compatible with libraries other than jQuery by
 // wrapping it with an "anonymous closure". See:
 // - https://drupal.org/node/1446420
 // - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function ($) {

  Drupal.behaviors.site = {
    attach: function (context, settings) {
      // Based on http://inspirationalpixels.com/tutorials/creating-an-accordion-with-html-css-jquery
      var accordionLink = $('.js-accordion-section-title');
      var accordianContent = $('.js-accordion-content');
      $(accordionLink, context).click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(this).hasClass('active')) {
          // Toggle closed only the accordian link that is clicked.
          $(this).removeClass('active');
          $(currentAttrValue).slideUp(300).removeClass('open');
        }
        else {
          // Add active class to section title
          $(this).addClass('active');
          // Open up the hidden content panel
          $(currentAttrValue).slideDown(300).addClass('open');
          // Scroll the element to the top.
        }
        e.preventDefault();
      });

      // Clean up if the window is resized.
      var resizeTimer;

      // Resize with timer to debounce.
      $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          var windowWidth = window.innerWidth;
          if (windowWidth > 600) {
            accordionLink.removeClass('active');
            accordianContent.show();
            accordianContent.removeClass('open');
          }
        }, 250);
      });
    }
  };

})(jQuery, Drupal);
