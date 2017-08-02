$(function(){
    $('input[name="amount_paid"]').click(function(){
        $('input[name="membership_type"]').val($(this).attr('data-member-type'));
    });
});