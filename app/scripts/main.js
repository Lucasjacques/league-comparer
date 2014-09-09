var key = '0c2f29fd-b02f-4fdf-b0c5-c4b27f532efc';

function doRequestThen(url, callback) {
  $.ajax(url, {
    dataType: 'json',
    async: false,
    success: callback
  });
}

function createNameUrl(sName, region) {
  var url = 'https://br.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+sName+'?api_key='+key;
  return url;
}

function createStatsUrl(id, region) {
  var url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v1.3/stats/by-summoner/'+id+'/ranked?season=SEASON4&api_key='+key;
  return url;
}

$(document).ready(function() {

$('#comparator').submit(function(e) {
  e.preventDefault();
  var sName1 = $('#mySName').val().replace(' ', '');
  var sName2 = $('#targetSName').val().replace(' ', '');
  var url1 = createNameUrl(sName1, 'br');
  var url2 = createNameUrl(sName2, 'br');
  var summoner1 = {};
  var summoner2 = {};

  doRequestThen(url1, function(data) {
    summoner1 = data[sName1].id;
  });

  doRequestThen(url2, function(data) {
    summoner2 = data[sName2].id;
  });

  url1 = createStatsUrl(summoner1, 'br');
  url2 = createStatsUrl(summoner2, 'br');

  doRequestThen(url1, function(data) {
    summoner1 = data;
  });

  doRequestThen(url2, function(data) {
    summoner2 = data;
  });

  console.log(summoner1);
  console.log(summoner2);

  });

});
