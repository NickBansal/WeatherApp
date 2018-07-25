const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		},
	})
	.help()
	.alias('help', 'h')
	.argv;


var encodeURL = encodeURIComponent(argv.a);
var apiKey = '&key=AIzaSyDUoxRsAxB6PXsNgcA-GFCSY_DqElsUvjQ';
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}${apiKey}`;



axios.get(geocodeURL)
.then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lat;
	var weatherURL = `https://api.darksky.net/forecast/fc48df5ec9df619b200b58149d3a839b/${lat},${lng}`
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherURL);
})
.then((response) => {
	var temp = response.data.currently.temperature;
	var appTemp = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temp} but it feels like ${appTemp}`);
})
.catch((error) => {
	if (error.code === 'ENOTFOUND') {
		console.log('Unable to connect to the API server')
	} else {
		console.log(error.message)
	}
})












