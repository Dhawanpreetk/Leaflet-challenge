// Store our API as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function(data) {
    createFeatures(data.features);
  });
  
  function createFeatures(earthquakeData) {
    // Defining the getColor function to assign color based on depth.
    function getColor(depth) {
      if (depth < 10)
       {
        return "#ff9999" ;
      } else if (depth < 30) {
        return "#cd5c5c";
      } else if (depth < 50) {
        return "#dc143c";
      } else if (depth < 70) {
        return "#b53e5c";
      } else if (depth < 90) {
        return "#ae0c00";
      } else {
        return "#8b0000";
      }
    }
  
    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place, magnitude, and depth of the earthquake.
    function onEachFeature(feature, layer) {
      layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }
  
    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // Run the onEachFeature function once for each piece of data in the array.
    var earthquakes = L.geoJSON(earthquakeData, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
          radius: feature.properties.mag * 5,
          fillColor: getColor(feature.geometry.coordinates[2]),
          color: "#000",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      },
      onEachFeature: onEachFeature
    });
  
    // Send our earthquakes layer to the createMap function.
    createMap(earthquakes);
  }
  
  function createMap(earthquakes) {
    // Create the base layers.
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
    // Create a baseMaps object.
    var baseMaps = {
      "Street Map": street,
      //"Topographic Map": topo
    };
  
    // Create an overlay object to hold our overlay.
    var overlayMaps = {
      Earthquakes: earthquakes
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load.
    var myMap = L.map("map", {
      center: [37.09, -95.71],
      zoom: 5,
      layers: [street, earthquakes]
    });
    var legend = L.control({ position:"bottomright" });

    legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML ='<div id="legend">' +
  '<i style="background: #ff9999"></i><span>&lt; 10</span><br>' +
  '<i style="background: #cd5c5c"></i><span>10 - 29</span><br>' +
  '<i style="background: #dc143c"></i><span>30 - 49</span><br>' +
  '<i style="background: #b53e5c"></i><span>50 - 69</span><br>' +
  '<i style="background: #ae0c00"></i><span>70 - 89</span><br>' +
  '<i style="background: "#8b0000"></i><span>&ge; 90</span><br>' +
  '</div>';
  return div;
    };
    legend.addTo(myMap);
  }



