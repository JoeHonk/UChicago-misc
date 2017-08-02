setTimeout(function() {
    var a = document.createElement("script");
    var b = document.getElementsByTagName("script")[0];
    a.src = document.location.protocol + "//dnn506yrbagrg.cloudfront.net/pages/scripts/0017/9416.js?" + Math.floor(new Date().getTime() / 3600000);
    a.async = true;
    a.type = "text/javascript";
    b.parentNode.insertBefore(a, b)
}, 1);


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
        CheckRecurring($('form[name=SUPPORTER287377]')[0], $(this).val());
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



//Kintera specific? - AFTER - This transaction will count as the first payment toward your total gift amount.
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


//Kintera specific? - AFTER - <input type="hidden" name="lock_email_address" value="">

function ProfileFieldLock(thisform) {
    if (thisform.FieldLock != null)
        if (thisform.FieldLock.checked == true) {
            if (thisform.first_name != null) thisform.first_name.disabled = false;
            if (thisform.last_name != null) thisform.last_name.disabled = false;
            if (thisform.email_address != null) thisform.email_address.disabled = false;
        } else {
            if (thisform.first_name != null) {
                thisform.first_name.value = thisform.lock_first_name.value;
                thisform.first_name.disabled = true;
            }
            if (thisform.last_name != null) {
                thisform.last_name.value = thisform.lock_last_name.value;
                thisform.last_name.disabled = true;
            }
            if (thisform.email_address != null) {
                thisform.email_address.value = thisform.lock_email_address.value;
                thisform.email_address.disabled = true;
            }
        }
    return true;
}


// AFTER - <h3>Payment Information</h3>

function getPaymentType() {
    var thisform
    thisform = document.SUPPORTER287377;
    for (i = 0; i < thisform.elements['paymentTypeSelector'].options.length; i++) {
        if (thisform.elements['paymentTypeSelector'].options[i].selected == true)
            return thisform.elements['paymentTypeSelector'].options[i].value;
    }
}

function ChangePay2() {
    ChangePay(getPaymentType());
}

function ChangePay3() {
    var paymentStatus
    var thisform
    thisform = document.SUPPORTER287377;
    for (i = 0; i < thisform.elements['PaymentStatusSelector'].options.length; i++) {
        if (thisform.elements['PaymentStatusSelector'].options[i].selected == true)
            paymentStatus = thisform.elements['PaymentStatusSelector'].options[i].value;
    }
    thisform.PaymentStatus.value = paymentStatus
    if (paymentStatus == "H") {
        thisform.PaymentType.value = "BILLME"
    } else {
        thisform.PaymentType.value = "CREDIT"
    }
    thisform.Reload.value = 'Y';
    thisform.action = "https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**#Payment";
    thisform.submit();
}


// <label for="CardType" class="control-label">Credit Card Type<b>*</b>


function ChangeCreditCardType(thisform, pointer) {
    var typeval;
    for (var i = 0; i < pointer.length; i++)
        if (pointer[i].selected) typeval = pointer[i].value;
    var r = false;
    if (thisform.CardStart != null || thisform.IssueNumber != null) {
        if (typeval != "Maestro" && typeval != "Solo" && typeval != "Switch/UK Maestro") r = true;
    } else {
        if (typeval == "Maestro" || typeval == "Solo" || typeval == "Switch/UK Maestro") r = true;
    }
    if (r) {
        if (thisform.Reload != null) thisform.Reload.value = 'Y';
        thisform.action = "https://www.kintera.org/site/apps/ka/sd/donorcustom.asp?c=**cindex**&b=**bindex**&js=true#Payment";
        thisform.submit();
    }
}
