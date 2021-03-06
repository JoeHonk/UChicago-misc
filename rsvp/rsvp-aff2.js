var app = angular.module('myApp', []);
app.controller('lookWhosComing', function($scope, $http) {
    $http.get('https://alumnidev.uchicago.edu/rsvp/json/' + eid + '-test.json')
        .success(function(response) {
            $scope.names = response;
            var lwccount = Object.keys($scope.names).length;
            console.log(lwccount);
            if (lwccount >= lwcmin) {
                //$('.not-logged-in .pane-bundle-text').css('display', 'block');
                //document.getElementsByClassName('.not-logged-in .pane-bundle-text').style.display = "block";
                var classes = document.getElementsByClassName("pane-bundle-text");
                for (var i = 0; i <  classes.length; i++) {
                    classes[i].className += " showlwc";
                }
            }
        });
    $http.get('https://alumnidev.uchicago.edu/rsvp/rsvpjson2.php?eid=' + eid + '&lwcmin=' + lwcmin);
});
