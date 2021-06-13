// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Assign variable map to L.map() and instantiate object with 'mapid' string.
// The 'mapid' will reference the 'id' tag in our 'div' element in index.html.
// setview() sets the view of the map with a geographical center and zoom level of 4.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// An array containing each city's location, state, and population.
// Add multiple markers to the map by iterating through an array.
// Latitudes and longitudes are nested in an array.
// Replace the marker variable which we used to map one location with the cities variable.
// Add a variable name 'cityData' and assign it to the 'cities' array
// Get data from cities.js

let cityData = cities;

// let cities = [{
    // location: [40.7128, -74.0059],
    // city: "New York City",
    // state: "NY",
    // population: 8398748
  // },
  // {
    // location: [41.8781, -87.6298],
    // city: "Chicago",
    // state: "IL",
    // population: 2705994
  // },
  // {
    // location: [29.7604, -95.3698],
    // city: "Houston",
    // state: "TX",
    // population: 2325502
  // },
  // {
    // location: [34.0522, -118.2437],
    // city: "Los Angeles",
    // state: "CA",
    // population: 3990456
  // },
  // {
    // location: [33.4484, -112.0740],
    // city: "Phoenix",
    // state: "AZ",
    // population: 1660272
  // }
  // ];

// Loop through the cities array and create one marker for each city.
// Iterate through each city object and add each city location to the marker() function, 
// which will, in turn, be added to the map.
// In the forEach(), assign cityData variable to each object of the cities.js file
// Get coordinates of each city by adding city.location
// Add each location to the map with the addTo() function and pass the 'map' object as argument.


// Bind a popup to the marker
// Format the population with a thousands separator by using the toLocaleString() method on the city.population in the bindPopup() method, like this:
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    stroke: true,
    weight: 4,
    color: "black",
    fillColor: '#C75936'
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});


// Add a circle to the map
// circle() function will place a circle on the map at the given coordinates
//L.circle([34.0522, -118.2437], {
//    radius: 100
//}).addTo(map);

 // Create a light yellow circle with black lines indicating a 300-meter radius of Central
// LA on a dark map

// L.circleMarker([34.0522, -118.2437], {
    // radius: 300,
    // color: "black",
    // fillColor: '#F4E57D'
// }).addTo(map);

// Tile layer used to load and dispay a tile layer on the map.
// In this case, it's the Streets tile layer.
// We assign the tileLayer() method to the variable 'streets'.
// Using the Mapbox Styles API on Leaflet tileLayer() method here to create tile layer.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// We call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() will add the graymap object tile layer to our let map
streets.addTo(map);
















