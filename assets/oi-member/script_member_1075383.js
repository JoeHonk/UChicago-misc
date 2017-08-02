function ChangeShipAddress(thisform) {
    if (thisform.CheckShipAddress.value == "on") {
        if (thisform.first_name !== null) thisform.Field6133811.value = thisform.first_name.value;
        if (thisform.last_name !== null) thisform.Field6133812.value = thisform.last_name.value;
        if (thisform.address_line_1 !== null) thisform.Field6128808.value = thisform.address_line_1.value;
        if (thisform.address_line_2 !== null) thisform.Field6128809.value = thisform.address_line_2.value;
        if (thisform.city !== null) thisform.Field6128810.value = thisform.city.value;
        if (thisform.province !== null) thisform.Field6128813.value = thisform.province.value;
        if (thisform.zip !== null) thisform.Field6128812.value = thisform.zip.value;
        if (thisform.state !== null) setSelectValue(thisform.Field6128811, thisform.state.value);
        if (thisform.country !== null) setSelectValue(thisform.Field6128814, thisform.country.value);
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

function SetAmount(thisform, amt) {
//console.log('SetAmount');
if (recurring_type == 'Y') {
thisform.RecurringAmount.value = amt;
$('input[name=RecurringAmount]').val(amt);
$('input[name=Amount]').val(amt);
} else
thisform.Amount.value = amt;
$('input[name=RecurringAmount]').val(amt);
$('input[name=Amount]').val(amt);
}


$(document).ready(function() {
    thisform = document.SUPPORTER1075383;
    $(document).on('submit change', function() {
        if ($('#AutoRenew').is(':checked')) {
            //console.log('checked');
            //recurring
            $('#RecurringOptionY').prop('checked', true);
            $('#RecurringOptionN').prop('checked', false);
            CheckRecurring(thisform, 'Y');
            //enable NumberOfPayments=1 BillingScheduleID=1006
            $('input[name=NumberOfPayments]').prop("disabled", false).val(59);
            $('input[name=BillingScheduleID]').prop("disabled", false).val(1401); //Infinite yearly BillingScheduleID
            if (($('input[name=PledgeLevelID]:checked').val() == 838803)) {
                //monthly infinite
                CheckRecurring(thisform, 'Y');
                $('input[name=BillingScheduleID]').prop("disabled", false).val(1201); //Infinite monthly BillingScheduleID
                $('input[name=NumberOfPayments]').prop("disabled", false).val(59);
            }
        } else {
            //console.log('notchecked');
            //one-time gift (12 months in case of Young Professional monthly non-recurring)
            $('#RecurringOptionY').prop('checked', false);
            $('#RecurringOptionN').prop('checked', true);
            CheckRecurring(thisform, 'N');
            //disable NumberOfPayments BillingScheduleID
            $('input[name=NumberOfPayments]').prop("disabled", true);
            $('input[name=BillingScheduleID]').prop("disabled", true);
            if (($('input[name=PledgeLevelID]:checked').val() == 838803)) {
                //monthly limited by NumberOfPayments
                CheckRecurring(thisform, 'Y');
                $('#RecurringOptionY').prop('checked', true);
                $('#RecurringOptionN').prop('checked', false);
                $('input[name=NumberOfPayments]').prop("disabled", false).val(11); //11+1=12
                $('input[name=BillingScheduleID]').prop("disabled", false).val(1201); //Limited BillingScheduleID
            }
        }
        // Patron 838799
        // Director's Circle 838800
        if (($('input[name=PledgeLevelID]:checked').val() == 838799) || ($('input[name=PledgeLevelID]:checked').val() == 838800)) {
            //James Henry Breasted Society
            $('input[name=BeneficiaryID]').val(378093);
        } else {
            //OI Membership
            $('input[name=BeneficiaryID]').val(378103);
        }
        console.log('a: ' + $('input[name=Amount]').val());
        console.log('ra: ' + $('input[name=RecurringAmount]').val());
        console.log($('input[name=RecurringOption]:checked').val());
        console.log($('input[name=PledgeLevelID]:checked').val());
        console.log($('input[name=NumberOfPayments]').val());
        console.log($('#BillingScheduleID').val());
        console.log($('#BeneficiaryID').val());
    });
});
$(document).click(function() {
    console.log('#######################');
    $('#FormDonation input, #FormDonation select, FormDonation').each(function(index) {
        var input = $(this);
        if (input.val() != '47889') {
            console.log('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());
        }
    });
});
