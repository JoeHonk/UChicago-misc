$(document).ready(function(){
	//if page is reloaded and sessvars.allfields is not blank then reload page
	if (sessvars.allfields != '' && sessvars.allfields != undefined) {
		var fields = eval(sessvars.allfields);
		$.each(fields, function(i, fieldid){
			if ($("input:text[name="+fieldid.name+"]").length > 0) {
				$("input:text[name="+fieldid.name+"]").val(fieldid.value);
			}
			if ($("input:hidden[name="+fieldid.name+"]").length > 0) {
				$("input:hidden[name="+fieldid.name+"]").val(fieldid.value);
			}
			if ($("textarea[name="+fieldid.name+"]").length > 0) {
				$("textarea[name="+fieldid.name+"]").val(fieldid.value);
			}
			if ($("input:radio[name="+fieldid.name+"]").length > 0) {
				$("input:radio[name="+fieldid.name+"]").each(function(x,fieldr){
					if ($(fieldr).val() == fieldid.value) {
						$(fieldr).attr("checked","checked");
						return false;
					}
				});
			}
			if ($("input:checkbox[name="+fieldid.name+"]").length > 0) {
				$("input:checkbox[value="+fieldid.value+"]").attr("checked","checked");
			}
			if ($("select[name="+fieldid.name+"]").length > 0) {
				$("select[name="+fieldid.name+"]").val(fieldid.value);
			}
			if ($('.monthly_amounts').length > 0) {
				if (fieldid.name == "RecurringAmount" && fieldid.value != '') {
				   SetrAmount($('form[name^=SUPPORTER]')[0], fieldid.value);
				}
				if (fieldid.name == "Amount" && fieldid.value != '') {
				   SetAmount($('form[name^=SUPPORTER]')[0], fieldid.value);
				}
			}
		});
		//reset recurring options
		if ($('.monthly_amounts').length == 0) {			
			CheckRecurringNew($('input[name=RecurringOption]:checked').val());
		} else {
		   $('input[name=PledgeLevelID]:last').click();
		}
		if ($.url.param("ValidCard") == 'Error') {
			$('#ccError').html("<font class='Alert'>There has been an error processing your transaction. Please check your credit card information and billing address and try again, or contact your credit card issuer.</font>");
		}
	}
});
if (location.href.indexOf("donateok.asp") > 0) {
	sessvars.$.clearMem();
}

function CheckRecurringNew(thetype){
	recurring_type = thetype;
	thisform = eval("document."+$('form#FormDonation').attr("name"));
	if(recurring_type=='Y'){
		thisform.Amount.value = (parseInt(thisform.RecurringAmount.value)*(parseInt(thisform.NumberOfPayments.value)+1));
		thisform.TotalAmount.value = thisform.Amount.value;
		CountTerm(thisform.RecurringAmount, thisform.NumberOfPayments, thisform.TotalAmount);
		
		thisform.Amount.disabled=true;
		if(thisform.RecurringAmount!=null) thisform.RecurringAmount.disabled=false;
		if(thisform.BillingScheduleID!=null) thisform.BillingScheduleID.disabled=false;
		if(thisform.NumberOfPayments!=null) thisform.NumberOfPayments.disabled=false;
		if(thisform.BillingScheduleID.value=="0"){ 
			thisform.Amount1.disabled=false;
			
		}
	}
	else{
		
		thisform.TotalAmount.value = thisform.Amount.value;
		
		thisform.Amount.disabled = false;
		if(thisform.RecurringAmount!=null) thisform.RecurringAmount.disabled = true;
		if(thisform.BillingScheduleID!=null) thisform.BillingScheduleID.disabled = true;
		if(thisform.NumberOfPayments!=null) thisform.NumberOfPayments.disabled=true;
	}
}
