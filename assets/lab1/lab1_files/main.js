 /**
 *
 * University of Chicago Lab - default
 * @link http://chicagolab.finalsite.com/
 * Built By: Jim Peterman
 * Project Manager: Lisa Willsey
 * Designer: Akua Duah
 *
 */

/*!
 * global_enhancements is a file particular to certain pages
 * it contains site enhancement js only
**/


jQuery(function($) {
  //check if browser supports placeholders for placeholder()
  $.support.placeholder = (function(){
	var i = document.createElement('input');
	return 'placeholder' in i;
  })();

  var $body = $('body');
  var $mainSlideshow ='.main-slideshow';


  // ================================
  // Home
  // ================================

  if($('.home').length) {

    // Slideshow must use:
    // Media Element >> 'player' mode >> 'custom player' option under 'advanced settings'

    // Find slideshow data
    var jsonMainSlides = $($mainSlideshow + ' .fsMediaCustomPlayer').attr('data-playlisturl');

    $.getJSON(jsonMainSlides, function(data) {

      // Populate Slideshow
      $.each(data.objects, function(i, object) {
        $('<article style="background-image: url(' + object.full_path + ');"></article>')
          .append('<div class="caption">' + object.object_description + '</div>')
          .appendTo($mainSlideshow + ' .fsMediaContainer');
      });

    });

    $('.universal-slideshow').mediaSlider({
      mediaTemplate:[
        '<article class="universal-slide" style="background-image: url({imgSrc});">',
          '<img src="{imgSrc}" class="universal-img" />',
          '<div class="caption-wrapper">',
            '<div class="caption-title">{captionTitle}</div>',
            '<div class="caption-desc">{captionDesc}</div>',
          '</div>',
        '</article>'
      ], // html markup

      callback: function() {

        //write all functions to be run after media data has been pulled in here
        // ie (slick, randomize, etc...)

        $('.universal-slideshow').find('.fsMediaCustomPlayer').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          pauseOnHover: false,
        });

        //allows for there to be no caption box OR a caption box without a Title
        $('.caption-wrapper').each(function(){
          if ($(this).find(".caption-title:contains('blank')").length) {
            $(this).remove();
          } 
          else if ($(this).find(".caption-title:contains('no-title')").length) {
            $(this).find('.caption-title').remove();                   
          }
        });

      }
    });

    $('#fsHeader').addClass('hasHero');
    if (!$('.universal-slideshow').hasClass('fsStateEditable')) {
      $('.universal-slideshow:not(.fsStateEditable)').appendTo('#fsHeader');
    }

    if (!$('body').hasClass('fsComposeMode')){
      $('.home-callout').each(function(){
        var calloutLink = $(this).find('a').attr('href');
        $(this).wrap('<a href="'+ calloutLink +'"></a>');
      });
    }

  }




  // ================================
  // Meganav
  // ================================


  // setup split dropdowns
  splitList = function splitList($object, number){
    //https://jsfiddle.net/itopizarro/uf9pd5gj/
    // $object is a jQuery wrapped <ul>
    // number is the maximum number of <li> per list
    //log('splitList', $object, length);
    var _$result = $(),//will hold the collection of resulting sets
        _$children = $object.clone().children(),
        _$wrapper = $object.clone().removeAttr('id').empty(),//preserves the parent element
        _number = Math.round(number),
        numberOfChildren = $object.children().length,
        numberOfColumns = (numberOfChildren > _number) ? Math.ceil( numberOfChildren / _number ) : 1,
        index
        ;

    for(index = 0; index < numberOfColumns; index++){
        _$result = _$result.add(
            _$wrapper.clone().append( _$children.slice(index * _number, (index + 1) * _number) )
        );
    }

    return _$result;
  };

  setupHeader = function setupHeader(){
      //log('setupHeader');
      $header = $('#fsHeader');
      $header_dropdowns = $header.find('.nav-main .fsNavPageInfo');
      $header_navigation = $header.find('.fsBanner > nav-main'); //rename to nav class
      //$header_search = $header.find('.utility-tools .search-container');
      //STRING_SECTION_NAME = getSectionTitle();

      //setupHeader_search();

      // Split Mega Nav lists
      $header_dropdowns.each( function ( index, element ){
          var $this = $( element),
              _$list = $this.find( '.fsNavLevel2' )
              ;

          _$list.remove();

          $this.append( splitList( _$list, Math.ceil( _$list.children().length / 2 ) ) );

      } );

      $header_dropdowns.wrapInner('<div class="meganav"></div>');

      $('.meganav').each(function() {

        var dropdown_img = $(this).find('.fsNavPageThumbnail');
        var dropdown_desc = $(this).find('.fsNavPageDescription');
        $(dropdown_img).insertBefore($(dropdown_desc));
        $(dropdown_desc).find('br').remove();

      } );
      
  };



  // ================================
  // Sub Navigation
  // ================================

  // if($('.hero').length) {

  //   $($body).addClass('hero-page');
  //   backgroundImage('.hero');

  // }

  //if not home or portal page
  if (!$('body').hasClass('home') || !$('body').hasClass('portal')) {

    //if sub nav doesn't already exist
    if ($('.nav-sub').length > 0) { 
      // it exists 
    }
    else {
      //it does not exist...yet

      if ($('#fsBannerLeft').length > 0) { 
        // left banner exists, put in left
      }

      else if ($('#fsBannerRight').length > 0) { 
        // right banner exists, put in right
      }

      else {
        //do nothing because there are no banners :(
      }
      

    }

  }




  // ================================
  // Style Guide
  // ================================

  if($('.fsPageTitle').text() == 'Style Guide') {

    $($body).addClass('style-guide-page');

  }




});

