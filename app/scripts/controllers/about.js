'use strict';

/**
 * @ngdoc function
 * @name leagueComparerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the leagueComparerApp
 */
angular.module('leagueComparerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.init = function(summoner1, summoner2) {
      $scope.summoner1 = summoner1;
      $scope.summoner1 = summoner2;
    }

  });
