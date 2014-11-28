'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should create a "songs" model with 3 songs'), inject(function($controller) {
    	var scope = {},
      view1Ctrl = $controller('View1Ctrl', {$scope:scope});
      expect (scope.songs.length).toBe(3);
    });

  });
});