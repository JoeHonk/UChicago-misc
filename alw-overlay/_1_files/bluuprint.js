!function t(e,n,i){function r(s,o){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(a)return a(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return r(n?n:t)},u,u.exports,t,e,n,i)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(t,e,n){(function(e){"use strict";t("./sticky-nav").init(),e.window.Timer=t("./countdown-timer"),e.window.RotatingImages=t("./rotating-images"),e.window.Search=t("./search"),e.window.Filter=t("./filter"),e.window.P2PLinks=t("./linkify-p2p")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./countdown-timer":2,"./filter":3,"./linkify-p2p":4,"./rotating-images":5,"./search":6,"./sticky-nav":7}],2:[function(t,e,n){"use strict";e.exports=function(){var t,e=1e3,n=[".js-days",".js-hours",".js-minutes",".js-seconds"],i=$(".js-start-date").val(),r=$(".js-end-date").val(),a=$(".js-timezone").val(),s=function(){var e=moment.tz(i,"YYYY-MM-DD HH:mm:ss",a),n=moment.tz(r,"YYYY-MM-DD HH:mm:ss",a);t=moment().isBefore(e)?e:n},o=function(t){var e=t.format("DD:HH:mm:ss",{trim:!1}).split(":");$.each(n,function(t,n){$(n).text(e[t])})},c=function l(){for(var n=!0;n;){if(n=!1,moment().isAfter(t))return;var i=t.diff(moment().tz(a)),r=1e3*Math.round(i/1e3),c=moment.duration(r,"milliseconds");o(c),moment().isAfter(t)?(s(),n=!0,i=r=c=void 0):setTimeout(l,e)}};return{init:function(){s(),c()}}}()},{}],3:[function(t,e,n){"use strict";e.exports=function(){var t={category:{animation:{duration:330,effects:"fade translateZ(-360px) stagger(74ms) translateY(10%) translateX(10%) scale(0.57) rotateZ(20deg) rotateY(20deg) rotateX(20deg)",easing:"cubic-bezier(0.645, 0.045, 0.355, 1)"},callbacks:{onMixLoad:function(){$("#filter-loading").hide()}}},leaderboard:{animation:{enable:!1},layout:{display:"table-row"}}},e=function(e){var n={controls:{enable:!1,toggleLogic:"and"}};return $.extend(n,t[e])};return{$filters:null,$reset:null,init:function(t){this.$filters=$(".js-filter"),this.$reset=$("#filter-reset"),this.$container=$("#filter-list"),this.bindHandlers(),this.$container.mixItUp(e(t))},bindHandlers:function(){var t=this;$(".js-filter--select li a").on("click",function(e){e.preventDefault(),t.setDropdownValue(e),t.parseFilters()}),$(".js-filter--checkbox input").on("change",function(e){t.parseFilters()}),this.$reset.on("click",function(e){t.resetFilters()}),$(".js-filter--sort-toggle").on("click",function(e){t.parseToggleFilter($(e.currentTarget))})},resetFilters:function(){this.$filters.each(function(t,e){switch($(e).data("filter-type")){case"select":$(e).find("li").removeClass("active"),$(e).val("");break;case"checkbox":$(e).find("input").attr("checked",!1)}}),this.concatenate([])},parseToggleFilter:function(t){var e=t.data("sort"),n=this.setAndToggleSort(t),i=e+":"+n;this.$container.mixItUp("isLoaded")&&this.$container.mixItUp("sort",i),this.toggleSortIcon(t,n)},toggleSortIcon:function(t,e){$(".js-sort-icon").removeClass("fa-sort-asc fa-sort-desc"),$(".js-sort-icon").addClass("fa-sort"),t.find(".js-sort-icon").removeClass("fa-sort fa-sort-asc fa-sort-desc"),t.find(".js-sort-icon").addClass("fa-sort-"+e)},setAndToggleSort:function(t){var e=t.data("current");return e&&"asc"!==e?(t.data("current","asc"),"asc"):(t.data("current","desc"),"desc")},parseFilters:function(){var t=[];this.$filters.each(function(e,n){switch($(n).data("filter-type")){case"select":$(n).val()&&t.push($(n).val());break;case"checkbox":var i=$(n).find("input");i.is(":checked")&&t.push(i.val())}}),this.concatenate(t)},concatenate:function(t){var e=t.join("");!e.length&&(e="all"),this.$container.mixItUp("isLoaded")&&this.$container.mixItUp("multiMix",{filter:e})},setDropdownValue:function(t){var e=$(t.currentTarget);e.parents(".dropdown").val(e.data("filter")),$(".js-filter--select li").removeClass("active"),e.parent().addClass("active")}}}()},{}],4:[function(t,e,n){"use strict";e.exports=function(){$(function(){var t=$(".c-designee").data("donation-category-name");t&&$(".k-p2p-custom-link").each(function(e,n){var i=$(n).attr("href")+"?kwoDesignee="+t;$(n).attr("href",i)})})}()},{}],5:[function(t,e,n){"use strict";e.exports=function(){var t=[4e3,5e3,7e3],e=function(){return t[Math.floor(Math.random()*t.length)]},n=function(t){var e=$("<a>",{href:t.link,target:"_blank"}),n=$("<img/>",{src:t.image,"class":"img-responsive"});return e.append(n)},i=function(t,e){var i=n(e);t.fadeOut("slow",function(){$(this).find("a").replaceWith(i),$(this).fadeIn("slow")})},r=function(t,n){var r=0;setInterval(function(){n[r+1]?r++:r=0,i(t,n[r])},e())},a=function(t,e){if(!e.length)return!1;var i=$(t),a=n(e[0]);i.append(a),e.length>1&&r(i,e)};return{init:function(t){for(var e in t)t.hasOwnProperty(e)&&$(e).length&&a(e,t[e])}}}()},{}],6:[function(t,e,n){"use strict";e.exports=function(){return{init:function(e){var n=e.clientHash,i=e.baseUrl+"/api/get/client/"+n+"/designees",r=e.isProduction?"/vendor/data/designees.json":i,a=e.limit||10,s=new Bloodhound({datumTokenizer:function(t){return Bloodhound.tokenizers.whitespace(t.name+" "+t.altName)},queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:{ttl:1,url:r,filter:function(t){return $.map(t,function(t){return{name:t.organization_name,altName:t.alt_name,logo:t.logo,thumbnail:t.thumbnail,slug:t.organization_id}})}}});s.initialize(),s.clearPrefetchCache(),$(".js-typeahead-search").typeahead({hint:!0,highlight:!0,minLength:1},{name:"designeenames",displayKey:"name",source:s.ttAdapter(),limit:a,templates:{suggestion:Handlebars.compile(t("./templates/designee-search.html"))}}).on("typeahead:selected",function(t,n){var i=e.designeeUrl;i+=e.isProduction?"/"+n.slug:"&designee="+n.slug,window.location=i}),$(".twitter-typeahead").css("display","block"),$(".js-typeahead-search").css("width","100%")}}}()},{"./templates/designee-search.html":8}],7:[function(t,e,n){"use strict";e.exports=function(){function t(){var t=$(window).scrollTop();s(t>=c?!0:!1)}function e(){c=0,i()||(c=n()),t()}function n(){return o.prev().length?o.prev().outerHeight():o.parent().offset().top}function i(){return $(window).width()<=l}function r(t){return $("body."+t).length}function a(){return!(r("seaside")&&i())}function s(t){var e=0;t?(o.addClass("fixed"),a()&&(e=o.outerHeight())):o.removeClass("fixed"),o.next().css("padding-top",e)}var o,c,l=767;return{init:function(i){o=$(i||".js-nav"),c=n(),$(window).scroll(t).trigger("scroll"),$(window).resize(e).trigger("resize")}}}()},{}],8:[function(t,e,n){e.exports='<div>\n    <div class="tt-suggestion__logo">\n    {{#if thumbnail}}\n    <img class="img-responsive" src="{{thumbnail}}">\n    {{/if}}\n    </div>\n    <div class="tt-suggestion__title">{{name}}</div>\n    {{#if altName}}\n    <div class="tt-suggestion__subtitle">{{altName}}</div>\n    {{/if}}\n    <div style="clear: both"></div>\n</div>\n'},{}]},{},[1]);