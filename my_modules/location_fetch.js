//Parfait Kingwaya 101000644

const request = require('request');

var getAddress = (encodedAddress, callback) =>{

  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
    json: true
  }, (error, response, body) => {

    if (error){
      callback('Request for address failed');
    }else if(body.status === 'ZERO_RESULTS'){


    }else if(body.status === 'OK'){
      var result = {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      };

      callback(null,result);

    }else{
        callback('Something went wrong! The request failed');
    }
  })
}

module.exports.getAddress = getAddress;
