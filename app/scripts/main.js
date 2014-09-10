var key = '0c2f29fd-b02f-4fdf-b0c5-c4b27f532efc';

// This does a request to the passed url and then executes the callback function
function doRequestThen(url, callback) {
  $.ajax(url, {
    dataType: 'json',
    async: false,
    success: callback
  });
}

// Creates a get request url using the summoner's name to get the summoner's id
function createNameUrl(sName, region) {
  var url = 'https://br.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+sName+'?api_key='+key;
  return url;
}

// Creates a get request url using the summoner's id to get the player's status
function createStatsUrl(id, region) {
  var url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v1.3/stats/by-summoner/'+id+'/ranked?season=SEASON4&api_key='+key;
  return url;
}

// Given an object containing player's status, searches for the position in the array containing the champion's id and returns it
// Each position in the original array has an object with 2 attributes: id and stats
// The attribute called stats is actually an object which contain other attributes
// More information on this data structure can be found on Riot's Official API website
// https://developer.riotgames.com/api/methods
function searchForId(summoner, id) {
  for (var i = 0; i <= summoner.champions.length; i++) {
    if (summoner.champions[i].id == id) {
      return summoner.champions[i];
    }
  }
  return null;
}

// Loaded when document is ready
$(document).ready(function() {

// Triggered when the form with id 'comparator' is submitted
  $('#comparator').submit(function(e) {

    // This prevents the page reload after submiting the form
    e.preventDefault();

    // Creates two sNames variables to store value of the input fields without spaces
    var sName1 = $('#mySName').val().replace(' ', '');
    var sName2 = $('#targetSName').val().replace(' ', '');

    // Creates first request's urls
    var url1 = createNameUrl(sName1, 'br');
    var url2 = createNameUrl(sName2, 'br');

    // Instantiates two summoner objects
    var summoner1 = {};
    var summoner2 = {};

    // Does request to the url created before and stores summoner's id on the summoner1 variable
    doRequestThen(url1, function(data) {
      summoner1 = data[sName1].id;
    });

    // Does request to the url created before and stores summoner's id on the summoner2 variable
    doRequestThen(url2, function(data) {
      summoner2 = data[sName2].id;
    });

    // Creates the request's url to get summoner's stats using the id we've got previously
    url1 = createStatsUrl(summoner1, 'br');
    url2 = createStatsUrl(summoner2, 'br');

    // Does request to the url created and stores these stats on the summoner1 variable
    doRequestThen(url1, function(data) {
      summoner1 = data;
    });


    // Does request to the url created and stores these stats on the summoner2 variable
    doRequestThen(url2, function(data) {
      summoner2 = data;
    });

    // Searches for champion's ID stats and stores it on summoner1 and summmoner2 variables
    summoner1 = searchForId(summoner1, 40);
    summoner2 = searchForId(summoner2, 40);

    // Example: Logs total damage taken by Summoner1 using the champion with an id of 40
    console.log(summoner1.stats.totalDamageTaken);

  });
});
