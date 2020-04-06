// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
const API_KEY = "pk.eyJ1IjoiZ3J5YmsxIiwiYSI6ImNrN3pjc3BldjA0YmkzbG9xOWwzYnVkb3IifQ.ja7om3hVsM7upnecna1LaA";


var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 2
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
// X and Y are long and lat, Z is zoom.
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
//CALLED LEAFLET MARKER
// var marker = L.marker([45.52, -122.67], {
//   draggable: true,
//   title: "My First Marker"
// }).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");


// Create a red circle over Dallas
//L.circle([32.7767, -96.7979], {
  L.circle([45.52, -122.67], {  
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Connect a black line from NYC to Toronto
var line = [
  [40.7128, -74.0060],
  [43.6532, -79.3832]
];
L.polyline(line, {
  color: "black"
}).addTo(myMap);

// Create a purple polygon the covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.polygon([
  [33.7490, -84.3880],
  [32.0809, -81.0912],
  [30.3322, -81.6557],
  [32.3792, -86.3077]
], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: 0.75
}).addTo(myMap);
