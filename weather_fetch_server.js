//Parfait Kingwaya 101000644

const express = require("express");
const path = require('path');
const url = require('url');
const geocode = require('./my_modules/location_fetch');
const weatherfetch = require('./my_modules/weather_fetch');


const app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/', (request, response) => {
  response.sendFile('forecast.html', { root: __dirname + "/public" } );
});

app.get('/icon', (request, response) => {
  var urlObj = url.parse(request.url, true, false);
  response.sendFile(urlObj.query.filename, { root: __dirname + "/public/icons" } );
});

app.get('/getForecast', (request, response) => {
  var urlObj = url.parse(request.url, true, false);
  console.log("Request url: " + request.url);
  console.log("URL OBJECT: " + JSON.stringify(urlObj.query.address));
  var encodedAddress = encodeURIComponent(urlObj.query.address);
  console.log("The encoded query: " + encodedAddress);

  geocode.getAddress(encodedAddress,(errorMessage, result) => {

  if (errorMessage){
    console.log(errorMessage);
  }else{
    //console.log(result);
    weatherfetch.getWeather({latitude: result.latitude, longitude: result.longitude}, (errorMessage, weatherData) =>{

      if (errorMessage){
          console.log(errorMessage);
      }else{
        //console.log(JSON.stringify(weatherData));

        var responseData = {
          current: weatherData.currently,
          address: result.address
        };

        console.log("THE FINAL RESULT: " + JSON.stringify(responseData));
        response.send(responseData);
        //res.redirect('back');
      }
    });
  }
});


});

var server = app.listen(3000);


console.log("Server is running and can be access using: http://localhost:3000/");
