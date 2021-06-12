// GeoJSON Polygons

// Add console.log to check to see if our code is working.
console.log("working");

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

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
// This code adds both map variables to a new variable, 'baseMaps'.
// this variable will be used as our base layer, which we will reference later,
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };
  

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// To complete the code for the map layers, use the Leaflet control.layers, which will control the layers we'll see on the map.
// The argument passed, baseMaps, is the base layer object, which will allow the two different map styles to be shown on the index.html file. 
L.control.layers(baseMaps).addTo(map);



// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

// Define the line style 
let myStyle = {
  color: "#ffffa1",
  weight: 2
  }

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {

  // We turn each feature into a circleMarker on the map.
  
  pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
        // We set the style for each circleMarker using our styleInfo function.
      style: styleInfo
      }).addTo(map);
  });






