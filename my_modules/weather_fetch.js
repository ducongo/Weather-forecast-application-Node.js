//Parfait Kingwaya 101000644

const request = require('request');

var apiCall = {
  url: "https://api.darksky.net/forecast/",
  key: "ebf4dd0ce7d779ee2f8549346f54b7f7"
};

//API key for foracst.io: ebf4dd0ce7d779ee2f8549346f54b7f7
//URL for forecast.io: https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//45.380099, -75.651007
var getWeather = (coordinates, callback) => {

  var assembledURL = apiCall.url + apiCall.key + "/" + coordinates.latitude + "," + coordinates.longitude;

  request({
    url: assembledURL,
    json: true

  }, (error, response, body) => {

      if (error){
        callback('Request for weather forecast failed');
      }else{

          callback(null, body);

      }
  })
}

module.exports.getWeather = getWeather;
