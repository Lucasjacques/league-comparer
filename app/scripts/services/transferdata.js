'use strict';

/**
 * @ngdoc service
 * @name leagueComparerApp.transferData
 * @description
 * # transferData
 * Factory in the leagueComparerApp.
 */
angular.module('leagueComparerApp')
  .factory('transferData', function() {
    var savedData = [];

    function set(position, data) {
      savedData[position] = data;
    }

    function get(position) {
      return savedData[position];
    }

    return {
      set: set,
      get: get
    };
  });
