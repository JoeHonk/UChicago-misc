

<!--[if HTML5]><![endif]-->
<!doctype html>

<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]--><!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]--><!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]--><!--[if gt IE 8]><!--><html class="no-js" lang="en"><!--<![endif]-->
<head>

<meta http-equiv="X-UA-Compatible" content="IE=Edge">

<script language="JavaScript">function popUpWholeHonorRoll(event_id,supporter_id,team_id){window.open("https://www.kintera.org/faf/includes/wholeHonorRoll.asp?event_id="+event_id+"&supporter_id="+supporter_id+"&team_id="+team_id,"honorroll","menubar=no,scrollbars=yes,resizable=no,width=180,height=350,left=350,top=100");return false;}</script>
<script src="https://advocate.kintera.org/CommonLib/lib/jquery-1.7.2.js"></script>

<script>
    function donateNow() {
        
        document.getElementById("buttonGive").style.display="none";
    }
</script>


<style type="text/css">
#donorscroll {
	background-color: #fff;
	border: 5px solid #7e81be;
	width: 150px;
	height: 266px;
}

#scrolltitle {
	background-color: #7e81be;
	width: 100%;
	text-align: center;
	font-family: Verdana, sans-serif;
	font-size: 22px;
	font-weight: bold;
	color: #fff;
	margin: 5px 0px 5px 0px;
}
#body_container {
    padding: 0px;
    margin: 5px;
    background-color: #fff;
    height: 220px;
    width: 153px;
    text-align: left;
    overflow: hidden;
    position: relative;
}
#scrollbody1 {
    padding: 0px 5px 0px 5px;
    position:absolute;
	font-family: sans-serif;
	font-size: 14px;
	background-color: #fff;
}
#scrollbody2 {
    padding: 0px 5px 0px 5px;
    position:absolute;
	font-family: sans-serif;
	font-size: 14px;
	background-color: #fff;
}

#honor_control {
    background-color: #7e81be;
    padding: 0px;
    margin: 0px;
    color: #fff;
    font-weight: bold;
    font-size: 10px;
    width: 163px;
    border: solid 1px #fff;
    border-top: 0px;
    
    
    margin-top: -7px;
    padding-left: 5px;
    width: 158px;
    
}
#honor_control a {
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    text-decoration: none;
    display: inline;
}

#honor_control a {
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    text-decoration: none;
    display: inline;

}
#honor_control a img {
    border: none;
}

#honor_control .segment {
    display: inline;
    text-align: center;
    font: 10px;
    font-weight: bold;
    
    margin: 6px;
    
}

#scroller_container {
    display: block;
    height: 260px;
    background-color: #7e81be;
    overflow: hidden;
    border: solid 1px #fff;
    border-bottom: 0px;
    width: 163px;
}
#subheader_border {
    background-color: #c4c4c4;
    padding: 5px;
    height: 100%;
}
</style>


<script>
    /* Honor Roll Scroll Functionality */
    var x, y, delay = 20, hr_run = 1, direction = 1, delta = -1, lock = 0;

    function honorscrollinit() {
        x = 266;
        y = x + parseInt($("#scrollbody1").height());
        honorscroll();
        //$("#native_honor_roll").hide();
    }
    function honorscroll() {
        // Move the content up in tandem.
        $("#scrollbody1").css("top", x + "px");
        $("#scrollbody2").css("top", y + "px");

        // If there is enough content to be able to scroll.
        if ($("#scrollbody1").height() > 260) {
            x = x + delta;
            y = y + delta;
            if (x == direction * -1 * $("#scrollbody1").height()) {
                x = direction * $("#scrollbody2").height();
            }
            if (y == direction * -1 * $("#scrollbody2").height()) {
                y = direction * $("#scrollbody1").height();
            }
        }
        // Just keep y still.
        else {
            x = x + delta;
            y = -100000;
            if (direction == 1 && x < -1 * $("#scrollbody1").height()) {
                x = 266;
            }
            else if (direction == -1 && x > 266) {
                x = -5;
            }
        }

        if (hr_run == 1) setTimeout('honorscroll()', delay);
    }
    $(document).ready(function() {
        $("#hr_speed_up").click(
        function() {
            if (delay <= 0) delay = 0;
            else delay = delay - 5;
        }
    );
        $("#hr_speed_down").click(
        function() {
            delay = delay + 10;
        }
    );
        $("#hr_scroll_up").click(
        function() {
            delta = -1;
            direction = 1;
        }
    );
        $("#hr_scroll_down").click(
        function() {
            delta = 1;
            direction = -1;
        }
    );
        $("#hr_start").click(
        function() {
            hr_run = 1;
            if (lock == 0) {
                lock = 1;
                honorscroll();
            }
        }
    );
        $("#hr_stop").click(
        function() {
            lock = 0;
            hr_run = 0;
        }
    );
    });
</script>


<title>joe hahn's Personal Page for Inspired to Run 2014</title>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<script language="JavaScript" src="https://advocate.kintera.org/CommonLib/lib/jquery-1.7.2.js"></script><script language="JavaScript" src="https://advocate.kintera.org/CommonLib/lib/plugins.js"></script><script language="JavaScript" src="https://advocate.kintera.org/CommonLib/lib/custom.js"></script>
<meta HTTP-EQUIV="Expires" CONTENT="Mon, 06 Jan 1990 00:00:01 GMT">
<meta property="og:image" content="https://www.kintera.org/AccountTempFiles/Account403226/images/452095_2812101811529187.jpg"/>
<link rel="stylesheet" href="http://advocate.kintera.org/faf/style/faf.css">
<script language="JavaScript" src="https://advocate.kintera.org/CommonLib/lib/INC_jsDataValidation.js"></script>
<script language="javascript">
var formPointer;






function onload_setFormPointer(){
	formPointer = document.registrationForm;
}
function checkRequiredFields(){
	var fieldname = formPointer;
	if(jsTools_strTrim(fieldname.elements['addAmount'].value) == ""){
		return true;
	}else{
		return false;
	}
}
function formCheck(){
	var errorString = "";
	if (checkRequiredFields()){
		errorString = "\nPlease fill out the required fields.";
	}else{
		for(i = 0; i <= formPointer.elements['addAmount'].value.length -1; i++) 
			formPointer.elements['addAmount'].value = formPointer.elements['addAmount'].value.replace(",","");
		if((jsDV_isValidMoney(formPointer.elements['addAmount'].value) == "-1") || (checkMatching(formPointer.elements['addAmount'].value,".",1) == false)){
			errorString = errorString + "The donation amount can not contain any punctuation. \nPlease re-enter your donation amount."
		}else{
			if(formPointer.elements['addAmount'].value < 5){
				errorString = errorString + "\nPlease enter a donation amount greater than or equal to $5."
			}
			else if(formPointer.elements['addAmount'].value == "0")
			{
			    errorString = errorString + "\nA $0 donation cannot be entered. \nPlease re-enter your donation amount."
			}
			
		}
	}

    if(document.getElementById("radioDonationOrgY")!=null)
    {
        if(document.getElementById("radioDonationOrgY").checked == false && document.getElementById("radioDonationOrgN").checked == false)
        {
            errorString = errorString + "\nPlease select Yes/No for donation organization.";
        }
	}
	if(errorString == "")
	{
		return selectLevel2(formPointer.elements['addAmount'].value);
	}
	else
	{
		alert(errorString);
		return false;
	}
}



