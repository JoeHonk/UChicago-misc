//#SkinContent


$(document).ready(function() {



    $(window).resize(function() {
        var description = [
            "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-Bike.png",
            "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-Habsburg.png",
            "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-Moustache.png"
        ];
        var windowWidth = $(window).width();
        if (windowWidth < 991) {
            var description = [
                "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-BikeC.png",
                "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-HabsburgC.png",
                "https://alumnidev.uchicago.edu/assets/boyer-birthday/Boyer-cake-MoustacheC.png"
            ];
        }
        var size = description.length
        var x = Math.floor(size * Math.random())
        document.getElementById('cake').src = description[x];
    }).resize();


    // /console.log("ready!");
    $("#SkinContent").appendTo("#COL1");




    $(".QR-QID2").attr("placeholder", "Name").val("").focus().blur();
    $(".QR-QID4").attr("placeholder", "Email").val("").focus().blur();
    $(".QR-QID3").attr("placeholder", "Graduation Year").val("").focus().blur();
    $(".QR-QID5").attr("placeholder", "Your Message").val("").focus().blur();

    // Released under MIT license: http://www.opensource.org/licenses/mit-license.php

    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });


    $('.QR-QID3 option[value="QR~QID3~null"]').text("Graduation Year");
    var text1 = 'Graduation Year';
    $(".QR-QID3 option").filter(function() {
        return this.text == text1;
    }).attr('selected', true);


});
