<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript" src="/sites/all/themes/aw2013/js/sticky/jquery.sticky.js"></script>
<style type="text/css" media="all">
  
input[type=radio] {
    display:none;
}
 
input[type=radio] + label {
  width:110px;
    display:inline-block;
    margin:-2px;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
    color: #333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
    background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
    background-image: -o-linear-gradient(top,#fff,#e6e6e6);
    background-image: linear-gradient(to bottom,#fff,#e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    border-bottom-color: #b3b3b3;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
}
 
input[type=radio]:checked + label {
       background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
        background-color:#e0e0e0;
}

input[type=checkbox] {
    display:none;
}

input[type=checkbox] + label {
    width:90px;

    height: 22px;
    display:inline-block;
    margin:-2px;
    padding: 12px 5px 5px 5px;
    margin-bottom: 0;
    font-size: 12.5px;
    line-height: 20px;
    color: #333;
    text-align: center;
    text-shadow: 0 1px 1px rgba(255,255,255,0.75);
    vertical-align: middle;
    cursor: pointer;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
    background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
    background-image: -o-linear-gradient(top,#fff,#e6e6e6);
    background-image: linear-gradient(to bottom,#fff,#e6e6e6);
    background-repeat: repeat-x;
    border: 1px solid #ccc;
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
    border-bottom-color: #b3b3b3;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff',endColorstr='#ffe6e6e6',GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
    margin:5px;
}
 
input[type=checkbox]:checked + label {
       background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
    -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);
        background-color:#e0e0e0;
}


@media (max-width: 430px){
input[type=checkbox] + label {
width:75px;
    height: 20px;
    display:inline-block;
    margin:-2px;
    padding: 10px 3px 3px 3px;
    margin-bottom: 0;
    font-size: 11px;
    line-height: 15px;
    margin:3px;
}
}


#page-title{
  display:none;
}

</style>


<script>
    $(document).ready(function(){ 
      //$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0,getWidthFrom:".sticky-wrapper"});
      //$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0});
    });
  </script>

<script>
  function tog(v){return v?'addClass':'removeClass';} 

$(document).on('input', '.ctools-auto-submit-processed', function() {
    $(this)[tog(this.value)]('x');
}).on('mousemove', '.x', function(e) {
    $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');   
}).on('click', '.onX', function(){
    $(this).removeClass('x onX').val('').change();
});


$(document).ready(function(){ 
  $('form').find("input[type=text], input[type=password], textarea").each(function(ev)
  {
      if(!$(this).val()) { 
     $(this).attr("placeholder", "Search Events");
  }
  });
});


$(document).ready(function(){ 
  if ($(window).width() > 980) {
  $('.region-sidebar-second').insertAfter('.region-content');
$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0,bottomSpacing: 300,getWidthFrom:".sticky-wrapper"});}
  });

$(document).ready(function(){ 
  if ($(window).width() <= 980) {
  $('.region-sidebar-second').insertBefore('.region-content');
  $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").unstick();
}

  });

$(window).on('resize', function(){
  if ($(window).width() > 980) {
  $('.region-sidebar-second').insertAfter('.region-content');
$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0, getWidthFrom:".sticky-wrapper"});}
  });

$(window).on('resize', function(){
  if ($(window).width() <= 980) {
  $('.region-sidebar-second').insertBefore('.region-content');
  $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").unstick();
}
  
  });


</script>


  <style>
    body{
      /*height: 10000px;
      padding: 0;
      margin: 0;*/
    }

    #views-exposed-form-events-filterable-page-1 .views-exposed-widgets{
      background-color: #fff;
      z-index:1;
      /*background: #bada55;
      color: white;*
      font-family: Droid Sans;*/
      font-size: 18px;
      line-height: 1.6em;
      font-weight: bold;
      text-align: center;
      padding: 5px;
      padding-top: 0;
      text-shadow: 0 1px 1px rgba(0,0,0,.2);
  
      border-bottom: 0 #333 solid;

      /*box-sizing:border-box;*/
    }


.ctools-auto-submit-processed{
  background: #fff url(data:image/gif;base64,R0lGODlhBwAHAIAAAP///5KSkiH5BAAAAAAALAAAAAAHAAcAAAIMTICmsGrIXnLxuDMLADs=) no-repeat right -10px center;
  border: 0 solid #999;
  padding: 3px 3px 3px 4px;     /* Use the same right padding (18) in jQ! */
  border-radius: 3px;
  transition: background 0.4s;
  background-color: transparent;
}
.ctools-auto-submit-processed.x  { background-position: right 5px center; } /* (jQ) Show icon */
.ctools-auto-submit-processed.onX{ cursor: pointer; }              /* (jQ) hover cursor style */



