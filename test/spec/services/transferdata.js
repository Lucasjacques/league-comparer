'use strict';

describe('Service: transferData', function () {

  // load the service's module
  beforeEach(module('leagueComparerApp'));

  // instantiate service
  var transferData;
  beforeEach(inject(function (_transferData_) {
    transferData = _transferData_;
  }));

  it('should do something', function () {
    expect(!!transferData).toBe(true);
  });

});
