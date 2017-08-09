'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the finalProjectWats4000App
 */
angular.module('finalProjectWats4000App')
.controller('CurrentCtrl', function ($scope, $routeParams, current) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });
});
