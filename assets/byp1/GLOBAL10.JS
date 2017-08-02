var thispage = document.location.href;
cindex = thispage.substr(((thispage.indexOf("/c.") > -1) ? (thispage.indexOf("/c.")+3) : thispage.search(/\?|&c=/)+3), 11 ); 
bindex = thispage.substr(((thispage.indexOf("/b.") > -1) ? (thispage.indexOf("/b.")+3) : (thispage.indexOf("&b=")+3)), 7 );

function addField(field) {
	$.each($('.'+field+'-hidden'), function(index, obj) {
		obj.className=field;
		return false;
	});
}

function hideMe(section, count) {
	$('#'+section+count)[0].className=section+'-hidden';
	$('#'+section+count+' input').each(function(){
		$(this).val('');
	});
}

function removeHiddenNav() {
	var li = $("li a span.leftNavHide");
	for (x=0;x<li.length;x++) {
		li[x].parentNode.parentNode.parentNode.removeChild(li[x].parentNode.parentNode);
	}
}

function removeProfilePics() {
	var d = 6;
	$('div.uc_myphoto a img').each(function(i) {
		if (this.src.indexOf("/upload/") == -1) {
			$(this).parent().remove();
			d--;
		}
	});
	if (location.href.indexOf("contactdisplay") == -1) { //viewed from regular profile
		if (d==0) $('div.uc_myphoto')[0].innerHTML = "<span class='profiledata'><p><strong>You don't have any photos.</strong> You can have up to 6 photos in your profile.</p><p><a href='/site/c.mjJXJ7MLIsE/b.4505709/k.62FD/Update_Biographical_Info/apps/ka/ct/contactus.asp?c=mjJXJ7MLIsE&b=4505709' class='profilelink'>Add Photos</a></span>";
	}
	else {//viewed from contact lookup
		if (d==0) $('div.uc_myphoto')[0].innerHTML = "<span class='profiledata'><p><strong>This alumni has no photos.</strong> You can have up to 6 photos in your profile.</p></span>";
	}
}

function removeDegrees() {
	$('.degree').each(function(i) {
		if (trim(this.innerHTML) == '') {
			if (i>0) $(this).remove();
			else this.innerHTML = "No Degree information found";
		}
	});
	if ($("#degree-info")[0]) $("#degree-info")[0].style.display = 'block';
}

function removeFamily() {
	$('ul.family').each(function(i) {
		if (this.title == '') {
			if (i>0) $(this).remove();
			else this.innerHTML = "<dt><p>No family specified</p></dt>";
		}
	});
	if ($("ul.family")[0]) $("ul.family").each(function(i){this.style.display = 'block'});	
}

function checkURLIndex(i){
	var x = "";
	x = window.location;
	x = x.toString();
	x = x.indexOf(i);
	return x;
}

function cleanUpSearchResults() {
	if ( ($('#CLsearchResultsArea').length > 0) && (checkURLIndex("contactsearch.asp") > 0) ) {
		if ($('#std_search')[0]) {
			$('#right-column').remove();
			$('#center-column')[0].style.width="700px";
			$('#center-column')[0].style.paddingRight="0px";
			$('#mainContent')[0].style.width="700px";
			$('tr.listren-header td').each(function(){this.style.textAlign="left"}); //force alignment left
			$('tr.listren-header td').each(function(){this.innerHTML = this.innerHTML.replace("&nbsp;","")}); //remove spaces
			//$('#std_search table table tr:gt(1) td:nth-child(1)').remove();
		}
	}
}

// remove multiple, leading or trailing spaces
function trim(s) {s = s.replace(/(^\s*)|(\s*$)/gi,"");s = s.replace(/[ ]{2,}/gi," ");s = s.replace(/\n /,"\n");return s;}

$.event.add(window, 'load', function() {
    removeHiddenNav();
    removeProfilePics();
    removeFamily();	
    removeDegrees();
    if (!$('#userprofile')[0]) {
	    cleanUpSearchResults();
    }
	if ($('#mainContent table table')[0]) $('#mainContent table table')[0].cellSpacing=0; //remove cellspacing added to content table by sphere
});

/* Add additional event to window object */
function addLoadEvent(func){
    try {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    } catch(err){}
}

/* Hide/Show object if Logged In ID matches Looked Up ID */
function enableSupporterLinks(obj,parm){
    try {
        var cnt = 0;
        if (document.getElementById('mySID1')){
            if (document.getElementById('mySID1').firstChild.nodeValue == document.getElementById('mySID0').firstChild.nodeValue){
                alert("true");
                obj.style.display = parm;
            } else {
                alert("false");
                obj.style.display = "none";
            }
        }
    } catch(err){}
}

/* Default Search Modifier on Contact Lookup Tool to Contains and Hide Modifier drop-down */
function setSearchModifier(){
    try {
        var cnt = 0;
        if (document.getElementById('CLsearchFields')){
            var mySelections = document.getElementById('CLsearchFields').getElementsByTagName('select');
            for (var i = 0; i < mySelections.length; i++){
                var myName = mySelections[i].name;
                var myCheck = myName.substring(0,3); 
                if (myCheck == "op_"){
                    mySelections[i].selectedIndex = 1;
                    mySelections[i].style.display = "none";
                }
            }
        }
    } catch(err){}
}

addLoadEvent(setSearchModifier);

function EmailAFriend() {
	popUpDialogResizeable('25C2541E96EB4E70947FABA13CD89DCD','email2friend','/site/c.'+cindex+'/b.'+bindex+'/email2friend.asp?email_url=' + escape(document.location.href),700,525);
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

