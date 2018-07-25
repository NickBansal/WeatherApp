const request = require('request');
const yargs = require('yargs');


var geocodeAddress = (address, callback) => {

	var encodeURL = encodeURIComponent(address)
	var apiKey = '&key=AIzaSyDUoxRsAxB6PXsNgcA-GFCSY_DqElsUvjQ'
	
	request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURL + apiKey,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback("Unable to connect to the Google servers")
		} else if (body.status === 'ZERO_RESULTS') {
			callback("Unable to find the specified address")
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			})
		};
	});
}


module.exports = {
	geocodeAddress,
}