/*!
 * global_vars is a file particular to your site
 * it contains base functions that are likely but not always used
**/


jQuery(function($) {

  var $body = $('body'),
      $navMain = $('.nav-main'),
      $navSub = $( '.nav-sub' ),
      drawer = '.drawer',
      mobileBP = 600;


  // ================================
  // Navigation
  // ================================

  // Create a section title based on the current page

  var $navMain_level1 = $('.nav-main:first .fsNavLevel1'),
      $navSub_title = $navSub.find('> header > .fsElementTitle'),
      sectionTitle = $navMain_level1.find('> li[class*="fsNavCurrentPage"] > a').text()
  ;

  if (sectionTitle.length !== 0) {
    $navSub_title.html(sectionTitle);
  }

  if($navSub.find('nav .fsNavLevel1').length !== 0) {
      $navSub.removeClass( 'nav-sub-empty' );
  } else {
      $navSub.addClass( 'nav-sub-empty' );
  }

  // nav-sub - mobile toggle
  $navSub_title.click( function() {
    $(this).closest( $navSub ).toggleClass( 'active-nav' );
  });

  $(document).on('click', function(event) {
    if ( !$(event.target).closest( $navSub ).length ) {
        $navSub.removeClass( 'active-nav' );
    }
  });

  // ====================================
  // split list and setup header scripts
  // ====================================
  
  setupHeader();

  $( '.nav-main .fsNavLevel1 > li.fsNavParentPage' ).attr('aria-haspopup','true');
  $( '.nav-main .fsNavLevel1 > li.fsNavParentPage' ).doubleTapToGo();


  // ====================================
  // Hero Image
  // ====================================

  if ($('.hero').length) {
    $('#fsHeader').addClass('hasHero');
    if (!$('.hero').hasClass('fsStateEditable')) {
      $('.hero:not(.fsStateEditable)').appendTo('#fsHeader');
      backgroundImage('.hero');
    }
  }

  // ================================
  // Off Canvas Menu
  // ================================


  $('#fsPageWrapper').prepend([
      '<div class="drawer">',
      '</div>',
      '<div class="drawer-ribbon">',
      '<button class="drawer-trigger" href="#">Menu</button>',
      '</div>'
    ].join('\n'));

  //append search and main nav to mobile menu
  $('.site-search').clone().appendTo(drawer);
  $('#fsMenu').appendTo(drawer);

  // Toggle attribute of the body
  $('.drawer-trigger').click(function() {

    $body.toggleClass('drawer-is-active');

  });

  // Remove attribute on the bottom if anything other than
  // what is mentioned is clicked on
  $(document).on('click', function(event) {

    if (!$(event.target).closest('.drawer, .drawer-trigger, .next').length) {

      $body.removeClass('drawer-is-active');

    }

  });

  // ====================================
  // mobile menu
  // ====================================

  //new close button
  $(drawer).prepend('<div class="close-btn"></div>');

  $('.close-btn').click(function(){
    $('body').removeClass('drawer-is-active');
  });

  $('.mobile-nav li.fsNavParentPage').prepend('<div class="drop-trigger"></div>');

  $('.drop-trigger').click(function() {
    $(this).toggleClass('expanded');
    $(this).parent().find('> .fsNavPageInfo').slideToggle();
    $(this).parent().toggleClass('active');
    //need to make sure that current pages get the active class added to them by default and dont get it stuck to them
  });

  $('.drawer .mobile-nav ul li.fsNavCurrentPage').addClass('active');
  $('.drawer .mobile-nav ul li.fsNavCurrentPageAncestor').addClass('active');

  $('.drawer .mobile-nav ul li.fsNavCurrentPage > .drop-trigger').addClass('expanded');
  $('.drawer .mobile-nav ul li.fsNavCurrentPageAncestor > .drop-trigger').addClass('expanded');



  // ================================
  // Mobile Dropdown Subnav
  // ================================


  $('.nav-bar-mobile').find('header').click(function() {
    $(this).toggleClass('expanded');
    $(this).parent().find('> .fsElementContent').slideToggle();
    $(this).parent().toggleClass('active');
  });



  // ================================
  // Portal mods
  // ================================

  if (!$('body').hasClass('fsComposeMode')) {

    $('.portal-mod').each(function(){

      if ($(this).find("img").length > 0) {
        $(this).addClass('hasImg');

        var portImg = $(this).find('img');
        $(portImg).wrap('<div class="img-wrapper"></div>');
        $(this).find('.img-wrapper').prependTo($(this));

        var portSrc = $(portImg).attr('src');
        $(this).find('.img-wrapper').css('background-image', 'url("' + portSrc + '")');
      } 


    });

  }


  // ================================
  // Responsive Built-in sliders 
  // ================================

  // the following takes care of the news/calendar slideshow option
  // and makes them responsive

	var targets = [ 
		'.fsNews.fsSlideshow',
		'.fsCalendar.fsSlideshow'
	];


	var bp = [{

    breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
    breakpoint: mobileBP,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
			}
	}];

	for (var i = 0; i < targets.length; i++) {
		$(targets[i] + ' .fsElementSlideshow').slick('slickSetOption', 'responsive', bp, true);
	}

});



