$(document).ready(function() {

  console.log('test');

	$("#recurringGift").hide();
	$("#yearlyGift").hide();


  $(document).ready(function() {
    $('#RecurringAmount').keyup(calculate);
    $('#NumberOfPayments2').change(calculate);
  });

  function calculate(e) {
    $('#displaytotal').val($('#RecurringAmount').val() * $('#NumberOfPayments2').val());


		     $("#displaytotal").val(function(i, v) { return parseFloat(v).toFixed(2); });

  }



  //document.getElementById('recurringGift').style.display = 'none';
  //document.getElementById('yearlyGift').style.display = 'none';

  $(document).click(function() {
    //hide certain fields that require interaction prior to display
    //  $(".startHidden").hide();
    //console.log("test2");




    //show the related fields for the currently selected giving option
    if ($('input[name="RecurringOption"]:checked').val() == 'oneTimeGift') {

			$("#recurringGift").hide();
      $("#yearlyGift").hide();
			//$("#oneTimeGift").animate({opacity: show}, 1000);
			//$("#oneTimeGift").show();
			//$("#oneTimeGift").fadeIn(1000);
			//$("#oneTimeGift").css({ opacity: hide });
//$("#oneTimeGift").show();
$("#oneTimeGift").show();
//$("#oneTimeGift").fadeIn().css("display","inline-block");
//$('#oneTimeGift').css('display', 'block').hide().fadeIn();

    }


    if ($('input[name="RecurringOption"]:checked').val() == 'yearlyGift') {
			$("#recurringGift").hide();
			$("#yearlyGift").show();
			$("#oneTimeGift").hide();

    }

    if ($('input[name="RecurringOption"]:checked').val() == 'recurringGift') {

			$("#recurringGift").show();
			$("#yearlyGift").hide();
			$("#oneTimeGift").hide();




    }


  });

});
