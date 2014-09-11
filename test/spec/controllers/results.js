'use strict';

describe('Controller: ResultsCtrl', function() {

  // load the controller's module
  beforeEach(module('leagueComparerApp'));

  var ResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultsCtrl = $controller('ResultsCtrl', {
      $scope: scope
    });
  }));
});
