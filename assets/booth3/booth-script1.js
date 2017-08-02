$(document).ready(function() {
    //$('#Recurringoption1').attr('checked', true);
    $('#RecurringOption option').eq(1).prop('selected', true);
    $("#RecurringOption1").prop("checked", true);
    $("#RecurringOptionM").prop("checked", false);
    $("#RecurringOptionP").prop("checked", false);
    $('input[name=RecurringOption]').val('N');
    $("input[name=BillingScheduleID]").prop('disabled', true);
    $("#BillingScheduleID").prop('disabled', true);
    document.getElementById('BillingScheduleID').value = ('');
    document.getElementById('NumberOfPayments').value = ('');
    document.getElementById('Amount').value = ('');
    document.getElementById('RecurringAmount').value = ('');
    //document.getElementById('RecurringAmountM').value = ('');
    document.getElementById('TotalAmount').value = ('');
    $("#RecurringAmount").prop('disabled', false);
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
    $('input[name=RecurringAmount]').bind('blur change input keyup', function(e) {
        //  console.log('RecurringAmountM: ' + $('input[name=RecurringAmountM]:checked').val());
        //  $('input[name=RecurringAmount]').val($('input[name=RecurringAmountM]:checked').val());
        $('input[name=Amount]').val($('input[name=RecurringAmount]').val());
        getvalues();
    });
    $('input[name=RecurringOption]').bind('change', function(e) {
        $('input[name=Amount]').val('');
        if ($('#RecurringOptionP').is(':checked')) {
            document.getElementById('NumberOfPayments').value = (4);
            console.log('#RecurringOptionP');
        }
    });
    //var TableInstallmentGift = $('#TableInstallmentGift').html();
    //var BillingScheduleIDdiv = $('#BillingScheduleIDdiv').html();
    $('#RecurringOption1').click(function() {
        $("#BillingScheduleID").prop('disabled', true);
        document.getElementById('BillingScheduleID').value = ('');
        $("#NumberOfPayments").prop('disabled', true);

        document.getElementById('NumberOfPayments').value = ('');
        $("#largegift").hide();
        $('input[name=RecurringOption]').val('N');
    });
    $('#RecurringOptionM').click(function() {

$("#NumberOfPayments").append('<option value="59">60</option>');
$("#NumberOfPayments").prop('disabled', false);
        document.getElementById('inputother').value = ('');
        $("#RecurringAmount").prop('disabled', false);
        //$('input[name=RecurringAmountM]').val('');
        $('input:radio[name=RecurringAmountM]').each(function() {
            $(this).prop('checked', false);
        });
        $('input[name=RecurringAmount]').val('');
        $("#BillingScheduleID").prop('disabled', false);

        $("#largegift").hide();
        //$("#pledgecheck").show();
        //$('#RecurringAmount').attr('readonly', true);
        document.getElementById('BillingScheduleID').value = ('1201');
        $('input[name=RecurringOption]').val('Y');
        document.getElementById('NumberOfPayments').value = (59);
        console.log('NoP 59');


        $('input[name=Amount]').val($('input[name=RecurringAmount]').val());
    });
    $('#RecurringOptionP').click(function() {
      $("#NumberOfPayments option[value='59']").remove();
$("#NumberOfPayments").prop('disabled', false);
        $("#RecurringAmount").prop('disabled', false);
        document.getElementById('TotalAmount').value = ('');
                $('input[name=RecurringAmount]').val('');
        $("#BillingScheduleID").prop('disabled', false);
        document.getElementById('BillingScheduleID').value = ('1401');
        document.getElementById('NumberOfPayments').value = (4);

        $("#largegift").show();
        $('input[name=RecurringOption]').val('Y');
        $('input[name=Amount]').val($('input[name=RecurringAmount]').val());
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

function getvalues() {
    console.log('RecurringOption: ' + $("[name=RecurringOption]").val());
    console.log('NumberOfPayments: ' + $("[name=NumberOfPayments]").val());
    console.log('BillingScheduleID: ' + $("[name=BillingScheduleID]").val());
    console.log('Amount: ' + $("[name=Amount]").val());
    console.log('TotalAmount: ' + $("[name=TotalAmount]").val());
    console.log('RecurringAmount: ' + RecurringAmount.value);
}
$(document).ready(function() {
    //$('#Recurringoption1').attr('checked', true);
    $('#RecurringOption option').eq(1).prop('selected', true);
    $("#RecurringOption1").prop("checked", true);
    $("#RecurringOptionM").prop("checked", false);
    $("#RecurringOptionP").prop("checked", false);
    $('input[name=RecurringOption]').val('N');
    $("#NumberOfPayments").prop('disabled', true);

    $("input[name=BillingScheduleID]").prop('disabled', true);
    $("#BillingScheduleID").prop('disabled', true);
    document.getElementById('BillingScheduleID').value = ('');
    document.getElementById('NumberOfPayments').value = ('');
    document.getElementById('Amount').value = ('');
    document.getElementById('RecurringAmount').value = ('');
    //document.getElementById('RecurringAmountM').value = ('');
    document.getElementById('TotalAmount').value = ('');
    $("#RecurringAmount").prop('disabled', false);
    $("#splitpay").click(function() {
        $("#showhide").toggle("slow", function() {
            // Animation complete.
        });
    });
    setTimeout(function() {
        document.getElementById('Amount').value = ('');
    }, 100);
});
