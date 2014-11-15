(function(){
  'use strict';

  function MainCtrl($scope){
    $scope.message = "";
    $scope.sayHello = function(){
      $scope.message = "hello";
    };
  }

  angular
    .module('app', [])
    .controller('MainCtrl', [
      '$scope',
      MainCtrl
    ]);

}).call(this);
