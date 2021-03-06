'use strict';

/**
 * @ngdoc function
 * @name finalProjectWats4000App.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the finalProjectWats4000App
 */
angular.module('finalProjectWats4000App')
.controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID

  });





//Save City function
$scope.saveCity = function(city){
    var cityData = {
        'name': city.name,
        'id': city.id,
        'lat': city.lat,
        'lon': city.lon
    };

    if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
    } else {
        // Check to make sure we haven't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedCities.length; i++){
            if ($localStorage.savedCities[i].id === cityData.id) {
                // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedCities.push(cityData);
            // Add object to trigger messages
            $scope.citySaved = {
              'success' : true
            };
        } else {
            console.log('city already saved');
            // Add object to trigger messages
            $scope.citySaved = {
                'duplicate' : true
            };

         }
      }
   };
});
