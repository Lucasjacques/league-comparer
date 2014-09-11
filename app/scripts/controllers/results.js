'use strict';

/**
 * @ngdoc function
 * @name leagueComparerApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the leagueComparerApp
 */
angular.module('leagueComparerApp')
  .controller('ResultsCtrl', function($scope, transferData) {
    $scope.summonerName1 = transferData.get(0);
    $scope.summonerName2 = transferData.get(1);
  });
