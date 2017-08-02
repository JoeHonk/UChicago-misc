/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);




jQuery(document).ready(function () {
     jQuery.localScroll();
     
     
});



jQuery(window).load(function () {
jQuery('div.menu-block-2 li a').each(function () {
    var href = jQuery(this).attr('href').replace(/.*(#.*)$/, "$1");
    jQuery(this).attr('href', href);
    jQuery(this).removeAttr("title");
});
});



/* Feature Image sizing fix */

jQuery(window).load(function () {
    jQuery(window).resize(function () {
        jQuery('.region-highlighted .views_slideshow_cycle_main img').each(function () {
            var img_height = jQuery(this).height();
            //var title_height = jQuery('.region-highlighted .views_slideshow_cycle_main .feature-title').height();
            if (img_height !== 0) {
                jQuery('.region-highlighted .views_slideshow_cycle_main').height(img_height+70);
                return false;
            }
        });
        
    });
});








jQuery(document).ready(function() {

	// Detect OS & add a class to the HTML element, enabling PC ProximaNova-Light fix
	jQuery('html').addClass( navigator.platform ).removeClass('no-js');


	// add file icon glyph
	  jQuery('<i class="icon-file"></i>').insertBefore('.pdf-link');
	   jQuery('<i class="icon-play"></i>').insertBefore('.video-link');
     // hides the slickbox as soon as the DOM is ready
      jQuery('#audiences').hide();
      jQuery('#resources').hide();
     // shows the slickbox on clicking the noted link  
      jQuery('#slick-show').click(function() {
        jQuery('#audiences').show('slow');
        return false;
      });
     // hides the slickbox on clicking the noted link  
      jQuery('#resources-toggle').click(function() {
        jQuery('#audiences').hide();
        return false;
      });
        jQuery('#audiences-toggle').click(function() {
        jQuery('#resources').hide();
        return false;
      });
      
      // hides the slickbox on clicking the close window link 
      jQuery('#close-aud-students').click(function() {jQuery('#audiences').slideToggle(400);return false;});
      jQuery('#close-aud-faculty').click(function() {jQuery('#audiences').slideToggle(400);return false;});
      jQuery('#close-aud-alumni').click(function() {jQuery('#audiences').slideToggle(400);return false;});     
      jQuery('#close-aud-staff').click(function() {jQuery('#audiences').slideToggle(400);return false;});   
      jQuery('#close-res-research').click(function() {jQuery('#resources').slideToggle(400);return false;});
      jQuery('#close-res-teaching').click(function() {jQuery('#resources').slideToggle(400);return false;});
      jQuery('#close-res-contacts').click(function() {jQuery('#resources').slideToggle(400);return false;});
      jQuery('#close-res-units').click(function() {jQuery('#resources').slideToggle(400);return false;});
     
     // toggles the slickbox on clicking the noted link  
      jQuery('#audiences-toggle').click(function() {
        jQuery('#audiences').slideToggle(400);
        return false;
      });
       jQuery('#resources-toggle').click(function() {
        jQuery('#resources').slideToggle(400);
        return false;
      });
    });




jQuery(window).load(function () {
	jQuery('[data-spy="scroll"]').each(function () {
    	var $spy = jQuery(this).scrollspy('refresh')
    	});
    });


// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

//!function ($) {

//  $(function(){

//    var $window = $(window)



    // side bar
//    $('.sidebar').affix({
//     offset: {
//       top: function () { return $window.width() <= 980 ? 290 : 210 }
//      , bottom: 270
//      }
//    })




//  })



//}(window.jQuery)




;
