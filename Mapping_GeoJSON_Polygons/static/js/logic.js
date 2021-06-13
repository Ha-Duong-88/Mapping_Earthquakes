// GeoJSON Polygons

// Add console.log to check to see if our code is working.
console.log("working");


// Tile layer used to load and dispay a tile layer on the map.
// In this case, it's the Streets tile layer.
// We assign the tileLayer() method to the variable 'streets' and 'satelliteStreets'.
// We are using the Mapbox Styles API on Leaflet tileLayer() method here to create tile layer.

// We create the tile layer that will be the background of our map.
// We can change the Mapbox styles, for example dark-v10 for dark view, streets-v11 for street view tile layer, etc.
// Check the Mapbox Static Tiles API for styles.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
// This code adds both map variables to a new variable, 'baseMaps'.
// This variable will be used as our base layer, which we will reference later.
// Since we have change the variables for our map styles so we need to update the code.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };
  

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
// To complete the code for the map layers, use the Leaflet control.layers, which will control the layers we'll see on the map.
// The argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html. file. 
L.control.layers(baseMaps).addTo(map);

  // Then we add our 'graymap' tile layer to the map.
  // Call the addTo() function with our map object, 'map' on our graymap object tile layer.
  // The addTo() will add the graymap object tile layer to our let map.
 

// Create a torontoHoods variable and assign it the URL for the torontoNeighorhood.json file on GitHub.
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Ha-Duong-88/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoNeighborhoods.json";


// Add the d3.json() method which returns a prommise with the then() method and anonymous function().
// 'data' parameter inside the anonymous function() references airportData.
// Creating a GeoJSON layer with the retrieved data.
// Grabbing our GeoJSON data 
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});


// Skills Challenge
// Grabbing our GeoJSON data 
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
  // weight: 1
  // color: "#F2F909"

// onEachFeature: function(feature, layer) {
  // layer.bindPopup("Neighborhood: " + feature.properties.Area_Name);
// }
// }).addTo(satelliteStreets);  
});