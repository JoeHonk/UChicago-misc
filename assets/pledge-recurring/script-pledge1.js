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

    $(document).click(function() {
        calculate();
    });


    $("form").submit(function() {
        generateSig();
    });

});


$("form :input").change(function() {
    generateSig();
    calculate();
});



function calculate(e) {
    var numpay = $('#NumberOfPayments').val();
    numpay++;
    //console.log('calculate');
    $('#RecurringAmount').val($('#TotalAmount').val() / numpay);
    //console.log($('#RecurringAmount').val());
    $('#RecurringAmount').val(parseFloat($('#RecurringAmount').val()).toFixed(2));
    //console.log($('#RecurringAmount').val());
    //console.log($('#TotalAmount').val());
    //console.log($('#NumberOfPayments').val());

    $('#RecurringAmountDisplay').val($('#RecurringAmount').val());
    $('#TotalAmountDisplay').val(parseFloat($('#TotalAmount').val()).toFixed(2));
    $('#NumberOfPaymentsDisplay').val($('#NumberOfPayments').val());
    //$('#NumberOfPaymentsDisplay').val($('#NumberOfPayments option:selected').html());
generateSig();
}

function generateSig() {
    $('input[name=Field6140139]').val('I am pleased to formalize my commitment to give $' + $('#TotalAmountDisplay').val() + '. I acknowledge that I am making a pledge for which payments of $' + $('#RecurringAmountDisplay').val() + ' will be automatically charged to my credit card starting today and recurring on this date for the next ' + $('#NumberOfPaymentsDisplay').val() + ' year(s). My electronic signature verifies my commitment to the University. Initials entered: ' + $('#initials').val());
    console.log('generateSig');
}


function CheckAmount(pointer) {
    var returnValue, amountValue;
    for (i = 0; i <= pointer.value.length - 1; i++);
    pointer.value = pointer.value.replace(",", "");
    amountValue = jsDV_strTrim(pointer.value);
    if (amountValue != "") {
        returnValue = jsDV_isValidMoney(amountValue);
        if (returnValue == "-1") {
            alert("Please enter a valid amount");
            pointer.value = "";
            pointer.focus();
            return false;
        } else pointer.value = returnValue;
        //console.log('total:');
        //console.log((amountValue * ($('#NumberOfPayments option:selected').html())));
        //console.log((amountValue * ($('#NumberOfPayments').val() +1)));
        if ((amountValue * ($('#NumberOfPayments option:selected').html())) < 500) {
            alert("Please enter a minimum donation amount of $500");
            pointer.value = "";
            //pointer.focus();
            return false;
        }
        if (amountValue > 100000) {
            alert("Please enter a maximum donation amount of $100,000");
            pointer.value = "";
            pointer.focus();
            return false;
        }
    }
}


// <input type="hidden" value="" name="Field6140139" id="PledgeAgreement"> PledgeAgreementText



/*

$(document).click(function() {
    calculate();
    console.log('clicked');
    $("#TotalAmount").blur(function() {
        calculate();
        console.log('total');
    });
});


function checkField(ptr, msg, warn) {
    ptr.value = jsDV_strTrim(ptr.value);
    if (ptr.value == "") {
        if (warn != "") warn = warn + "\n- ";
        warn = warn + msg;
        if (focus_field == "") focus_field = ptr;
        console.log(focus_field);
    }
    return warn;
}
*/
