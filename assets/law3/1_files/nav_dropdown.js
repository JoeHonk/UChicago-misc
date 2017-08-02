/**
 * @file
 * @preserve A JavaScript file that and adds functionality to dropdown.
 *
 * @copyright Copyright (c) 2017 Palantir.net
 */

(function ($) {

  Drupal.behaviors.nav_dropdown = {
    attach: function (context, settings) {
    var mainMenuNav = $("div.mobile-nav > nav ul > li.js-has-children a span.js-childlink-arrow");
    // Dropdown functionality for mobile main navigation
    mainMenuNav.click( function(e) {
        var thisIcon = $(this);
        thisIcon.closest('li').toggleClass( "js-has-children--active" );
        if (thisIcon.hasClass('js-collapsed')) {
          thisIcon.addClass('js-expanded').removeClass('js-collapsed');
        } else {
          thisIcon.removeClass('js-expanded').addClass('js-collapsed');
        }
        e.preventDefault();
        e.stopPropagation();
    });

    var localNav = $(".local-nav > ul > li.js-has-children a span.js-childlink-arrow");
    // Dropdown functionality for mobile main navigation
    localNav.click( function(e) {
        var thisIcon = $(this);
        thisIcon.closest('li').toggleClass( "js-has-children--active" );
        if (thisIcon.hasClass('js-collapsed')) {
          thisIcon.addClass('js-expanded').removeClass('js-collapsed');
        } else {
          thisIcon.removeClass('js-expanded').addClass('js-collapsed');
        }
        e.preventDefault();
        e.stopPropagation();
    });

    // Dropdown functionality for utility nav
    $(".js-utility-nav-trigger").click( function(e) {
      $(".utility-nav--dropdown").toggleClass( "js-utility-nav--active" );
      e.preventDefault();
    });
    }
  };

})(jQuery, Drupal);
