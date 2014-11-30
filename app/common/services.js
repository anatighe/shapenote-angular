var shapenoteServices = angular.module('shapenoteServices', ['ngResource']);
var nano = require('nano')('http://ana:anas@localhost:5984/harp');

shapenoteServices.factory('Song', ['$resource',
  function($resource){
    return $resource(':songdata.json', {}, {
      query: {method:'GET', params:{_id:'songs'}, isArray:true}
    });
  }]);