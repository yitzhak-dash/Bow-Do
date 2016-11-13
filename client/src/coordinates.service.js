navigator.geolocation.getCurrentPosition(function (location) {
  var geo = location.coords;
  document.getElementById('geo-lat').innerHTML = 'lat: ' + geo.latitude;
  document.getElementById('geo-lng').innerHTML = 'lng: ' + geo.longitude;
  document.getElementById('geo-accuracy').innerHTML = 'accuracy: ' + geo.accuracy;
});