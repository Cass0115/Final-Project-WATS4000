'use strict';

/**
 * @ngdoc service
 * @name finalProjectWats4000App.forecast
 * @description
 * # forecast
 * Factory in the finalProjectWats4000App.
 */
angular.module('finalProjectWats4000App')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=10&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
