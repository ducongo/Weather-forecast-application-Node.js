# Weather-forecast-application-Node.js

Programmed by: Parfait Kingwaya 


Overview: This web application is very easy to use. The purpose of this application is to show the user the current summary forecast of any location in the world. The user can simply type the name of the address they want to see the forecast for and the rest is handled behind the scene. It doesn’t matter if the address is wrongly written because errors of such kind are jandled by the api used in this application.

API used: Google map API (link: https://developers.google.com/maps/documentation/geocoding/intro)
	   Dark Sky API (link: https://darksky.net/dev)

Google’s map api is used for the geocoding of the location and returns detailed data in which only the longitude and latitude is extracted for the second part of the query.

Darks Sky’s api is used to fetch the forecast. It requires a key and the coordinates in order to return the weather data.

How to start the server:

In order to start the server properly you will have to enter the following command in order to install the dependencies of this Node.JS application which are Express (version: 4.16.2) and Request (version: 2.83.0):

>npm install

** Please note that you must be in the proper directory where the files are located.**

After the fiest command you can start the server by entering the following command:

	>node weather_fetch_server.js

	Congrats the server is running on your localhost using the port 3000. 
	http://localhost:3000/
