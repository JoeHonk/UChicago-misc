"undefined"==typeof CE2&&(CE2={}),CE2.ignoredElements=[],CE2.clickCaptors=[],CE2.d=document,CE2.w=window,CE2.n=navigator,CE2.p={},function(){var t=CE2.n.userAgent;/\bMSIE\b/.test(t)&&(CE2.ie=1,CE2.ieVersion=parseInt(/MSIE (\d+)\.\d+/.exec(t)[1],10),CE2.ieQuirksMode="BackCompat"==CE2.d.compatMode)}(),CE2.ignore=function(t){t&&(CE2.ignoredElements.push(t),CE2.tracker&&CE2.tracker.ignoredElements.push(t))},CE2.capture=function(t){CE2.clickCaptors.push(t),CE2.tracker&&CE2.tracker.clickCaptors.push(t)},CE2.findMatchingSnapshot=function(t,e,n){var r,i,s,o;if(t&&t.length){for(i=0;s=t[i++];)r=Math.floor((new Date).getTime()/1e3),s.e&&s.e<=r||(!n||/n/.test(s.o||""))&&CE2.matchURL(s.u,n||e,s.o,s.d,CE2.n.userAgent)&&(s.s&&s.s>r?CE2.p[s.id]=s:o||(o=s));return o}},CE2.findMatchingLiveSessions=function(t,e){var n,r,i=[];if(t&&t.length){for(n=0;r=t[n++];)CE2.matchURL(r.u,e,r.o,r.d,CE2.n.userAgent)&&i.push(r.id);return i.length?(i.sort(),i):void 0}},CE2.sameSessions=function(t,e){var n,r;if(!t||!e)return!1;if(t.length!=e.length)return!1;for(n=0,r=t.length;r>n;n++)if(t[n]!=e[n])return!1;return!0},CE2.startTracking=function(t,e){var n,r;if(t)if(CE2.sampleVisit(t))CE2.testID=t.id,CE2.testVersion=t.v||1;else if(!e)return;e&&(CE2.sessionIDs=e),n=CE2.d.createElement("script"),r="https:"==CE2.w.location.protocol?CE2.TRACKING_SCRIPT_SECURE:CE2.TRACKING_SCRIPT,n.src=r+(t?"?s="+t.id+"&":"?")+"t="+(new Date).getTime(),n.type="text/javascript",n.async=!0,CE2.d.body.appendChild(n)},CE2.unescape=function(t){try{return decodeURIComponent(t)}catch(e){return unescape(t)}},CE2.qs2obj=function(t,e){if(null==t||/^\s*$/.test(t))return null;var n,r,i={},s=null,o=t.replace(/\+/g," ").split(e||"&");for(n=0,r=o.length;r>n;n++)s=o[n].split("="),s[0]&&(i[CE2.unescape(s[0])]=null==s[1]?null:CE2.unescape(s[1]));return i},CE2.each=function(t,e,n){if(t){var r;if("number"==typeof t.length&&"function"==typeof t.concat)for(var i=0,s=t.length;s>i&&(r=t[i],e.call(n,r,i)!==!1);i++);else{var o;for(o in t)if(r=t[o],r!==Object.prototype[o]&&e.call(n,r,o)===!1)break}}},CE2.indexOf=function(t,e,n){var r,i;for(r=n||0,i=t.length;i>r;r++)if(t[r]===e)return r;return-1},CE2.listen=CE2.addListener=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!0):t.attachEvent("on"+e,n)},CE2.removeListener=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!0):t.detachEvent("on"+e,n)},CE2.userData={},CE2.set=function(t,e){t=parseInt(t,10),t>=1&&5>=t&&(CE2.userData[t]=e+"")},CE2.click=function(){return CE2.tracker?CE2.tracker.click.apply(CE2.tracker,arguments):void 0},CE2.getBox=function(){},CE2.sampleVisit=function(t){return null==t.r?!0:(t.r!==!1&&t.r!==!0&&(t.r=Math.random()>=1/t.r?!1:!0),t.r)},CE2.dontTrack=function(){if(CE2.ie&&void 0!==CE2.w.external)try{if(CE2.w.external.InPrivateFilteringEnabled()===!0)return!0}catch(t){}var e=CE2.d.doNotTrack||CE2.n.doNotTrack||CE2.n.msDoNotTrack;return"1"==e||"yes"==e},CE2.cookies=function(){try{return CE2.qs2obj(document.cookie,/;\s*/g)||{}}catch(t){return{}}}(),CE2.parseJSON=function(src){return"undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse(src):eval("("+src+")")},"undefined"==typeof CE2&&(CE2={}),CE2.re=function(){var t="[\\s\\u00a0\\u2028\\u2029]+";return{whitespace:RegExp(t,"g"),strip:RegExp("^"+t+"|"+t+"$","g"),href:/\bhref="(.*?)"/i}}(),CE2.innerText=function(t){function e(t,e){var r,i;for(r=0;i=e[r++];)t=t.replace(i[n],"");return t}var n=void 0===t.textContent?"innerText":"textContent",r=t[n].substr(0,16384);return r=e(r,t.getElementsByTagName("SCRIPT")),r=e(r,t.getElementsByTagName("NOSCRIPT"))},CE2.innerTextName=function(t,e){return CE2.strip(CE2.strip(CE2.innerText(t),!0).substr(0,e||100))},CE2.strip=function(t,e){var n=t.replace(CE2.re.strip,"");return e?n.replace(CE2.re.whitespace," "):n},"undefined"==typeof CE2&&(CE2={}),CE2.READY_STATE_PATTERN=CE2.ie?/complete/:/complete|interactive/,CE2.autoStart="undefined"==typeof CE_MANUAL_START||!CE_MANUAL_START,CE2.domReady=document.readyState&&CE2.READY_STATE_PATTERN.test(document.readyState),CE2.domReadyListeners=[],CE2.onDOMReady=function(t){return CE2.domReady?setTimeout(t,1):void CE2.domReadyListeners.push(t)},CE2.domReadySetup=function(){var t=function(){for(var t=CE2.domReadyListeners;t.length>0;)t.pop().call();CE2.domReady=!0};if(CE2.domReady&&t(),CE2.listen(window,"load",t),document.addEventListener&&CE2.listen(document,"DOMContentLoaded",t),document.readyState){var e=CE2.READY_STATE_PATTERN;!function(){e.test(document.readyState)?t():setTimeout(arguments.callee,10)}()}},CE2.autoStart&&CE2.domReadySetup(),"undefined"==typeof CE2&&(CE2={}),CE2.matchURL=function(t,e,n,r,i){var s,o,$,a,E,C,c,u,f,p,h,d,l,m,g,v,R=/(default|index)($|\..*)/i,y=!1;if(!t||!e)return!1;if(r&&CE2.indexOf(r,CE2.deviceType(i))<0)return!1;if(n=n||"",/n/.test(n))return t===e;if(/[re]/.test(n))try{return RegExp(t,"i").test(e)}catch(S){return!1}if(s=new CE2.URI(e.toLowerCase()),/h/.test(n)&&t.protocol!=s.protocol)return!1;if($=s.host,o=$.replace(/^www\./,""),u=t.host,f=t.ihost,/w/.test(n)&&$!=u&&$!=f)return!1;if(o!=u.replace(/^www\./,"")&&o!=(f&&f.replace(/^www\./,"")))return!1;if(p=t.path?t.path:"/",a=s.path,p!=a){if(/\//.test(n))return!1;for(h=p.split("/"),E=a.split("/"),g=0,v=Math.max(h.length,E.length);v>g;g++)if(h[g]||(h[g]=""),E[g]||(E[g]=""),g==v-1&&(h[g]=h[g].replace(R,""),E[g]=E[g].replace(R,"")),h[g]!=E[g])return!1}return C=s.qs,m=/\?/.test(n),d=t.qs||"",m&&C&&!d||!C&&d?!1:(CE2.each(d,function(t,e){return C[e]!==t?(y=!0,!1):void 0}),y?!1:m&&(CE2.each(C,function(t,e){return t!=d[e]?y=!0:void 0}),y)?!1:(l=t.hash||"",c=s.hash||"",m=/#/.test(n),(m||l)&&l!=c?!1:!0))},"undefined"==typeof CE2&&(CE2={}),void 0===CE2.URI&&(CE2.URI=function(t){if(this.src=t,this.protocol=this.host=this.port=this.path=this.qs=this.hash=this.query=null,t){var e=typeof t;"string"==e?this.initWithString(t):"object"==e&&this.initWithURI(t)}},CE2.URI.pattern=/^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i,CE2.URI.prototype={initWithString:function(t){var e,n,r,i,s,o=CE2.URI.pattern.exec(t);o[1]||"/"==t.charAt(0)?((e=o[1])&&(this.protocol=e.substr(0,e.indexOf(":"))),this.host=o[3]||null,(n=o[4])&&(this.port=+n.substr(1)),(r=o[5])?this.path=CE2.unescape(r):this.host&&(this.path="/")):this.path=CE2.unescape((o[3]||"")+(o[5]||"")),this.query=o[6]&&(o[6]+"").replace("?",""),(i=o[6])&&(this.qs=CE2.qs2obj(i.substr(1))),(s=o[7])&&(this.hash=CE2.unescape(s.substr(1)))},initWithURI:function(t){CE2.each(t,function(t,e){this[e]=t},this)},isAbsolute:function(){return this.isURL()||this.path&&"/"==this.path.charAt(0)},isURL:function(){return this.protocol&&this.host},getDomain:function(){return this.host&&this.host.replace(/^www\./,"")}}),CE2.userMain=function(){var t=CE2.snapshots,e=CE2.sessions,n=CE2.liveBootstrap||function(){};if(!CE2.dontTrack()){CE2.testID=CE2.testVersion=CE2.sessionIDs=null;var r=function(){var t,e="!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",n={};for(t=0;t<e.length;t++)n[e.charAt(t)]=t.toString(36);return n}(),i=function(t){return parseInt(t.replace(/./g,function(t){return r[t]}),36)},s=function(t){for(var e,n="",r=/(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi,s=String.fromCharCode;null!=(e=r.exec(t));)e[1]||e[2]?n+=s(i(e[0])):e[3]?n+=s(i(e[3].substr(1))):e[4]&&(n+=s(i(e[4].substr(1))));return n};"function"==typeof s&&("string"==typeof t&&(t=CE2.parseJSON(s(t))),"string"==typeof e&&(e=CE2.parseJSON(s(e))));var o=function(){try{var r=CE2.w.location.href,i=CE2.findMatchingSnapshot(t,r,"string"==typeof CE_SNAPSHOT_NAME&&CE_SNAPSHOT_NAME),s=CE2.findMatchingLiveSessions(e,r);if(n())return;if(!i&&!s)return CE2.testID=CE2.testVersion=CE2.sessionIDs=null,void(CE2.tracker&&(CE2.tracker.cleanup(),CE2.tracker=null));(i&&i.id!=CE2.testID||s&&!CE2.sameSessions(s,CE2.sessionIDs))&&(CE2.startTracking(i,s),CE2.badge&&CE2.badge())}catch(o){}};o(),CE2.autoStart&&(CE2.monitorInterval=setInterval(o,1e3))}},CE2.autoStart&&CE2.onDOMReady(CE2.userMain),"function"==typeof CE_READY?CE2.onDOMReady(CE_READY):"object"==typeof CE_READY&&CE2.onDOMReady(function(){CE2.each(CE_READY,function(t){"function"==typeof t&&t()})}),CE2.TRACKING_SCRIPT="http://trk.cetrk.com/t.js",CE2.TRACKING_SCRIPT_SECURE="https://s3.amazonaws.com/trk.cetrk.com/t.js",CE2.TRACKING_DEST="http://trk.cetrk.com/",CE2.TRACKING_DEST_SECURE="https://s3.amazonaws.com/trk.cetrk.com/",CE2.uid=179416,CE2.snapshots="%8&4!}%|%]!}$<$2$7$8$2$9$9$8$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&!%|%_%^&!&&&%%`$-&!%^%?&*&%%|&%%`$0&-%[%{%|%[%?%`&&$-&$&&&&%[$-&2&&&-!}$,!}%{&&&+&,!}$<!}%?&!&-&$&%%|%?&%%]%_&*%|%^&%%]&+$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}&6$,!}%^!}$<$2$5$6$7$9$1$9$5$1$1$,!}&.!}$<$6&6$,&4!}%|%]!}$<$2$7$8$2$9$9$6$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&!%|%_%^&!&&&%%`$-&!%^%?&*&%%|&%%`$0%{%?&*&(%^&*$-&!%^%[&,&-&*%^&+!}$,!}%{&&&+&,!}$<!}%?&!&-&$&%%|%?&%%]%_&*%|%^&%%]&+$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}&6$,!}%^!}$<$2$5$6$7$9$1$9$5$1$1$,!}&.!}$<$6&6$,&4!}%|%]!}$<$2$7$4$;$8$4$8$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0%^&.%^&%&,&+$0&+%|%`&%%?&,&-&*%^$0%{&&&$%^%[&&&$%|&%%`!}$,!}%{&&&+&,!}$<!}%?&!&-&$&%%|%?&%%]%_&*%|%^&%%]&+$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}&6$,!}%^!}$<$2$5$6$3$6$4$2$7$1$1$,!}&.!}$<$6&6$,&4!}%|%]!}$<$2$7$8$2$9$9$4$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&!%|%_%^&!&&&%%`$-&!%^%?&*&%%|&%%`$0&,&*%?&.%^&!!}$,!}%{&&&+&,!}$<!}%?&!&-&$&%%|%?&%%]%_&*%|%^&%%]&+$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}&6$,!}%^!}$<$2$5$6$7$9$1$9$5$1$1$,!}&.!}$<$6&6$,&4!}%|%]!}$<$2$7$8$2$9$9$2$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&!%|%_%^&!&&&%%`$-&!%^%?&*&%%|&%%`!}$,!}%{&&&+&,!}$<!}%?&!&-&$&%%|%?&%%]%_&*%|%^&%%]&+$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}&6$,!}%^!}$<$2$5$6$7$9$1$9$5$1$1$,!}&.!}$<$6&6$,&4!}%|%]!}$<$2$7$7$3$1$3$9$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0%`%|&.%|&%%`$-&,&-%^&+%]%?&2$0!}$,!}%{&&&+&,!}$<!}%?&*%]$.&-%[%{%|%[%?%`&&$.%^%]&-!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}&6$,!}%^!}$<$2$5$6$5$1$;$5$1$1$1$,!}&.!}$<$6&6%;",CE2.sessions=null;