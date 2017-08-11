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
    return $resource ('https://api.flickr.com/services/feeds/photos_public.gne?APPID=b523d26cf6c2a4fbb1e109f3708f8628')
    query: {
      method:'GET',
      params:{
        citySearch: 'Seattle' 
      },
      isArray:false
    }
  });
});
