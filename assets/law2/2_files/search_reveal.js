/**
 * @file
 * @preserve A JavaScript file that and adds functionality to dropdown.
 *
 * @copyright Copyright (c) 2017 Palantir.net
 */


(function ($) {

  Drupal.behaviors.search_reveal = {
    attach: function (context, settings) {
      var body = $('body');
      var searchBackground = $('.search-modal-bg');
      var searchTrigger = $('.search-trigger');
      var searchModal = $('.search-modal');
      var searchClose = $('.search-mobile-close');
      var toggleSearch = function() {
          searchBackground.toggleClass('js-search-modal--visible');
          searchModal.toggleClass('js-search-form--active');
          searchClose.toggleClass('js-search-mobile-close--visible');
          // Prevent scrolling on the page while search is open.
          body.toggleClass('scroll-lock');
      };
      // Reveal by clicking the search button for mobile.
      $(searchTrigger, context).click( function(e) {
        toggleSearch();
        e.preventDefault();
        e.stopPropagation();
      });
      // Hide by clicking the overlay.
      $(searchBackground, context).click( function(e) {
        toggleSearch();
        e.preventDefault();
        e.stopPropagation();
      })
      // Hide by clicking the close button.
      $(searchClose, context).click( function(e) {
        toggleSearch();
        e.preventDefault();
        e.stopPropagation();
      })
    }
  };

})(jQuery, Drupal);
