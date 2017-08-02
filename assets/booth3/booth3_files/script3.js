$(document).ready(function() {


  $("#recurringGift").hide();
  $("#yearlyGift").hide();
  $("#oneTimeGift").show();

  $(document).ready(function() {
    $('#RecurringAmount').keyup(calculate);
    $('#NumberOfPayments2').change(calculate);
  });

  function calculate(e) {
    $('#displaytotal').val($('#RecurringAmount').val() * $('#NumberOfPayments2').val());
    $("#displaytotal").val(function(i, v) {
      return parseFloat(v).toFixed(2);
    });
  }



  $('#RecurringOptionN').click(function() {
        $("#recurringGift").hide();
        $("#yearlyGift").hide();
        //$("#oneTimeGift").show();
        $("#oneTimeGift").fadeIn();
      });

  $('#RecurringOptionYY').click(function() {
        $("#recurringGift").hide();
        $("#yearlyGift").fadeIn();
        $("#oneTimeGift").hide();
    });

  $('#RecurringOptionYM').click(function() {
        $("#recurringGift").fadeIn();
        $("#yearlyGift").hide();
        $("#oneTimeGift").hide();
      });






      $(document).click(function() {
          console.log('#######################');
          $('#FormDonation input, #FormDonation select, FormDonation').each(function(index) {
              var input = $(this);
              if (input.val() != '47900') {
                  console.log('Type: ' + input.attr('type') + ' Name: ' + input.attr('name') + ' Value: ' + input.val());
              }
          });
          console.log('RecurringAmount' + $('input[name=RecurringAmount]').val());

      });




  });
