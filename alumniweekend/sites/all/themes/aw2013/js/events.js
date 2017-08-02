$(document).ready(function() {
    //$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0,getWidthFrom:".sticky-wrapper"});
    //$("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({ topSpacing: 0});
});

function tog(v) {
    return v ? 'addClass' : 'removeClass';
}

$(document).on('input', '.ctools-auto-submit-processed', function() {
    $(this)[tog(this.value)]('x');
}).on('mousemove', '.x', function(e) {
    $(this)[tog(this.offsetWidth - 18 < e.clientX - this.getBoundingClientRect().left)]('onX');
}).on('click', '.onX', function() {
    $(this).removeClass('x onX').val('').change();
});

$(document).ready(function() {
    $('form').find("input[type=text], input[type=password], textarea").each(function(ev) {
        if (!$(this).val()) {
            $(this).attr("placeholder", "Search Events");
        }
    });
});

function resizeFilters() {
    if ($(window).width() > 979) {
        $('.region-sidebar-second').insertAfter('.region-content');
        /* $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({
            topSpacing: 0,
            bottomSpacing: 300,
            getWidthFrom: ".region-sidebar-second-inner"
        });
*/
    }
    if ($(window).width() > 979) {
        $('.region-sidebar-second').insertAfter('.region-content');
        /*     $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({
                 topSpacing: 0,
                 bottomSpacing: 300,
                 getWidthFrom: ".region-sidebar-second-inner"
             });*/
    }
    if ($(window).width() <= 979) {
        $('.region-sidebar-second').insertBefore('.region-content');
        // $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").unstick();
    }
    if ($(window).width() > 979) {
        $('.region-sidebar-second').insertAfter('.region-content');
        /*  $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").sticky({
             topSpacing: 0,
             getWidthFrom: ".region-sidebar-second-inner"
         }); */
    }
    if ($(window).width() <= 979) {
        $('.region-sidebar-second').insertBefore('.region-content');
        // $("#views-exposed-form-events-filterable-page-1 .views-exposed-widgets").unstick();
    }
}

$(document).ready(resizeFilters);
$(window).resize(resizeFilters);
jQuery(document).ready(function($) {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');
    //hide or show the "back to top" link
    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        if ($(window).width() > 980) {
            $('body,html').animate({
                scrollTop: 550,
            }, scroll_top_duration);
        }
        if ($(window).width() <= 980) {
            $('body,html').animate({
                scrollTop: 190,
            }, scroll_top_duration);
        }

    });
});

$(document).ready(function() {
    //$('form-item-keys').removeClass('ctools-auto-submit-processed');
    //$('#edit-keys').addClass('test3').removeClass('ctools-auto-submit-processed').addClass('ctools-auto-submit-exclude');
    //$('#edit-field-class-decade-tid').addClass('test3').removeClass('form-select');

});

$(document).ready(function() {
    $(".views-field-term-node-tid").text(function() {
        //return $(this).text().replace('General', '');
    });
    $('.view-events-filterable .view-content').height(function() {
        return $(window).height() * 0.90;
    });
    $("label[for='edit-field-activities-tid-72']").html( $("label[for='edit-field-activities-tid-72']").html().replace(/\//g, '/<wbr>') );
});


/*    $(document).ready(function(){
      $(".day-anchor-sticky").sticky({ topSpacing: 0,getWidthFrom:".view-events-filterable"});
      $(".day-anchor-bar").sticky({ topSpacing: 29,getWidthFrom:".view-events-filterable"});
      //$(".day-anchor-bar").sticky({ topSpacing: 0});
      console.log("ready");
    });

        $(document).resize(function(){
      $(".day-anchor-sticky").sticky({ topSpacing: 0,getWidthFrom:".view-events-filterable"});
      $(".day-anchor-bar").sticky({ topSpacing: 29,getWidthFrom:".view-events-filterable"});
      //$(".day-anchor-bar").sticky({ topSpacing: 0});
      console.log("doc resize");
    });


  $(window).resize(function(){
            $(".day-anchor-sticky").sticky({ topSpacing: 0,getWidthFrom:".view-events-filterable"});
      $(".day-anchor-bar").sticky({ topSpacing: 29,getWidthFrom:".view-events-filterable"});
      console.log("window resize");

});
*/


$("#block-system-main").load(function() {
    $(".day-anchor-sticky").sticky({
        topSpacing: 0,
        getWidthFrom: ".view-events-filterable"
    });
    $(".day-anchor-bar").sticky({
        topSpacing: 29,
        getWidthFrom: ".view-events-filterable"
    });
    console.log("ajax complete");
});

$(function() {
    $('.day-anchor-sticky a').click(function() {
        $('.day-anchor-sticky a').removeClass('active');
        $(this).addClass('active');
        console.log("ajax complete");
    });
});



$(function() {
    setInterval(oneSecondFunction, 100);
});

function oneSecondFunction() {
    $(function() {
        $('.day-anchor-sticky a').click(function() {
            $('.day-anchor-sticky a').removeClass('active');
            $(this).addClass('active');
            //console.log("ajax complete");

        });

        $('#edit-field-pass-type-tid-69').click(function() {
            if ($(this).is(':checked')) {
                $('#edit-field-pass-type-tid-68').attr('checked', true);
            } else {
                $('#edit-field-pass-type-tid-68').attr('checked', false);
            }
        });


        $('#edit-field-pass-type-tid-68').click(function() {
            if ($(this).is(':checked') == false) {
                //$('#edit-field-pass-type-tid-69').attr('checked', false);
            } else {
                //$('#edit-field-pass-type-tid-69').attr('checked', true);
            }
        });


    });
}

//$(function(){
//$('body').on('click', 'a', function() {
$(function() {
    $('.day-anchor-sticky a').click(function() {
        $('.day-anchor-sticky a').removeClass('active');
        $(this).addClass('active');
        console.log("ajax complete");

    });
});

//});
//});

/*
$( document ).on( 'click', '.day-anchor-sticky a', function () {
          $('a').removeClass('active');
      $(this).addClass('active');
} );

$('a').click(function(){
    var linkClass=$(this).attr('class');
    $('.slideItem:visible').slideUp('fast',function(){
        $('#' + linkClass).slideDown('fast');
    });
});
*/

$(window).ready(function() {
    //console.log('test');
    new jQueryCollapse($("#custom-show-hide-example"), {
        open: function() {
            this.slideDown(150);
            console.log('down');
        },
        close: function() {
            this.slideUp(150);
            console.log('up');
        }

    });



});


function keepLocation(oldOffset) {
  if (window.pageYOffset!= null){
    st=oldOffset;
  }
  if (document.body.scrollWidth!= null){
    st=oldOffset;
  }
  setTimeout('window.scrollTo(0,st)',0);
}
