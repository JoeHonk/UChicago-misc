<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>

  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
<!--[if IE 7]>
	<link rel="stylesheet" type="text/css" href="http://alumniweekend.uchicago.edu/sites/all/themes/aw2013/css/ie7.css">
<![endif]-->
  
    <!--
/* @license
 * MyFonts Webfont Build ID 1316338, 2011-10-03T10:50:35-0400
 * 
 * The fonts listed in this notice are subject to the End User License
 * Agreement(s) entered into by the website owner. All other parties are 
 * explicitly restricted from using the Licensed Webfonts(s).
 * 
 * You may obtain a valid license at the URLs below.
 * 
 * Webfont: Proxima Nova Thin by Mark Simonson
 * URL: http://www.myfonts.com/fonts/marksimonson/proxima-nova/thin/
 * Licensed pageviews: 10,000,000
 * 
 * Webfont: Proxima Nova Regular by Mark Simonson
 * URL: http://www.myfonts.com/fonts/marksimonson/proxima-nova/regular/
 * Licensed pageviews: 10,000,000
 * 
 * Webfont: Proxima Nova Semibold by Mark Simonson
 * URL: http://www.myfonts.com/fonts/marksimonson/proxima-nova/semibold/
 * Licensed pageviews: 10,000,000
 * 
 * Webfont: Proxima Nova Light by Mark Simonson
 * URL: http://www.myfonts.com/fonts/marksimonson/proxima-nova/light/
 * Licensed pageviews: 10,000,000
 * 
 * Webfont: Proxima Nova Bold by Mark Simonson
 * URL: http://www.myfonts.com/fonts/marksimonson/proxima-nova/bold/
 * Licensed pageviews: 10,000,000
 * 
 * 
 * License: http://www.myfonts.com/viewlicense?type=web&buildid=1316338
 * Webfonts copyright: Copyright (c) Mark Simonson, 2005. All rights reserved.
 * 
 * © 2011 Bitstream Inc
*/
-->

<link rel="stylesheet" href="//identity.uchicago.edu/c/fonts/proximanova.css">

  
  
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <script type="text/javascript">
 
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-3572058-1']);
  _gaq.push(['_setDomainName', '.alumniweekend.uchicago.edu']);
  _gaq.push(['_trackPageview']);
 
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 
</script>
  
</head>
<body<?php print $attributes;?>>
  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>