'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http, ModalService) {
  $http.get('songdata.json').success(function(data) {
    $scope.songs = data;
    $scope.songs.forEach(function (song) {
      song.id = parseFloat(song._id);
      song.meterName = song.MeterName;
      song.songText = song.SongText
    });
    $scope.showAModal = function() {

      // Just provide a template url, a controller and call 'showModal'.
      ModalService.showModal({
        template: "<p>omg</p>",
        controller: "modalController"
      }).then(function(modal) {
        // The modal object has the element built, if this is a bootstrap modal
        // you can call 'modal' to show it, if it's a custom modal just show or hide
        // it as you need to.
        modal.element.modal();
        modal.close.then(function(result) {
          $scope.message = result ? "You said Yes" : "You said No";
        });
      });

    };
  });
});







