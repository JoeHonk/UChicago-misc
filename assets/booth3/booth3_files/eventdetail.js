var vhost = 'event'; 

$(document).ready(function() {
 	//list widget, default template
	$(".list-widget a").click(detail);

	//list widget, homepage template
	$("#events a").click(detail);

	//calendar widget
	$("a.eventLinkA").click(detail);
	
	// Display loading image 
	$('#eventDetail').addClass('loading');
	
	// Load event detail
	var guid = $(document).getUrlParam("guid");
	var recurrenceId = $(document).getUrlParam("recurrenceId");
	var addr = "http://"+vhost+".uchicago.edu/widgets/detail.php?guid="+guid;
	if (recurrenceId != null) { 
		addr = addr + '&recurrenceId=' + recurrenceId;
	}
	if (guid != null) {
		$.ajax({
		  url: addr,
		  cache: false,
		  dataType: 'jsonp',
		  jsonp:'jsonp_callback',
		  timeout: 5000,
		  success: function(html){
			$('#eventDetail')
				// Display event detail 
				.html(html)
				// Remove loading image
				.removeClass('loading');
			$("#eventTable a")
				// Open each link in a same window
				.click(function(){
					window.self(this.href);
					return false;
				});
		  	},
		  error: function(objAJAXRequest, strError) {
		  		if (strError == 'timeout') {
		  			$("#eventDetail").text("The request has timed out. Please try reloading the page.");
		  		}
		  	}
		});
	}
});

//Capture click event, get event detail, and display
function detail(event) {
	var guid = new RegExp('[\\?&]guid=([^&#]*)').exec(this.href);
	var recurrenceId = new RegExp('[\\?&]recurrenceId=([^&#]*)').exec(this.href);
	var addr = detailPage + '?guid=' + guid[1];
	if (recurrenceId) { 
		addr = addr + '&recurrenceId=' + recurrenceId[1];
	}
	top.location.href = addr;
	event.preventDefault();
}