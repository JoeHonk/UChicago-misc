$(document).ready(function() {
    $('#RecurringOptionY').click(function() {
      if(document.getElementById('BillingScheduleID').value === ('')){
              document.getElementById('BillingScheduleID').value = ('1201');
            }
    });

    $('#RecurringOptionN').click(function() {
              document.getElementById('BillingScheduleID').value = ('');
    });
});
