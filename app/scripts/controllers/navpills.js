'use strict';

/**
 * @ngdoc function
 * @name leagueComparerApp.controller:NavpillsCtrl
 * @description
 * # NavpillsCtrl
 * Controller of the leagueComparerApp
 */
angular.module('leagueComparerApp')
  .controller('NavPillsCtrl', function($scope, $location) {
    $scope.isActive = function(route) {
      if ($location.path() === route) {
        return true;
      }
      return false;
    };
  });
