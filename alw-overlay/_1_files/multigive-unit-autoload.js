/*module.exports =*/
(function($) {

    if( !$ ){
        return;
    }

    // Only applies to Unit profile pages
    if( !$('body').hasClass('units') ){
        return;
    }

    // MultiGive form is already loaded
    if( KimbiaPresenter.isMultigive ){
        initUnitAutoload();
    }else{
        // Save the existing onshow event handler
        var oldOnshow = KimbiaPresenter.getCallback('onshow');
        var newOnshow = function(widget) {
            // Restore the previous onshow event handler
            KimbiaPresenter.setOnshow(oldOnshow);

            // Invoke the previous onshow event handler
            KimbiaPresenter.performExternalCallback('onshow', widget);

            // Do additional work
            initUnitAutoload();
        };

        // Hook ondataloadsuccess to override onshow
        KimbiaPresenter.setOnload(function() {
            KimbiaPresenter.setOndataloadsuccess(newOnshow);
            setTimeout(function(){
                if( KimbiaPresenter.isMultigive ){
                    initUnitAutoload();
                }
            },1000)
        });

    }

    function initUnitAutoload(){
        var title = $('.designee-organizationname').text().trim();
        var lastDonationRow = $('select.k_donation_category_level_0').last();

        selectDefaultSchool(title, lastDonationRow);

        $('button.k_donation_categories_add').live('mousedown keyup', function(e) {
            if (e.keyCode && !isClickKey(e)) {
                return;
            } else {
                lastDonationRow = $('select.k_donation_category_level_0').last();
                selectDefaultSchool(title, lastDonationRow);
            }

        });
    }

    function selectDefaultSchool(title, lastDonationRow) {
        $(lastDonationRow).prop('selectedIndex', 0);
        $(lastDonationRow).find('option:contains("' + title + '")').prop('selected', true);
        suppressKimbiaTrigger(lastDonationRow);
    }

    function suppressKimbiaTrigger(lastDonationRow) {
        $(lastDonationRow).trigger('change', 'ignore');
    }


})( KimbiaPresenter ? KimbiaPresenter.getJQuery() : false );
