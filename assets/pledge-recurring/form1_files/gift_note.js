$(document).ready(function() {

        $("#gift_note").val($("#gift_note").prop("defaultValue") + "9HELP Cont. Payment | ");
        console.log(document.getElementById("gift_note").value);

    $("#RecurringOptionY").click(function() {
        //RecurringOptionY RecurringOptionUp RecurringOptionN

        $("#gift_note").val($("#gift_note").prop("defaultValue") + "9HELP Cont. Payment | ");
        console.log(document.getElementById("gift_note").value);
    });
    $("#RecurringOptionUp").click(function() {
        //RecurringOptionY RecurringOptionUp RecurringOptionN

        $("#gift_note").val($("#gift_note").prop("defaultValue") + "9HELP Upgrade | ");
        console.log(document.getElementById("gift_note").value);
    });
    $("#RecurringOptionN").click(function() {
        //RecurringOptionY RecurringOptionUp RecurringOptionN

        $("#gift_note").val($("#gift_note").prop("defaultValue") + "9HELP Pay Balance | ");
        console.log(document.getElementById("gift_note").value);
    });
});
