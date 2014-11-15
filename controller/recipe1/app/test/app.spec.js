'use strict';

describe('Unit: app moudle ', function(){
  var scope;
  
  beforeEach(function(){
    angular.mock.module('app');
  });
  
  describe('MainCtrl', function(){
    beforeEach(inject(function($rootScope, $controller){
      scope = $rootScope.$new();
      $controller('MainCtrl', {'$scope': scope});
    }));
  
    it('sayHello', function(){
      scope.sayHello();
      expect(scope.message).toBe('hello');
    });
  });
});
