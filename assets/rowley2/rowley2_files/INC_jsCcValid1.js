function ccValid(val){
	var cardNum = val;
	var len = cardNum.length;
	var checksum = 0;    
	if (len < 2) return false;
	for (var i = 1; i < len; i++){
		var ch = cardNum.charAt(len - 1 - i);
		var digit = parseInt(ch);
		var temp = digit * (1 + (i % 2));
		if (temp < 10) checksum = checksum + temp;
		else checksum = checksum + temp - 9;
	}
	checksum = (10 - (checksum % 10)) % 10;
	if (parseInt(cardNum.charAt(len - 1)) != checksum) return false;
	return true;
}
function ccTypeValid(num, type){
	var val = num.value;
	var strint = "0123456789";
	var numval = ""; typeval = "";
	var i = 0;
	for (i=0; i<val.length; i++){
		tst = val.substring(i,i+1);
		if (strint.indexOf(tst)>=0) numval = numval + tst;
	}
	num.value = numval;
	if (!ccValid(numval)) return false;
	for (i=0; i<type.length; i++)
		if (type[i].selected) typeval = type[i].value;
	if (!ccType(numval, typeval)) return false;
	return true;
}
function ccType(num, type){
	var cards = new Array();
	//Define the cards.
	//Name:      As in the selection box of the form - must be same as user's
	//Length:    List of possible valid lengths of the card number for the card
	//prefixes:  List of possible prefixes for the card
	cards [0] = {name: "Visa",
				length: "13,16", 
				prefixes: "4"};
	cards [1] = {name: "MasterCard", 
				length: "16", 
				prefixes: "51,52,53,54,55"};
	cards [2] = {name: "American Express", 
				length: "15", 
				prefixes: "34,37"};
	cards [3] = {name: "Discover", 
				length: "14,16", 
				prefixes: "3,6"};
	cards [4] = {name: "Maestro", 
				length: "14,16,18", 
				prefixes: "5020,5033,5868,6"};
	cards [5] = {name: "Solo", 
				length: "16,18,19", 
				prefixes: "63,6767"};
	cards [6] = {name: "JCB", 
				length: "15,16", 
				prefixes: "1800,2131,3"};
	cards [7] = {name: "Switch/UK Maestro", 
				length: "16,18,19", 
				prefixes: "4903,4905,4911,4936,564182,633110,6333,6759"};
	var cardType = -1;
	for(var i=0; i<cards.length; i++)
		if(type.toLowerCase()==cards[i].name.toLowerCase()){
			cardType = i;
			break;
		}
	if(cardType == -1) return false;
	var LengthValid = false;
	var PrefixValid = false; 
	var prefix = new Array ();
	var lengths = new Array ();
	prefix = cards[cardType].prefixes.split(",");
	for(i=0; i<prefix.length; i++){
		var exp = new RegExp ("^" + prefix[i]);
		if (exp.test (num)) PrefixValid = true;
	}
	if(!PrefixValid) return false; 
	lengths = cards[cardType].length.split(",");
	for (j=0; j<lengths.length; j++)
		if (num.length == lengths[j]) LengthValid = true;
	if (!LengthValid)	return false; 
	return true;
}
function ccCVVCheck(val){
	var nr1 = val;
	var flag = 0;
	var cmp = "0123456789";
	if(val == "") return false;
	if(nr1.length < 3) return false;
	for (var i=0; i<nr1.length; i++){
		tst = nr1.substring(i,i+1);
    	if ((cmp.indexOf(tst)<0) || (cmp.indexOf(" ") != -1)) flag++;
	}
	if (flag != 0) return false;
	return true;
}
