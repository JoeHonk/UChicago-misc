<script>
$(document).ready(function(){
    //Call for results
    $(function(){
        $("a[href*='/site/apps/kb/cs/contactdisplay.asp']").click(function(e){
            var orgUrl = $(this).attr("href") + "&r=1";
            e.preventDefault();
            $.get(orgUrl, function(data){
                $(".placeholder").html( $(data).find(".nameContainer").html());
            })
        });
    });
});
</script>