/**
 * @file
 * A JavaScript file for expanding questions to reveal their answers.
 *
 * Our JavaScript must be wrapped in a closure.
 * @see https://drupal.org/node/1446420
 * @see http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
 *
 * @copyright Copyright 2016 Palantir.net
 */

(function ($) {

  Drupal.behaviors.call_response = {
    attach: function(context, settings) {
      $('.js-call-response__trigger', context).click(function() {
        $(this).toggleClass('js-opened').closest('.call-response__segment').find('.js-call-response__target').slideToggle(300);
      });
    }
  };
})(jQuery, Drupal);
