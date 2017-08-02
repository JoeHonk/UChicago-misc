
function share1Modal(f)
{
    console.log('share1Modal');
    var form=f,
        modal=$('<div/>', {
            'id':'alert',
            'html':'<iframe src="share1.php"></iframe>'
        })
       .dialog({
           'title':'Iframe in a modal window',
           'modal':true,
           'width':350,
           'height':'auto',
           'buttons': {
               'OK': function() {
                   $(this).dialog( "close" );

                }
            }
    });
    return false;
}



$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file-share1 :file').on('fileselect', function(event, numFiles, label) {

        /*var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }*/
        $("#share1").submit();
        $("#upload").attr('disabled','disabled');
        $("#uploadlabel").text('Uploading...');
    });
});


$(document).ready( function() {
    $('.btn-file-profile1 :file').on('fileselect', function(event, numFiles, label) {

        /*var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }*/
        $("#profile1").submit();

    });



});
