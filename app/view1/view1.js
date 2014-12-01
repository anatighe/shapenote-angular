'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http, $modal, $log) {
  $http.get('songdata.json').success(function(data) {
    $scope.songs = data;
    $scope.songs.forEach(function (song) {
      song.id = parseFloat(song._id);
      song.meterName = song.MeterName;
      song.songText = song.SongText
      $scope.open = function (song) {

        var modalInstance = $modal.open({
          song: song,
          scope: $scope,
          templateUrl: 'songText.html',
          controller: 'ModalInstanceCtrl1',
          backdrop: true,
          resolve: {
                song: function(){
                    return song;
                }
              }
        });
      };
    });
  });
})

angular.module('myApp.view1').controller('ModalInstanceCtrl1', function ($scope, $modalInstance, song) {
  $scope.song=song;
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.close();
  };
});







