  $('#Amount').on('keyup', function() {
      if ($("#Amount").val() >= 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel1').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 75) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel2').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 150) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel3').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 250) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel4').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel5').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 1000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel6').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 2500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel7').addClass('sphighlight');
      }
      if ($("#Amount").val() >= 5000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel8').addClass('sphighlight');
      }

      if ($("#Amount").val() < 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          //$('#splevel8').addClass('sphighlight');
      }

  });

  $('#RecurringAmount').on('keyup', function() {
      if ($("#Amount").val() >= 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel1').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 75) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel2').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 150) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel3').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 250) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel4').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel5').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 1000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel6').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 2500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel7').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 5000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel8').addClass('sphighlight');
      }

      if ($("#TotalAmount").val() < 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          //$('#splevel8').addClass('sphighlight');
      }

  });

  $('#NumberOfPayments').on('click keyup', function() {
      if ($("#TotalAmount").val() >= 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel1').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 75) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel2').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 150) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel3').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 250) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel4').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel5').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 1000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel6').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 2500) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel7').addClass('sphighlight');
      }
      if ($("#TotalAmount").val() >= 5000) {
          $("[id^=splevel]").removeClass('sphighlight');
          $('#splevel8').addClass('sphighlight');
      }

      if ($("#TotalAmount").val() < 35) {
          $("[id^=splevel]").removeClass('sphighlight');
          //$('#splevel8').addClass('sphighlight');
      }
  });
