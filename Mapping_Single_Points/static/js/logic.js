// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Assign variable map to L.map() and instantiate object with 'mapid' string.
// The 'mapid' will reference the 'id' tag in our 'div' element in index.html.
// setview() sets the view of the map with a geographical center and zoom level of 4.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level of 14
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for Los Angeles, California.
// Add this line of code before our tileLayer()code.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map
// circle() function will place a circle on the map at the given coordinates
//L.circle([34.0522, -118.2437], {
//    radius: 100
//}).addTo(map);

 // Create a light yellow circle with black lines indicating a 300-meter radius of Central
// LA on a dark map

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#F4E57D'
}).addTo(map);

// Tile layer used to load and dispay a tile layer on the map.
// In this case, it's the Streets tile layer.
// We assign the tileLayer() method to the variable 'streets'.
// Using the Mapbox Styles API on Leaflet tileLayer() method here to create tile layer.

// We create the tile layer that will be the background of our map.
// Replace the "streets-v11" in our original tileLayer() code with "dark-v10" 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// We call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() will add the graymap object tile layer to our let map

streets.addTo(map);
















