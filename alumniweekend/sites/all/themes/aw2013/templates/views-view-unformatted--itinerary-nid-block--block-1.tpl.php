<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<?php
	$url='';
	$url.='/itinerary-bookmark/';
	$j=0;
	?>
<?php foreach ($rows as $id => $row): ?>
<?php if($j>0){$url.=',';} ?>
<?php $j++;?>
<?php $url.=trim($row,"\r\n "); ?><?php endforeach; ?>
<?php
	echo'<div class="itinerarylinks"><!--<a href="/events">Back to event schedule</a> | --><a href="/itinerary">View/edit itinerary</a><!-- | <A HREF="mailto: ?Subject=Your%20UChicago%20Alumni%20Weekend%20Itinerary.%20Created%3A%20'.date('l F jS Y h:i:s A').'&Body=View/Print%20your%20UChicago%20Alumni%20Weekend%20itinerary%20online%3A%0A%0Ahttp%3A//'.$_SERVER['SERVER_NAME'].'/itinerary-bookmark'.$url.'%0A%0A%0AThis%20link%20will%20list%20the%20itinerary%20you%20created%20on%3A%20'.date('l F jS Y h:i:s A').'%0A%0A%0A*%20This%20is%20a%20permanent%20bookmark%20and%20events%20may%20not%20be%20added%20or%20removed%20once%20saved.%20Multiple%20bookmarks%20may%20be%20created%20and%20viewed%2C%20but%20you%20will%20need%20to%20start%20a%20new%20itinerary%20if%20visiting%20the%20event%20schedule%20at%20a%20later%20date%2C%20or%20when%20viewing%20from%20a%20different%20computer%20or%20mobile%20device.%0A%0A%0A%0A">Email</A>--></div>';

?>

<script type="text/javascript">

function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


(function ($) {
$(document).bind('flagGlobalAfterLinkUpdate', function(event, data) {
  if (data.flagName == 'itinerary' && data.flagStatus == 'unflagged') {
    if ($(data.link).parents('.view-events-filterable').size()) { // Are we inside the view?
      $(data.link).parents('li').hide('slow');
      jQuery('.view-itinerary-nid-block').trigger('RefreshView');
    }
  }
});









})(jQuery);



</script>


