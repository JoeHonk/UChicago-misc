(function ($) {

    $classChallengeSelect = $('#class-challenge-select');

    function classChallengeChange() {
        $classChallengeImage = $('#class-challenge-image');
        $fbLink = $('#class-challenge-fb');
        $imageLink = $('#class-challenge-standard');
        $selectedOption = $("#class-challenge-select :selected");
        fbURL = $selectedOption.data('fb-banner');
        imageURL = $selectedOption.data('image');
        $classChallengeImage.attr("src", fbURL);
        $fbLink.attr("href", fbURL);
        $imageLink.attr("href", imageURL);
    }

    $(document).ready(function () {

        $('body').on('change', $classChallengeSelect, function(){
            classChallengeChange();
        });

    });


})(jQuery);