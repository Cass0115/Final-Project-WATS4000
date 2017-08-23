'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalProjectWats4000App
 */

angular.module('finalProjectWats4000App')
  .controller('MainCtrl', function($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
