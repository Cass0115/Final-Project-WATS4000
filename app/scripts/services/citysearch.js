'use strict';

/**
 * @ngdoc service
 * @name finalProjectWats4000App.citysearch
 * @description
 * # citysearch
 * Factory in the finalProjectWats4000App.
 */
angular.module('finalProjectWats4000App')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
