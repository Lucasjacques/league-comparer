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

$(document).ready(function() {

$('#comparator').submit(function() {
  var sName1 = $('#mySName').val().replace(' ', '');
  var sName2 = $('#targetSName').val().replace(' ', '');
  var url1 = createNameUrl(sName1, 'br');
  var url2 = createNameUrl(sName2, 'br');
  var summoner1 = {};
  var summoner2 = {};

  doRequestThen(url1, function(data) {
    summoner1 = data;
  });

  doRequestThen(url2, function(data) {
    summoner2 = data;
  })

  alert(summoner1[sName1].name);
  alert(summoner2[sName2].name);

  });

});
