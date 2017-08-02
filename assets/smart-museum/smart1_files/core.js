// Homepage feature slideshow

$(window).load(function() {
  $('.flexslider').flexslider({
    touch: true,
    animationLoop: true,
    animation: "slide",

    before: function(slider) {
        var nextSlide = slider.slides.eq(slider.animatingTo);
        $(nextSlide).find("img").show().lazyload({});
    }
  });
});

// Lazy Load
$(function() {
    $("img.lazy").lazyload({
      threshold: 100,
    });
});

// GSA jQuery plugin
(function($) {$.fn.GSASearch = function(options){var defaults = {q: "",start: "",num: "10",sitesearch: "",site: "default_collection",waitGifPath: "webresources.uchicago.edu/js/jquery.GSASearch.wait.gif",protocol: "http:"};var options = $.extend(defaults, options);var resultsContainer = $(this);resultsContainer.data("searchSiteURL", options.protocol+'//search.uchicago.edu');resultsContainer.data("startNumber", "1");resultsContainer.data("totalCount", "10");return this.each(function() {resultsContainer.empty();resultsContainer.html('<img src="'+options.protocol+'//'+options.waitGifPath+'" class="GSAwait">');options.q = options.q.replace(/(<([^>]+)>)/ig,"");options.start = options.start.toString().replace(/(<([^>]+)>)/ig,"");options.num = options.num.toString().replace(/(<([^>]+)>)/ig,"");options.sitesearch = options.sitesearch.replace(/(<([^>]+)>)/ig,"");options.site = options.site.replace(/(<([^>]+)>)/ig,"");search(options.q, options.start, options.num, options.sitesearch, options.site);});function search(q, start, num, sitesearch, site) {var Base64 = {_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode : function (input) {var output = "";var chr1, chr2, chr3, enc1, enc2, enc3, enc4;var i = 0;input = Base64._utf8_encode(input);while (i < input.length) {chr1 = input.charCodeAt(i++);chr2 = input.charCodeAt(i++);chr3 = input.charCodeAt(i++);enc1 = chr1 >> 2;enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);enc4 = chr3 & 63;if (isNaN(chr2)) {enc3 = enc4 = 64;} else if (isNaN(chr3)) {enc4 = 64;}output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);}return output;},decode : function (input) {var output = "";var chr1, chr2, chr3;var enc1, enc2, enc3, enc4;var i = 0;input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");while (i < input.length) {enc1 = this._keyStr.indexOf(input.charAt(i++));enc2 = this._keyStr.indexOf(input.charAt(i++));enc3 = this._keyStr.indexOf(input.charAt(i++));enc4 = this._keyStr.indexOf(input.charAt(i++));chr1 = (enc1 << 2) | (enc2 >> 4);chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);}if (enc4 != 64) {output = output + String.fromCharCode(chr3);}}output = Base64._utf8_decode(output);return output;},_utf8_encode : function (string) {string = string.replace(/\r\n/g,"\n");var utftext = "";for (var n = 0; n < string.length; n++) {var c = string.charCodeAt(n);if (c < 128) {utftext += String.fromCharCode(c);}else if((c > 127) && (c < 2048)) {utftext += String.fromCharCode((c >> 6) | 192);utftext += String.fromCharCode((c & 63) | 128);}else {utftext += String.fromCharCode((c >> 12) | 224);utftext += String.fromCharCode(((c >> 6) & 63) | 128);utftext += String.fromCharCode((c & 63) | 128);}}return utftext;},_utf8_decode : function (utftext) {var string = "";var i = 0;var c = c1 = c2 = 0;while ( i < utftext.length ) {c = utftext.charCodeAt(i);if (c < 128) {string += String.fromCharCode(c);i++;}else if((c > 191) && (c < 224)) {c2 = utftext.charCodeAt(i+1);string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));i += 2;}else {c2 = utftext.charCodeAt(i+1);c3 = utftext.charCodeAt(i+2);string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));i += 3;}}return string;}};var searchParams = '&q=' + escape(q) + '&start='+ escape(start) + '&sitesearch=' + escape(sitesearch) + '&site=' + escape(site);searchParams += '&filter=0';var jsonParams = 'btnG=Search&entqr=0&ud=1&sort=date%3AD%3AL%3Ad1&output=xml_no_dtd&oe=UTF-8&ie=UTF-8'+ '&client=default_frontend&proxystylesheet=jsonp_frontend'+searchParams+ '&num='+ escape(num);var searchSiteURL = options.protocol+'//search.uchicago.edu/search?btnG=Search&entqr=0&ud=1&sort=date:D:L:d1&output=xml_no_dtd&oe=UTF-8&ie=UTF-8&client=default_frontend&proxystylesheet=default_frontend'+searchParams;var proxyUrl = options.protocol+'//webresources.uchicago.edu/php/proxy/gsaproxy.php?encodedParams='+Base64.encode(jsonParams)+'&callback=?';resultsContainer.data("searchSiteURL", searchSiteURL);var fetchSuccess = 0;var jqxhr = $.getJSON(proxyUrl, function(data) {showResults(data);fetchSuccess = 1;});if (jqxhr != undefined){jqxhr.error(function() { showError(); });} else {setTimeout(function(){if (!fetchSuccess){showError();}},7000);}}function showError(){var message = 'There is a problem fetching search results. Please refresh the page or contact <a href="mailto:weberror@uchicago.edu">weberror@uchicago.edu</a>.';resultsContainer.html(message);resultsContainer.data("totalCount", 0);resultsContainer.trigger('GSASearchComplete');}function showResults(data){var startNumber, totalCount = 0;var res = '<h2>Search for '+data.GSP.Q+'</h2>';if (data.GSP.RES == undefined){res += '<p>No pages were found.</p>';} else {res += '<p><strong>Results '+data.GSP.RES.SN+' - '+data.GSP.RES.EN+' of about '+data.GSP.RES.M+'.</strong></p>';var thisResultCount = data.GSP.RES.EN-data.GSP.RES.SN+1;if (thisResultCount == 1){var result = data.GSP.RES.R;if ( result['S'] == null ) {result['S'] = '';}var resultStr = '<h3><a href="'+result['U']+'">'+result['T']+'</a></h3>';resultStr += "<p>"+result['S']+"<br><em>"+result['U']+"</em></p>";res+=resultStr;}else {for(var i=0; i<thisResultCount; i++) {var result = data.GSP.RES.R[i];if ( result['S'] == null ) {result['S'] = '';}var resultStr = '<h3><a href="'+result['U']+'">'+result['T']+'</a></h3>';resultStr += "<p>"+result['S']+"<br><em>"+result['U']+"</em></p>";res+=resultStr;}}var perPageCount = options.num;startNumber = data.GSP.RES.SN;totalCount = (thisResultCount < perPageCount) ? data.GSP.RES.EN : data.GSP.RES.M;}resultsContainer.html(res);resultsContainer.data("startNumber", startNumber);resultsContainer.data("totalCount", totalCount);resultsContainer.trigger('GSASearchComplete');}};})(jQuery);

//jQuery pager
(function($) {$.fn.pager = function(options) {var opts = $.extend({}, $.fn.pager.defaults, options);return this.each(function() {$(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));});};function renderpager(pagenumber, pagecount, buttonClickCallback) {var $pager = $('<ul></ul>');$pager.append(renderButton('First', pagenumber, pagecount, buttonClickCallback));var startPoint = 1;var endPoint = 9;if (pagenumber > 4) {startPoint = pagenumber - 4;endPoint = pagenumber + 4;}if (endPoint > pagecount) {startPoint = pagecount - 8;endPoint = pagecount;}if (startPoint < 1) {startPoint = 1;}for (var page = startPoint; page <= endPoint; page++) {var currentButton = $('<li>' + (page) + '</li>');page == pagenumber ? currentButton.addClass('active') : currentButton.bind('click focusin',function(){ buttonClickCallback(this.firstChild.data); });currentButton.appendTo($pager);}$pager.append(renderButton('Last', pagenumber, pagecount, buttonClickCallback));return $pager;}function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {var $Button = $('<li>' + buttonLabel + '</li>');var destPage = 1;switch (buttonLabel) {case "first": destPage = 1;break;case "last":destPage = pagecount;break;}if (buttonLabel == "first") {pagenumber <= 1 ? $Button : $Button.bind('click focusin',function(){ buttonClickCallback(destPage); });}else {pagenumber >= pagecount ? $Button : $Button.bind('click focusin',function(){ buttonClickCallback(destPage); });}return $Button;}$.fn.pager.defaults = {pagenumber: 1,pagecount: 1};})(jQuery);

// custom search results
$(document).ready(function () {
    function submitSearch(searchTerm) {
        linkDiv = $("#GSALink");
        pagerDiv = $("#GSAPager");
        resultsDiv = $("#GSAResults");
        resultsDivFS2 = $("#GSAResultsFS2");
        thisQ = searchTerm;
        perPageCount = 15;
        linkDiv.empty();
        pagerDiv.empty();
        resultsDiv.GSASearch({
            q: thisQ,
            num: perPageCount,
            sitesearch: "smartmuseum.uchicago.edu"
        });
    }

    function searchTermFromQString() {
        var s;
        queryString = window.location.search.substring(1);
        nameValPairs = queryString.split("&");
        for (i = 0; i < nameValPairs.length; i++) {
            nameVal = nameValPairs[i].split("=");
            if (nameVal[0] == "GSAq") s = nameVal[1];
        }
        return s;
    }
    var searchTerm = searchTermFromQString();
    if (searchTermFromQString() != undefined) {
        searchTerm = unescape(searchTerm);
        submitSearch(searchTerm);
    }
    $("#GSAResults, #GSAResultsFS2").bind("GSASearchComplete", function () {
        pagerDiv = $("#GSAPager");
        perPageCount = 15;
        resultsDiv = $(this);
        pagerDiv.empty();
        thisPageNumber = Math.floor((parseInt(resultsDiv.data("startNumber")) + parseInt(perPageCount)) / parseInt(perPageCount));
        thisPageCount = Math.ceil(parseInt(resultsDiv.data("totalCount")) / perPageCount);
        pagerDiv.pager({
            pagenumber: thisPageNumber,
            pagecount: thisPageCount,
            buttonClickCallback: PagerClick
        });
    });
    PagerClick = function (pageclickednumber) {
        resultsDiv = $("#GSAResults");
        resultsDivFS2 = $("#GSAResultsFS2");
        perPageCount = 15;
        startNumber = (pageclickednumber * perPageCount) - perPageCount;
        resultsDiv.GSASearch({
            q: searchTerm,
            start: startNumber,
            num: perPageCount,
            sitesearch: "smartmuseum.uchicago.edu"
        });

    }
});

//set focus to search field

$('#search-drawer').on('shown.bs.collapse', function () {
  $("#searchtext").focus();
});

//set up twitter feed
var config1 = {
    "id": '644195375021166592',
    "domId": 'latest-tweet',
    "maxTweets": 1,
    "enableLinks": true,
    "showRetweet": false,
    "showUser": true,
    "showInteraction": true,
    "showTime": false,
    "showImages": false
};
twitterFetcher.fetch(config1);

