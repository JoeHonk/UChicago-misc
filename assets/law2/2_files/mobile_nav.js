/**
 * @file
 * @preserve A JavaScript file that and adds functionality to mobile nav.
 *
 * @copyright Copyright (c) 2017 Palantir.net
 */

(function ($) {

  Drupal.behaviors.mobile_nav = {
    attach: function (context, settings) {
      var mobileNav = $('.mobile-nav');
      var mobileHeader = $('.header__top');
      var mobileTrigger =$('.mobile-nav-trigger');
      $(mobileTrigger, context).click(function(){
        mobileTrigger.toggleClass('open');
        mobileNav.toggleClass('js-mobile-nav--open');
        mobileNav.slideToggle(500);
        mobileHeader.toggleClass('header-top--open');
      });

      // Clean up if the window is resized.
      var resizeTimer;

      // Resize with timer to debounce.
      $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          var windowWidth = window.innerWidth;
          if (windowWidth > 900) {
            mobileNav.removeClass('js-mobile-nav--open');
            mobileHeader.removeClass('header-top--open');
            mobileNav.hide();
            mobileTrigger.removeClass('open');
          }
        }, 250);
      });
    }
  };

  Drupal.behaviors.local_nav = {
    attach: function (context, settings) {
      var localNav = $('.local-nav');
      var localTrigger =$('.local-nav-trigger');
      $(localTrigger, context).click(function(){
        localTrigger.toggleClass('open');
        localNav.toggleClass('js-local-nav--open');
        localNav.slideToggle(500);
      });

      // Clean up if the window is resized.
      var resizeTimer;

      // Resize with timer to debounce.
      $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          var windowWidth = window.innerWidth;
          if (windowWidth > 900) {
            localNav.removeClass('js-local-nav--open');
            localNav.show();
            localTrigger.removeClass('open');
          }
        }, 250);
      });
    }
  };

})(jQuery, Drupal);
