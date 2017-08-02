$(document).ready(function() {
    $('input').bind('input', function() {
        $('input[name=displaytotal]').val($('input[name=Amount]').val());
    });
    setInterval(function() {
        $('input[name=displaytotal]').val($('input[name=Amount]').val());
    }, 100);
});
