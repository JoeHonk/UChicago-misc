//Field4708184_tmp
$(document).click(function() {
    if ($("#Field6142197").is(':checked')) {
        opt = 'OPTOUT';
    } else {
        opt = 'OPTIN';
    }
    $('#Field4708184').val(opt + ' | ' + $('#Field4708184_tmp').val());
    console.log('#######################');
    console.log($('#Field4708184').val());
    $('#FormDonation input, #FormDonation select, FormDonation').each(function(index) {
        var input = $(this);
        if (input.val() != '47889') {
            console.log('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());
        }
    });
});
$('form').submit(function() {
  if ($("#Field6142197").is(':checked')) {
      opt = 'OPTOUT';
  } else {
      opt = 'OPTIN';
  }
    $('#Field4708184').val(opt + ' | ' + $('#Field4708184_tmp').val());
});
//#Field6142197
