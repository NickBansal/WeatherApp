const request = require('request');

var geocodeAddress = (address) => {

	var encodeURL = encodeURIComponent(address)
	var apiKey = '&key=AIzaSyDUoxRsAxB6PXsNgcA-GFCSY_DqElsUvjQ'
	
	return new Promise((resolve, reject) => {
		request({
			url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURL + apiKey,
			json: true
		}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng
				});	
			} else {
				reject('Unable to fetch the weather');
			};
		});
	});
};

geocodeAddress('4 Ruskin Road Manchester')
.then((location) => {
	console.log(location);
})
.catch((errorMessage) => {
	console.log(errorMessage)
})

