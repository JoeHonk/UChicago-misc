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

<!--[if lt IE 9]>
    <link rel="stylesheet" type="text/css" href="http://alumniweekend.uchicago.edu/sites/all/themes/aw2013/css/aw2015-ie.css">
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

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-56658849-1', 'auto', {'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', ['kintera.org', 'alumniweekend.uchicago.edu','aw.uchicago.edu'] );
  ga('send', 'pageview');
</script>

<script src="https://cdn.optimizely.com/js/214036693.js"></script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '885929261476438', {
em: 'insert_email_variable,'
});
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=885929261476438&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->

<!-- Twitter universal website tag code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nw7jq');
twq('track','PageView');
</script>
<!-- End Twitter universal website tag code -->


<script type="text/javascript">
(function() {
  var didInit = false;
  function initMunchkin() {
    if(didInit === false) {
      didInit = true;
      Munchkin.init('250-CQH-936');
    }
  }
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = '//munchkin.marketo.net/munchkin.js';
  s.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      initMunchkin();
    }
  };
  s.onload = initMunchkin;
  document.getElementsByTagName('head')[0].appendChild(s);
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