function backgroundImage(e){backgroundElement=e,$(backgroundElement).each(function(){var e=$(this).find("img").attr("src");$(this).css("background-image",'url("'+e+'")')})}function date(){var e,t,n=".date-container",a=new Date,r=a.getYear(),o=a.getDay(),i=a.getMonth(),s=a.getDate(),c=a.getHours();e=c%12||12,t=12>c?"am":"pm";var l=a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes();1e3>r&&(r+=1900),10>s&&(s="0"+s);var d=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),u=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),f='<div class="date"><div class="day">'+d[o]+',</div><div class="month"> '+u[i]+" "+s+'</div><div class="time">'+e+":"+l+" "+t+"</div></div>";$(n).html(f)}function debounce(e,t,n){var a;return function(){var r=this,o=arguments,i=function(){a=null,n||e.apply(r,o)},s=n&&!a;clearTimeout(a),a=setTimeout(i,t),s&&e.apply(r,o)}}function placeholder(e,t){"use strict";var n,a,r=100,o=100;n=function i(){e.find("input.gsc-input").length?$.support.placeholder?e.find("input.gsc-input").attr("placeholder",t):e.find("input.gsc-input").attr("value",t):r>0&&(a=setTimeout(i,o),r-=1)},a=setTimeout(n,o)}function nano(e,t){return e.replace(/\{([\w\.]*)\}/g,function(e,n){for(var a=n.split("."),r=t[a.shift()],o=0,i=a.length;i>o;o++)r=r[a[o]];return"undefined"!=typeof r&&null!==r?r:""})}function athBPTv3(){var e=$(".ath-landing-slideshow"),t=$(".ath-event-slideshow.schedules"),n=$(".ath-event-slideshow.scores");e.find(".fsElementHeaderContent > a").on("click",function(t){t.preventDefault(),e.addClass("start-show"),e.mediaSlider({mediaTemplate:['<article class="universal-slide" style="background-image: url({imgSrc});">','<img src="{imgSrc}" class="universal-img" />','<div class="caption-wrapper">','<div class="caption-title">{captionTitle}</div>','<div class="caption-desc">{captionDesc}</div>',"</div>","</article>"],callback:function(){e.find(".fsMediaCustomPlayer").slick({slidesToShow:1,slidesToScroll:1,pauseOnHover:!1}),e.find(".fsMediaCustomPlayer").addClass("show")}})}),t.addClass("on"),t.click(function(){$(this).addClass("on"),n.removeClass("on")}),n.click(function(){$(this).addClass("on"),t.removeClass("on")}),$(".ath-event-slideshow .fsListItems").slick({arrows:!0,infinite:!0,speed:300,variableWidth:!0,responsive:[{breakpoint:600,settings:{arrows:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,variableWidth:!1,adaptiveHeight:!0}}]}),$(".title-bar").find("> header .fsElementTitle").wrapInner('<div class="title-inner">'),backgroundImage(".featured-news .fsThumbnail")}!function(e,t,n,a){e.fn.doubleTapToGo=function(a){return"ontouchstart"in t||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?(this.each(function(){var t=!1;e(this).on("click",function(n){var a=e(this);a[0]!=t[0]&&(n.preventDefault(),t=a)}),e(n).on("click touchstart MSPointerDown",function(n){for(var a=!0,r=e(n.target).parents(),o=0;o<r.length;o++)r[o]==t[0]&&(a=!1);a&&(t=!1)})}),this):!1}}(jQuery,window,document),$.fn.randomize=function(e){var t=e?$(this).find(e):$(this).children(),n=t.parent();return n.each(function(){$(this).children(e).sort(function(){return Math.round(Math.random())-.5}).detach().appendTo(this)}),this};var $notComposeMode=$("body:not(.fsComposeMode)"),$noTouch=$(".no-touch"),$circleButton=$(".circle-button");if($circleButton.length&&$notComposeMode.length&&($circleButton.wrapInner('<a href="" class="circle-button-link" /> '),$circleButton.each(function(){var e=$(this).find("header").clone().addClass("front");$(this).find(".circle-button-link").prepend(e),$(this).find(".fsElementContent").remove()}),$circleButton.find("header").wrapInner('<div class="circle-button-inner" />'),$circleButton.find(".fsElementHeaderContent a").each(function(){var e=$(this).attr("href");$(this).parents(".circle-button-link").attr("href",e)}),$circleButton.doubleTapToGo()),$("body:not(.fsComposeMode)").hasClass("bpt-athletics3")&&(athBPTv3(),$("#fsHeader").addClass("hasHero")),$(".fsCalendar.fsGrid").length){$(".fsCalendar.fsGrid").addClass("smallCal");var eventview,scrollUp,onClickGridEvent=function(e){var t,n,a=$(e.target).closest(".fsCalendarDaybox");n=a.clone(),t=eventview.offset().top-16,$(".fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox>div").removeClass("selected"),eventview.empty().append(n),a.addClass("selected"),$("html,body").animate({scrollTop:t},450)},onClickScrollUp=function(){var e=$(".fsCalendarMonthBrowser").offset().top-16;$("html,body").animate({scrollTop:e},450)},onAJAXSuccess=function(e,t,n,a){var r=$(a).hasClass("fsCalendar fsGrid");r&&initCalendar()},initCalendar=function(){eventview=$('<div id="event-view" />').insertAfter(".fsCalendarEventGrid"),scrollUp=$('<div class="scroll-up"><span>Back Up To Calendar</span></div>').insertAfter(eventview),scrollUp.on("click",onClickScrollUp),$(".fsCalendarDaybox").has(".fsCalendarInfo").addClass("has-info"),$(".fsCalendarEventGrid").on("click",".fsCalendarDaybox:not(.fsCalendarWeekendDayBox),.fsCalendarWeekendDayBox>div ",onClickGridEvent)};$(document).ajaxSuccess(onAJAXSuccess),initCalendar()}$.fn.mediaSlider=function(e){slideshowClass=this;var t,n,a=600,r=$(slideshowClass).find(".fsMediaCustomPlayer"),o=r.attr("data-playlisturl"),i=$.extend({mediaTemplate:""},e),s={slide:i.mediaTemplate.join("\n")};r.data("display_loaded",!1),$.getJSON(o,function(e){var o;$(window).width()>a?t="full":(t="mobile",$(window).on("resize",function(){var e=$(this).width();e>a&&!r.data("display_loaded")&&!o&&($(window).data("display_loaded",!0),o=!0,r.find("article").each(function(){var e=$(this).find("img").attr("src").replace("/mobile/","/fullsize/");$(this).find("img").attr("src",e),$(this).attr("style",'background-image: url("'+e+'");')}))})),$.each(e.objects,function(a,o){n="full"===t?e.objects[a].full_path:e.objects[a].mobile_path,r.append(nano(s.slide,{imgSrc:n,captionTitle:e.objects[a].object_title,captionDesc:e.objects[a].object_description}))})}).done(function(){e.callback()}).fail(function(){r.append("<span>Please make sure you have content added to media manager and that you have selected the correct element settings.</span>").css("textAlign","center")})},window.Modernizr=function(e,t,n){function a(e){y.cssText=e}function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function i(e,t){for(var a in e){var r=e[a];if(!o(r,"-")&&y[r]!==n)return"pfx"==t?r:!0}return!1}function s(e,t,a){for(var o in e){var i=t[e[o]];if(i!==n)return a===!1?e[o]:r(i,"function")?i.bind(a||t):i}return!1}function c(e,t,n){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+$.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?i(o,t):(o=(e+" "+T.join(a+" ")+a).split(" "),s(o,t,n))}var l,d,u,f="2.8.3",p={},h=!0,m=t.documentElement,v="modernizr",g=t.createElement(v),y=g.style,b={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",$=w.split(" "),T=w.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},S={},k=[],x=k.slice,M=function(e,n,a,r){var o,i,s,c,l=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(a,10))for(;a--;)s=t.createElement("div"),s.id=r?r[a]:v+(a+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(d?l:u).innerHTML+=o,u.appendChild(l),d||(u.style.background="",u.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(u)),i=n(l,e),d?l.parentNode.removeChild(l):(u.parentNode.removeChild(u),m.style.overflow=c),!!i},j=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var a;return M("@media "+t+" { #"+v+" { position: absolute; } }",function(t){a="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),a},P={}.hasOwnProperty;u=r(P,"undefined")||r(P.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return P.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),a=function(){if(this instanceof a){var r=function(){};r.prototype=t.prototype;var o=new r,i=t.apply(o,n.concat(x.call(arguments)));return Object(i)===i?i:o}return t.apply(e,n.concat(x.call(arguments)))};return a}),S.flexbox=function(){return c("flexWrap")},S.flexboxlegacy=function(){return c("boxDirection")},S.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},S.cssanimations=function(){return c("animationName")},S.csscolumns=function(){return c("columnCount")},S.csstransforms=function(){return!!c("transform")},S.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in m.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},S.csstransitions=function(){return c("transition")},S.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return n},S.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return n},S.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},S.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},S.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(E.svg,"clipPath")))};for(var B in S)u(S,B)&&(d=B.toLowerCase(),p[d]=S[B](),k.push((p[d]?"":"no-")+d));return p.addTest=function(e,t){if("object"==typeof e)for(var a in e)u(e,a)&&p.addTest(a,e[a]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},a(""),g=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),a=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",a.insertBefore(n.lastChild,a.firstChild)}function a(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=g[e[m]];return t||(t={},v++,e[m]=v,g[v]=t),t}function o(e,n,a){if(n||(n=t),d)return n.createElement(e);a||(a=r(n));var o;return o=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:a.frag.appendChild(o)}function i(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||r(e);for(var o=n.frag.cloneNode(),i=0,s=a(),c=s.length;c>i;i++)o.createElement(s[i]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var a=r(e);return y.shivCSS&&!l&&!a.hasCSS&&(a.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||s(e,a),e}var l,d,u="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,d=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:f.shivCSS!==!1,supportsUnknownElements:d,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:i};e.html5=y,c(t)}(this,t),p._version=f,p._prefixes=C,p._domPrefixes=T,p._cssomPrefixes=$,p.mq=j,p.testProp=function(e){return i([e])},p.testAllProps=c,p.testStyles=M,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+k.join(" "):""),p}(this,this.document),function(e,t,n){function a(e){return"[object Function]"==v.call(e)}function r(e){return"string"==typeof e}function o(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=g.shift();y=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,a,r,o,c,l){function d(t){if(!p&&i(u.readyState)&&(b.r=p=1,!y&&s(),u.onload=u.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(u)},50);for(var a in k[n])k[n].hasOwnProperty(a)&&k[n][a].onload()}}var l=l||f.errorTimeout,u=t.createElement(e),p=0,v=0,b={t:a,s:n,e:o,a:c,x:l};1===k[n]&&(v=1,k[n]=[]),"object"==e?u.data=n:(u.src=n,u.type=e),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,v)},g.splice(r,0,b),"img"!=e&&(v||2===k[n]?(w.insertBefore(u,C?null:m),h(d,l)):k[n].push(u))}function l(e,t,n,a,o){return y=0,t=t||"j",r(e)?c("c"==t?T:$,e,t,this.i++,n,a,o):(g.splice(this.i++,0,e),1==g.length&&s()),this}function d(){var e=f;return e.loader={load:l,i:0},e}var u,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,C=b&&!!t.createRange().compareNode,w=C?p:m.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,$=b?"object":p?"script":"img",T=p?"script":$,E=Array.isArray||function(e){return"[object Array]"==v.call(e)},S=[],k={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,a,e=e.split("!"),r=S.length,o=e.pop(),i=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;i>n;n++)a=e[n].split("="),(t=x[a.shift()])&&(o=t(o,a));for(n=0;r>n;n++)o=S[n](o);return o}function i(e,r,o,i,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=a(r)?r:r[e]||r[i]||r[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,r,o,i,s):(k[c.url]?c.noexec=!0:k[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(a(r)||a(l))&&o.load(function(){d(),r&&r(c.origUrl,s,i),l&&l(c.origUrl,s,i),k[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(r(e))n||(u=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),i(e,u,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(a(u)?u=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:u[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),i(e[c],u,t,c,l))}else!n&&p()}var s,c,l=!!e.test,d=e.load||e.both,u=e.callback||o,f=u,p=e.complete||o;n(l?e.yep:e.nope,!!d),d&&n(d)}var c,l,u=this.yepnope.loader;if(r(e))i(e,0,u,0);else if(E(e))for(c=0;c<e.length;c++)l=e[c],r(l)?i(l,0,u,0):E(l)?f(l):Object(l)===l&&s(l,u);else Object(e)===e&&s(e,u)},f.addPrefix=function(e,t){x[e]=t},f.addFilter=function(e){S.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",u=function(){t.removeEventListener("DOMContentLoaded",u,0),t.readyState="complete"},0)),e.yepnope=d(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,a,r,c,l){var d,u,p=t.createElement("script"),r=r||f.errorTimeout;p.src=e;for(u in a)p.setAttribute(u,a[u]);n=l?s:n||o,p.onreadystatechange=p.onload=function(){!d&&i(p.readyState)&&(d=1,n(),p.onload=p.onreadystatechange=null)},h(function(){d||(d=1,n(1))},r),c?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,a,r,i,c){var l,r=t.createElement("link"),n=c?s:n||o;r.href=e,r.rel="stylesheet",r.type="text/css";for(l in a)r.setAttribute(l,a[l]);i||(m.parentNode.insertBefore(r,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},jQuery(function(e){e("body.portal:not(.fsComposeMode)").length&&(e(".portal-hero").insertBefore("#fsPageBodyWrapper"),e(".portal-sub-nav").clone().addClass("portal-sub-mobile").insertBefore("#fsPageBodyWrapper"),e(".portal-sub-mobile").prepend('<div class="sub-trigger">More Pages</div>'),e(".sub-trigger").click(function(){e(this).parent().toggleClass("active")}),backgroundImage(e(".portal-news a.fsThumbnail")),backgroundImage(e(".portal-directory .fsPhoto")),e(".portal-cal footer .fsElementFooterContent").appendTo(".portal-cal > .fsElementContent > .fsListItems"),e(".portal-student-announcements").prependTo("#fsPageBody"),e(".portal-photos").insertAfter("#fsPageBodyWrapper"))});