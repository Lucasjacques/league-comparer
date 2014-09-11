'use strict';

describe('Controller: NavPillsCtrl', function() {

  // load the controller's module
  beforeEach(module('leagueComparerApp'));

  var NavpillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    NavpillsCtrl = $controller('NavPillsCtrl', {
      $scope: scope
    });
  }));
});
