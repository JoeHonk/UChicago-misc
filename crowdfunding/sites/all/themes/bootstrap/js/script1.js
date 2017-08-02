jQuery.noConflict();
(function($) {
  //console.log('set');
  $(document).ready(function() {
      //console.log('set');
    $('link[href="https://campaigns.communityfunded.com/cft/style.css"]').prop('disabled', true);
  });
  $(document).ajaxComplete(function(event, xhr, settings) {
    $('link[href="https://campaigns.communityfunded.com/cft/style.css"]').prop('disabled', true);
  });

  function disableRemoteCSS() {
    // do whatever you like here
    $('link[href="https://campaigns.communityfunded.com/cft/style.css"]').prop('disabled', true);
        //$('link[href="https://campaigns.communityfunded.com/cft/css/project-page.css"]').prop('disabled', true);
    //console.log('set');
    setTimeout(disableRemoteCSS, 100);
  }
  disableRemoteCSS();

  $(document).ready(function () {
      if (window.location.href.indexOf('cfpage') != -1) {
          $("#page-header").hide();
      }
      else{
        $("#page-header").show();
      }
    });


})(jQuery);
