'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
  $http.get('songdata.json').success(function(data) {
    $scope.songs = data;
    $scope.songs.forEach(function (song) {
      song._id = parseFloat(song._id);
      song.meterName = song.MeterName;
    });
  });
});


