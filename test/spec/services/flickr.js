'use strict';

describe('Service: flickr', function () {

  // load the service's module
  beforeEach(module('finalProjectWats4000App'));

  // instantiate service
  var flickr;
  beforeEach(inject(function (_flickr_) {
    flickr = _flickr_;
  }));

  it('should do something', function () {
    expect(!!flickr).toBe(true);
  });

});