</script>
<style type="text/css">
.newMenuTextColor {color:##ffffff;text-decoration: none;}
.joinTeamColor {color:#7e81be;text-decoration: underline;}
.fundbar {background-image:url(../images/barcharts/fund_bar.gif);background-repeat:no-repeat}
.gamebar {background-image:url(../images/barcharts/game_bar.gif);background-repeat:no-repeat}
.rainbow {background-image:url(../images/barcharts/rainbow_bar.jpg);background-repeat:no-repeat}
</style>

<script LANGUAGE="javascript">
function jsDV_strTrim(str){
	var i = 0;
	var j = str.length - 1;
	trimstr = "";
	if (j < 0) return trimstr;
	flagbegin = true;
	flagend = true;
	while (flagbegin == true){
		if (str.charAt(i) == ' ') i++;
		else flagbegin = false;
	}
	while (flagend == true){
		if (str.charAt(j) == ' ') j--;
		else flagend = false;
	}
	if (j < i) return trimstr;
	else trimstr = str.substring(i, j + 1);
	return trimstr;
}
function specialCharCheck(val, msg){
	var nrl = val;
	var flag = 0;
	var alphaErrorMsg = msg;
	if(val == "") return false;
	if(alphaErrorMsg == null) alphaErrorMsg = "This entry accepts only letters, periods, commas, hyphens and spaces.";
	for (var i=0; i<nrl.length;i++){
		cmp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()+?:.,-_";
		cmp += " ";
		tst = nrl.substring(i,i+1);
		if (cmp.indexOf(tst)<0) flag++;
	}
	if (flag != 0){
		if(alphaErrorMsg != "nomsg") alert(alphaErrorMsg);
		return false;
	}
	return true;
}
// Alphacheck that has options to check alpha only or AlphaNumeric with out special Characters.
function validAlpha(val,typeCheck,msg){
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	switch(typeCheck){
		case 1:  //alpha + , . -, for names ect.
			cmp="ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
		case 2: //alpha, numeric, + ,.-# , for addresses
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.,#'";
			break;
		case 3: //alpha, numeric, + ,.-# , no " or '
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.$#%*=+()@";
			break;
		case 4: //I am not sure when this was added but it is not correct for username or passwords -svp
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.$#%*/=+()@\\\"_";
			break;
		case 6: //alpha, numeric 
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			break;
		case 7: //alpha, numeric, + ,.-# , for username and password, no " or '
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz0123456789.$#%*=+()@_";
			break;
		default:
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
	}
	if (Errormsg == null) Errormsg = "You have entered an invalid character in this field.";

	for(var i= 0; i < tempVal.length; i++){
		test = tempVal.substring(i,i + 1);
		if(cmp.indexOf(test)< 0) flag = -1;
	}
	if(flag != 0){
		if(Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
// Aplhacheck that has options to check alpha only or AlphaNumeric with out special Characters.
function validAlpha(val,typeCheck,msg){
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	switch(typeCheck){
		case 1: //alpha + , . -, for names ect.
			cmp="ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
		case 2: //alpha, numeric, + ,.-# , for addresses
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.,#'";
			break;
		case 3: //alpha, numeric, + ,.-# , for username and password, no " or '
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz0123456789.$#%*=+()@";
			break;
		default:
			cmp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ -abcdefghijklmnopqrstuvwxyz,.'";
			break;
	}
	if (Errormsg == null) Errormsg = "You have entered an invalid character in this field.";
	for(var i= 0; i < tempVal.length; i++){
		test = tempVal.substring(i,i + 1);
		if(cmp.indexOf(test)< 0) flag = -1;
	}
	if(flag != 0){
		if(Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
function numericCheck(val, type, msg){
	var nr1 = val;
	var typeCheck = type;
	var flag = 0;
	var numberErrorMsg = msg;
	if(val == "") return false;
	if (numberErrorMsg == null) numberErrorMsg = "This entry must be a number.  Please remove all letters, special characters, and spaces.";
	switch(typeCheck){
		case 0: //int
			cmp = "0123456789";
			break;
		case 1: //int + commas
			cmp="0123456789,";
			break;
		case 2: //float
			cmp = "0123456789.,";
			break;
		case 3: //currency
			cmp = "0123456789.,$-";
			break;
		case 4: //int + point
			cmp = "0123456789.";
			break;
		case 5: //for zip codes
			cmp = "0123456789-";
			break;
		default:
			cmp = "0123456789";
			break;
	}
	for (var i=0; i<nr1.length; i++){
		tst = nr1.substring(i,i+1);
		if ((cmp.indexOf(tst)<0) || (cmp.indexOf(" ") != -1)) flag++;
	}
	if (flag != 0){
		if(numberErrorMsg != "nomsg") alert(numberErrorMsg);
		return false;
	}
	return true;
}
function daysInFebruary (year){
	return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}
function isDate (year, month, day){
	var daysInMonth = new Array(12);
	daysInMonth[1] = 31;
	daysInMonth[2] = 29;
	daysInMonth[3] = 31;
	daysInMonth[4] = 30;
	daysInMonth[5] = 31;
	daysInMonth[6] = 30;
	daysInMonth[7] = 31;
	daysInMonth[8] = 31;
	daysInMonth[9] = 30;
	daysInMonth[10] = 31;
	daysInMonth[11] = 30;
	daysInMonth[12] = 31;
	if (month <1 || month > 12) return false;
	if (day <1 || day > 31) return false;
	var intYear = parseInt(year, 10);
	var intMonth = parseInt(month, 10);
	var intDay = parseInt(day, 10);
	if (intDay > daysInMonth[intMonth]) return false; 
	if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;
	return true;
}
function validDate(val, textBox, msg, msg2){
	var dateErrorMsg = msg;
	var spaceErrorMsg = msg2;
	var indate = val;
	var flag = 0;

	if (indate == "") return false;
	if (dateErrorMsg == null) dateErrorMsg = "You have entered an invalid date or date format.  Please use the MM/DD/YYYY format without spaces.";
	if (spaceErrorMsg == null) spaceErrorMsg = "Please use the MM/DD/YYYY format without spaces.";
	if (indate.indexOf(" ")!=-1){
		if(dateErrorMsg != "nomsg") alert(spaceErrorMsg);
		return false;
	}
	if (indate.indexOf("-")!=-1){
		var delimeter = "-";
	}
	else if (indate.indexOf("/")!=-1){
		var delimeter = "/";
	}
	else if (indate.indexOf(".")!=-1){
		var delimeter = ".";
	}
	else {
		flag++;
	}
	var dateArray = indate.split(delimeter);
	if((dateArray.length != 3) || ((dateArray[2].length != 2) && (dateArray[2].length != 4)) ||
	(dateArray[0].length < 1) || (dateArray[0].length > 2) || (dateArray[1].length < 1) ||
	(dateArray[1].length > 2))  {
		flag++;
	}
	else if ((numericCheck(dateArray[0], 0, dateErrorMsg)==false) || (numericCheck(dateArray[1], 0, dateErrorMsg)==false) || (numericCheck(dateArray[2], 0, dateErrorMsg)==false)){
		return false;
	}
	var intYear = parseInt(dateArray[2], 10);
	if ((intYear >= 0) & (intYear <= 29)){
		dateArray[2] = 2000 + intYear;
	}
	else if ((intYear >= 30) & (intYear <= 99)){
		dateArray[2] = 1900 + intYear;
	}
	if (isDate(dateArray[2], dateArray[0], dateArray[1])==false){
		flag++;
	}
	if(flag != 0){
		if(dateErrorMsg != "nomsg") alert(dateErrorMsg);
		return false;
	}
	if ((dateArray[2] > 99) & (dateArray[2] < 1753)){
		if(dateErrorMsg != "nomsg") alert("We do not support dates before 1753.  Please choose a later year and try again.");
		return false;
	}
	indate = dateArray[0] + "/" + dateArray[1] + "/" + dateArray[2];
	textBox.value = indate;  // Set the date in the form to the modified date.
	return true;
}
// Check for valid Area Code in separate input box.
function validAreaCode(val,msg){
	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	var tempComp = "0123456789";

	if(val == "") return false;
	if(Errormsg == null) Errormsg = "You have entered an invalid 'Area Code',Please try again.";
	for(var i=0; i < tempVal.length; i++){
		tempTest = tempVal.substring(i,i+1);
		if(tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
	}
	if(tempVal.length < 3){
		flag = -1;
	}
	else{
		for(var i=0; i < tempVal.length; i++){
			tempTest = tempVal.substring(i,i+1);
			if(tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
		}
	}
	if(flag != 0){
		if(Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
//Check for valid phone number if phone is separate input from area code and extension.
function validPhoneNum(val,msg){
	while(val.search(" ") != -1) val = val.replace(" ", "");

	var tempVal = val;
	var Errormsg = msg;
	var flag = 0;
	var tempComp = "0123456789-";
	//var isNum = numericCheck(tempVal,3)

	if(val == "") return false;
	if(Errormsg == null) Errormsg = "You have entered an invalid 'Phone Number', Please try again.";

	for(var i; i < tempVal.length; i++){
		tempTest = tempVal.substring(i,i+1);
		if(tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
	}
	if(tempVal.indexOf("-") != -1){
		if(tempVal.length != 8){
			flag = -1;
		}
		else
		{
			for(var j=0; j < tempVal.length; j++){
				tempTest = tempVal.substring(j,j+1);
				if(tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
			}
		}
	}
	else if(tempVal.length != 7){
		flag = -1;
	}
	else{
		for(var j=0; j < tempVal.length; j++){
			tempTest = tempVal.substring(j,j+1);
			if(tempComp.indexOf(tempTest)<0 || tempComp.indexOf(" ") != -1) flag = -1;
		}
	}
	if(flag != 0){
		if(Errormsg != "nomsg") alert(Errormsg);
		return false;
	}
	return true;
}
function validPhone(val, msg){
	while(val.search(" ") != -1) val = val.replace(" ", "");

	val = val.replace("", "")

	var phone = val;
	var flag = 0;
	var phoneErrorMsg = msg;
	if(phone == "") return false;
	if (phoneErrorMsg == null) phoneErrorMsg = "You have entered an invalid phone #.  Please re-enter your # in the form xxx-xxx-xxxx.";

	if(phone.indexOf(" ") != -1){
		alert("Please re-enter your phone # without using spaces.");
		return false;
	}
	if(phone.length < 10){
		flag++;
	}
	else {
		for (var i=0; i<phone.length; i++){
			var cmp="0123456789()-.";
			tst=phone.substring(i,i+1);
			if (cmp.indexOf(tst)<0){
				flag++;
				break;
			}
		}
	}
	if(flag > 0){
		if(phoneErrorMsg != "nomsg") alert(phoneErrorMsg);
		return false;
	}
	return true;
}
//new function to format the phone number. kintera standard
function phoneCheck(val){
	var phonestr,formatphone;
	strphone = val;
	formatphone = "";
	var intcount=0; charcount=0;
	strint = "0123456789";
	strchar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for (var i=0; i<strphone.length; i++){
		tst = strphone.substring(i,i+1);
		if (!((strchar.indexOf(tst)<0)||(strchar.indexOf(" ") != -1))) charcount++;
		if (!((strint.indexOf(tst)<0)||(strint.indexOf(" ") != -1))){
			if (intcount == 0) formatphone = formatphone + "(";
			if (intcount == 3) formatphone = formatphone + ") ";
			if (intcount == 6) formatphone = formatphone + "-";
			formatphone += tst;
			intcount++;
		}
	}
	if (intcount==10 && charcount==10)
	return formatphone;
	else
	return strphone;
}
function validEmailOld(val, msg){
	var email = val;
	var flag = 0;
	var emailErrorMsg = msg;

	if (email == "") return false;
	if(emailErrorMsg == null) emailErrorMsg = "You have entered an invalid email address.";
	if(email.indexOf('@', 0) == -1){
		flag++;
	}
	else if(email.indexOf('.', 0) == -1){
		flag++;
	}
	if(flag > 0){
		if(emailErrorMsg != "nomsg") alert(emailErrorMsg);
		return false;
	}
	return true;
}
function validEmail(str, msg){
	var emailErrorMsg = msg;
	if(emailErrorMsg == null) emailErrorMsg = "You have entered an invalid email address.";
	if (!isValidEmail(str)){
		if(emailErrorMsg != "nomsg") alert(emailErrorMsg);
		return false;
	}
	else {
		return true;
	}
}
function isValidEmail(str){
	var at = str.indexOf("@", 0);
	var i = 0, count = 0;
	var j = str.length - 1; 
	if (at <= 0 || at == j) return false;
	while (i < at){
		if ((str.charAt(i) >= '0' && str.charAt(i) <= '9') ||
		(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') ||
		(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') ||
		str.charAt(i) == '.' || 
		str.charAt(i) == '&' || 
		str.charAt(i) == '?' || 
		str.charAt(i) == '#' || 
		str.charAt(i) == '$' || 
		str.charAt(i) == '*' || 
		str.charAt(i) == '+' || 
		str.charAt(i) == '!' || 
		str.charAt(i) == '%' || 
		str.charAt(i) == '\'' || 
		str.charAt(i) == '^' || 
		str.charAt(i) == '/' || 
		str.charAt(i) == '_' || 
		str.charAt(i) == '-') i++;
		else return false;
	}

	i = at + 1;
	if (str.charAt(i) == '.' || str.charAt(j) == '.') return false;
	while (i <= j){
		if (str.charAt(i) == '.'){
			count++;
			if (str.charAt(i + 1) == '.') return false;
			else i++;
		}
		if ((str.charAt(i) >= '0' && str.charAt(i) <= '9') ||
		(str.charAt(i) >= 'a' && str.charAt(i) <= 'z') ||
		(str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') ||
		str.charAt(i) == '_' || str.charAt(i) == '-') i++;
		else return false;
	}
	return (count == 0) ? false : true;
}

function validateSphereEmailAddress(str, msg){
	var regex;
	
	regex = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,4}$/;
	if (regex.test(str) == true)
		return true;
	else {
		alert(msg);
		return false;
	}
		
}

function validYear(val, msg){
	var year = val;
	var yearErrorMsg = msg;
	var flag=0;
	var checkYear = parseInt(year);

	if (year == "") return false;
	if (yearErrorMsg == null) yearErrorMsg = "Please enter the year in YYYY format.  ex 1990";
	if (year.length > 0){
		if (year.length < 4) flag++;
	}
	if (year.length > 4) flag++;
	if(numericCheck(year, 0, "nomsg") == false) flag++;

	if(flag != 0){
		if(yearErrorMsg != "nomsg") alert(yearErrorMsg);
		return false;
	}
	if (checkYear < 1753){
		if(yearErrorMsg != "nomsg") alert("Please enter a year later than 1752.");
		return false;
	}
	return true;
}
function isFieldBlank(theField){
	var count = 0;
	if(theField == "") return true;
	for(i=0;i<theField.length;i++){
		if(theField.indexOf(" ", i) == i) count++;
	}
	return (count == theField.length) ? true : false;
}
function minLength(textBox, min, msg){
	var min_length = min;
	var data = textBox.value;
	var minLengthErrorMsg = msg;

	if (min == null) return false;
	if (data == "") return false;

	if (minLengthErrorMsg == null) minLengthErrorMsg = "The "+textBox.name+" field requires at least "+min+" characters or more.";
	if(textBox.value.length < min){
		if(minLengthErrorMsg != "nomsg") alert(minLengthErrorMsg);
		return false;
	}
	return true;
}
//check a string for a specific character. getVal - string, findChar - char to find, charLimit - number of times char can exist
function checkMatchingChars(getVal,findChar,charLimit){
	var i=0, t=0;
	for(i=0 ; i <= getVal.length;i++){
		if(getVal.indexOf(findChar,i) == i) t++;
	}
	return (t > charLimit) ? false : true;
}

//------------------------------------------------------------------------------------------
// Newer functions: Some are redundant in functionality to the functions above
// but are being kept for backwards compatibility
//------------------------------------------------------------------------------------------
function checknumber(object_value){
	//Returns true if value is a number or is NULL
	//otherwise returns false

	if (object_value.length == 0) return true;

	//Returns true if value is a number defined as
	//   having an optional leading + or -.
	//   having at most 1 decimal point.
	//   otherwise containing only the characters 0-9.
	//var start_format = " .+-0123456789";
	var start_format = " .0123456789";
	var number_format = " .0123456789";
	var check_char;
	var decimal = false;
	var trailing_blank = false;
	var digits = false;

	//The first character can be + - .  blank or a digit.
	check_char = start_format.indexOf(object_value.charAt(0))
	//Was it a decimal?
	if (check_char == 1) decimal = true;
	else if (check_char < 1) return false;

	//Remaining characters can be only . or a digit, but only one decimal.
	for (var i = 1; i < object_value.length; i++){
		check_char = number_format.indexOf(object_value.charAt(i))
		if (check_char < 0)
			return false;
		else if (check_char == 1){
			if (decimal)		// Second decimal.
				return false;
			else
				decimal = true;
		}
		else if (check_char == 0){
			if (decimal || digits) trailing_blank = true;
			// ignore leading blanks
		}
		else if (trailing_blank)
			return false;
		else
			digits = true;
	}
	return true
}
function checkinteger(object_value){
	//Returns true if value is a number or is NULL
	//otherwise returns false

	if (object_value.length == 0) return true;

	//Returns true if value is an integer defined as
	//   having an optional leading + or -.
	//   otherwise containing only the characters 0-9.
	var decimal_format = ".";
	var check_char;

	//The first character can be + -  blank or a digit.
	check_char = object_value.indexOf(decimal_format)
	//Was it a decimal?
	return (check_char < 1) ? checknumber(object_value) : false;
}
function getphone(strphone){
	var object_phone,i,counter,formatphone,notusa_num;
	object_phone = strphone;
	i = 0;
	counter = 0;
	formatphone = "";
	str24char = "+?:.,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
	notusa_num = 0;
	for (i = 0; i < object_phone.length; i ++){
		var inchar,indx;
		indx = 0
		inchar = object_phone.charAt(i);
		if ( checkinteger(inchar) == true ){
			if (counter == 0)
				formatphone = "(" + inchar;
			else{
				if (counter == 3) { formatphone = formatphone + ") " }
				if (counter == 6) { formatphone = formatphone + "-" }
				formatphone = formatphone.concat(inchar);
			}
			counter++;
		}
		else{
			indx = str24char.indexOf(inchar);
			if (indx > 0) notusa_num = 1;
		}
	}
	return (counter == 10 & notusa_num == 0) ? formatphone : object_phone;
}
function jsDV_isValidMoney(str){
	// str must not be empty string
	var pointPos;
	var pointCount = 0;
	var zeroFlag = 1;
	
	if (str.length < 1) return "0"; //empty input

	//start with '.'
	if (str.charAt(0) == '.'){
		if (str.length == 1) return "-1";
		else str = "0" + str;
	}

	if (str.charAt(str.length - 1) == '.') return "-1"; //end with '.'

	//check the character set
	for (i = 0; i < str.length; i++){
		if ((str.charAt(i) >= '0' && str.charAt(i) <= '9') || (str.charAt(i) == '.')){
			if (str.charAt(i) != '0' && str.charAt(i) != '.') zeroFlag = 0;
			if (str.charAt(i) == '.') pointCount++;
			if (pointCount > 1) return "-1";
			continue;
		}
		else return "-1";
	}

	pointPos = str.indexOf(".", 0);
	if (pointPos >= 0){
		//e.g. 09.89
		if (pointPos > 1 && str.charAt(0) == '0') return "-1";
		//cut the long decimal part
		if (str.length - pointPos -1 > 2) str = str.substring(0, pointPos + 3);
	}
	else {
		if (str.length > 1){
			//e.g. 0898
			if (str.charAt(0) == '0') return "-1";
		}
	}
	//multiple valid '0', just return single '0'
	return (zeroFlag) ? "0" : str;
}
</script>


<script language="javascript">
 	
function validCreditCard(val, msg) {
  var cardNum = val;
  var creditErrorMsg = msg;
  
  if (cardNum == "") return false;

  if (creditErrorMsg == null) {
    creditErrorMsg = "Please enter a valid credit card.  We accept Visa, Mastercard, Discover or American Express only.";
  }
  	  
  if (ccValid(cardNum)==false) {
    if(creditErrorMsg != "nomsg") {
	  alert(creditErrorMsg);
	}  
	return false;
  }
  return true;
}

function ccValid(val) {
  var cardNum = val;
  var len = cardNum.length;
  var checksum = 0;
    
  if (len < 2)  {
    return false;
  }
  for (var i = 1; i < len; i++) {
    var ch = cardNum.charAt(len - 1 - i);
    var digit = parseInt(ch);
    var temp = digit * (1 + (i % 2));
    if (temp < 10)
      checksum = checksum + temp;
    else
      checksum = checksum + temp - 9;
  }

  checksum = (10 - (checksum % 10)) % 10;

  if (parseInt(cardNum.charAt(len - 1)) != checksum)
    return false;

  var company = Issuer(cardNum);

  if (company == "Unknown") {
      return false;
  }
  return true;
}

function Issuer(ccNum) {
  var cardNum = ccNum;
  var rv = "Unknown";
  var len = cardNum.length;

  if (len < 2) {
    return rv;
  }
  
  if ((cardNum.charAt(0) == "3") && (len == 15)) {
    rv = "American Express";
  }else if ((cardNum.charAt(0) == '5') && (len == 16)) {
    rv = "MasterCard";
  }else if ((cardNum.charAt(0) == '4') && ((len == 13) || (len == 16))) {
    rv = "Visa";
  }else if ((cardNum.substring(0,4) == '6011') && (len == 16)) {
    rv = "Discover";
  }else {
    rv = "Unknown";
  }
  return rv;
}


</script>

<script language="javascript">
//------------------------------
// INC_jsTools.asp is a library of useful js functions, like opening pop up windows,  etc.
//------------------------------

function jsTools_openWin(winPage, winName, winParams){
	var win = window.open(winPage, winName, winParams);
	win.focus();
}

function jsTools_strTrim(str) {
    var i = 0;    
    var j = str.length - 1;    
                    
    trimstr = "";    
    if (j < 0) return trimstr;    
    
    flagbegin = true;    
    flagend = true;  
      
    while (flagbegin == true) {    
        if (str.charAt(i) == ' ') i++;    
        else flagbegin = false;    
    }
         
    while (flagend == true) {    
        if (str.charAt(j) == ' ') j--;
        else flagend = false;    
    }    

    if (j < i) return trimstr;
    else trimstr = str.substring(i, j + 1);    
                    
    return trimstr;    
}
</script>
<script language="JavaScript">
<!--
var levelsArray = new Array();

//check a string for a specific character. getVal - string, findChar - char to find, charLimit - number of times char can exist
function checkMatching(getVal,findChar,charLimit){
	var i=0,t=0;
	for(i=0;i<=getVal.length;i++){
		if(getVal.indexOf(findChar,i) == i) t++;
	}
	return (t>charLimit)? false : true;
}
function checkRadioButtons(){
	var checkRadioCount = 0;
	for(i=0; i <= formPointer.level.length-1; i++){
		if(formPointer.level[i].checked == true) checkRadioCount = checkRadioCount + 1
	}
	return (checkRadioCount >=1)? true : false
}
function preloadImages(){
	levelsArray = new Array();
	levelsArray[0] = new Image();
	if("image" == "image") levelsArray[0].src = '/AccountTempFiles/Account403226/images/452095_2812101811529187.jpg';
	
}
function imageSwap(idx){
	var id = parseInt(idx);
	var i = formPointer.levels;
	i.src = levelsArray[id].src;
}
function isNumber(pVal){
	if(jsDV_isValidMoney(formPointer.elements['addAmount'].value) == "-1"){
		return false;
	}else{
		return true;
	}
}
function parseChars(strField, removeChar){
	var strVal = strField;
	if(strVal != ""){
		while(strVal.indexOf(removeChar) != -1){
			strVal = strVal.replace(removeChar, "");
		}
		return strVal;
	}
}
function parseDonationAmount(strField){
	if(formPointer.elements['addAmount'].value != ""){
		formPointer.elements['addAmount'].value = parseChars(strField, ",");
		return parseChars(strField, ",");
	}
}
function selectLevel2(amount){
	if(amount != ""){
		amount = parseDonationAmount(amount);
		if(!isNumber(amount)) {
			alert("The donation amount can not contain any punctuation.\nPlease re-enter your donation amount.");
			formPointer.addAmount.value = "";
			formPointer.addAmount.focus();
			return false;
		}
		var ls = parseFloat(amount);
		if(ls < 5) {
			alert("For credit card donations a minimum donation of $5 is required ");
			formPointer.addAmount.value = "";
			formPointer.addAmount.focus();
			return false;
		}
		
	}
	return true;
}
function selectLevel(amount){
	if(amount != ""){
		amount = parseDonationAmount(amount);
		if(!isNumber(amount)){
			return false;
		}
		var ls = parseFloat(amount);
		if(ls < 5){
			return false;
		}
		
	}
	return true;
}
function selectAmount(defaultAmount){
	formPointer.addAmount.value = defaultAmount;
	formPointer.addAmount.focus();
}
//added on 11/04/04 for Scroller
var agt = navigator.userAgent.toLowerCase();
var isMac = (agt.indexOf("mac")!=-1);
//-->
</script>

<script language="JavaScript">
<!--
var fafJSONevent =

{
    "event": {
        "id": "1075383",
        "name": "Inspired to Run 2014",
        "startdate": "10/12/2014",
        "enddate": "10/12/2014",
        "goal": "0",
        "raised": "127404",
        "friendlyWebAddress": "https://advocate.kintera.org/marathon",
        "allowMobileDonation": "y",
        "logoimage": "https://www.kintera.com/accounttempfiles/account403226/images/healthcareds.jpg"
    },
    "labels": {
        "participant": "Participant",
        "fundraisinggoal": "Fundraising Goal",
        "moneyraisedtodate": "Funds Raised To Date",
        "donor": "Donor",
        "group": "Group",
        "family": "Family",
        "team": "Team",
        "teamcaptain": "Team Captain",
        "coach": "Coach",
        "printabledonation": "Print Donation Form",
        "printabledonationurl": "",
        "volunteerproject": "Project",
        "volunteerposition": "Position",
        "item": "Item",
        "customersupportlink": ""
    },
    "personalpage": {
        "customlinkname": "",
        "customlinkurl": "https://",
        "pageextras": ""
    },
    "familypage": {
        "customlinkname": "",
        "customlinkurl": "",
        "pageextras": ""
    },
    "session": {
        //"id": "E2066BEDE9EC430DAF8F06A859B5941E",
        "login": "false"
    }
}

//-->
</script>

<script language="JavaScript">
<!--
var fafJSONparticipant = {
    //"sid": "406920850",
    "name": "joe hahn",
    "heading1": "Welcome to the Donation Page of",
    "heading2": "joe hahn",
    "goal": "1500",
    "raised": "775",
    "image1": "\/AccountTempFiles\/Account403226\/images\/452095_2812101811529187.jpg",
    "image2": "",
    "caption": "Join me in my efforts to support Advocate's Inspired to Run program!",
    "appeal": "Thank you for visiting my Inspired to Run fundraising page. I hope you will join me in making a difference in the lives of Advocate's patients, caregivers and communities by supporting my fundraising efforts.",
    "teampagelink": "",
    "friendlyurl": "",
    "showdonationflag":"1",
    "teamrole": ""
}
//-->
</script>



</head>

<body bgcolor="#7e81be" background="../images/t.gif" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="honorscrollinit();onload_setFormPointer();preloadImages();donateNow();"">


<link rel="stylesheet" href="http://advocate.kintera.org/faf/style/EssentialStyles.css">
    <script type="text/javascript">
       	<!--
        var fafJSONoptions = {
            "facebook": {
                "appId": '',
                "link": '',
                "feedTitle": '',
                "commentsTitle": '',
                "hideAll": 'false',
                "hideComments": 'false',
                "hideLikeButton": 'false',
                "hideNewsFeed": 'false'
            },
            "sharePage": {
                "appId": '',
                "title": '',
                "services": '',
                "hideAll": 'false'
            },
            "twitter": {
                "appId": 'blackbaud',
                "title": 'Find us on Twitter',
                "link": '',
                "count": "",
                "hideAll": "true",
                "widget": ''
            },
            "youTube": {
                "title": '',
                "link": '',
                "embedCode": ''
            },
            "thermometer": {
                "customGoal": "",
                "meterMinWidth": "0",
                "hideAll": "true",
                "hideGoal": "true",
                "hideRaised": "false",
                "hideDaysLeft": "false",
                "hideGiveButton": "true"
            },
            "honorRoll": {
                "title": "Honor Roll",
                "count": "6",
                "hideAll": "false"
            },
            "sponsorScroll": {
                "title": "Our Sponsors",
                "timeout": "6000",
                "ease": "2000",
                "hideAll": "false"
            },
            "design": {
                "templateName": "default",
                "pattern": "gradient",
                "colors": {
                    "canvas": "#7e81be",
                    "thermBackground": "#ffffff",
                    "thermProgress": "#7e81be",
                    "bodyText": "#333333",
                    "titleText": "#010c15",
                    "subtitleText": "#3d85c6",
                    "buttons": "#3d85c6",
                    "menuLinks": "#000000",
                    "textLinks": "#3d85c6",
                    "formMenu": "#7e81be",
                    "formHeader": "#d3d3d3",
                    "formSubHeader ": "#c4c4c4"
                },
                "fontFamilies": {
                    "body": "helvetica,arial,sans-serif",
                    "title": "helvetica,arial,sans-serif",
                    "subtitle": "helvetica,arial,sans-serif"
                },
                "fontSizes": {
                    "body": "13px",
                    "title": "30px",
                    "subtitle": "24px"
                }
            },
            "session": {
                "id": "E2066BEDE9EC430DAF8F06A859B5941E",
                "login": "false"
            }
        }
        
        window.onresize = function (event) {
            SetWidthHeight();
        }
        
        function SetWidthHeight(){
            document.cookie = "viewportWidth=" + $(window).width() + ";path=/";
            document.cookie = "screenWidth=" + screen.width +";path=/";
        }
        
        SetWidthHeight();
        //alert(fafJSONoptions.youTube.embedCode);
      //-->
	</script>
    <style id="themeStyles"> 
		/* =========================
		   PATTERNS (from fields)
		========================= */
			/* background pattern from select list*/ 
			body {
				background-image:url('../images/pattern-1_blackGradient.png');
				background-repeat:repeat-x;
                
			}
			
		/* =======================
		   COLORS (from fields)
		======================= */

			/* Thermometer Container */
	        #fundbar .thermometer {
		         background-color:#ffffff;
	         }
           
           /* Thermometer Progress */
			#bar_progress, #fundbar .thermometer .meter {
                 background-color:#7e81be /* Insert same color as thermometer progress */
            }
            
            /* Subtitles */
            #contentPrimary h5, 
            #contentPrimary h6 {
	            color:#3d85c6;
            }
            
            /* Text Links */
	        #contentPrimary .gutter a {
		        color:#3d85c6;
	        }

	        /* Callout Buttons Background */
			ul.buttonMenu a,
			.fundbarButton a,
			#giveNowButton .bigButton {
				background-color:#3d85c6;
			}
        	
			#giveNowButton2 .bigButton {
				background-color:#3d85c6;
			}

	        /* Menu Links */
			#contentSecondary ul.globalNav li,
			ul.globalNav li a,
			ul.globalNav li a:hover {
				color:#000000;
			}
        	
	        /* Text Links */
			#contentPrimary a,
			#contentTertiary .leaderboardLinkContainer a {
				color:#3d85c6;
			}
        	
	        /* Border Colors */
	        #contentTertiary .sidebarTitle {
		        border-color:#7e81be; /* Use the same color that is chosen for the Thermometer Progress */
	        }
	        

	        /* =======================
	          FONTS (from fields)
	        ======================= */

			/* Body Text */
			#content p, 
	        #content td, 
	        #content font, 
	        #contentPrimary .BodyTextFont {
                color: #333333; /* from color picker */
                font-family: helvetica,arial,sans-serif; /* from body text select list */
                font-size: 13px; /* from body font-size select list */
            }
             
			
			/* Title */
			#contentPrimary h1, 
	        #contentPrimary h3 
            {
               font-family :helvetica,arial,sans-serif;
			   color:#010c15;
               font-size:30px
			}
			
			/* Subtitle */
			#contentPrimary h2, 
	        #contentPrimary h4 
            {
               font-family :helvetica,arial,sans-serif;
			   color:#3d85c6;
               font-size:24px
            } 			
 
            /* =======================
	          Browser style issue
	        ======================= */
           /*fixed browser issue
           .FAFBodyTable{margin:0 auto;}
           .FAFBodyTable td{text-align:left;}
           .feFAFHelp,.feEmailFAFLink{ float:right;}
           ul.leaderboardMenu li a{word-wrap: break-word;}
           .myHQbodyli{list-style-type:disc !important; margin-left:15px;}
           #myHQbody table td a {text-align: left;}
           .fequizclass{line-height:1px}
           .quizblack{text-align:center;display:block}
           select:focus, textarea:focus {outline: 2px solid #ebc476;}
           html{-webkit-text-size-adjust:none;} 
           #shareThis {padding: 28px 0 0;}
           .eventLogo{ height:142px; overflow:hidden}
           .FAFBodytd{text-align:center !important}*/
            						
	</style>

<style type="text/css">
a:hover.newMenuTextColor{color:#EDE8A1;}
.newMenuTextColor{color:#ffffff;text-decoration:none;}
.newMenuHeaderText{font-family:Verdana,Arial,Helvetica,sans-serif;font-size:12pt;color:#12175e;font-weight:bold;text-decoration:none;}
.newMenuColor{background-color:#12175e;}

.newFeMenuLinkColor{color:#000000;text-decoration:none;}
</style>

<script src="https://advocate.kintera.org/CommonLib/lib/INC_jsTools.js" Language="JavaScript"></script>

<script language="javascript">
function redirectLoginMenu(flag){
        if(flag == "email"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu&area=email";
        }else if(flag == "quiz"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu&area=game";
        }else if(flag == "personal"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu&area=edit";
        }else if(flag == "reports"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu&area=reports";
        }else if(flag == "tools"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu&area=tools";
        }else if(flag == "hq"){
                window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu";
        }else{
               window.location.href="https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E&login=lmenu";
        }
}  
function openLogoutWin(){
	window.name = "partmenu"
	window.open('../help/helpLogoutWin.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E','firstlogin','menubar=no,scrollbars=yes,resizable=yes,width=420,height=200');
	
}
function doSubmit(type1){
	if(type1 == 1){
		window.location.target = "_top";
		window.location.href = "&linkid=";
	}
	if(type1 == 2){
		window.location.href = "&linkid=";
	}
}
</script>

      <div id="wrapPage">
        <!-- UTILITY SECTION -->
		<div id="utility">
			<div class="container clearfix">
				<!-- If logged in... -->
				
								<div id="logout">	
								<!--terry-->
					
					
				</div>
				
			<!-- If logged out... -->	
<div id="login">
					<div class="miniLogin">
					<script language="javascript">
					
					function toploginCheck()
					{
						if(miniLoginForm.elements['miniLoginUsername'].value=="" || 
		                miniLoginForm.elements['miniLoginPassword'].value=="")
		                {
		                    alert("\n-Please fill out the required fields.")
			                return false;
		                }
		                else
		                {
			                return true;
			            }
                    }
					</script>
					<div id="loginFormContainer">
					
										
					<div class="loginLinkContainer"><a href="#" id="loginLink"><span>Sign In</span></a></div>
					
					
					<div id="loginForm">
						<form method="POST" onSubmit="return toploginCheck()" action="../../faf/login/checkPartLogin.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E" name="miniLoginForm" id="miniLoginForm">
							
<div class="gutter clearfix">
<div class="FAFFormContainer clearfix">
								   <div class="FAFFormTitle">Sign in to My HQ</div> 
						<div class="FAFFormFields">
							<input type="text" class="FAFFormTextbox" name="username" value="Username" maxlength="100" id="miniLoginUsername" onfocus="if (this.value=='Username') this.value=''" onblur="if(this.value == '') this.value='Username'" />
							<input type="password" class="FAFFormTextbox" name="password" value="Password" maxlength="20" id="miniLoginPassword" onfocus="if(this.value=='Password') this.value=''" onblur="if(this.value == '') this.value='Password'" />
						</div>
								    
								    
								    
							<div class="FAFFormButtonContainer">
							<input type="submit" border="0" class="FAFFormButton FAFFormButtonSubmit" name="imageField2" id="miniLoginSubmit" value="Login" />
							</div>
							<div class="FAFFormCheckboxContainer">
								<input type="checkbox" name="faf_rememberme"    value="y" class="FAFFormCheckbox" id="miniLoginRememberCheckbox" />
								<label class="FAFFormLabel FAFFormCheckboxLabel" for="miniLoginRememberCheckbox">Keep me logged in</label>
							</div>
						</div>
								    
								    
						<div class="janrainLogin clearfix">
							<iframe width="225" scrolling="no" height="106" frameborder="0" marginwidth="0" marginheight="0" src="../includes/janrain.asp" allowtransparency="true" id="JanrainLogin"></iframe>
						</div>
		                            


								    <input type="hidden" id="miniLoginRemember" value="Password" name="passwordRem" />
								    <input type="hidden" id="miniLoginSSL" value="" name="ssl" />
								    <input type="hidden" id="miniLoginSection" value="y" name="miniLoginSection" />
</div>
							
							
						</form>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
		<!-- END UTILITY SECTION -->
		  <div id="page">
			<!-- HEADER SECTION -->
			<div id="header">
				<div class="container">
					<div class="gutter clearfix">
						<div id="logo">
							<div class="gutter clearfix">						
								<div class="eventLogo">
									<a href="https://advocate.kintera.org/faf/home/default.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E"><img src="https://www.kintera.com/accounttempfiles/account403226/images/healthcareds.jpg" alt="Event Logo" /></a>
								</div>
							</div>
						</div>
						<div id="media">
							<div class="gutter clearfix">
								<div class="slideSet">
									<div class="gutter clearfix">
									   
										<div class="slide">										   
											<a href="https://advocate.kintera.org/faf/home/waiver.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E" title="Go to https://www.kintera.com/accounttempfiles/account403226/images/team_photo_3sm.jpg"><img src="https://www.kintera.com/accounttempfiles/account403226/images/team_photo_3sm.jpg" alt="" /></a> 
										</div>
										
										<div class="slide">
											<a href="https://advocate.kintera.org/faf/home/waiver.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E" title="Go to https://www.kintera.com/accounttempfiles/account403226/images/chicagomarathon2013photos20131012089.jpg"><img src="https://www.kintera.com/accounttempfiles/account403226/images/chicagomarathon2013photos20131012089.jpg" alt="" /></a>	   
										</div>
										
										<div class="slide">
											<a href="https://advocate.kintera.org/faf/home/waiver.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E" title="Go to https://www.kintera.com/accounttempfiles/account403226/images/runner.jpg"><img src="https://www.kintera.com/accounttempfiles/account403226/images/runner.jpg" alt="" /></a>	    
										</div>
										
									</div>
								</div>
							</div>
						</div>
						<div id="additionalHeader">
							<div class="headerHtml">    <div class="slide" style="color: #FFFFFF">a </div>
    <div class="clearfix">				
        <div><CENTER>
            <div id="container1" style="position: relative;">
        <input id="Button1" type="button" value="RUNNER'S REGISTRATION" style="border-style: none; background-color: #3d85c6; font-weight: normal; color: #FFFFFF; height: 27px; width: 215px;">
        <Input id="Button2" type="button" value="SPONSOR A RUNNER" style="border-style: none; background-color: #3d85c6; font-weight: normal; color: #FFFFFF; height: 27px; width: 178px;">
 
        <input id="Button3" type="button" value="EVENT INFORMATION" style="border-style: none; background-color: #3d85c6; font-weight: normal; color: #FFFFFF; height: 27px; width: 174px;" onclick="hideMenus( '3' )" >
 
        <input id="Button4" type="button" value="VISITORS" style="border-style: none; background-color: #3d85c6; font-weight: normal; color: #FFFFFF; height: 27px; width: 120px;" onclick="hideMenus( '4' )" >
 
        <input id="Button5" type="button" value="RUNNER'S HEADQUARTERS" style="border-style: none; background-color: #3d85c6; font-weight: normal; color: #FFFFFF; height: 27px; width: 225px;" onclick="hideMenus( '5' )" >
            </div>
        </div>
    </div>
    <div id="menuList" style="position: relative;">        
        <select name="menu3" id="menu3" style="visibility: hidden; position:absolute;  top:-5px; left: 425px;" >
        <option value='https://advocate.kintera.org/faf/home/default.asp?ievent=1075383&lis=1&kntae1075383=D0B5CA345CAA49C8953CAB971F4CA8E1'>Home</option>
        <option value='https://advocate.kintera.org/faf/help/helpAboutOrg.asp?ievent=1075383&lis=1&kntae1075383=D0B5CA345CAA49C8953CAB971F4CA8E1'>About Us</option>
        <option value='https://advocate.kintera.org/faf/help/helpEventInfo.asp?ievent=1075383&lis=1&kntae1075383=D0B5CA345CAA49C8953CAB971F4CA8E1'>Event Information</option>
        <option value='https://advocate.kintera.org/faf/SponsorASP/ViewSponsors.asp?ievent=1075383&lis=1&kntae1075383=D0B5CA345CAA49C8953CAB971F4CA8E1'>View Our Sponsors</option>
         </select>
                 <input type="hidden" name="select_flag3" id="select_flag3" value="0">
 
        <select name="menu4" id="menu4" style="visibility: hidden;  position: absolute; top: -5px; left: 603px;" >
 
            <li class="parentMenuItem"><span class="menuSubtitle">Visitors</span><ul class="menuSub">
                <option value='https://advocate.kintera.org/faf/home/waiver.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0'>Runner Registration</option>
                <option value='https://advocate.kintera.org/faf/search/searchParticipants.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0'>Sponsor a Runner</option>
                <option value='https://advocate.kintera.org/faf/email/emailFriend.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0'>Spread the Word</option>
                <option value='https://advocate.kintera.org/faf/donorReg/donorPledge.asp?supId=0&ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0&team='>General Donation</option>
                <option value='https://advocate.kintera.org/faf/sponsorasp/catalog.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0'>Sponsorship Opportunities</option>
                <option value='https://advocate.kintera.org/faf/volunteerRegNew/default.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0'>Volunteer Registration</option>
         </select>
                 <input type="hidden" name="select_flag4" id="select_flag4" value="0">
 
        <select name="menu5" id="menu5" style="visibility: hidden;  position: absolute; top: -5px; left: 729px;" >
                    <option value='https://www.kintera.org/faf/login/loginParticipant.asp?ievent=1075383&lis=1&kntae1075383=6123AE4EE86F420BA86E48BF8CFFC7D0&login=lmenu'>Runner's Login</option>
                    <option value='https://www.kintera.org/faf/home/ccp.asp?ievent=1075383&ccp=654073'>Fundraising rewards for runners</option>
                    </select>
                 <input type="hidden" name="select_flag5" id="select_flag5" value="0">
</div>
 
<script type="text/javascript">
    var urlmenu1 = document.getElementById( 'Button1' );
    urlmenu1.onclick = function () {
        var newURL = "https://advocate.kintera.org/faf/home/waiver.asp?ievent=1075383&lis=1&kntae1075383=1EBAF152E390481799AA53EFC0378E2C";
        location.href = newURL;
    };
    var urlmenu2 = document.getElementById( 'Button2' );
    urlmenu2.onclick = function () {
        var newURL = "https://advocate.kintera.org/faf/search/searchParticipants.asp?ievent=1075383&lis=1&kntae1075383=1EBAF152E390481799AA53EFC0378E2C";
        location.href = newURL;
    };
    var urlmenu3 = document.getElementById( 'menu3' );
    urlmenu3.onclick = function () {
        document.getElementById( 'select_flag3' ).value = 0;
        document.getElementById( 'menu3' ).style.visibility = "hidden";
        var newURL = this.options[this.selectedIndex].value;
        location.href = newURL;
    };
    var urlmenu4 = document.getElementById( 'menu4' );
    urlmenu4.onclick = function () {
        document.getElementById( 'select_flag4' ).value = 0;
        document.getElementById( 'menu4' ).style.visibility = "hidden";
        var newURL = this.options[this.selectedIndex].value;
        location.href = newURL;
    };
    var urlmenu5 = document.getElementById( 'menu5' );
    urlmenu5.onclick = function () {
        document.getElementById( 'select_flag5' ).value = 0;
        document.getElementById( 'menu5' ).style.visibility = "hidden";
        var newURL = this.options[this.selectedIndex].value;
        location.href = newURL;
    };

    function hideMenus( mID ) {
        var select_flag = document.getElementById( 'select_flag' + mID ).value;
        document.getElementById( 'menu3' ).style.visibility = "hidden";
        document.getElementById( 'menu4' ).style.visibility = "hidden";
        document.getElementById( 'menu5' ).style.visibility = "hidden";
        document.getElementById( 'select_flag3' ).value = 0;
        document.getElementById( 'select_flag4' ).value = 0;
        document.getElementById( 'select_flag5' ).value = 0;

        if ( select_flag == 0 ) {
            var select_box = document.getElementById( 'menu' + mID );
            select_box.size = select_box.options.length;
            document.getElementById( 'select_flag' + mID ).value = 1;
            document.getElementById( 'menu' + mID ).style.visibility = "visible";
        }
    }

</script></div>
						</div>
						
					</div>
				</div>
			</div>
			<!-- END HEADER SECTION -->
			
		 <div id="content">
		  <div class="container">
		   <div class="gutter clearfix">
		  
		  
			<!-- LEFT COLUMN SECTION -->
			<div id="contentSecondary">
				<div class="gutter clearfix">
			  <!-- Callout Buttons -->
			  
			
			<!-- SIDE MENU -->
             <p>
			  </div>
			</div>
		   <!-- END LEFT COLUMN SECTION -->
			
		  <!-- CENTER COLUMN SECTION -->
			<div id="contentPrimary">
				<div class="gutter clearfix">
				 <div class="FAFBodyTable">

<table width="100%" border=0 cellspacing=0 cellpadding=0 bgcolor="#FFFFFF">
	
	<tr><td>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr><td>
	<table border="0" cellspacing="0" cellpadding="0">
		<tr><td width="140" height="20" align="center" bgcolor="#c4c4c4"><b>My Personal Page</b></td></tr>
	</table>
</td></tr>
<tr bgcolor="#c4c4c4"><td><img src="../images/t.gif" border="0" height="10"></td></tr>
</table>
</td></tr>
	<tr><td>
		<table width="100%" border=0 cellspacing=0 cellpadding=1 bgcolor="7e81be">
		<tr><td>
			<table width="100%" border=0 cellspacing=0 cellpadding=5 bgcolor="#FFFFFF"">
	

	<form method="post" action="https://www.kintera.org/faf/donorReg/donorBilling.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E" name="registrationForm" onSubmit="return formCheck()">
	<input type="hidden" name="participantSupporterId" value="406920850">
	<input type="hidden" name="participantFullName" value="joe hahn">
	<input type="hidden" name="pageType" value="donorreg">
	<input type="hidden" name="teamID" value="0">
	<input type="hidden" name="supID" value="406920850">
	<input type="hidden" name="rangeMin" value="26">
	<input type="hidden" name="js" value="false">
	<input type="hidden" name="extWebsiteReference" value="" />
	<tr><td>
		<table width="100%" border=0 cellspacing=0 cellpadding=2 align=center>
			<tr><td width="99%" align=center><br><b><font size="+1">Welcome to the Donation Page of<br>joe hahn</font></b><br><br></td></tr>
			
		</table>
	</td></tr>
	<tr><td>
			<table width="100%" border=0 cellspacing=0 cellpadding=0 align=center>
		<tr>
		
			<td valign=top width="40%">
				<table border=0 cellspacing=0 cellpadding=1 align=center width="100%">
				
					<tr><td align=right><input type='radio' name='level' value='777410' onclick='selectAmount(1310);'></td><td><b>.   [ $50 per mile ]</b><br>($1,310.00 +)</td></tr><tr><td align=right><input type='radio' name='level' value='777411' onclick='selectAmount(655);'></td><td><b>.   [ $25 per mile ]</b><br>($655.00 +)</td></tr><tr><td align=right><input type='radio' name='level' value='777415' onclick='selectAmount(262);'></td><td><b>.   [ $10 per mile ]</b><br>($262.00 +)</td></tr><tr><td align=right><input type='radio' name='level' value='777412' onclick='selectAmount(131);'></td><td><b>.   [ $5 per mile ]</b><br>($131.00 +)</td></tr><tr><td align=right><input type='radio' name='level' value='777413' onclick='selectAmount(52);'></td><td><b>.   [ $2 per mile ]</b><br>($52.00 +)</td></tr><tr><td align=right><input type='radio' name='level' value='777414' onclick='selectAmount(26);'></td><td><b>.   [ $1 per mile ]</b><br>($26.00 +)</td></tr>
					<tr><td colspan="2"><br></td></tr>
					
					
					<tr><td colspan="2" align="center"><p><b>Enter Donation Amount Here:</b><br/><font size="1">*Currency shown: US Dollar</font><br>$<input type="text" name="addAmount" onblur="return selectLevel(this.value);" maxlength="9" size=20><br></p></td></tr>
					
					
					
					<tr>
						<td colspan="2" align="center">
						
							<input type="image" border=0 name="imageField" src="../images/buttons/continuesilver.gif" width="84" height="24" alt='Continue'><br><br>
							
						</td>
					</tr>
				</table>
				
				<table border=0 cellspacing=0 cellpadding=2 align=center>
				<tr><td>&nbsp;</td><td>My Fundraising Goal:<br><b>$1,500.00</b></td></tr><tr><td>&nbsp;</td><td>Money Raised to Date:<br><b>$775.00</b></td></tr><tr><td rowspan="3" valign=bottom align=right><img src="../images/fundraise1.gif"></td></tr>
							<tr><td class="fundbar" align="right" height="15" width="171"><img src="../images/barcharts/white_bar2.gif" width="82.65" height="15" border=0></td></tr>
							<tr><td><img src="../images/barcharts/ruler_percent.gif"></td></tr>
				</table>
				
				
				
			</td>
			
			<td valign=top width="60%">
				<table border=0 cellspacing=0 cellpadding=2 align=center>
					<tr><td align=center>
						        <img name="levels" src="Account403226/images/452095_2812101811529187.jpg" alt="" border=0 width=500 height="260px">
						  </td></tr><tr style="word-break:break-all;"><td width="300px" valign=top align=center style="padding-left:30px;padding-right:30px;" ><b>Join me in my efforts to support Advocate's Inspired to Run program!</b><br><br></td></tr><tr style="word-wrap:break-word;"><td width="300px" valign=top >Thank you for visiting my Inspired to Run fundraising page. I hope you will join me in making a difference in the lives of Advocate's patients, caregivers and communities by supporting my fundraising efforts.</td></tr>
				</table>
			</td>
		</tr>
		</table>
		</td>
	</tr>
</table>
		</td>
	</tr>

</table>
		</td>
	</tr>

</table>
</form>
</body>
<script>
    document.registrationForm.js.value = true;
</script>

<!--<script>
var w = 0
var y = 0
processbarFe()
function processbarFe()
{
    w = w+2;
    if(Number(w)<Number())
    {
    document.getElementById("devmeter").style.width=w+"px";
    setTimeout("processbarFe()",10);
    }
    else
    {
    document.getElementById("devmeter").style.width=+"px";
    }
}
</script>-->
            </div>
        </div>
    </div>
				<!-- END CENTER COLUMN SECTION -->
						<!-- RIGHT COLUMN SECTION -->
						<div id="contentTertiary">
							<div class="gutter clearfix">
								<!-- Share Page -->
								<div align=right class="feFAFHelp"><a href="#" onclick="javascript:jsTools_openWin('https://www.blackbaud.com/files/support/helpfiles/Participants/Default.html','help','width=600,height=400,toolbar=yes,menubar=yes,scrollbars=yes,resizable=yes')"><img src="../images/help_Button.gif" width=60 height=24 alt="Help Files" border=0></a></div><br><table border=0 cellspacing=0 cellpadding=1 class= "feEmailFAFLink"><tr><td><a href="https://advocate.kintera.org/faf/email/emailFriend.asp?ievent=1075383&lis=1&kntae1075383=E2066BEDE9EC430DAF8F06A859B5941E"><img src="../images/emailFriend.gif" width=132 height=39 alt="Email This Site to A Friend" border=0></a></td></tr><tr><td align=center><a href="#" onClick="javascript:jsTools_popup('../includes/INC_faf.asp','550','600');return false;"><img src="/CommonLib/images/FriendsAskingFriends.png" width=121 height=28 alt="About Friends Asking Friends&#153;" border=0></a></td></tr></table><div class="clearfix"></div><br>
								<!-- Sponsor Logos -->
								<div class="sponsorScroll">
									
								</div>
								
								<!-- Top specil page -->
								<div class="leaderboard leaderboardspecilPage">
								<br><script language='JavaScript'>
if(navigator.javaEnabled()){
document.write("<table width='100%' border='0' cellspacing='0' cellpadding='5' bgcolor='#c4c4c4' style='visibility: hidden; position: absolute; float: left;'><tr><td colspan='2' align='right'><APPLET code='ScrollDisp2.class' archive='../includes/JavaApplets/ScrollDisp2.jar' width='140' height='265'><PARAM NAME='NameList' VALUE=\"~$26.00~From Brian Dunn ~~  |~$26.00~From A la Mode Creative ~~  |~~From Claudia Martinez ~~  |~$52.00~From David Dobie ~~  |~$100.00~From Mom ~~  |~$100.00~From Mike, Kim and kids ~~  |~$100.00~From Aunts Pat and Judy ~~  |~~From M. Martinson ~~  |~~From Matthew M. ~~  |~~From Nancy Kaszyca ~~ In Support Of Joe Hahn|~~From Nick Liberatore ~~  |~$131.00~From IpaGhost ~~ In Memory Of Protman&#39;s ICOM Skills. R.I.P.|~$52.00~From Tru ~~  |\"><PARAM NAME='BackgroundImage' VALUE='../images/Honor.gif'><PARAM NAME='colorScroll2' VALUE='0,0,255'><PARAM NAME='colorAppletBackgroundColor' VALUE='126,129,190'><PARAM NAME='colorScrollBackground' VALUE='255,255,255'><PARAM NAME='iMaxCharsInLine' VALUE='14'></APPLET><br></td></tr></table>");
}
else{
document.write("<table width='140' border='0' cellspacing='0' cellpadding='1' bgcolor='#7e81be'><tr><td><table width='100%' border='0' cellspacing='0' cellpadding='5' bgcolor='#FFFFFF'><tr><td class='white' align='center' bgcolor='#7e81be'>Honor Roll</td></tr><tr><td><font color='#0000ff'><b>$26.00</b></font><br><font color='red'><b>From Brian Dunn   </b></font></td></tr><tr><td><font color='#0000ff'><b>$26.00</b></font><br><font color='red'><b>From A la Mode Creative   </b></font></td></tr><tr><td><font color='red'><b>From Claudia Martinez   </b></font></td></tr><tr><td><font color='#0000ff'><b>$52.00</b></font><br><font color='red'><b>From David Dobie   </b></font></td></tr><tr><td align='right'><a href='#' onclick='return(popUpWholeHonorRoll(1075383,406920850,0))'>&gt;&gt;&nbsp;more</td></tr></table></td></tr></table>");
}
</script>
								</div>
								
								<!-- Top Fundraisers -->
								
								<!-- Top Teams -->
								
								<!-- Top Groups -->
								
							</div>
						</div>
						<!-- END RIGHT COLUMN SECTION -->
										
					</div>
				</div>
			</div>
						
			<!-- FOOTER SECTION -->
			<div id="footer">
				<div class="container">
					<div class="gutter clearfix">	
							
						<!-- Footer HTML -->
						<div class="footerHtml">
						
	<table border=0 cellspacing=0 cellpadding=5 width="100%" class="noprint">
		<tr align=center>
			
		</tr>
		
		<tr>
			<td align=center class=font1 colspan=3>
			<a href="#" onClick="javascript:jsTools_popup2('https://www.kintera.org/confidence','width=800,scrollbars,resizable');return false;" class="footCopyRightLogo"><img src='/CommonLib/imagesSSL/kintera_149x36.gif' width='115' height='42' border='0' alt='Blackbaud, Kintera division - Donate With Confidence'></a>
			</td>
		</tr>
		
	</table>

						</div>
	                    <div class="footerCopyright">
						    Powered by <a href="https://www.blackbaud.com">Blackbaud: Friends Asking Friends</a>
						</div>
					</div>
				</div>
			</div>
			</div>
			<!-- END FOOTER SECTION -->
		</div>
	</div>
</body></html>