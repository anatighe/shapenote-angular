var shapenoteServices = angular.module('shapenoteServices', ['ngResource']);

shapenoteServices.factory('Song', ['$resource',
  function($resource){
    return $resource('songs/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);