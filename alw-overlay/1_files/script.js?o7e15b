(function($) {



  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };


  var utm_source = getUrlParameter('utm_source');
  $.cookie("utm_source", utm_source);
  var utm_medium = getUrlParameter('utm_medium');
  $.cookie("utm_medium", utm_medium);
  var utm_campaign = getUrlParameter('utm_campaign');
  $.cookie("utm_campaign", utm_campaign);

  console.log($.cookie("utm_campaign"));




  $(document).ready(function() {

    var cvurl = 'https://www.cvent.com/events/ard-comm-test-event-001/registration-9a33304e21944206b63aeb3641567c80.aspx';
    if ($.cookie("utm_campaign") != 'undefined') {
      $('a[href="' + cvurl + '"]').attr('href', cvurl + '?utm_source=' + $.cookie("utm_source") + '&utm_medium=' + $.cookie("utm_medium") + '&utm_campaign=' + $.cookie("utm_campaign"));
    }









    var cpurl = 'https://www.kintera.org/site/c.8gKMJYMvF9LWG/b.9202493/k.913F/Donation_Form__UChicago_Campaign_Main/apps/ka/sd/donorcustom.asp';
    var reurl = 'https://www.kintera.org/site/c.mjJXJ7MLIsE/b.8853439/k.671A/Make_A_Gift__Reunion/apps/ka/sd/donorcustom.asp';
    var currpath = window.location.pathname;
    var bid = '';

    switch (currpath) {
      case '/reunion':
        bid = '';
        break;
      case '/reunions/1966':
        bid = '915549';
        break;
      case '/reunions/1971':
        bid = '915551';
        break;
      case '/reunions/1976':
        //bid = '396279';
        bid = '';
        break;
      case '/reunions/1981':
        //bid = '396557';
        bid = '';
        break;
      case '/reunions/1986':
        //bid = '915557';
          bid = '';
        break;
      case '/reunions/1991':
        bid = '915559';
        break;
      case '/reunions/1996':
        bid = '915561';
        break;
      case '/reunions/2001':
        bid = '915563';
        break;
      case '/reunions/2006':
        bid = '915565';
        break;
      case '/reunions/2011':
        bid = '915567';
        break;
      case '/reunions/2015':
        bid = '915569';
        break;
      case '/reunions/emeriti':
        bid = '';
        break;
      case '/reunions/young-alumni':
        bid = '';
        break;
      default:
        bid = '';
        reurl = cpurl;
    }

    if (!bid) {
      $('a[href="' + reurl + '"]').attr('href', reurl);
      $('a[href="' + cpurl + '"]').attr('href', reurl);
    } else {
      $('a[href="' + reurl + '"]').attr('href', reurl + '?BeneficiaryID=' + bid);
      $('a[href="' + cpurl + '"]').attr('href', reurl + '?BeneficiaryID=' + bid);
    }



    /**
    * Function that tracks a click on an outbound link in Analytics
    * This function takes a valid URL string as an argument, and uses that URL string
    * as the event label. Setting the transport method to 'beacon' lets the hit be sent
    * using 'navigator.sendBeacon' in browser that support it.
    */
    function _gaLt(event) {

            /* If GA is blocked or not loaded then don't track */
            if (!ga.hasOwnProperty("loaded") || ga.loaded != true) {
                return;
            }

            var el = event.srcElement || event.target;

            /* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */
            while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
                el = el.parentNode;
            }

            /* if a link has been clicked */
            if (el && el.href) {

                var link = el.href;

                /* Only if it is an external link */
                if (link.indexOf(location.host) == -1 && !link.match(/^javascript\:/i)) {
                    /* Is target set and not _(self|parent|top)? */
                    var target = (el.target && !el.target.match(/^_(self|parent|top)$/i)) ? el.target : false;

                    var hbrun = false; // tracker has not yet run

                    /* HitCallback to open link in same window after tracker */
                    var hitBack = function() {
                        /* run once only */
                        if (hbrun) return;
                        hbrun = true;
                        window.location.href = link;
                    };

                    /* If target opens a new window then just track */
                    if (el.target && !el.target.match(/^_(self|parent|top)$/i)) {
                        ga(
                            "send", "event", "Outgoing Links", link,
                            document.location.pathname + document.location.search
                        );
                    } else {
                        /* send event with callback */
                        ga(
                            "send", "event", "Outgoing Links", link,
                            document.location.pathname + document.location.search, {
                                "hitCallback": hitBack
                            }
                        );

                        /* Run hitCallback if GA takes too long */
                        setTimeout(hitBack, 1000);

                        /* Prevent standard click */
                        event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                    }
                }

            }
        }

        /* Attach the event to all clicks in the document after page has loaded */
        var w = window;
        w.addEventListener ? w.addEventListener("load", function() {
            document.body.addEventListener("click", _gaLt, !1)
        }, !1) : w.attachEvent && w.attachEvent("onload", function() {
            document.body.attachEvent("onclick", _gaLt)
        });


  });

  $(document).ready(function() {

  });

})(jQuery);
