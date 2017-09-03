var app = angular.module("tut", []);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
app.controller("myCtrl", function($scope, $http){
    var model
    $http.get("https://wizard.uek.krakow.pl/~s186883/ramki/frames.json").then(function (response) {
        $scope.frames = response.data;
    });
});
