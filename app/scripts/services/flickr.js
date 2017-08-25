'use strict';

/**
 * @ngdoc service
 * @name finalProjectWats4000App.flickr
 * @description
 * # flickr
 * Factory in the finalProjectWats4000App.
 */
angular.module('finalProjectWats4000App')
  .factory('flickr', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource ('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&tags=:tags&format=json&api_key=b523d26cf6c2a4fbb1e109f3708f8628&extras=url_m&lat=:lat&lon=:lon',{},{
    query: {
      method:'GET',
        params:{
         lat: '41.8781',
         lon: '-87.6298',
         tags: 'Sunny'
      },
      isArray:false
    }
  });
});
