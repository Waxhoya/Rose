
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    geoTracking.text('Geolocation is not supported by this browser.');
  }
}
function showPosition(position) {
  $('#geoTracking').text('Latitude: ' + position.coords.latitude +
  '<br>Longitude: ' + position.coords.longitude);

}
console.log('Geo has run');
