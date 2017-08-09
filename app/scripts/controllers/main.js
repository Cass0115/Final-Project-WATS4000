'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectWats4000App
 */
angular.module('finalProjectWats4000App')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
    $scope.current = current.query({
        location: $scope.location
      });
    };
  });
