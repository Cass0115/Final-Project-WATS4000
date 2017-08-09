'use strict';

/**
 * @ngdoc service
 * @name finalProjectWats4000App.current
 * @description
 * # current
 * Factory in the finalProjectWats4000App.
 */
angular.module('finalProjectWats4000App')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' //Paris, France ID
        },
        isArray:false
      }
    });
  });
