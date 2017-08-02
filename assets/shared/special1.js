//Field4708184_tmp
$(document).click(function() {
    $('#Field4708184').val($('#Field6143075').val() + ' | ' + $('#Field4708184_tmp').val());
    //$('#Field4708184').val($('#gift_note').val() +  $('#Field6143075').val() + ' | ' + $('#Field4708184_tmp').val());
    console.log('#######################');
    $('#FormDonation input, #FormDonation select, FormDonation').each(function(index) {
        var input = $(this);
        if (input.val() != '47889') {
            console.log('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());
        }
    });
});
$('form').submit(function() {
    $('#Field4708184').val($('#Field6143075').val() + ' | ' + $('#Field4708184_tmp').val());
});
