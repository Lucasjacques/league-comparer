'use strict';

/**
 * @ngdoc function
 * @name leagueComparerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leagueComparerApp
 */

 angular.module('leagueComparerApp')
 .controller('MainCtrl', function($scope, transferData, $location) {

    // Riot Development API KEY
    var key = '0c2f29fd-b02f-4fdf-b0c5-c4b27f532efc';

    // Summoner Names
    var summonerName1;
    var summonerName2;

    // Array with all League of Legends Regions
    $scope.regions = ['na', 'br', 'eune', 'euw', 'kr', 'lan', 'las', 'na', 'oce', 'tr'];

    // Called when the form is submited
    $scope.compare = function() {
      doRequests();
    };

    // Performs all requests
    function doRequests() {
      var nameUrl = createNameUrl($scope.sum1Name, $scope.sum1Region);
      doRequest(nameUrl, {
        success: function(data) {
          summonerName1 = data[Object.keys(data)[0]].name;
          transferData.set(0, summonerName1);
          var id = data[Object.keys(data)[0]].id;
          var statusUrl = createStatsUrl(id, $scope.sum1Region);
          doRequest(statusUrl, {
            success: function(data) {
              console.log(data);
            },
            error: function(e) {
              console.log(e);
            }
          });
        },
        error: function(e) {
          console.log(e);
        }
      });

      nameUrl = createNameUrl($scope.sum2Name, $scope.sum2Region);
      doRequest(nameUrl, {
        success: function(data) {
          summonerName2 = data[Object.keys(data)[0]].name;
          transferData.set(1, summonerName2);
          var id = data[Object.keys(data)[0]].id;
          var statusUrl = createStatsUrl(id, $scope.sum2Region);
          doRequest(statusUrl, {
            success: function(data) {
              console.log(data);
            },
            error: function(e) {
              console.log(e);
            }
          });
        },
        error: function(e) {
          console.log(e);
        }
      });

      goToView('/results');

    }

    // This does a request to the passed url and then executes the callback function
    function doRequest(url, callbacks) {
      $.ajax(url, {
        dataType: 'json',
        async: false,
        success: callbacks.success,
        error: callbacks.error
      });
    }

    // Creates a get request url using the summoner's name to get the summoner's id
    function createNameUrl(name, region) {
      name = name.replace(' ', '');
      var url = 'https://br.api.pvp.net/api/lol/' + region + '/v1.4/summoner/by-name/' + name + '?api_key=' + key;
      return url;
    }

    // Creates a get request url using the summoner's id to get the player's status
    function createStatsUrl(id, region) {
      var url = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v1.3/stats/by-summoner/' + id + '/ranked?season=SEASON4&api_key=' + key;
      return url;
    }

    function goToView(view) {
      $location.path(view);
    }
  });
