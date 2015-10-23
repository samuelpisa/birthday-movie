'use strict';

describe('Service: moviedb', function () {

  // load the service's module
  beforeEach(module('birthdayMovieApp'));

  // instantiate service
  var moviedb;
  beforeEach(inject(function (_moviedb_) {
    moviedb = _moviedb_;
  }));

  it('should do something', function () {
    expect(!!moviedb).toBe(true);
  });

});
