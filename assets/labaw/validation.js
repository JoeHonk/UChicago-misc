jQuery(document).ready(function($) { 
document.getElementsByName('ProductQty2156853')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156854')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156893')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156894')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156895')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156896')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156906')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156908')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156909')[0].placeholder='Qty';
document.getElementsByName('ProductQty2156911')[0].placeholder='Qty';
});


$(function() {
    if ( document.location.href.indexOf('billing.asp') > -1 ) {
        jQuery.fn.fitVids = $.noop;
    }
});


history.go(1);
formSetmain(document.SUPPORTER1145131);
onunload = fileClose;

var blnCartCheck = false;

function SubmitForm1145131(thisform){
	if(thisform.SubmitButtom!=null) thisform.SubmitButtom.disabled = true;
	if(thisform.CancelButton!=null) thisform.CancelButton.disabled = true;
	if(CheckForm1145131(thisform)) thisform.submit();
	else{
		if(thisform.SubmitButtom!=null) thisform.SubmitButtom.disabled = false;
		if(thisform.CancelButton!=null) thisform.CancelButton.disabled = false;
	}
}
function CheckForm1145131(thisform){



	if(blnCartCheck==false){
		alert("Please select registration type to continue.");
		return false;
	}
	
	warning = "";
	focus_field = "";
	warning=checkField(thisform.first_name,"First Name",warning);warning=checkField(thisform.last_name,"Last Name",warning);warning=checkField(thisform.email_address,"Primary Email",warning);warning=checkField(thisform.address_line_1,"Address Line 1",warning);warning=checkField(thisform.city,"City",warning);warning=checkSelect(thisform.state,"State",warning);warning=checkField(thisform.zip,"ZIP/Postal Code",warning);


	// ProductQty2156853 ProductQty2156854 ProductQty2156894 ProductQty2156895 ProductQty2156896
	prod_warning = "";
	prod_focus_field = "";
	prod_warning=checkField(thisform.ProductQty2156853,"ProductQty2156853",prod_warning);
	prod_warning=checkField(thisform.ProductQty2156854,"ProductQty2156854",prod_warning);
	prod_warning=checkField(thisform.ProductQty2156894,"ProductQty2156894",prod_warning);
	prod_warning=checkField(thisform.ProductQty2156895,"ProductQty2156895",prod_warning);
	prod_warning=checkField(thisform.ProductQty2156896,"ProductQty2156896",prod_warning);
	console.log(thisform.ProductQty2156896.value);
	//if(prod_warning!=""){
	if((thisform.ProductQty2156853.value + thisform.ProductQty2156854.value + thisform.ProductQty2156894.value + thisform.ProductQty2156895.value +  thisform.ProductQty2156896.value < 1 )){
		prod_warning="Please enter a quantity for one or more:\nWeekend Pass | General\nWeekend Pass | Young Alumni\nFriday Pass | General\nFriday Pass | Young Alumni\nSaturday Pass | General";
		alert(prod_warning);
		if (focus_field != "") focus_field.focus();
		return false;
	}

	if(warning!=""){
		warning="Please enter the following fields to continue:\n- "+warning+"";
		alert(warning);
		if (focus_field != "") focus_field.focus();
		return false;
	}
	if(thisform.email_address!=null)
		if(thisform.email_address.value!="")
			if(validEmail(thisform.email_address.value) == false){
				//alert("Please enter a valid email address.");
				thisform.email_address.focus();
				return false;
			}
	if(thisform.email_address_1!=null)
		if(thisform.email_address_1.value!="")
			if(validEmail(thisform.email_address_1.value) == false){
				//alert("Please enter a valid email address.");
				thisform.email_address_1.focus();
				return false;
			}
	if(thisform.email_address_2!=null)
		if(thisform.email_address_2.value!="")
			if(validEmail(thisform.email_address_2.value) == false){
				//alert("Please enter a valid email address.");
				thisform.email_address_2.focus();
				return false;
			}			
	if((thisform.zip!=null) && (thisform.country!=null))
		if(checkCountryZip(thisform.zip,thisform.country) == false){
			//alert("Please enter a valid zip code");
			thisform.zip.focus();
			return false;
		}
	
	if (thisform.VDonation!=null)
		if (CheckAmount2(thisform.VDonation) == false)
			return false;
	
	if( (thisform.ProductQty2156853.value * 1>999999) || (thisform.ProductQty2156854.value * 1>999999) || (thisform.ProductQty2156893.value * 1>999999) || (thisform.ProductQty2156894.value * 1>999999) || (thisform.ProductQty2156895.value * 1>999999) || (thisform.ProductQty2156896.value * 1>999999) || (thisform.ProductQty2156906.value * 1>999999) || (thisform.ProductQty2156908.value * 1>999999) || (thisform.ProductQty2156909.value * 1>999999) || (thisform.ProductQty2156911.value * 1>999999)) return false;
		if( (thisform.ProductQty2156853.value == '' || thisform.ProductQty2156853.value == '0')  && (thisform.ProductQty2156854.value == '' || thisform.ProductQty2156854.value == '0') && (thisform.ProductQty2156893.value == '' || thisform.ProductQty2156893.value == '0') && (thisform.ProductQty2156894.value == '' || thisform.ProductQty2156894.value == '0') && (thisform.ProductQty2156895.value == '' || thisform.ProductQty2156895.value == '0') && (thisform.ProductQty2156896.value == '' || thisform.ProductQty2156896.value == '0') && (thisform.ProductQty2156906.value == '' || thisform.ProductQty2156906.value == '0') && (thisform.ProductQty2156908.value == '' || thisform.ProductQty2156908.value == '0') && (thisform.ProductQty2156909.value == '' || thisform.ProductQty2156909.value == '0') && (thisform.ProductQty2156911.value == '' || thisform.ProductQty2156911.value == '0')) {
			alert ("Please select a registration fee.");
			return false;
		}
		thisform.action='ecpartadd.asp?c=aqLQKYMyHkI2F&b=9285535&en=dmLPI6NPLcIYJgOSKbIVKcO2LwI2IbPWLkLXI9PUIjL4ImP6JAK';return true;
}


