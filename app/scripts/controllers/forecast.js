'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the finalProjectWats4000App
 */

angular.module('finalProjectWats4000App')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast, flickr) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
        cityID: $routeParams.cityID
    });

  $scope.forecastData.$promise.then(function(data){
      //call Flickr API
     $scope.flickr = flickr.query({
       tags: data.list[3].weather.description
       });
     });
  });



  // $scope.currentWeather.$promise.then(function(weatherData){
      //call Flickr API
  //    $scope.flickr=flickr.query({
  //      tags: weatherData.name + " , " weatherData.weather[0].main
  //    });
  // });  weatherData.list[0].weather.description
