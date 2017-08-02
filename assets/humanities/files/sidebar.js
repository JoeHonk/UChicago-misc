/** Make sidebar menus clickable for mobile devices **/

(function($) {
	Drupal.behaviors.myCustomBehavior = {
		attach: function(context) {
			$('body').bind('responsivelayout', function(e, d) {

				function checkForMobile() {
            		if($('body').hasClass("responsive-layout-mobile")) {
        				return true;
        			} else {
        				return false;
        			}
        		}
        
       			function menuForMobile() {
		 			if(!checkForMobile()) {
		 				$(".region-sidebar .block li").show(50);	
		 			} else {	
						$(".region-sidebar #block-views-program-list-block h2").click(function() {
							if(checkForMobile()) {
							var $menu = $(this).parent("div").parent("section");
								if ($("li:first", $menu).is(":hidden")) {
								    $("#region-sidebar .block h3").show();
									$("li", $menu).slideDown(120);
								} else {
								    $("#region-sidebar .block h3").hide();
									$("li", $menu).slideUp(120);
								}
							} else {
								return;
							}
						});	
					}
				}
      
				menuForMobile();        
       
			});
      
      
      
    }
  };
})(jQuery);
;
