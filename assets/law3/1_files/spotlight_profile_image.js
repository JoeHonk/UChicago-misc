/**
 * @file
 * @preserve A JavaScript file that and adds functionality to mobile nav.
 *
 * @copyright Copyright (c) 2017 Palantir.net
 */

(function ($) {

  Drupal.behaviors.spotlight_profile_image = {
    attach: function (context, settings) {
      var spotlightBackgroundImage = $('.js-spotlight-profile-image');
      spotlightBackgroundImage.each( function() {
        var backgroundURL = $(this).data('spotlight-profile-image');
        var backgroundCSS = 'url(\''+backgroundURL+'\')';
        $(this).css('background-image', backgroundCSS);
      });
    }
  };

})(jQuery, Drupal);