.cd-top.cd-is-visible {
  /* the button becomes visible */
  visibility: visible;
  opacity: 1;
}
.cd-top.cd-fade-out {
  /* if the user keeps scrolling down, the button is out of focus and becomes less visible */
  opacity: .5;
}


.cd-top {
  display: inline-block;
  height: 60px;
  width: 60px;
  position: fixed;
  bottom: 50px;
  right: 30%;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  /* image replacement properties */
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  background: rgba(128, 0, 0, 0.8) url(https://alumniweekend.uchicago.edu/sites/all/themes/aw2013/images/cd-top-arrow.svg) no-repeat center 50%;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity .3s 0s, visibility 0s .3s;
  -moz-transition: opacity .3s 0s, visibility 0s .3s;
  transition: opacity .3s 0s, visibility 0s .3s;
}
.cd-top.cd-is-visible, .cd-top.cd-fade-out, .no-touch .cd-top:hover {
  -webkit-transition: opacity .3s 0s, visibility 0s 0s;
  -moz-transition: opacity .3s 0s, visibility 0s 0s;
  transition: opacity .3s 0s, visibility 0s 0s;
}
.cd-top.cd-is-visible {
  /* the button becomes visible */
  visibility: visible;
  opacity: 1;
}
.cd-top.cd-fade-out {
  /* if the user keeps scrolling down, the button is out of focus and becomes less visible */
  opacity: .5;
}
.no-touch .cd-top:hover {
  background-color: #e86256;
  opacity: 1;
}
@media only screen and (min-width: 768px) {
  .cd-top {
    right: 20%;
    bottom: 20px;
  }
}
@media only screen and (min-width: 1024px) {
  .cd-top {
    height: 60px;
    width: 60px;
    right: 20%;
    bottom: 30px;
  }
}

@media (max-width: 980px){
.zone-header-wrapper {
  display:none;
}
}




  </style>







  <div id="page-wrapper views-exposed-form-events-filterable-page-1"><div id="page">
    <div id="header"><div class="section clearfix">
      <?php print render($page['header']); ?>
    </div></div> <!-- /.section, /#header -->
    <?php if ($main_menu || $secondary_menu): ?>
      <div id="navigation"><div class="section">
        <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix')), 'heading' => t('Main menu'))); ?>
        <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'inline', 'clearfix')), 'heading' => t('Secondary menu'))); ?>
      </div></div> <!-- /.section, /#navigation -->
    <?php endif; ?>
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb"><?php print $breadcrumb; ?></div>
    <?php endif; ?>
    <?php //print $messages; ?>
    <div id="main-wrapper"><div id="main" class="clearfix aw-events-page">
      <div id="content" class="column"><div class="section">
           <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif;?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>
      </div></div> <!-- /.section, /#content -->
      <?php if ($page['sidebar_first']): ?>
        <div id="sidebar-first" class="column sidebar"><div class="section">
          <?php print render($page['sidebar_first']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
      <?php endif; ?>

      <?php if ($page['sidebar_second']): ?>
        <div id="sidebar-second" class="column sidebar"><div class="section">
          <?php print render($page['sidebar_second']); ?>
        </div></div> <!-- /.section, /#sidebar-second -->
      <?php endif; ?>    <a href="#0" class="cd-top">Top</a>

    </div></div> <!-- /#main, /#main-wrapper -->

    <div id="footer"><div class="section">
      <?php print render($page['footer']); ?>
    </div></div> <!-- /.section, /#footer -->

  </div></div> <!-- /#page, /#page-wrapper -->


<script type="text/javascript">
  jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    if ($(window).width() > 980) {
    $('body,html').animate({
      scrollTop: 550 ,
      }, scroll_top_duration
    );
  }

    if ($(window).width() <= 980) {
    $('body,html').animate({
      scrollTop: 180 ,
      }, scroll_top_duration
    );
  }

});

});




</script>

<script type="text/javascript">
  
$(document).ready(function(){
//$('form-item-keys').removeClass('ctools-auto-submit-processed');
//$('#edit-keys').addClass('test3').removeClass('ctools-auto-submit-processed').addClass('ctools-auto-submit-exclude');
//$('#edit-field-class-decade-tid').addClass('test3').removeClass('form-select');

});




</script>
