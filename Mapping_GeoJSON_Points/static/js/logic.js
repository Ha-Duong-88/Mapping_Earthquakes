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
// let line = [
  // [33.9416, -118.4085],
  // [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
// This code adds two more airport stops along the route: SLC and SEA.
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
// In the polyline() function, pass the line coordinates and the key-value pair color to make the // line red.
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


// An array containing each city's location, state, and population.
// Add multiple markers to the map by iterating through an array.
// Latitudes and longitudes are nested in an array.
// Replace the marker variable which we used to map one location with the cities variable.
// Add a variable name 'cityData' and assign it to the 'cities' array
// Get data from cities.js

//let cityData = cities;

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
// cityData.forEach(function(city) {
  // console.log(city)
  // L.circleMarker(city.location, {
    // radius: city.population/100000,
    // stroke: true,
    // weight: 4,
    // color: "black",
    // fillColor: '#C75936'
  // })
  // // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });


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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
// We call the addTo() function with our map object, map on our graymap object tile layer.
// The addTo() will add the graymap object tile layer to our let map
streets.addTo(map);
















