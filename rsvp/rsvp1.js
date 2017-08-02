var app = angular.module('myApp', []);
app.controller('lookWhosComing', function($scope, $http) {
    $http.get('https://alumnidev.uchicago.edu/rsvp/json/' + eid + '.json')
        .success(function(response) {
            $scope.names = response;
        });
    $http.get('https://alumnidev.uchicago.edu/rsvp/rsvpjson1.php?eid=' + eid);
});
