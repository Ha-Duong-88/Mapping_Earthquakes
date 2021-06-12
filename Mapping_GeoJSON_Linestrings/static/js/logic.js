// Map GeoJSON Point Types

// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// Assign variable map to L.map() and instantiate object with 'mapid' string.
// The 'mapid' will reference the 'id' tag in our 'div' element in index.html.
// setview() sets the view of the map with a geographical center and zoom level of 4.

// Create the map object with center at the San Francisco airport.
// Making SFO the center of the nap  at the airport with zoom of "10".
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// Edit the above code to change the geographical center of the map to 
// the geographical center of the Earth and set the zoom level.
//let map = L.map('mapid').setView([30, 30], 2);


// Add GeoJSON data.
// Coordinates appear in reverse order [-122.375, 37.61899948120117], compared to their order in the setView() method.
// This is because the GeoJSON data coordinates are set with the first parameter as X 
// (longitude) and the second parameter as Y (latitude), as documented in GeoJSON Standard.
// The L.geoJSON()layer reverses the coordinates to plot them on the map.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
    // "type":"Feature",
    // "properties":{
        // "id":"3469",
        // "name":"San Francisco International Airport",
        // "city":"San Francisco",
        // "country":"United States",
        // "faa":"SFO",
        // "icao":"KSFO",
        // "alt":"13",
        // "tz-offset":"-8",
        // "dst":"A",
        // "tz":"America/Los_Angeles"},
        // "geometry":{
            // "type":"Point",
            // "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON().
//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
// Even though we have a marker on the previous map, edit our logic.js 
// file to add a marker using the pointToLayer function and add data to a
// popup marker.
// To better understand what is passed with the feature argument in the function(), add feature in the console.log()function.
// L.geoJson(sanFranAirport, {
    //We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    //   console.log(feature);
    //   return L.marker(latlng);
    // }
// 
//   }).addTo(map);


// Add a popup marker
// To add a popup marker, we need to use the bindPopup() method to the pointToLayer 
//callback function. This will add a popup marker for each object in our GeoJSON data even
// though we only have one object in our data, SFO.
// Edit the above code by adding .bindPopup("<h2>" + feature.properties.city + "</h2>")
// Using the dot notation, we can traverse through the JSON object to get the city by using feature.properties.city.
// The properties in each JavaScript object can be accessed using the dot notation.
// L.geoJson(sanFranAirport, {
    //We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    //   console.log(feature);
    //   return L.marker(latlng)
    //   .bindPopup("<h2>" + feature.properties.city + "</h2>");
    // }
// 
//   }).addTo(map);
// 
 
  // Create a popup marker for San Francisco Airport on a night preview navigation map.
  // When you click on the popup, it will display the city, state, and the name of the 
  //airport.
//   L.geoJson(sanFranAirport, {
    //We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    //   console.log(feature);
    //   return L.marker(latlng)
    // // //   .bindPopup("<h2>" + feature.properties.name + "</h2>" + "<br>" + "<h2>" + feature.properties.city + ", " + feature.properties.country  + "</h2>");
    // }

//   }).addTo(map);

// Add a popup marker for each feature and add data from the properties of the JavaScript 
// object using the onEachFeature function.
// With the onEachFeature function callback function, we will first call an anonymous 
// function, function() where we pass each GeoJSOn feature as 'feature', and any 
// properties to the second argument, 'layer'.
// L.geoJson(sanFranAirport, {
    // onEachFeature: function(feature, layer) {
        // console.log(layer);
        // const properties = feature.properties;
        // // layer.bindPopup("<h2>" + "Airport code:" + properties.faa +  "</h2>" + "<h2>" + "Airport name:" + properties.name + "</h2>");
    // }
// }).addTo(map);


// Tile layer used to load and dispay a tile layer on the map.
// In this case, it's the Streets tile layer.
// We assign the tileLayer() method to the variable 'streets'.
// Using the Mapbox Styles API on Leaflet tileLayer() method here to create tile layer.

// We create the tile layer that will be the background of our map.
// We can change the Mapbox styles, for example dark-v10 for dark view, streets-v11 for street view tile layer, etc.
// Check the Mapbox Static Tiles API
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
// This code adds both map variables to a new variable, 'baseMaps'.
// this variable will be used as our base layer, which we will reference later,
let baseMaps = {
    Street: streets,
    Dark: dark
  };
  

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// To complete the code for the map layers, use the Leaflet control.layers, which will control the layers we'll see on the map.
// The argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html file. 
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// Call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() will add the graymap object tile layer to our let map
// streets.addTo(map);

// Accessing the airport GeoJSON URL in my GitHub repository.
let airportData = "https://https://raw.githubusercontent.com/Ha-Duong-88/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";


// Grabbing our GeoJSON data.
// Add the d3.json() method which returns a prommise with the then() method and anonymous function().
// 'data' parameter inside the anonymous function() references airportData
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});












