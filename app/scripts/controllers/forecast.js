'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the finalProjectWats4000App
 */

angular.module('finalProjectWats4000App')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });

//  $scope.current.$promise.then(function(weatherData){
//     $scope.flickr = flickr.query({
//       tags: weatherData.list[0].weather.description
//       });
//     });
  });
