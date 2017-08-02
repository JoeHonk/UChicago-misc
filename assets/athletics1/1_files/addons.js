(function($) {
$(function() {

  var header = $('.site-header');
  var minScroll = $('.site-header .site-title').outerHeight();
  
  $(window).on('endscroll', function() {
    var scrollTop = $(window).scrollTop();  
    if (scrollTop > minScroll) {
        header.addClass('sticky');
    } else {
        header.removeClass('sticky');        
    }
  }); 


});
})(jQuery);