$(document).ready(function() {

    console.log(document.getElementById("gift_note").value);

    $("#artadopted").on('click keyup blur' ,function(){
        $("#gift_note").val($("#gift_note").prop("defaultValue") + document.getElementById("artadopted").value + " | ");
        console.log(document.getElementById("gift_note").value);
    });

});
