$('[id^=BeneficiaryAmount]').keyup(function() {
    var sum = 0;
    $('[id^=BeneficiaryAmount]').each(function() {

        if ($(this).val() != "") {
            $(this).val(parseFloat($(this).val()).toFixed(0));
            sum += parseFloat($(this).val());
        }

    });

    $('[id^=BeneficiaryAmount]').each(function() {

        var percent = ($(this).val() / sum * 100).toFixed(0);
        var id = $(this).attr('id');
        var idnum = id.replace(/[A-Z]+/i, '');
        $('#BeneficiaryPercentage' + idnum).val(percent);
        $(Amount).val(sum.toFixed(2));
        console.log('#BeneficiaryPercentage' + idnum + ' ' + percent + '%');
        console.log();
    });
    console.log('Total: ' + sum);
});


function ChangeNumber(thisform, ptr) {
    if (thisform.BillingScheduleID.value == "0") {
        thisform.Reload.value = 'Y';
        thisform.submit();
        return false;
    } else
        return CountTotal(thisform.RecurringAmount, ptr, thisform.TotalAmount);
}

function ChangeSchedule(thisform, ptr) {
    if ((thisform.BillingScheduleID.value != "0" && thisform.Amount1 != null) || (thisform.BillingScheduleID.value == "0" && thisform.Amount1 == null)) {
        thisform.Reload.value = 'Y';
        thisform.submit();
    }
    return false;
}


    <!--
    /* jQuery function for display */
    $(document).ready(function() {
        //hide certain fields that require interaction prior to display
        $(".startHidden").hide();
        //show the related fields for the currently selected giving option
        if ($('input[name="RecurringOption"]:checked').val() == 'N') {
            $("#recurringGift").hide();
            $("#oneTimeGift").fadeIn();
        }
        if ($('input[name="RecurringOption"]:checked').val() == 'Y') {
            $("#oneTimeGift").hide();
            $("#recurringGift").fadeIn();
        }
        //allow toggling between the two giving options
        $('input[name="RecurringOption"]').change(function() {
            var selected = $(this).val() == 'N' ? 'oneTimeGift' : 'recurringGift';
            $('.togglePayOpt').hide();
            $('#' + selected).fadeIn();
            CheckRecurring($('form[name^=SUPPORTER]')[0], $(this).val());
        });
        //display and allow toggling of additional giving options
        $('input.addOptions:checked').each(function() {
            var checkedBox = $(this).val();
            $('#' + checkedBox).fadeIn();
        });
        $('input.addOptions').change(function() {
            var checkedBox = $(this).val();
            $('#' + checkedBox).toggle('slow');
        });
        //display and allow toggling of additional giving options
        $('input.Field4708173:checked').each(function() {
            var checkedBox = $(this).val();
            $('#jointGift').fadeIn();
        });
        $('input.Field4708173').change(function() {
            var checkedBox = $(this).val();
            $('#jointGift').toggle('slow');
        });
        //tooltip
        $('a.tooltip-link').hover(
            function() {
                $('.tooltip').hide();
                $(this).next('.tooltip').show();
            }
            //,function() {$(this).next('.tooltip').hide();}
        );
        $('a.tooltip-link').click(function() {
            return false;
        });
        $('.tooltip-close').click(function() {
            $(this).parent().hide()
        });
    });


    $(document).ready(function() {
        $("input[name$='showOptions']").click(function() {
            if ($(this).is(':checked')) {
                $(".showPurpose").slideDown();
                //console.log('show');
            } else {
                $(".showPurpose").slideUp();
            }
        });
    });

    function setCheck(test) {
        console.log(test.value);
        console.log(test.name);
        bid = test.name.substring(21, 27);
        if (test.value != '') {
            $('input:checkbox[value=' + bid + ']').attr("checked", true);
            //console.log(chks);
        } else {
            $('input:checkbox[value=' + bid + ']').attr("checked", false);
        }
    }


    function CheckDesignation(thisform) {
    		var descheckbox, destext;
    		var firsttext = null;
    		var percent = 0;
    		descheckbox = thisform.BeneficiaryID;
    		if (descheckbox.length!=null && descheckbox.length>1){
    			for (var i=0; i<descheckbox.length; i++){
    				if (descheckbox[i].checked == true){
    					destext = 'BeneficiaryPercentage' + descheckbox[i].value;
    					if (checkField(document.getElementById(destext),"e","") != ""){
    						alert("You must enter a % amount for each designation checked");
    						return false;
    					}
    					percent = percent + Math.round(document.getElementById(destext).value);
    					if (firsttext == null) firsttext = document.getElementById(destext);
    				}
    			}
    		}
    		else{
    			if (descheckbox.checked == true){
    				destext = 'BeneficiaryPercentage' + descheckbox.value;
    				if (checkField(thisform.elements[destext],"e","") != ""){
    					alert("You must enter a % amount for each designation checked");
    					return false;
    				}
    				percent = percent + Math.round(document.getElementById(destext).value);
    				if (firsttext == null) firsttext = document.getElementById(destext);
    			}
    		}
    		if(percent > 100){
    			focus_field = firsttext;
    			alert("The percentages can not exceed 100%");
    			return false;
    		}
    		return true;
    	}


      function getPaymentType() {
      	var thisform
      	thisform = document.SUPPORTER279525;
      	for(i=0; i < thisform.elements['paymentTypeSelector'].options.length; i++) {
      		if(thisform.elements['paymentTypeSelector'].options[i].selected == true)
      			return thisform.elements['paymentTypeSelector'].options[i].value;
      	}
      }
      function ChangePay2() {
      	ChangePay(getPaymentType());
      }
      function ChangePay3() {
      	var paymentStatus
      	var thisform
      	thisform = document.SUPPORTER279525;
      	for(i=0; i < thisform.elements['PaymentStatusSelector'].options.length; i++) {
      		if(thisform.elements['PaymentStatusSelector'].options[i].selected == true)
      			paymentStatus = thisform.elements['PaymentStatusSelector'].options[i].value;
      	}
      	thisform.PaymentStatus.value = paymentStatus
      	if (paymentStatus == "H") {
      		thisform.PaymentType.value = "BILLME"
      	} else {
      		thisform.PaymentType.value = "CREDIT"
      	}
      	thisform.Reload.value='Y';
      	thisform.action="Donor.asp?ievent=279525&en=9iJHLUNzF8JQL4MCL7LNJ0NMJkISJbMOLfKQKaMUIwG#Payment";
      	thisform.submit();
      }


      function ChangePay(type) {
        thisform = document.SUPPORTER279525;
        thisform.Reload.value='Y';
        thisform.PaymentType.value=type;
        thisform.action="Donor.asp?ievent=279525&en=9iJHLUNzF8JQL4MCL7LNJ0NMJkISJbMOLfKQKaMUIwG#Payment";
        thisform.submit();
        return false;
      }


      function ChangeCreditCardType(thisform, pointer) {
    var typeval;
    for (var i=0; i<pointer.length; i++)
      if (pointer[i].selected) typeval = pointer[i].value;
  var r = false;
  if (thisform.CardStart != null ||thisform.IssueNumber != null) {
      if (typeval != "Maestro" && typeval != "Solo" && typeval != "Switch/UK Maestro") r = true;
  }
  else {
      if (typeval == "Maestro" || typeval == "Solo" || typeval == "Switch/UK Maestro") r = true;
  }
  if (r) {
      if(thisform.Reload != null) thisform.Reload.value='Y';
      thisform.action="Donor.asp?ievent=279525&en=9iJHLUNzF8JQL4MCL7LNJ0NMJkISJbMOLfKQKaMUIwG&js=true#Payment";
      thisform.submit();
  }
}

function CheckAll(thisform, IdList){
		var arrIdList = IdList.split(",");
		var allchecked = true;
		for (var i = 0; i < thisform.elements.length; i++)
			if (thisform.elements[i].type == "checkbox" && thisform.elements[i].name == "SegmentID")
				for (var j = 0; j < arrIdList.length; j++)
					if (thisform.elements[i].value == arrIdList[j] && thisform.elements[i].checked == false)
						allchecked = false;
		for (var i = 0; i < thisform.elements.length; i++)
			if (thisform.elements[i].type == "checkbox" && thisform.elements[i].name == "SegmentID")
				for (var j = 0; j < arrIdList.length; j++)
					if (thisform.elements[i].value == arrIdList[j])
						if (allchecked == false)
							thisform.elements[i].checked = true;
						else
							thisform.elements[i].checked = false;
	}
