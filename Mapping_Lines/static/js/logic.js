// Add console.log to check to see if our code is working.
console.log("working");

// Add/map a single line to the map.
// Adding lines to a map requires the coordinates for the starting and ending points be a 
// one-dimensional array with two elements: latitude and longitude.
// When we create a line in Leaflet, the starting and ending points and all coordinates 
// along the route need to be in an array.
// First, change the coordinates for the center of the map by adding the latitude and 
// longitude coordinates in the setView() method.


// Create the map object with a center and zoom level.
// Assign variable map to L.map() and instantiate object with 'mapid' string.
// The 'mapid' will reference the 'id' tag in our 'div' element in index.html.
// setview() sets the view of the map with a geographical center and zoom level of 4.
// The coordinates below are somewhere between LAX and SFO.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);


// Create the map object with center at the San Francisco airport.
// We modified the L.map() method to change the center of the map to SFO and zoom level 
// for mapping multiple lines.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
// Add this code for our line below the 'map' variable for the center of the map.
// This code maps a single line between LAX and SFO.
// This code maps a single line.
// let line = [
  // [33.9416, -118.4085],
  // [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
// This code adds two more airport stops along the route: SLC and SEA
// This code maps multiple lines.
// let line = [
  // [33.9416, -118.4085],
  // [37.6213, -122.3790],
  // [40.7899, -111.9791],
  // [47.4502, -122.3088]
// ];
// 

// Edit above code to create new airline route from SFO to JFK
// Add two more airport stops - AUS and YYZ.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];


// Create a polyline using the line coordinates and make the line red.
// Use the Leaflet polyline() function.
// Add this code after thh line variable.
// In the polyline() function, pass the line coordinates and the key-value pair color to 
// make the // line red.
// L.polyline(line, {
  // color: "red"
// }).addTo(map);


// Create a polyline using the line coordinates and make the line yellow.
// Edit the line color to yellow in the "color" key int he polyline() function.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,5',
  lineJoin: 'miter',
  lineCap: 'square'
}).addTo(map);

// Tile layer used to load and dispay a tile layer on the map.
// In this case, it's the satellite-streets-v11 tile layer.
// We assign the tileLayer() method to the variable 'streets'.
// Using the Mapbox Styles API on Leaflet tileLayer() method here to create tile layer.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// We call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() will add the graymap object tile layer to our let map
streets.addTo(map);
















