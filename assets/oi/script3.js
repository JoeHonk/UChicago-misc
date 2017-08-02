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

function SetAmount(thisform, amt) {
            if (recurring_type == 'Y') {

                thisform.TotalAmount.value = amt;
                CountTerm(thisform.RecurringAmount, thisform.NumberOfPayments, thisform.TotalAmount);

            } else thisform.Amount.value = amt;
        }

        function CheckAmtLevel(thisform, pointer) {
            var i, j;
            CheckAmount(pointer);

            return false;
        }



                function CheckRecurring(thisform, thetype) {
                    recurring_type = thetype;
                    if (recurring_type == 'Y') {

                        thisform.TotalAmount.value = thisform.Amount.value;
                        CountTerm(thisform.RecurringAmount, thisform.NumberOfPayments, thisform.TotalAmount);

                        thisform.Amount.disabled = true;
                        if (thisform.RecurringAmount != null) thisform.RecurringAmount.disabled = false;
                        if (thisform.BillingScheduleID != null) thisform.BillingScheduleID.disabled = false;
                        if (thisform.NumberOfPayments != null) thisform.NumberOfPayments.disabled = false;
                        if (thisform.BillingScheduleID.value == "0") {
                            if (thisform.Amount1 != null) thisform.Amount1.disabled = false;

                        }
                    } else {

                        thisform.Amount.value = thisform.TotalAmount.value;

                        thisform.Amount.disabled = false;
                        if (thisform.RecurringAmount != null) thisform.RecurringAmount.disabled = true;
                        if (thisform.BillingScheduleID != null) thisform.BillingScheduleID.disabled = true;
                        if (thisform.NumberOfPayments != null) thisform.NumberOfPayments.disabled = true;
                    }
                }

                function RefreshCaptcha() {
                    document.getElementById('imgCaptcha').src = 'pagelet/captcha/CaptchaRenderer.aspx?s=&r=' + Math.random() + '';
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




      function ChangeShipAddress(thisform) {
        if (thisform.CheckShipAddress.value == "on") {
          if (thisform.first_name != null) thisform.Field6133811.value = thisform.first_name.value;
          if (thisform.last_name != null) thisform.Field6133812.value = thisform.last_name.value;
            if (thisform.address_line_1 != null) thisform.Field6128808.value = thisform.address_line_1.value;
            if (thisform.address_line_2 != null) thisform.Field6128809.value = thisform.address_line_2.value;
            if (thisform.city != null) thisform.Field6128810.value = thisform.city.value;
            if (thisform.province != null) thisform.Field6128813.value = thisform.province.value;
            if (thisform.zip != null) thisform.Field6128812.value = thisform.zip.value;
            if (thisform.state != null) setSelectValue(thisform.Field6128811, thisform.state.value);
            if (thisform.country != null) setSelectValue(thisform.Field6128814, thisform.country.value);
            thisform.CheckShipAddress.value = "off";
        } else {
            thisform.Field6128808.value = "";
            thisform.Field6128809.value = "";
            thisform.Field6128810.value = "";
            thisform.Field6128813.value = "";
            thisform.Field6128812.value = "";
            setSelectValue(thisform.Field6128811, "");
            setSelectValue(thisform.Field6128814, "");
            thisform.CheckShipAddress.value = "on";
        }
        return true;
    }
