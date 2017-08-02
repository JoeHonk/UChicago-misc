(function($){
  // cache the jQuerified DOM element
  var $featuredImageGallery = $("#feature_image_gallery");

  // Only execute this if we have a gallery on the page
  if ($featuredImageGallery.length) {
    var width  = $featuredImageGallery.width(),
        height = $featuredImageGallery.height();

    // Force the images to fit in the given space
    $featuredImageGallery.find('img').resize({maxHeight:height}).each(function(index){
      var $this = $(this);
      var thisWidth = (width - $this.width());
      if (thisWidth > 0) {
        $this.css('marginLeft',thisWidth/2); // Center the image
      }
    });

    // Append a menu for switching through the images
    var $switcher = $('<ul id="exhibition_switcher"></ul>');
    var caption = $featuredImageGallery.find(".caption p");

    $featuredImageGallery.find('.caption').before($switcher);

    function updateCaption() {
      caption.text($(this).attr('longdesc'));
    };

    $featuredImageGallery.find(".images").cycle({
      timeout: 0,
      before:  updateCaption,
      pager:   '#exhibition_switcher',
      pagerAnchorBuilder: function(idx, slide) { 
        return '<li class=""><a class="e_switch" href="#' + slide.id + '"></a></li>'; 
      }
    });

    //$switcher.find("a:first").click();
  }

	var archived_publications = $('#archived_publications img');
 	var d = new Date();
	$("#slider-range").slider({
		range: true,
		min: 1975,
		max: d.getFullYear() - 1,
		values: [1975, d.getFullYear() - 1],
		slide: function(event, ui) {
			$("#amount").val(ui.values[0] + ' - ' + ui.values[1]);
			var to_hide = archived_publications.filter(function(){
				var year = parseInt($(this).attr('rel'), 10);
				return ui.values[0] > year || year > ui.values[1];
			});
			var to_show = archived_publications.filter(function(){
				var year = parseInt($(this).attr('rel'), 10);
				return ui.values[0] < year && year < ui.values[1];
			});
			to_hide.hide();
			to_show.show();
			var width = 20;
			var cap = 5;
			var sizeMultiple = 100/to_show.length;
			if(sizeMultiple > cap){ sizeMultiple = cap; }
			console.log(sizeMultiple);
			archived_publications.each(function(){
				$(this).width(width*sizeMultiple);
			});
		}
	});
	if($('#amount').length > 0){
		$("#amount").val($("#slider-range").slider("values", 0) + ' - ' + $("#slider-range").slider("values", 1));
	}


}(jQuery));
