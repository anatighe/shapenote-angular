'use strict';

angular.module('myApp.song-detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/song-detail/:songId', {
    templateUrl: 'view2/song-detail.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
	
}]);

      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'