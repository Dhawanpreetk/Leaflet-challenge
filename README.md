# Leaflet-challenge

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

**Instructions**

The instructions for this activity are broken into two parts:

Part 1: Create the Earthquake Visualization
2-BasicMap

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
3-Data

When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
4-JSON

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.



Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

<img width="878" alt="image" src="https://github.com/Dhawanpreetk/Leaflet-challenge/assets/130263833/14fef5eb-6746-4260-a278-317272de2e0b">



Include popups that provide additional information about the earthquake when its associated marker is clicked.

Created a legend for the  map data.

<img width="951" alt="image" src="https://github.com/Dhawanpreetk/Leaflet-challenge/assets/130263833/d2a81c20-b219-42c9-a27b-eceb8853d124">

