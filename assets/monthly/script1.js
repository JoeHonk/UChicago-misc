$(document).ready(function() {
    $('.tooltip').tooltipster({
        trigger: 'hover',
        maxWidth: '330'
    });
});
$(document).ready(function() {
    $("#splitpay").click(function() {
        $("#showhide").toggle("slow", function() {
            // Animation complete.
        });
    });
});
$(document).ready(function() {
    $('#TotalAmount').keyup(calculate);
    $('#NumberOfPayments').click(calculate);
    $('#NumberOfPayments').change(calculate);
});

function calculate(e) {
    var numpay = $('#NumberOfPayments').val();
    numpay++;
    $('#RecurringAmount').val($('#TotalAmount').val() / numpay);
    //console.log($('#RecurringAmount').val());
    $('#RecurringAmount').val(parseFloat($('#RecurringAmount').val()).toFixed(2));
    //console.log($('#RecurringAmount').val());
    //console.log($('#TotalAmount').val());
    //console.log($('#NumberOfPayments').val());
    $("#largegift").show();
    $("#pledgecheck").show();
}
$(document).ready(function() {
    var TableInstallmentGift = $('#TableInstallmentGift').html();
    var BillingScheduleIDdiv = $('#BillingScheduleIDdiv').html();
    $('#RecurringOptionIN').click(function() {
        $('#TableInstallmentGift').html(TableInstallmentGift);
        $('#BillingScheduleIDdiv').html(BillingScheduleIDdiv);
        document.getElementById('RecurringAmountLabel').innerHTML = 'Monthly Amount';
        document.getElementById('TotalAmountLabel').innerHTML = 'Total gift Amount';
        document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Installments';
        document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
        document.getElementById('NumberOfPayments').value = ('1');
        //document.getElementById('RecurringAmount').value = ('0');
        //document.getElementById('TotalAmount').value = ('0');
        //document.getElementById('Amount').value = ('0');
        $("#BillingScheduleIDdiv").hide();
        $("#NumberOfPaymentsdiv").show();
        $("#TotalAmountdiv").show();
        $("#largegift").show();
        $("#pledgecheck").show();
        $('#RecurringAmount').attr('readonly', true);
        document.getElementById('BillingScheduleID').value = ('1201');
    });

    $('#RecurringOptionN').click(function() {
        //$('#TableInstallmentGift').html(TableInstallmentGift);
        //$('#BillingScheduleIDdiv').html(BillingScheduleIDdiv);
        document.getElementById('RecurringAmountLabel').innerHTML = 'Monthly Amount';
        document.getElementById('TotalAmountLabel').innerHTML = 'Total gift Amount';
        document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Installments';
        document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
        document.getElementById('NumberOfPayments').value = ('1');
        //document.getElementById('RecurringAmount').value = ('0');
        //document.getElementById('TotalAmount').value = ('0');
        //document.getElementById('Amount').value = ('0');
        //$("#BillingScheduleIDdiv").hide();
        //$("#NumberOfPaymentsdiv").show();
        //$("#TotalAmountdiv").show();
        $("#largegift").show();
        $("#pledgecheck").show();
        //$('#RecurringAmount').attr('readonly', true);
        //document.getElementById('BillingScheduleID').value = ('1201');
    });
    $('#RecurringOption').click(function() {
        if ($('#RecurringOptionUP').is(':checked')) {
            $("#pledgecheck").hide();
        }
        if ($('#RecurringOptionN').is(':checked')) {
            $("#pledgecheck").show();
            console.log('pledgecheck');
        }
        if ($('#RecurringOptionIN').is(':checked')) {
            $("#pledgecheck").show();
        }
    });
    $('#RecurringOptionUp').change(function() {
        setTimeout(function() {
            $('#BillingScheduleIDdiv').html(TableInstallmentGift);
            $('#TableInstallmentGift').html(BillingScheduleIDdiv);
            document.getElementById('RecurringAmountLabel').innerHTML = 'Recurring Gift Amount';
            //document.getElementById('TotalAmountLabel').innerHTML = 'New Total Gift Amount';
            document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Payments';
            document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
            //document.getElementById('NumberOfPayments').value = (59);
            $("#NumberOfPayments").val('59');
            //document.getElementById('noofpayments').style.display = 'none';
            //document.getElementById('totalamountfield').style.display = 'none';
            document.getElementById('RecurringAmount').value = ('');
            document.getElementById('TotalAmount').value = ('');
            //document.getElementById('TotalAmount').value = ('0');
            //document.getElementById('Amount').value = ('0');
            $('#RecurringAmount').attr('readonly', false);
            //$("#RecurringAmount").val('0');
            $("input[name='Field4708172']").prop('checked', false);
            $("#BillingScheduleIDdiv").show();
            $("#NumberOfPaymentsdiv").hide();
            $("#TotalAmountdiv").hide();
            $("#largegift").hide();
            $("#pledgecheck").hide();
        }, 1);
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
/**
 *
 */
