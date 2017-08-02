$(document).ready(function() {
    $("#splitpay").click(function() {
        $("#showhide").toggle("slow", function() {
            // Animation complete.
        });
    });
});

/*
function calculate(e) {
    var numpay = $('#NumberOfPayments').val();
    numpay++;
    $('#RecurringAmount').val($('#TotalAmount').val() / numpay);
    //console.log($('#RecurringAmount').val());
    $('#RecurringAmount').val(parseFloat($('#RecurringAmount').val()).toFixed(2));
    //console.log($('#RecurringAmount').val());
    //console.log($('#TotalAmount').val());
    //console.log($('#NumberOfPayments').val());
    //$("#largegift").show();
    //$("#pledgecheck").show();
}
*/
function SetRecurring(val) {
    $('input[name=RecurringOption]').val(val);
    if (val == 'Y') $('input[name=newRecurringAmount]').closest('td').find('input[type=radio]').attr("checked", "checked");
    if (val == 'N') $('input[name=newAmount]').closest('td').find('input[type=radio]').attr("checked", "checked");
    recurring_type = val;
    if (val == 'N') $('input[name=BillingScheduleID]').val('');
    if (val == 'Y') $('input[name=BillingScheduleID]').val('1201');
}
$(document).ready(function() {
    $('input[name=RecurringAmountM]').bind('blur change', function(e) {
        console.log('RecurringAmountM: ' + $('input[name=RecurringAmountM]:checked').val());
        $('input[name=RecurringAmount]').val($('input[name=RecurringAmountM]:checked').val());
        $('input[name=Amount]').val($('input[name=RecurringAmountM]:checked').val());
    });

    $('input[name=RecurringAmount]').bind('blur change', function(e) {
      //  console.log('RecurringAmountM: ' + $('input[name=RecurringAmountM]:checked').val());
      //  $('input[name=RecurringAmount]').val($('input[name=RecurringAmountM]:checked').val());
        $('input[name=Amount]').val($('input[name=RecurringAmount]').val());
    });

    $('input[name=RecurringOption]').bind('change', function(e) {
        $('input[name=Amount]').val('');
        if ($('#RecurringOptionP').is(':checked')) {
            document.getElementById('NumberOfPayments').value = (4);
        }
    });
    //var TableInstallmentGift = $('#TableInstallmentGift').html();
    //var BillingScheduleIDdiv = $('#BillingScheduleIDdiv').html();
    $('#RecurringOption1').click(function() {
        document.getElementById('BillingScheduleID').value = ('');
        $("#largegift").hide();
        $('input[name=RecurringOption]').val('N');
    });
    $('#RecurringOptionM').click(function() {
        //$('#TableInstallmentGift').html(TableInstallmentGift);
        //$('#BillingScheduleIDdiv').html(BillingScheduleIDdiv);
        //document.getElementById('RecurringAmountLabel').innerHTML = 'Monthly Amount';
        //document.getElementById('TotalAmountLabel').innerHTML = 'Total gift Amount';
        //document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Installments';
        //document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
        //document.getElementById('NumberOfPayments').value = ('1');
        //document.getElementById('RecurringAmount').value = ('0');
        //document.getElementById('TotalAmount').value = ('0');
        //document.getElementById('Amount').value = ('0');
        //$("#BillingScheduleIDdiv").hide();
        //$("#NumberOfPaymentsdiv").show();
        //$("#TotalAmountdiv").show();
        $("#largegift").hide();
        //$("#pledgecheck").show();
        //$('#RecurringAmount').attr('readonly', true);
        document.getElementById('BillingScheduleID').value = ('1201');
        $('input[name=RecurringOption]').val('Y');
        document.getElementById('NumberOfPayments').value = (59);
    });
    $('#RecurringOptionP').click(function() {
        //setTimeout(function(){
        //$('#BillingScheduleIDdiv').html(TableInstallmentGift);
        //$('#TableInstallmentGift').html(BillingScheduleIDdiv);
        //document.getElementById('RecurringAmountLabel').innerHTML = 'Recurring Gift Amount';
        //document.getElementById('TotalAmountLabel').innerHTML = 'New Total Gift Amount';
        //document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Payments';
        //document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
        //document.getElementById('NumberOfPayments').value = (59);
        //$("#NumberOfPayments").val('59');
        //document.getElementById('noofpayments').style.display = 'none';
        //document.getElementById('totalamountfield').style.display = 'none';
        //document.getElementById('RecurringAmount').value = ('');
        //document.getElementById('TotalAmount').value = ('');
        //document.getElementById('TotalAmount').value = ('0');
        //document.getElementById('Amount').value = ('0');
        //$('#RecurringAmount').attr('readonly', false);
        //$("#RecurringAmount").val('0');
        //$("input[name='Field4708172']").prop('checked', false);
        //$("#BillingScheduleIDdiv").show();
        //$("#NumberOfPaymentsdiv").hide();
        //$("#TotalAmountdiv").hide();
        //document.getElementById('NumberOfPayments').value = (1);
        $("#largegift").show();
        $('input[name=RecurringOption]').val('Y');
        ///$("#pledgecheck").hide();
        //}, 1);
    });
});
$(document).click(function() {
    console.log('#######################');
    $('#FormDonation input, #FormDonation select, FormDonation').each(function(index) {
        var input = $(this);
        if (input.val() != '47889') {
            //console.log('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());
        }
    });
});
