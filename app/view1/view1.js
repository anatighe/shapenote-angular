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
    var meterArray = [];

    $scope.songs.forEach(function (song) {
      if (meterArray.indexOf(song.MeterName) < 0) {
        meterArray.push(song.MeterName);
      }
    });

    var meterColors = assignMeterColors(meterArray);

    $scope.songs.forEach(function (song) {
      song.id = parseFloat(song._id);
      song.meterName = song.MeterName;
      song.songText = song.SongText;
      song.classColor = meterColors[song.meterName];
      $scope.bgColor = song.classColor;
      
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

function assignMeterColors(meterArray) {
  var colorArray = ["#f9c0b9", "#e1e1e1", "#bfaba9", "#beb594", "#a9bfb7", "#e0d5de", "#ebebeb", "#dba886", "#cabd4b", "#dbd386"]

  var meterColors = {};
  meterArray.forEach(function(meter) {
    var colorIndex = Math.floor(Math.random() * (colorArray.length));
    meterColors[meter] = colorArray[colorIndex];
  });
  return meterColors;
}

angular.module('myApp.view1').controller('ModalInstanceCtrl1', function ($scope, $modalInstance, song) {
  $scope.song=song;
  
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.close();
  };
});







