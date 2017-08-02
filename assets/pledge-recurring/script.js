






 $(document).ready(function() {

     console.log('test');

     $('#RecurringOptionN').click(function() {
         document.getElementById('pledgecheck').style.display = 'block';
         console.log('pledgecheck1');
     });

     $('#RecurringOptionIN').click(function() {
         document.getElementById('RecurringAmountLabel').innerHTML = 'Total gift Amount';
         document.getElementById('TotalAmountLabel').innerHTML = 'Monthly Amount';
         document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Installments';
         document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
         document.getElementById('NumberOfPayments').value = ('59');
         document.getElementById('noofpayments').style.display = 'block';
         document.getElementById('totalamountfield').style.display = 'block';
         document.getElementById('RecurringAmount').value = ('0');
         document.getElementById('TotalAmount').value = ('0');
         document.getElementById('Amount').value = ('0');
         document.getElementById('billingschedfield').style.display = 'none';
         document.getElementById('pledgecheck2').style.display = 'block';
         console.log('pledgecheck2');
         //document.getElementById('TransactionNote').innerHTML = '<strong>NOTE:</strong> Your previous reoccurring gift will be cancelled, and this transaction will count as your first payment toward your upgraded gift.';
     });

     $('#RecurringOptionUp').click(function() {
         document.getElementById('RecurringAmountLabel').innerHTML = 'Recurring Gift Amount';
         document.getElementById('TotalAmountLabel').innerHTML = 'New Total Gift Amount';
         document.getElementById('NumberOfPaymentsLabel').innerHTML = 'No. of Payments';
         document.getElementById('BillingScheduleLabel').innerHTML = 'Gift Frequency';
         document.getElementById('NumberOfPayments').value = ('59');
         document.getElementById('noofpayments').style.display = 'none';
         document.getElementById('totalamountfield').style.display = 'none';
         document.getElementById('RecurringAmount').value = ('0');
         document.getElementById('TotalAmount').value = ('0');
         document.getElementById('Amount').value = ('0');

         $("#pledgecheck2").hide();
         $("#billingschedfield").show();
         //billingschedfield
         console.log('pledgecheck3');
         //document.getElementById('TransactionNote').innerHTML = '<strong>NOTE:</strong> Your previous reoccurring gift will be cancelled, and this transaction will count as your first payment toward your upgraded gift.';
     });


     $('#RecurringOptionY').click(function() {
         document.getElementById('RecurringAmountLabel').innerHTML = 'Installment Amount';
         document.getElementById('pledgecheck').style.display = 'none';
         console.log('pledgecheck4');
         document.getElementById('TotalAmountLabel').innerHTML = 'New Total Gift Amount';
         document.getElementById('NumberOfPaymentsLabel').innerHTML = 'Number of Installments';
         document.getElementById('RecurringAmount').value = ('0');
         document.getElementById('TotalAmount').value = ('0');
         document.getElementById('Amount').value = ('0');
         //ocument.getElementById('TransactionNote').innerHTML = '<strong>NOTE:</strong> Your previous reoccurring gift will be cancelled, and this transaction will count as your first payment toward your upgraded gift.';
     });





 });
